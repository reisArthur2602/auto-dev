import { Container, SearchBar } from '../../components';

export const Home = () => {
  return (
    <Container classname="py-10 px-4 flex items-center flex-col gap-10">
      <SearchBar />
      <h1 className="text-center font-bold text-neutral-950 text-[2rem]">
        Quer comprar ou vender um carro sem sair de casa?
      </h1>
    </Container>
  );
};
