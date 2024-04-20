import { Link, useParams } from "react-router-dom";
import sunglasses from "../Data/Data";
import ProductItem from "../Design-System/ProductItem";
import Filters from "../Components/Filters";
import { Products } from "../Interface/Products";
import { useCart } from "../Hooks/useCart";
import { useFav } from "../Hooks/useFav";
import { useContext } from "react";
import { FiltersContext } from "../Context/filtersContext";
import { useFilters } from "../Hooks/useFilters";
import { FaFilterCircleXmark } from "react-icons/fa6";

export default function Collection() {
  const { addToCart } = useCart();
  const { addToFav } = useFav();
  const { section } = useParams();
  const { cleanFilters } = useFilters();
  const { filters } = useContext(FiltersContext);
  const filtredSunglasses = sunglasses.filter(
    (product) =>
      (product.category === section || product.genre === section) &&
      (filters.shape === "all" || product.shape === filters.shape) &&
      (filters.color === "all" || product.color === filters.color)
  );

  return (
    <>
      {filtredSunglasses.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-20 md:mt-32 relative w-[80%] md:w-[70%] mx-auto">
          <div className="col-span-1 md:col-span-3 w-full flex flex-col gap-2 items-center justify-center text-black dark:text-white">
            <h1 className="text-lg md:text-2xl font-semibold text-center mt-10">
              ¡Bienvenido a la colección lentes de {section}!
            </h1>
            <p className="text-sm md:text-base text-center text-wrap md:text-nowrap">
              Puedes filtrar por forma y color para encontrar el lente perfecto
              para ti.
            </p>
          </div>
          <section className="col-span-1 md:col-span-3">
            <Filters />
          </section>
          <div className="col-span-1 md:col-span-3 text-black dark:text-white font-semibold flex flex-row items-cemter justify-between w-full text-sm md:text-base">
            <div className="flex flex-row gap-x-1 justify-center items-center">
              <Link to={"/"} className="font-light hover:underline">
                Inicio
              </Link>
              <p>/</p>
              <p>{`${section?.slice(0, 1).toUpperCase()}${section?.slice(
                1,
                section.length
              )}`}</p>
            </div>
            <div>
              Mostrando{" "}
              <span className="text-yellow-500">
                {filtredSunglasses.length}
              </span>{" "}
              productos
            </div>
          </div>
          {filtredSunglasses.map((product) => (
            <ProductItem
              category={product.category}
              key={product.id}
              id={product.id}
              brand={product.brand}
              price={product.price}
              image={product.image}
              stock={product.stock}
              description={product.description}
              addedToCart={() => addToCart(product as Products)}
              addedToFav={() => addToFav(product as Products)}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-full gap-y-5 w-[50%] md:w-[20%] mx-auto text-black dark:text-white">
          <FaFilterCircleXmark className="size-32  opacity-20" />
          <h1 className="text-xl md:text-3xl font-bold  mx-auto text-center">
            ¡Lo sentimos!
          </h1>
          <p className="text-center text-wrap md:text-nowrap">
            No se encontraron productos con los filtros seleccionados.
            {section === "all"
              ? "Intenta seleccionar una categoría o género."
              : ""}
          </p>
          <button
            className="py-2 px-5 border-[0.5px] border-black dark:border-white hover:bg-black hover:text-white
            dark:hover:bg-white dark:hover:text-black dark:text-white transition flex justify-center uppercase font-bold text-center"
            onClick={cleanFilters}
          >
            Limpiar filtros
          </button>
        </div>
      )}
    </>
  );
}
