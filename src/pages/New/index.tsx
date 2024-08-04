import { zodResolver } from '@hookform/resolvers/zod';
import { Container, Form, NavBar, Upload } from '../../components';
import Schema from './Schema';
import { useForm } from 'react-hook-form';
import { Car } from '../../dtos/car';
import { useEffect, useState } from 'react';
import { UploadImageData } from '../../components/Upload/upload';
import { useUser } from '../../context/User';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../services';
import {
  normalizePhoneNumber,
  normalizePriceOrKM,
  normalizeYear,
} from '../../utils/masks';

export const New = () => {
  const { user } = useUser();
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
    reset,
  } = useForm<Car>({
    resolver: zodResolver(Schema),
  });

  const phoneValue = watch('phone');
  const priceValue = watch('price');
  const kmValue = watch('km');
  const yearValue = watch('year');

  useEffect(() => {
    setValue('phone', normalizePhoneNumber(phoneValue));
  }, [phoneValue]);

  useEffect(() => {
    setValue('price', normalizePriceOrKM(priceValue));
  }, [priceValue]);

  useEffect(() => {
    setValue('km', normalizePriceOrKM(kmValue));
  }, [kmValue]);

  useEffect(() => {
    setValue('year', normalizeYear(yearValue));
  }, [yearValue]);

  const [uploadFiles, setUploadFiles] = useState<UploadImageData[]>([]);

  const onCreate = async (data: Car) => {
    console.log(data);
    if (uploadFiles.length === 0)
      return alert('Envie alguma imagem deste carro!');

    const carImages = uploadFiles.map((car) => {
      return {
        uid: car.uid,
        name: car.name,
        url: car.url,
      };
    });

    addDoc(collection(db, 'cars'), {
      name: data.name,
      model: data.model,
      phone: data.phone,
      city: data.city,
      year: data.year,
      km: data.km,
      price: data.price,
      description: data.description,
      created: new Date(),
      owner: user?.name,
      uid: user?.uid,
      images: carImages,
    })
      .then(() => {
        reset();
        setUploadFiles([]);
        console.log('Cadastrado com sucesso!');
      })
      .catch((error) => console.log(error));
  };

  return (
    <Container classname="py-10 px-4">
      <NavBar />
      <Upload onChange={setUploadFiles} value={uploadFiles} />

      <Form onSubmit={handleSubmit(onCreate)}>
        <Form.Label>
          Nome
          <Form.Field
            placeholder="Renault Clio"
            type="text"
            {...register('name')}
            helperText={errors.name?.message}
          />
          {errors && (
            <p className="text-xs text-red-500">{errors.name?.message}</p>
          )}
        </Form.Label>

        <Form.Label>
          Modelo
          <Form.Field
            placeholder="1.4 MPFI MAXX 8V FLEX 4P MANUAL"
            type="text"
            {...register('model')}
            helperText={errors.model?.message}
          />
          {errors && (
            <p className="text-xs text-red-500">{errors.model?.message}</p>
          )}
        </Form.Label>

        <div className="flex items-center justify-center gap-4">
          <Form.Label>
            Ano
            <Form.Field
              placeholder="2022/2024"
              type="text"
              {...register('year')}
              helperText={errors.year?.message}
            />
            {errors && (
              <p className="text-xs text-red-500">{errors.year?.message}</p>
            )}
          </Form.Label>
          <Form.Label>
            Quilometragem
            <Form.Field
              placeholder="52.000"
              type="text"
              {...register('km')}
              helperText={errors.km?.message}
            />
            {errors && (
              <p className="text-xs text-red-500">{errors.km?.message}</p>
            )}
          </Form.Label>
        </div>

        <div className="flex items-center justify-center gap-4">
          <Form.Label>
            Telefone
            <Form.Field
              placeholder="(99) 99999-9999"
              type="text"
              {...register('phone')}
              helperText={errors.phone?.message}
            />
            {errors && (
              <p className="text-xs text-red-500">{errors.phone?.message}</p>
            )}
          </Form.Label>
          <Form.Label>
            Preço
            <Form.Field
              placeholder="124.000"
              type="text"
              {...register('price')}
              helperText={errors.price?.message}
            />
            {errors && (
              <p className="text-xs text-red-500">{errors.price?.message}</p>
            )}
          </Form.Label>
        </div>
        <Form.Label>
          Cidade
          <Form.Field
            placeholder="Rio de Janeiro"
            type="text"
            {...register('city')}
            helperText={errors.city?.message}
          />
          {errors && (
            <p className="text-xs text-red-500">{errors.city?.message}</p>
          )}
        </Form.Label>

        <Form.Label>
          Sobre o carro
          <Form.Textarea
            placeholder="Descrição do carro..."
            {...register('description')}
            helperText={errors.description?.message}
          />
          {errors && (
            <p className="text-xs text-red-500">
              {errors.description?.message}
            </p>
          )}
        </Form.Label>

        <Form.Submit>Cadastrar</Form.Submit>
      </Form>
    </Container>
  );
};
