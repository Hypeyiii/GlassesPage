import { Link } from "react-router-dom";
import ProductItem from "../Design-System/ProductItem";
import { Products } from "../Interface/Products";
import { useCart } from "../Hooks/useCart";
import { useFav } from "../Hooks/useFav";
import useProducts from "../Hooks/useProducts";
import LoadingSpin from "../Design-System/loading-spin";

interface SectionProps {
  category: string;
  collection: string;
}
export default function Section({ category, collection }: SectionProps) {
  const { addToCart } = useCart();
  const { addToFav } = useFav();
  const { products, loading, error } = useProducts();

  return (
    <div className="text-black dark:text-white w-full flex flex-col gap-4">
      <div className="flex flex-row items-center justify-between w-full">
        <p className="text-sm text-center text-wrap md:text-2xl">
          Colección lentes de{" "}
          <span className="text-yellow-500">{collection}</span>
        </p>
        <Link
          to={`/collection/${category}`}
          className="text-xs md:text-base md:translate-x-[-20px] hover:translate-x-0 hover:rounded-lg text-center 
          text-nowrap px-2 md:px-4 py-1 md:py-2 border border-black dark:border-white md:opacity-70 hover:opacity-100 transition duration-300"
        >
          Ver colección
        </Link>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-4 justify-center items-center m-auto">
        {error && (
          <span className="md:col-span-3 flex items-center justify-center text-base md:text-xl">
            {error} de la sección {collection}
          </span>
        )}
        {loading ? (
          <>
            <LoadingSpin
              smallSize={100}
              mediumSize={150}
              gSmallSize={75}
              gMediumSize={140}
              text=""
            />
            <LoadingSpin
              smallSize={100}
              mediumSize={150}
              gSmallSize={75}
              gMediumSize={140}
              text=""
            />
            <LoadingSpin
              smallSize={100}
              mediumSize={150}
              gSmallSize={75}
              gMediumSize={140}
              text=""
            />
          </>
        ) : (
          <span className="w-full grid col-span-1 md:col-span-3 grid-cols-1 md:grid-cols-3 gap-4 justify-center items-center m-auto">
            {products
              .filter(
                (product) =>
                  product.genre === category || product.category === category
              )
              .slice(0, 3)
              .map((product) => (
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
          </span>
        )}
      </div>
    </div>
  );
}
