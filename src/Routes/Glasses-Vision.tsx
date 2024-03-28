import { Link } from "react-router-dom";
import ProductItem from "../Components/ProductItem.tsx";
import Filters from "../Components/Filters.tsx";
import { useFilters } from "../Hooks/useFilters.tsx";

interface Products {
  id: number;
  brand: string;
  price: number;
  image: string;
  description: string;
  quantity: number;
  total: number;
  countProducts: number;
  category: string;
  genre: string;
  shape: string;
}

interface SunGlassesProps {
  addToCart: (product: Products) => Products[];
  addedToFav: (product: Products) => Products[];
  showDetails: (product: Products) => Products[];
  isFav: boolean;
}
const SunGlasses: React.FC<SunGlassesProps> = ({
  addToCart,
  showDetails,
  addedToFav,
  isFav,
}) => {

  const {filterVisionGlasses} = useFilters();
  return (
    <>
      <Filters
      />
      {filterVisionGlasses.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-32 relative w-[80%] md:w-[70%] mx-auto">
          <div className="col-span-1 md:col-span-3 text-black dark:text-white font-semibold flex flex-row items-cemter justify-between w-full text-sm md:text-base">
            <div className="flex flex-row gap-x-1 justify-center items-center">
              <Link to={"/"} className="font-light hover:underline">
                Inicio
              </Link>
              <p>/</p>
              <p>Sol</p>
            </div>
            <div>
              Mostrando{" "}
              <span className="text-yellow-500">{filterVisionGlasses.length}</span>{" "}
              productos
            </div>
          </div>
          {filterVisionGlasses.map((product) => (
            <ProductItem
              key={product.id}
              id={product.id}
              brand={product.brand}
              price={product.price}
              image={product.image}
              description={product.description}
              addedToCart={() => addToCart(product as Products)}
              addedToFav={() => addedToFav(product as Products)}
              showDetails={() => showDetails(product as Products)}
              isFav={isFav}
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
};
export default SunGlasses;
