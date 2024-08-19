import { useEffect, useState } from 'react';
import {
    CardCar,
    Container,
    Empty,
    Loading,
    SearchBar,
} from '../../components';
import { collection, getDocs, orderBy, query, where } from 'firebase/firestore';
import { db } from '../../services';
import { CardCardData } from '../../components/CardCar/card-car';

export const Home = () => {
    const [cars, setCars] = useState<CardCardData[]>([]);
    const [search, setSearch] = useState('');

    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        getCars();
    }, []);

    const getCars = async () => {
        const carsRef = collection(db, 'cars');
        const queryRef = query(carsRef, orderBy('created', 'desc'));

        await getDocs(queryRef).then((snapshot) => {
            const CARS = [] as CardCardData[];

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
            setLoading(false);
        });
    };

    const handleSearchCar = async () => {
        if (search === '') return getCars();

        setCars([]);

        const q = query(
            collection(db, 'cars'),
            where('name', '>=', search.toUpperCase()),
            where('name', '<', search.toUpperCase() + '\uf8ff')
        );

        await getDocs(q).then((snapshot) => {
            const CARS = [] as CardCardData[];

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
            setLoading(false);
        });
    };

    if (loading) return <Loading />;
    return (
        <Container classname="py-10 px-4 flex items-center flex-col gap-10">
            <SearchBar
                onChange={setSearch}
                value={search}
                onClick={handleSearchCar}
            />

            {cars.length === 0 ? (
                <Empty />
            ) : (
                <>
                    <h1 className="text-center font-bold text-neutral-950 text-2xl sm:text-[2rem]">
                        Quer comprar ou vender um carro sem sair de casa?
                    </h1>

                    <ul className="w-full grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                        {cars.map((c) => (
                            <CardCar key={c.id} car={c} />
                        ))}
                    </ul>
                </>
            )}
        </Container>
    );
};
