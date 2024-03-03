import { manSunGlasses } from "../Products/Products-ManSunGlasses";
import ProductItem from "../Components/ProductItem.tsx";
import { Link } from "react-router-dom";

interface Products {
  id: number;
  brand: string;
  price: number;
  image: string;
  description: string;
  quantity: number;
  total: number;
  countProducts: number;
}

interface SunGlassesProps {
  addToCart: (product: Products) => Products[];
  showDetails: (product: Products) => Products[];
}

const SunGlasses: React.FC<SunGlassesProps> = ({ addToCart, showDetails }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-32 relative w-[95%] mx-auto">
      <div className="col-span-1 md:col-span-3 text-base text-black dark:text-white font-semibold flex flex-row items-cemter justify-between w-full">
        <div className="flex flex-row gap-x-1 justify-center items-center">
          <Link to={"/"} className="font-light hover:underline">
            Inicio
          </Link>
          <p>/</p>
          <p>Hombre-Sol</p>
        </div>
        <div>
          Mostrando <span className="text-yellow-500">{manSunGlasses.length}</span>{" "}
          productos
        </div>
      </div>
      {manSunGlasses.map((product) => (
        <>
          <ProductItem
            key={product.id}
            brand={product.brand}
            id={product.id}
            price={product.price}
            image={product.image}
            description={product.description}
            addedToCart={() => addToCart(product as Products)}
            showDetails={() => showDetails(product as Products)}
          />
        </>
      ))}
    </div>
  );
};
export default SunGlasses;
