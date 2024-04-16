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
    <div className="w-[90%] md:w-[70%] m-auto text-black dark:text-white">
      {searchResults.length > 0 ? (
        <div className="mt-32 grid grid-cols-3 items-center justify-center gap-4">
          <h1 className="text-xl col-span-3">Productos para: {term}</h1>
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
          <Link to={"/"} className="px-4 py-2 border">Seguir comprando</Link>
        </div>
      )}
    </div>
  );
};
export default Search;
