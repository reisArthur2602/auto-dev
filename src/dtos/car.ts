export type CarsData = {
  id: string;
  name: string;
  year: string;
  uid: string;
  price: string;
  city: string;
  km: string;
  images: CarImageProps[];
  owner: string;
  created: Date;
  description: string;
};

export type CarImageProps = {
  name: string;
  uid: string;
  url: string;
};

export type Car = {
  name: string;
  model: string;
  year: string;
  km: string;
  price: string;
  city: string;
  phone: string;
  description: string;
};
