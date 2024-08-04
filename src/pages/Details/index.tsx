import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CarsData } from '../../dtos/car';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../services';
import { CarCarousel, Container } from '../../components';

export const Details = () => {
  const { id } = useParams();

  const [car, setCar] = useState<CarsData>();
  const [sliderPerView, setSlidesPerView] = useState<number>(2);

  useEffect(() => {
    (async () => {
      if (!id) return;

      const docRef = doc(db, 'cars', id);

      await getDoc(docRef).then((snapshot) => {
        setCar({
          id: snapshot.id,
          name: snapshot.data()?.name,
          year: snapshot.data()?.year,
          city: snapshot.data()?.city,
          model: snapshot.data()?.model,
          uid: snapshot.data()?.uid,
          description: snapshot.data()?.description,
          created: snapshot.data()?.created,
          phone: snapshot.data()?.phone,
          price: snapshot.data()?.price,
          km: snapshot.data()?.km,
          owner: snapshot.data()?.owner,
          images: snapshot.data()?.images,
        });
      });
    })();
  }, [id]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 720) setSlidesPerView(1);
      else setSlidesPerView(2);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.addEventListener('resize', handleResize);
    };
  }, []);
  console.log(car);
  return (
    <Container classname="py-10 px-4 flex flex-col gap-4">
      {car && (
        <>
          <CarCarousel car={car.images} value={sliderPerView} />

          <section className="w-full rounded-lg bg-white flex flex-col">
            <div className="p-9 flex flex-col gap-4 border-b-2 border-solid border-neutral-100">
              {/* title & price */}
              <div className="w-full flex justify-between">
                <div>
                  <b className="text-2xl font-extrabold text-neutral-950 uppercase">
                    {car.name}
                  </b>
                  <p className="text-xl text-neutral-400">{car.model}F</p>
                </div>
                <b className="text-2xl font-extrabold text-neutral-950">
                  R${car.price}
                </b>
              </div>

              {/* infos */}
              <div>
                <p className="text-neutral-400 font-semibold">Cidade</p>
                <b className="text-neutral-950 font-extrabold">{car.city}</b>
              </div>
              <div>
                <p className="text-neutral-400 font-semibold">Ano</p>
                <b className="text-neutral-950 font-extrabold">{car.year}</b>
              </div>
              <div>
                <p className="text-neutral-400 font-semibold">
                  Contato do vendedor
                </p>
                <b className="text-neutral-950 font-extrabold">{car.phone}</b>
              </div>
            </div>
            {/* about */}
            <div className="p-9">
              <p className="text-neutral-400 font-semibold">Sobre o carro</p>
              <b className="text-neutral-950">{car.description}</b>
            </div>
          </section>
        </>
      )}
    </Container>
  );
};
