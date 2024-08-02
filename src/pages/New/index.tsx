import { Container, Form, NavBar } from '../../components';

export const New = () => {
  return (
    <Container classname='py-10 px-4'>
      <NavBar />
     
      <Form>
        <Form.Label>
          Nome do carro
          <Form.Field placeholder="Ex: Renault Clio" type="text" />
        </Form.Label>

        <Form.Label>
          Modelo
          <Form.Field
            placeholder="Ex: 1.4 MPFI MAXX 8V FLEX 4P MANUAL"
            type="text"
          />
        </Form.Label>

        <div className="flex items-center justify-center gap-4">
          <Form.Label>
            Ano
            <Form.Field placeholder="Ex: 2022/2024" type="text" />
          </Form.Label>
          <Form.Label>
            Km
            <Form.Field placeholder="Ex: 520000" type="text" />
          </Form.Label>
        </div>

        <div className="flex items-center justify-center gap-4">
          <Form.Label>
            Telefone
            <Form.Field placeholder="Ex: 021995461569" type="text" />
          </Form.Label>
          <Form.Label>
            Preço
            <Form.Field placeholder="Ex:1240000" type="text" />
          </Form.Label>
        </div>

        <Form.Label>
          Sobre o carro
          <Form.Textarea placeholder="Ex:1240000" />
        </Form.Label>

        <Form.Submit>Cadastrar</Form.Submit>
      </Form>
    </Container>
  );
};
