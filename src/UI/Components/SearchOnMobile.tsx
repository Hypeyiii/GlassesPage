import { RxCross1 } from "react-icons/rx";
import { useFilters } from "../Hooks/useFilters";
import { BiSearch } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

interface SearchOnMobileProps {
  close: () => void;
}

export default function SearchOnMobile({ close }: SearchOnMobileProps) {
  const navigate = useNavigate();
  const { handleChangeSearch, searchTerm } = useFilters();
  const handleSearch = () => {
    close();
    navigate(`/search/${searchTerm}`);
  };
  return (
    <div
      className="fixed inset-0 w-screen h-screen flex flex-col gap-2 justify-center items-center z-50 text-black dark:text-white
       backdrop-blur-lg transition-all duration-500 md:hidden"
    >
        <p>¡Encuentra tus productos favoritos!</p>
      <div className="flex flex-row gap-1 justify-center items-center">
        <BiSearch className="size-6" />
        <input
          type="text"
          className="w-40s bg-black dark:bg-white text-white dark:text-black text-xs font-light text-center p-1"
          placeholder="Buscar"
          onChange={handleChangeSearch}
          value={searchTerm}
        />
      </div>
      <button onClick={handleSearch} className="text-xs rounded-lg mt-5 px-3 py-2 text-white bg-black dark:text-black dark:bg-white">
        Buscar
      </button>
      <button
        className="absolute top-0 right-0 p-5 text-black dark:text-white"
        onClick={close}
      >
        <RxCross1 className="size-6" />
      </button>
    </div>
  );
}
