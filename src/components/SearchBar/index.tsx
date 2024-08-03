export const SearchBar = () => {
  return (
    <div className="max-w-[50rem] w-full p-4 flex items-center gap-3 rounded-lg bg-white ">
      <input
        placeholder="Digite o nome do carro"
        type="text"
        className="w-full bg-transparent p-3 rounded-lg border border-solid border-neutral-400 font-medium text-neutral-400"
      />
      <button className="bg-red-600 flex items-center justify-center font-semibold text-neutral-50 px-8 py-3 rounded-lg">
        Buscar
      </button>
    </div>
  );
};