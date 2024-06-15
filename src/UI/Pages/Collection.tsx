import { Link, useParams } from "react-router-dom";
import ProductItem from "../Design-System/ProductItem";
import Filters from "../Components/Filters";
import { Products } from "../Interface/Products";
import { useCart } from "../Hooks/useCart";
import { useFav } from "../Hooks/useFav";
import { useFilters } from "../Hooks/useFilters";
import { FaFilterCircleXmark } from "react-icons/fa6";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useState, useEffect, useContext } from "react";
import { FiltersContext } from "../Context/filtersContext";

export default function Collection() {
  const { addToCart } = useCart();
  const { addToFav } = useFav();
  const { section } = useParams();
  const { cleanFilters } = useFilters();
  const { filters } = useContext(FiltersContext);

  const [products, setProducts] = useState<Products[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError("");
      try {
        const response = await fetch(
          `http://localhost:5000/glasses?filter=${section}`
        );
        if (!response.ok) {
          throw new Error("Error en la carga de productos");
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError("No se pudieron cargar los productos");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [section]);

  const filteredProducts = products.filter(
    (product) =>
      (filters.shape === "all" || product.shape === filters.shape) &&
      (filters.color === "all" || product.color === filters.color)
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-20 md:mt-32 relative w-[80%] md:w-[70%] mx-auto">
      <div className="col-span-1 md:col-span-3 w-full flex flex-col gap-2 items-center justify-center text-black dark:text-white">
        <h1 className="text-lg md:text-2xl font-semibold text-center text-nowrap mt-10">
          ¡Bienvenido a la colección lentes de {section}!
        </h1>
        <p className="text-sm md:text-base text-center text-wrap md:text-nowrap">
          Puedes filtrar por forma y color para encontrar el lente perfecto para
          ti.
        </p>
      </div>
      <section className="col-span-1 md:col-span-3">
        <Filters />
      </section>
      <div className="col-span-1 md:col-span-3 text-black dark:text-white font-semibold flex flex-row items-center justify-between w-full text-sm md:text-base">
        <div className="flex flex-row gap-x-1 justify-center items-center">
          <Link to="/" className="font-light hover:underline">
            Inicio
          </Link>
          <p>/</p>
          <p>{`${section?.charAt(0).toUpperCase()}${section?.slice(1)}`}</p>
        </div>
        <div>
          Mostrando <span className="text-yellow-500">{products.length}</span>{" "}
          productos
        </div>
      </div>
      {error && (
        <div className="col-span-1 md:col-span-3 flex justify-center items-center h-full text-white text-base md:text-xl">
          <p>{error}</p>
        </div>
      )}
      {loading ? (
        <div className="col-span-1 md:col-span-3 flex flex-col gap-4 mx-auto justify-center text-center items-center w-[85%] h-full text-black dark:text-white">
          <h1 className="col-span-1 md:col-span-3 text-xl">
            Intentando cargar productos...
          </h1>
          <AiOutlineLoading3Quarters className="spin size-24 col-span-1 md:col-span-3" />
        </div>
      ) : products.length > 0 ? (
        filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
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
          ))
        ) : (
          <div className="col-span-1 md:col-span-3 flex flex-col items-center justify-center h-full gap-y-5 w-[50%] md:w-[20%] mx-auto text-black dark:text-white">
            <FaFilterCircleXmark className="text-4xl opacity-20" />
            <h1 className="text-xl md:text-3xl font-bold text-center">
              ¡Lo sentimos!
            </h1>
            <p className="text-center">
              No se encontraron productos con los filtros seleccionados.
              {section === "all"
                ? " Intenta seleccionar una categoría o género."
                : ""}
            </p>
            <button
              className="py-2 px-5 border-[0.5px] border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black dark:text-white transition uppercase font-bold text-center"
              onClick={cleanFilters}
            >
              Limpiar filtros
            </button>
          </div>
        )
      ) : (
        !error && (
          <div className="col-span-1 md:col-span-3 flex flex-col items-center justify-center h-full gap-y-5 w-[50%] md:w-[20%] mx-auto text-black dark:text-white">
            <FaFilterCircleXmark className="text-4xl opacity-20" />
            <h1 className="text-xl md:text-3xl font-bold text-center">
              ¡Lo sentimos!
            </h1>
            <p className="text-center">
              No se encontraron productos con los filtros seleccionados.
              {section === "all"
                ? " Intenta seleccionar una categoría o género."
                : ""}
            </p>
            <button
              className="py-2 px-5 border-[0.5px] border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black dark:text-white transition uppercase font-bold text-center"
              onClick={cleanFilters}
            >
              Limpiar filtros
            </button>
          </div>
        )
      )}
    </div>
  );
}
