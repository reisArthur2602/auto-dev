import { zodResolver } from '@hookform/resolvers/zod';
import { Container, Form, NavBar, UploadImage } from '../../components';
import Schema from './Schema';
import { useForm } from 'react-hook-form';
import { Car } from '../../dtos/car';

export const New = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Car>({
    resolver: zodResolver(Schema),
  });

  const onCreate = async (data: Car) => {
    console.log(data);
  };

  return (
    <Container classname="py-10 px-4">
      <NavBar />
      <UploadImage />

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
