import { Link, useParams } from "react-router-dom";
import { useFilters } from "../Hooks/useFilters";
import ProductItem from "../Design-System/ProductItem";
import { useCart } from "../Hooks/useCart";
import { useFav } from "../Hooks/useFav";
import { Products } from "../Interface/Products";

const Search = () => {
  const { searchTerm, searchResults } = useFilters();
  const { addToCart } = useCart();
  const { addToFav } = useFav();
  let { term } = useParams();
  term = searchTerm;
  return (
    <div className="w-[80%] md:w-[70%] m-auto text-black dark:text-white">
      {searchResults.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-center gap-4">
          <div className="mt-32 col-span-1 md:col-span-3 text-black dark:text-white font-semibold flex flex-row items-cemter justify-between w-full text-sm md:text-base">
            <div className="flex flex-row gap-x-1 justify-center items-center">
              <Link to={"/"} className="font-light hover:underline">
                Inicio
              </Link>
              <p>/</p>
              <p>
                Búsqueda: <span className="text-yellow-500">{searchTerm.length > 0 ? searchTerm : "todos"}</span>
              </p>
            </div>
            <div>
              Mostrando{" "}
              <span className="text-yellow-500">{searchResults.length}</span>{" "}
              productos
            </div>
          </div>
          {searchResults.map((product) => (
            <ProductItem
              key={product.id}
              id={product.id}
              category={product.category}
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
        <div className="flex flex-col justify-center items-center h-screen gap-2 text-center">
          <h1 className="text-3xl">No hay resultados para: {term}</h1>
          <p>Sigue explorando productos de nuestra tienda!</p>
          <Link to={"/"} className="px-4 py-2 border">
            Seguir comprando
          </Link>
        </div>
      )}
    </div>
  );
};
export default Search;
