import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CarsData } from '../../dtos/car';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../services';

export const Details = () => {
  const { id } = useParams();

  const [car, setCar] = useState<CarsData>();

  useEffect(() => {
    (async () => {
      if (!id) return;

      const docRef = doc(db, 'cars', id);

      getDoc(docRef).then((snapshot) => {
        setCar({
          id: snapshot.id,
          name: snapshot.data()?.name,
          year: snapshot.data()?.year,
          city: snapshot.data()?.city,
          model: snapshot.data()?.model,
          uid: snapshot.data()?.uid,
          description: snapshot.data()?.description,
          created: snapshot.data()?.created,
          phone: snapshot.data()?.whatsapp,
          price: snapshot.data()?.price,
          km: snapshot.data()?.km,
          owner: snapshot.data()?.owner,
          images: snapshot.data()?.images,
        });
      });
    })();
  }, [id]);

  return <div>Details</div>;
};
