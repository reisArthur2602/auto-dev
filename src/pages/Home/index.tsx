import { useEffect, useState } from 'react';
import { Container, SearchBar } from '../../components';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { db } from '../../services';
import { CarsData } from '../../dtos/car';

type CardCardProps = Omit<CarsData, 'owner' | 'description' | 'created'>;

export const Home = () => {
  const [cars, setCars] = useState<CardCardProps[]>([]);

  useEffect(() => {
    (() => {
      const carsRef = collection(db, 'cars');
      const queryRef = query(carsRef, orderBy('created', 'desc'));

      getDocs(queryRef).then((snapshot) => {
        let CARS = [] as CardCardProps[];

        snapshot.forEach((doc) =>
          CARS.push({
            id: doc.id,
            name: doc.data().name,
            year: doc.data().year,
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
    <Container classname="py-10 px-4 flex items-center flex-col gap-10">
      <SearchBar />
      <h1 className="text-center font-bold text-neutral-950 text-[2rem]">
        Quer comprar ou vender um carro sem sair de casa?
      </h1>
    </Container>
  );
};
