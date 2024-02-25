import womenSunGlasses from "../Products/Products-WomenSunGlasses";
import ProductItem from "../Components/ProductItem.tsx";
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

const SunGlasses: React.FC <SunGlassesProps>= ({ addToCart, showDetails }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-32 relative w-[95%] mx-auto">
      <p className="col-span-1 md:col-span-3 text-2xl text-black dark:text-white font-semibold">
        Lentes de Sol en forma de corazón
      </p>
      {womenSunGlasses.map((product) => (
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
}
export default SunGlasses;
