export type CardCardData = {
  id: string;
  name: string;
  year: string;
  model: string;
  uid: string;
  price: string;
  city: string;
  km: string;
  images: CarImageProps[];
};


export type CarImageProps = {
  uid: string;
  name: string;
  url: string;
}

export type CardCardProps = {
  car: CardCardData;
  onDelete?: (car: CardCardData) => Promise<void>
};
