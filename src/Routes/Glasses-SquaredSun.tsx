import ProductItem from "../Components/ProductItem.tsx";
import { squaredSunGlasses } from "../Products/Products-SquaredSunGlasses.tsx";
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
      <p className="col-span-1 md:col-span-3 text-2xl text-black dark:text-white font-semibold">
        Lentes cuadrados de Sol
      </p>
      {squaredSunGlasses.map((product) => (
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
