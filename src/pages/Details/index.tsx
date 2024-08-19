import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CarsData } from '../../dtos/car';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../services';
import { CarCarousel, Container, Loading, NavBar } from '../../components';
import { PhoneIcon } from 'lucide-react';

export const Details = () => {
    const { id } = useParams();

    const [car, setCar] = useState<CarsData>();
    const [sliderPerView, setSlidesPerView] = useState<number>(2);
    const [loading, setLoading] = useState<boolean>(true);

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
                setLoading(false);
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

    if (loading) return <Loading />;
    return (
        <Container classname="py-10 px-3">
            <NavBar />

            {car && (
                <main className="flex flex-col gap-4">
                    <CarCarousel
                        car={car.images}
                        value={car.images.length === 1 ? 1 : sliderPerView}
                    />

                    <section className="w-full rounded-lg bg-white flex flex-col">
                        <div className="p-9 flex flex-col gap-4 border-b-2 border-solid border-neutral-100">
                            {/* title & price */}
                            <div className="*:w-full">
                                <div className='flex items-center justify-between mb-2'>
                                    <h2 className="text-xl sm:text-2xl font-extrabold text-neutral-950 uppercase">
                                        {car.name}
                                    </h2>
                                    <h2 className="text-xl sm:text-2xl font-extrabold text-neutral-950">
                                        R${car.price}
                                    </h2>
                                </div>

                                <p className="text-sm text-neutral-400">
                                    {car.model}
                                </p>
                            </div>

                            {/* infos */}
                            <div className="text-sm sm:text-base">
                                <p className="text-neutral-400 font-semibold">
                                    Cidade
                                </p>
                                <b className="text-neutral-950 font-extrabold capitalize">
                                    {car.city}
                                </b>
                            </div>

                            <div className="text-sm sm:text-base">
                                <p className="text-neutral-400 font-semibold">
                                    Quilometragem
                                </p>
                                <b className="text-neutral-950 font-extrabold ">
                                    {car.km}
                                </b>
                            </div>


                            <div className="text-sm sm:text-base">
                                <p className="text-neutral-400 font-semibold">
                                    Ano
                                </p>
                                <b className="text-neutral-950 font-extrabold">
                                    {car.year}
                                </b>
                            </div>

                            <div className="text-sm sm:text-base">
                                <p className="text-neutral-400 font-semibold">
                                    Contato do Vendedor
                                </p>
                                <b className="text-neutral-950 font-extrabold">
                                    {car.phone}
                                </b>
                            </div>
                        </div>

                        {/* about */}
                        <div className="p-9 flex flex-col gap-6 text-sm sm:text-base">
                          <div>
                              <p className="text-neutral-400 font-semibold mb-2">
                                Sobre o carro
                            </p>
                            <b className="text-neutral-950 font-normal">
                                {car.description}
                            </b>
                          </div>
                          
                            <a
                                href={`https://api.whatsapp.com/send?phone=${car.phone}&text=Olá, estou interessado no seu ${car.name} do site AutoDev`}
                                target="_blank"
                                className="w-full flex justify-center items-center gap-2 rounded-lg px-8 py-4 bg-green-600 font-semibold text-neutral-50"
                            >
                                <PhoneIcon /> Converse com o vendedor
                            </a>
                        </div>
                    </section>
                </main>
            )}
        </Container>
    );
};
