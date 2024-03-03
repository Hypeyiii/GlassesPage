import heartSunGlasses from "../Products/Products-HeartSunGlasses";
import ProductItem from "../Components/ProductItem.tsx";
import { Link } from "react-router-dom";

export interface Products {
  id: number;
  brand: string;
  price: number;
  image: string;
  description: string;
  quantity: number;
  total: number;
  countProducts: number;
}

export interface SunglassesProps {
  addToCart: (product: Products) => Products[];
  showDetails: (product: Products) => Products[];
}

const SunGlasses: React.FC<SunglassesProps> = ({ addToCart, showDetails }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-32 relative w-[95%] mx-auto">
      <div className="col-span-1 md:col-span-3 text-base text-black dark:text-white font-semibold flex flex-row items-cemter justify-between w-full">
        <div className="flex flex-row gap-x-1 justify-center items-center">
          <Link to={"/"} className="font-light hover:underline">
            Inicio
          </Link>
          <p>/</p>
          <p>Corazón-Sol</p>
        </div>
        <div>
          Mostrando <span className="text-yellow-500">{heartSunGlasses.length}</span>{" "}
          productos
        </div>
      </div>
      {heartSunGlasses.map((product) => (
        <>
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
        </>
      ))}
    </div>
  );
};
export default SunGlasses;
