import { Link } from 'react-router-dom';
import { Container } from '../../components';
import { Form } from '../../components';
import { useForm } from 'react-hook-form';
import { User } from '../../dtos/user';
import { zodResolver } from '@hookform/resolvers/zod';
import Schema from './Schema';

export const Login = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<Omit<User, 'name'>>({
    resolver: zodResolver(Schema),
  });

  const onSubmit = (data: Omit<User, 'name'>) => {
    console.log(data);
  };

  return (
    <Container classname="flex flex-1 items-center justify-center">
      <Form className="w-[31.25rem]" onSubmit={handleSubmit(onSubmit)}>
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

        <Form.Submit>Entrar</Form.Submit>

        <Link to="/register" className="text-neutral-400 text-center">
          Ainda não possui uma conta?
        </Link>
      </Form>
    </Container>
  );
};
