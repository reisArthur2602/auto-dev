import { Link } from 'react-router-dom';


export const NavBar = () => {


  return (
    <nav className="w-full flex justify-between items-center  rounded-lg px-6 py-3 my-10 bg-red-600">
      <div className="flex items-center gap-4">
        <Link to="/dashboard" className="font-bold text-neutral-50">
          Minha Garagem
        </Link>
        <Link to="/new" className="font-bold text-neutral-50">
          Cadastrar Carro
        </Link>
      </div>
      <button className="font-bold text-neutral-50">
        Sair
      </button>
    </nav>
  );
};
