import { MapPin } from 'lucide-react';
import { CardCardData } from './card-car';

export const CardCar = ({ ...car }: CardCardData) => {
  return (
    <li className="bg-white overflow-hidden rounded-lg min-w-[15.125rem] hover:animate-pulse duration-75 cursor-pointer">
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
