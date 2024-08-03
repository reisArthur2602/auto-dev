import { zodResolver } from '@hookform/resolvers/zod';
import { Container, Form, NavBar, Upload } from '../../components';
import Schema from './Schema';
import { useForm } from 'react-hook-form';
import { Car } from '../../dtos/car';
import { useState } from 'react';
import { UploadImageData } from '../../components/Upload/upload';
import { useUser } from '../../context/User';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../services';

export const New = () => {
  const { user } = useUser();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Car>({
    resolver: zodResolver(Schema),
  });

  const [uploadFiles, setUploadFiles] = useState<UploadImageData[]>([]);

  const onCreate = async (data: Car) => {
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
          Nome do carro
          <Form.Field
            placeholder="Ex: Renault Clio"
            type="text"
            {...register('name')}
          />
        </Form.Label>

        <Form.Label>
          Modelo
          <Form.Field
            placeholder="Ex: 1.4 MPFI MAXX 8V FLEX 4P MANUAL"
            type="text"
            {...register('model')}
          />
        </Form.Label>

        <div className="flex items-center justify-center gap-4">
          <Form.Label>
            Ano
            <Form.Field
              placeholder="Ex: 2022/2024"
              type="text"
              {...register('year')}
            />
          </Form.Label>
          <Form.Label>
            Km
            <Form.Field
              placeholder="Ex: 520000"
              type="text"
              {...register('km')}
            />
          </Form.Label>
        </div>

        <div className="flex items-center justify-center gap-4">
          <Form.Label>
            Telefone
            <Form.Field
              placeholder="Ex: 021995461569"
              type="text"
              {...register('phone')}
            />
          </Form.Label>
          <Form.Label>
            Preço
            <Form.Field
              placeholder="Ex:1240000"
              type="text"
              {...register('price')}
            />
          </Form.Label>
        </div>
        <Form.Label>
          Cidade
          <Form.Field
            placeholder="Ex:Rio de Janeiro"
            type="text"
            {...register('city')}
          />
        </Form.Label>

        <Form.Label>
          Sobre o carro
          <Form.Textarea
            placeholder="Ex:1240000"
            {...register('description')}
          />
        </Form.Label>

        <Form.Submit>Cadastrar</Form.Submit>
      </Form>
    </Container>
  );
};
