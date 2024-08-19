import { Link } from 'react-router-dom';
import { Container } from '../../components';
import { Form } from '../../components';
import { useForm } from 'react-hook-form';
import { User } from '../../dtos/user';
import { zodResolver } from '@hookform/resolvers/zod';
import Schema from './Schema';
import { useUser } from '../../context/User';

export const Login = () => {
  const { onLogin } = useUser();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<Omit<User, 'name'>>({
    resolver: zodResolver(Schema),
  });

  return (
    <Container classname="flex flex-1 items-center justify-center px-3">
      <Form className="w-[31.25rem]" onSubmit={handleSubmit(onLogin)}>
        <Form.Label>
          Email
          <Form.Field
            placeholder="email@email.com"
            type="text"
            {...register('email')}
            helperText={errors.email?.message}
          />
          {errors && (
            <p className="text-xs text-red-500">{errors.email?.message}</p>
          )}
        </Form.Label>

        <Form.Label>
          Senha
          <Form.Field
            placeholder="******"
            type="password"
            {...register('password')}
            helperText={errors.password?.message}
          />
          {errors && (
            <p className="text-xs text-red-500">{errors.password?.message}</p>
          )}
        </Form.Label>

        <Form.Submit>Entrar</Form.Submit>

        <Link to="/register" className="text-neutral-400 text-center">
          Ainda não possui uma conta?
        </Link>
      </Form>
    </Container>
  );
};
