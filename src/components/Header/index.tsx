import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.svg';
import { useUser } from '../../context/User';
import { Container } from '../Container';
import { UserCircle2 } from 'lucide-react';

export const Header = () => {
    const { isAuth } = useUser();
    return (
        <header className="w-full h-20 bg-white shadow-sm flex items-center justify-center">
            <Container classname="flex items-center justify-between px-3">
                <Link to="/home">
                    <img src={Logo} alt="AutoDev Logo" />
                </Link>
                {isAuth && (
                    <Link to="/dashboard">
                        <UserCircle2 size={40} color="#0A0A0A" />
                    </Link>
                )}
            </Container>
        </header>
    );
};
