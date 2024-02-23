import ProductItem from "../Components/ProductItem.tsx";
import { squaredSunGlasses } from "../Products/Products-SquaredSunGlasses.tsx";

export default function SunGlasses({ addToCart, showDetails }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-32 relative w-[95%] mx-auto">
      <p className="col-span-1 md:col-span-3 text-2xl text-black dark:text-white font-semibold">
        Lentes cuadrados de Sol
      </p>
      {squaredSunGlasses.map((sunglass) => (
        <>
          <ProductItem
            key={sunglass.id}
            brand={sunglass.brand}
            id={sunglass.id}
            price={sunglass.price}
            image={sunglass.image}
            description={sunglass.description}
            addedToCart={() => addToCart(sunglass)}
            showDetails={() => showDetails(sunglass)}
          />
        </>
      ))}
    </div>
  );
}
