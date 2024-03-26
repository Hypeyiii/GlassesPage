import { BiLeftArrowAlt, BiTrash } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useState } from "react";
import BuyCartModal from "../Modals/BuyCartModal.tsx";

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

interface CartProps {
  allProducts: Products[];
  deleteProduct: (product: Products) => Products[];
  total: number;
  addProduct: (product: Products) => Products[];
  substractProduct: (product: Products) => Products[];
  showDetails: (product: Products) => Products[];
  addToCart: (product: Products) => Products[];
}

const Cart: React.FC<CartProps> = ({
  allProducts,
  deleteProduct,
  total,
  addProduct,
  substractProduct,
  showDetails,
}) => {
  const [buyCart, setBuyCart] = useState(false);

  const backUp = () => {
    window.history.back();
  };
  return (
    <>
      {allProducts.length ? (
        <>
          <div className="mt-32 mb-8 text-black dark:text-white text-xl font-medium flex items-center justify-between w-[95%] mx-auto">
            <h1 className="text-xs md:text-lg">
              Costo del carrito :{" "}
              <span className="text-xs md:text-lg font-semibold">${total}.00<span className="text-xs md:text-sm"> mx</span></span>
            </h1>
            <p className="text-xs md:text-lg">
              Productos en el carrito: <span className="text-yellow-500">{allProducts.length}</span>
            </p>
          </div>
          <div className="grid grid-cols-4 items-center justify-center w-[95%] gap-5 mx-auto">
            {allProducts.map((product) => (
              <div
                key={product.id}
                className="text-white bg-[#f6f6f6] dark:bg-black/80 rounded-sm hover:shadow-2xl dark:hover:shadow-lg hover:shadow-black/40 
                dark:hover:shadow-white/20 border-[0.5px] border-black/10 hover:border-black/25 dark:border-white/10 dark:hover:border-white/20 
                flex-flex-col col-span-4 md:col-span-1 relative [&>div>img]:hover:scale-100 p-5 [&>div>#description]:hover:font-bold cursor-pointer h-full w-full 
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
                  className="md:size-[250px] mx-auto flex items-center justify-center"
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
                <p className="text-black dark:text-white font-semibold text-sm md:text-lg">
                  {product.description}
                </p>
                <div className="flex flex-row justify-between items-center">
                  <p className="text-sm font-extrabold text-black dark:text-white">
                    ${product.price}.00 mx
                  </p>
                  <div className="flex flex-row gap-2 items-center justify-center text-base font-bold text-black dark:text-white">
                    <button
                      onClick={() => substractProduct(product as Products)}
                      className="bg-black/60 hover:bg-black text-white dark:bg-white/60 dark:hover:bg-white transition dark:text-black
                      rounded-full px-[7px] text-sm"
                    >
                      -
                    </button>
                    <p>{product.quantity}</p>
                    <button
                      onClick={() => addProduct(product as Products)}
                      className="bg-black/60 hover:bg-black text-white dark:bg-white/60 dark:hover:bg-white transition dark:text-black
                      rounded-full px-[6px] text-sm"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center w-full h-full">
          <h1 className="text-xl md:text-5xl font-bold text-black dark:text-white mx-auto text-center">
            Tu carrito está vacío :(
          </h1>
        </div>
      )}
      <div className="flex justify-center items-center flex-col gap-y-4 mt-10">
        {allProducts.length && (
          <button
            className="text-xs md:text-base text-white dark:text-black py-1 px-10 bg-black dark:bg-white font-normal hover:bg-white dark:hover:bg-black
            hover:text-black dark:hover:text-white hover:border-black border-2 dark:hover:border-white/20 border-black/20 transition-all duration-300 ease-in-out"
            onClick={() => setBuyCart(true)}
          >
            Comprar carrito
          </button>
        )}
      </div>
      {buyCart && (
        <BuyCartModal
          closeBuyCartModal={() => setBuyCart(false)}
          total={total}
        />
      )}
      <div
        className="text-black dark:text-white absolute top-0 mt-16 left-0 p-5 text-sm flex flex-row gap-x-1 items-center cursor-pointer"
        onClick={backUp}
      >
        <BiLeftArrowAlt />
        Atrás
      </div>
    </>
  );
};
export default Cart;
