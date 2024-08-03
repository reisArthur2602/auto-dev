export interface CarsData extends Car {
  id: string;
  uid: string;
  images: CarImageProps[];
  owner: string;
  created: Date;
}

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
