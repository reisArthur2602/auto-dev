import { MapPin, Trash } from 'lucide-react';
import { CardCardProps } from './card-car';
import { useLocation } from 'react-router-dom';

export const CardCar = ({ car, onDelete }: CardCardProps) => {
  const { pathname } = useLocation();
  return (
    <li className="bg-white overflow-hidden rounded-lg min-w-[15.125rem] cursor-pointer relative">
      {pathname === '/dashboard' && onDelete && (
        <button
          onClick={() => onDelete(car)}
          className="bg-white rounded-full flex items-center justify-center h-10 w-10 absolute top-3 right-3"
        >
          <Trash />
        </button>
      )}

      <img
        src={car.images[0].url}
        alt={car.name}
        className="w-full max-h-[10.25rem] object-cover"
      />

      <div>
        {/* infos */}
        <div className="p-4 flex flex-col justify-between min-h-[10.625rem]">
          <div>
            <b className="font-bold text-neutral-950 uppercase">{car.name}</b>
            <p className="text-neutral-400 font-normal">{car.model}</p>
          </div>

          <div>
            <b className="font-bold text-neutral-950 uppercase text-2xl">
              R${car.price}
            </b>

            <div className="flex items-center justify-between">
              <p className="text-neutral-400 font-normal">Ano {car.year}</p>
              <p className="text-neutral-400 font-normal">{car.km} KM</p>
            </div>
          </div>
        </div>

        {/* city */}
        <div className="p-4 flex items-start gap-2 text-neutral-400 border-t-2 border-solid border-neutral-100">
          <MapPin /> <b>{car.city}</b>
        </div>
      </div>
    </li>
  );
};
