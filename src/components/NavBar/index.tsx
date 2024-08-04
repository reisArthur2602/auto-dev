import { Link } from 'react-router-dom';
import { useUser } from '../../context/User';
import { LINKS } from '../../utils/links';

export const NavBar = () => {
  const { Logout } = useUser();

  return (
    <nav className="w-full flex justify-between items-center rounded-lg px-6 py-3 mb-10 bg-red-600">
      <div className="flex items-center gap-4">
        {LINKS.map((l) => (
          <Link to={l.path} className="font-semibold text-neutral-50">
            {l.title}
          </Link>
        ))}
      </div>
      <button className="font-bold text-neutral-50" onClick={Logout}>
        Sair
      </button>
    </nav>
  );
};
