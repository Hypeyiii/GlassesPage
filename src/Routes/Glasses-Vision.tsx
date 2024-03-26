import { Link } from "react-router-dom";
import { useState } from "react";
import ProductItem from "../Components/ProductItem.tsx";
import sunglasses from "../Products/Products-SunGlasses.tsx";
import Filters from "../Components/Filters.tsx";
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
  showDetails: (product: Products) => Products[];
}
const SunGlasses: React.FC<SunGlassesProps> = ({ addToCart, showDetails }) => {
  const [minPrice, setMinPrice] = useState(0);

  const handleChangeMinPrice = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMinPrice(Number(event.target.value));
    setFilters({ ...filters, minPrice: Number(event.target.value) });
  };

  const handleChangeShape = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilters({ ...filters, shape: event.target.value });
  };

  const handleChangeGenre = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilters({ ...filters, genre: event.target.value });
  };

  const [filters, setFilters] = useState({
    category: "visionGlasses",
    minPrice: 0,
    genre: "all",
    shape: "all",
  });

  const filterProducts = sunglasses.filter(
    (product) =>
      product.category === filters.category &&
      product.price >= filters.minPrice &&
      (filters.genre === "all" || product.genre === filters.genre) &&
      (filters.shape === "all" || product.shape === filters.shape)
  );
  return (
    <>
      <Filters
        minPrice={minPrice}
        handleChangeMinPrice={handleChangeMinPrice}
        handleChangeShape={handleChangeShape}
        handleChangeGenre={handleChangeGenre}
      />
      {filterProducts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-32 relative w-[95%] mx-auto">
          <div className="col-span-1 md:col-span-3 text-base text-black dark:text-white font-semibold flex flex-row items-cemter justify-between w-full">
            <div className="flex flex-row gap-x-1 justify-center items-center">
              <Link to={"/"} className="font-light hover:underline">
                Inicio
              </Link>
              <p>/</p>
              <p>Sol</p>
            </div>
            <div>
              Mostrando{" "}
              <span className="text-yellow-500">{filterProducts.length}</span>{" "}
              productos
            </div>
          </div>
          {filterProducts.map((product) => (
            <ProductItem
              key={product.id}
              id={product.id}
              brand={product.brand}
              price={product.price}
              image={product.image}
              description={product.description}
              addedToCart={() => addToCart(product as Products)}
              showDetails={() => showDetails(product as Products)}
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
