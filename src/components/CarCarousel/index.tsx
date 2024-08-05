import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { CarCarouselProps } from './car-carousel';

export const CarCarousel = ({ car, value }: CarCarouselProps) => {
  return (
    <Swiper
      slidesPerView={value}
      pagination={{ clickable: true }}
      modules={[Pagination, Navigation]}
      navigation
      className="w-full rounded-lg"
    >
      {car.map((i) => (
        <SwiperSlide key={i.url}>
          <img
            src={i.url}
            className="w-full h-[17.5rem] object-cover"
            alt="Car Image"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
