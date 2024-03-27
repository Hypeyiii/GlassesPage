import {  BiTrash } from "react-icons/bi";
import { FaAngleLeft } from "react-icons/fa";
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
  category: string;
  genre: string;
  shape: string;
}

interface WishlistProps {
  allFavProducts: Products[];
  deleteProduct: (product: Products) => Products[];
  showDetails: (product: Products) => Products[];
  addToCart: (product: Products) => Products[];
}

const Wishlist: React.FC<WishlistProps> = ({
  allFavProducts,
  deleteProduct,
  showDetails,
}) => {
  const backUp = () => {
    window.history.back();
  };
  return (
    <>
      {allFavProducts.length ? (
        <>
          <div className="mt-32 mb-8 text-black dark:text-white text-xl font-medium flex items-center justify-between w-[80%] md:w-[70%] mx-auto">
            <p className="text-xs md:text-lg">
              Wishlist: <span className="text-yellow-500">{allFavProducts.length}</span>
            </p>
            <div className="flex flex-row gap-2 items-center text-sm border-b-[0.5px] border-transparent hover:border-black dark:hover:border-white cursor-pointer"
            onClick={backUp}>
              <FaAngleLeft className="size-4" />
              Regresar
            </div>
          </div>
          <div className="grid grid-cols-4 items-center justify-center w-[80%] md:w-[70%] gap-5 mx-auto">
            {allFavProducts.map((product) => (
              <div
                key={product.id}
                className="text-white bg-[#f6f6f6] dark:bg-black/80 rounded-sm hover:shadow-2xl dark:hover:shadow-lg hover:shadow-black/40 
                dark:hover:shadow-white/20 border-[0.5px] border-black/10 hover:border-black/25 dark:border-white/10 dark:hover:border-white/20 
                flex-flex-col col-span-2 md:col-span-1 relative [&>div>img]:hover:scale-100 p-2 md:p-5 [&>div>#description]:hover:font-bold cursor-pointer h-full w-full 
                opacity-85 hover:opacity-100 transition"
              >
                <div
                  className="absolute top-0 right-0 p-2 text-black dark:text-white hover:text-red-500 dark:hover:text-red-400"
                  onClick={() => deleteProduct(product as Products)}
                >
                  <BiTrash className="size-3 md:size-4" />
                </div>
                <div className="absolute top-0 flex w-full justify-center">
                  <div
                    className="left-0 h-[1px] animate-border-width rounded-full bg-gradient-to-r from-[rgba(245,245,245,0)] to-[rgba(245,245,245,0)  
                    dark:from-[rgba(17,17,17,0)] via-neutral-800 dark:via-white dark:to-[rgba(17,17,17,0)] transition-all duration-1000"
                  />
                </div>
                <Link
                  to={`/ProductDetail/${product.id}`}
                  className="size-[100px] md:size-[250px] mx-auto flex items-center justify-center"
                >
                  <img
                    src={product.image}
                    alt={product.description + "image"}
                    className="scale-90 transition"
                    onClick={() => showDetails(product as Products)}
                  />
                </Link>
                <p className="text-black/60 dark:text-white/60 text-xs md:text-base font-semibold">
                  {product.brand}
                </p>
                <p className="text-black dark:text-white font-semibold text-xs md:text-lg">
                  {product.description}
                </p>
                <div className="flex flex-row justify-between items-center">
                  <p className="text-xs font-extrabold text-black dark:text-white">
                    ${product.price}.00 mx
                  </p>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center w-full h-full">
          <h1 className="text-xl md:text-5xl font-bold text-black dark:text-white mx-auto text-center">
            No tienes productos favoritos :(
          </h1>
        </div>
      )}
    </>
  );
};
export default Wishlist;
