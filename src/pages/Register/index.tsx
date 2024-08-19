import { Link } from 'react-router-dom';
import { Form } from '../../components';
import { Container } from '../../components';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Schema from './Schema';
import { User } from '../../dtos/user';
import { useUser } from '../../context/User';

export const Register = () => {
  const { onRegister } = useUser();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<User>({
    resolver: zodResolver(Schema),
  });

  return (
    <Container classname="flex flex-1 items-center justify-center px-3">
      <Form className="w-[31.25rem]" onSubmit={handleSubmit(onRegister)}>
        <Form.Label>
          Nome
          <Form.Field
            placeholder="Nome Completo"
            type="text"
            {...register('name')}
            helperText={errors.name?.message}
          />
          {errors && (
            <p className="text-xs text-red-500">{errors.name?.message}</p>
          )}
        </Form.Label>

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

        <Form.Submit>Cadastrar</Form.Submit>

        <Link to="/" className="text-neutral-400 text-center">
          Já possui uma conta?
        </Link>
      </Form>
    </Container>
  );
};
