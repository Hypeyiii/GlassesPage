import { Link, useParams } from "react-router-dom";
import sunglasses from "../Data/Data";
import ProductItem from "../Design-System/ProductItem";
import Filters from "../Components/Filters";
import { Products } from "../Interface/Products";
import { useCart } from "../Hooks/useCart";
import { useFav } from "../Hooks/useFav";
import { useContext } from "react";
import { FiltersContext } from "../Context/filtersContext";

export default function Collection() {
  const { addToCart } = useCart();
  const { addToFav } = useFav();
  const { section } = useParams();
  const { filters } = useContext(FiltersContext);
  const filtredSunglasses = sunglasses.filter(
    (product) =>
      (product.category === section || product.genre === section) &&
      (filters.shape === "all" || product.shape === filters.shape) &&
      (filters.color === "all" || product.color === filters.color)
  );
  return (
    <>
      <Filters />
      {filtredSunglasses.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 relative w-[80%] md:w-[70%] mx-auto">
          <div className="col-span-1 md:col-span-3 text-black dark:text-white font-semibold flex flex-row items-cemter justify-between w-full text-sm md:text-base">
            <div className="flex flex-row gap-x-1 justify-center items-center">
              <Link to={"/"} className="font-light hover:underline">
                Inicio
              </Link>
              <p>/</p>
              <p>Vision</p>
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
        <div className="mt-32 text-white text-center">
          <h2 className="text-2xl font-semibold">
            No se encontraron productos
          </h2>
          <p className="text-lg font-light">Intenta con otros filtros</p>
        </div>
      )}
    </>
  );
}
