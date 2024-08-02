import { Link } from 'react-router-dom';
import { Form } from '../../components';
import { Container } from '../../components';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Schema from './Schema';
import { User } from '../../dtos/user';

export const Register = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<User>({
    resolver: zodResolver(Schema),
  });

  const onSubmit = (data: User) => {
    console.log(data);
  };

  return (
    <Container classname="flex flex-1 items-center justify-center">
      <Form className="w-[31.25rem]" onSubmit={handleSubmit(onSubmit)}>
        <Form.Label>
          Nome
          <Form.Field
            placeholder="Nome Completo"
            type="text"
            {...register('name')}
          />
        </Form.Label>

        <Form.Label>
          Email
          <Form.Field
            placeholder="email@email.com"
            type="text"
            {...register('email')}
          />
        </Form.Label>

        <Form.Label>
          Senha
          <Form.Field
            placeholder="******"
            type="password"
            {...register('password')}
          />
        </Form.Label>

        <Form.Submit>Cadastrar</Form.Submit>

        <Link to="/" className="text-neutral-400 text-center">
          Já possui uma conta?
        </Link>
      </Form>
    </Container>
  );
};
