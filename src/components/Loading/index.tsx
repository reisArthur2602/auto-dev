import { Container } from '../Container';
import { LoaderCircle } from 'lucide-react';

export const Loading = () => {
  return (
    <Container classname="flex-1 flex items-center justify-center">
      <LoaderCircle
        size={32}
        color="#DC2626"
        className="animate-spin"
      />
    </Container>
  );
};

