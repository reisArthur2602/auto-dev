import Logo from '../../assets/logo.svg';
import { Container } from '../Container';

export const Header = () => {
  return (
    <header className="w-full h-20 bg-white shadow-sm flex items-center justify-center">
      <Container classname="flex items-center justify-between">
        <img src={Logo} alt="AutoDev Logo" />
      </Container>
    </header>
  );
};
