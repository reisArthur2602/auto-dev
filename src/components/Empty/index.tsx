import { Container } from '../Container';
import { Car } from 'lucide-react';

export const Empty = () => {
  return (
    <Container classname="flex items-center justify-center mt-[20%]">
      <div className="text-red-600 text-2xl flex flex-col items-center justify-center">
        <Car size={132} strokeWidth={1} />
        <b>Nenhum carro foi encontrado</b>
      </div>
    </Container>
  );
};
