import { Link } from 'react-router-dom';
import { useUser } from '../../context/User';
import { LINKS } from '../../utils/links';

export const NavBar = () => {
    const { Logout } = useUser();

    return (
        <nav className="w-full flex justify-between items-center rounded-lg px-4 py-3 mb-10 bg-red-600 text-xs sm:text-base text-neutral-50">
            <div className="flex items-center gap-3">
                {LINKS.map((l) => (
                    <Link to={l.path} key={l.title} className="font-semibold ">
                        {l.title}
                    </Link>
                ))}
            </div>
            <button className="font-bold" onClick={Logout}>
                Sair
            </button>
        </nav>
    );
};
