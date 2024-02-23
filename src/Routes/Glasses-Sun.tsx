import ProductItem from "../Components/ProductItem.tsx";
import sunglasses from '../Products/Products-SunGlasses.tsx'

export default function SunGlasses({addedToCart, showDetails}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-32 relative w-[95%] mx-auto">
      <p className="col-span-1 md:col-span-3 text-2xl text-white font-semibold">
        Lentes de Sol
      </p>
      {sunglasses.map((sunglass) => (
        <ProductItem
          key={sunglass.id}
          id={sunglass.id}
          brand={sunglass.brand}
          price={sunglass.price}
          image={sunglass.image}
          description={sunglass.description}
          addedToCart={() => addedToCart(sunglass)}
          showDetails={() => showDetails(sunglass)}
        />
      ))}
    </div>
  );
}
