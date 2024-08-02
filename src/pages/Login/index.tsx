import { Link } from 'react-router-dom';
import { Container } from '../../components';
import { Form } from '../../components';

export const Login = () => {
  return (
    <Container classname="flex flex-1 items-center justify-center">
      <Form className="w-[31.25rem]">
        <Form.Label>
          Email
          <Form.Field placeholder="email@email.com" type="text" />
        </Form.Label>

        <Form.Label>
          Senha
          <Form.Field placeholder="******" type="password" />
        </Form.Label>

        <Form.Submit>Entrar</Form.Submit>

        <Link to="/register" className='text-neutral-400 text-center'>Ainda não possui uma conta?</Link>
      </Form>
    </Container>
  );
};
