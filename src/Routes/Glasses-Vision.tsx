import ProductItem from "../Components/ProductItem.tsx";
import { visionGlasses } from "../Products/Products-VisionGlasses.tsx";
interface Sunglass {
  id: number;
  brand: string;
  price: number;
  image: string;
  description: string;
}

interface SunGlassesProps {
  addToCart: (visionglass: Sunglass) => void;
  showDetails: (visionglass: Sunglass) => void;
}

const SunGlasses: React.FC<SunGlassesProps>=({ addToCart, showDetails }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-32 relative w-[95%] mx-auto">
      <p className="col-span-1 md:col-span-3 text-2xl text-black dark:text-white font-semibold">
        Lentes de Visión
      </p>
      {visionGlasses.map((visionglass) => (
        <>
          <ProductItem
            key={visionglass.id}
            id={visionglass.id}
            brand={visionglass.brand}
            price={visionglass.price}
            image={visionglass.image}
            description={visionglass.description}
            addedToCart={() => addToCart(visionglass)}
            showDetails={() => showDetails(visionglass)}
          />
        </>
      ))}
    </div>
  );
}
export default SunGlasses;
