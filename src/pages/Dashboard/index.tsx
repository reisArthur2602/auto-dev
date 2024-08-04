import { useEffect, useState } from 'react';
import { CardCar, Container, NavBar } from '../../components';
import { CardCardData } from '../../components/CardCar/card-car';
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  where,
} from 'firebase/firestore';
import { useUser } from '../../context/User';
import { db, storage } from '../../services';
import { deleteObject, ref } from 'firebase/storage';

export const Dashboard = () => {
  const { user } = useUser();
  const [cars, setCars] = useState<CardCardData[]>([]);

  const handleDelete = async (car: CardCardData) => {
    const item = car;
    const docRef = doc(db, 'cars', car.id);
    await deleteDoc(docRef);

    item.images.map(async (i) => {
      const imageRef = ref(storage, `images/${i.uid}/${i.name}`);
      await deleteObject(imageRef);
      setCars(cars.filter((car) => car.id !== item.id));
    });
  };

  useEffect(() => {
    (() => {
      const carsRef = collection(db, 'cars');
      const queryRef = query(carsRef, where('uid', '==', user?.uid));

      getDocs(queryRef).then((snapshot) => {
        let CARS = [] as CardCardData[];

        snapshot.forEach((doc) =>
          CARS.push({
            id: doc.id,
            name: doc.data().name,
            year: doc.data().year,
            model: doc.data().model,
            km: doc.data().km,
            city: doc.data().city,
            price: doc.data().price,
            images: doc.data().images,
            uid: doc.data().uid,
          })
        );
        setCars(CARS);
      });
    })();
  }, []);
  return (
    <Container classname="py-10 px-4">
      <NavBar />
      <ul className="w-full grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {cars.map((c) => (
          <CardCar key={c.id} car={c} onDelete={handleDelete} />
        ))}
      </ul>
    </Container>
  );
};
