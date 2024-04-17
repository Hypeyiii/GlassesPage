import { BiSearch } from "react-icons/bi";
import { useFilters } from "../Hooks/useFilters";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";
import { HiHeart } from "react-icons/hi";
import { useFav } from "../Hooks/useFav";
import { Products } from "../Interface/Products";

export default function SearchModal() {
  const {
    searchTerm,
    handleChangeSearch,
    handleSearch,
    handleKeyDown,
    showSearchTool,
    setShowSearchTool,
    searchResults,
  } = useFilters();
  const { addToFav, productFav } = useFav();

  return (
    <>
      <div
        className={`${
          showSearchTool
            ? "scale-in-center visible"
            : "scale-out-center invisible"
        } fixed
  backdrop-blur-md inset-0 w-screen h-screen text-white transition-all
 dark:text-black flex flex-col justify-center items-center py-4 z-50`}
      >
        <div
          className="absolute right-0 top-0 p-5"
          onClick={() => setShowSearchTool(false)}
        >
          <RxCross1 className="size-8 text-black dark:text-white cursor-pointer" />
        </div>
        <div
          className="flex flex-col w-[80%] md:w-[50%] h-[70%] justify-center items-center px-6 py-10 relative bg-white dark:bg-neutral-950 rounded-lg 
    border-[1px] border-black dark:border-white"
        >
          <div
            className="absolute top-0 py-10 px-6 w-full h-10 text-black dark:text-white text-xs font-light text-center flex flex-col 
      gap-4 bg-white dark:bg-neutral-950 rounded-t-lg"
          >
            <input
              type="text"
              className="w-full bg-black dark:bg-white text-white dark:text-black text-sm font-light text-center"
              placeholder="Buscar"
              onChange={handleChangeSearch}
              value={searchTerm}
              onKeyDown={handleKeyDown}
            />
            <button
              className="absolute right-10 flex justify-center items-center text-white dark:text-black"
              onClick={handleSearch}
            >
              <BiSearch className="size-5" />
            </button>
            <p className="text-black dark:text-white text-sm font-mono flex flex-row gap-1 justify-start py-2">
              Mostrando{" "}
              <span className="text-yellow-500">
                {searchTerm.length === 0 ? "0" : searchResults.length}
              </span>{" "}
              resultados
            </p>
          </div>
          <div className="flex flex-col overflow-y-auto w-full mt-16">
            {searchTerm.length > 0 && searchResults.length > 0 ? (
              searchResults.map((product) => (
                <Link
                  to={`${product.category}/Product/${product.id}`}
                  key={product.id}
                  className="grid grid-cols-5 gap-2 items-center justify-center text-black dark:text-white max-w-full 
              border-t-[1px] border-black/20 dark:border-white/20 hover:bg-gray-100 dark:hover:bg-neutral-800"
                >
                  <div
                    className="col-span-1 size-[75px] md:size-[100px] flex justify-center items-center m-auto"
                    onClick={() => setShowSearchTool(false)}
                  >
                    <img src={product.image} alt={product.brand} />
                  </div>
                  <div
                    className="col-span-3 flex flex-row justify-center items-center gap-1 text-xs md:text-base text-center text-nowrap"
                    onClick={() => setShowSearchTool(false)}
                  >
                    <p>{product.brand}</p>
                    <p className="hidden md:block">|</p>
                    <p className="hidden md:block">
                      {product.category}-Glasses
                    </p>
                  </div>
                  <button
                    onClick={() => addToFav(product as Products)}
                    className={`${
                      productFav(product.id) ? "text-red-500" : ""
                    }`}
                  >
                    <HiHeart className="size-6" />
                  </button>
                </Link>
              ))
            ) : (
              <p className="text-black dark:text-white text-lg font-normal text-center">
                {searchTerm.length === 0 ? (
                  "Escribe algo para buscar"
                ) : (
                  <p>No hay resultados para: {searchTerm}</p>
                )}
              </p>
            )}
            <div
              className="mt-5 absolute bottom-0 right-0 left-0 w-full m-auto flex flex-row justify-between items-center text-black dark:text-white
        border-t-[1px] border-black/20 dark:border-white/20 py-2 px-4 bg-white dark:bg-neutral-950 rounded-b-lg"
            >
              <p
                className="text-base flex
         justify-center items-center flex-row gap-1"
              >
                Busqueda para:{" "}
                <span className="text-yellow-500"> {searchTerm} </span>
              </p>
              <button
                className="flex flex-row gap-1 border px-2 py-1 text-xs md:opacity-50 hover:opacity-100 transition"
                onClick={handleSearch}
              >
                <BiSearch className="size-4" />
                Buscar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
