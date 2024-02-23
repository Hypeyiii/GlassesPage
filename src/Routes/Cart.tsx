import { BiTrash } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useState } from "react";
import BuyCartModal from "../Modals/BuyCartModal.tsx";

export default function Cart({
  allProducts,
  deleteProduct,
  total,
  addProduct,
  substractProduct,
  showDetails,
  id,
}) {
  const [buyCart, setBuyCart] = useState(false);
  return (
    <>
      <div className="flex flex-row justify-between px-10 items-center border-b-[0.1px] border-b-black dark:border-white mt-40 md:mt-32 mb-10 ">
        <p className="flex justify-center text-2xl text-black dark:text-white font-semibold">
          {allProducts.length
            ? "Carrito de compras"
            : "No hay productos en el carrito"}
        </p>
        <p className="text-black dark:text-white text-2xl font-semibold">
          Total: ${total}.00 mx
        </p>
      </div>
      <div className="grid grid-cols-4 items-center justify-center w-[95%] gap-5 mx-auto">
        {allProducts.map((product) => (
          <div
            key={product.id}
            className="text-white bg-[#f6f6f6] dark:bg-black/80 rounded-sm hover:shadow-2xl dark:hover:shadow-lg hover:shadow-black/40 
            dark:hover:shadow-white/20 border-[0.5px] border-black/10 hover:border-black/25 dark:border-white/10 dark:hover:border-white/20 
            ransition flex-flex-col col-span-4 md:col-span-1 relative [&>div>img]:hover:scale-100 p-5 [&>div>#description]:hover:font-bold cursor-pointer h-full w-full 
            opacity-85 hover:opacity-100 transition"
          >
            <div
              className="absolute top-0 right-0 p-2 text-black dark:text-white hover:text-red-500 dark:hover:text-red-400"
              onClick={() => deleteProduct(product)}
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
              to={`/ProductDetail/${id}`}
              className="md:size-[250px] mx-auto flex items-center justify-center"
              onClick={() => showDetails(product)}
            >
              <img
                src={product.image}
                alt={product.description + "image"}
                className="scale-90 transition"
              />
            </Link>
            <p className="text-black/60 dark:text-white/60 text-base font-semibold">
              {product.brand}
            </p>
            <p className="text-black dark:text-white font-semibold text-lg">
              {product.description}
            </p>
            <div className="flex flex-row justify-between items-center">
              <p className="text-sm font-extrabold text-black dark:text-white">
                ${product.price}.00 mx
              </p>
              <div className="flex flex-row gap-2 items-center justify-center text-base font-bold text-black dark:text-white">
                <button
                  onClick={() => substractProduct(product)}
                  className="bg-black/60 hover:bg-black text-white dark:bg-white/60 dark:hover:bg-white transition dark:text-black
                  rounded-full px-[7px] text-sm"
                >
                  -
                </button>
                <p>{product.quantity}</p>
                <button
                  onClick={() => addProduct(product)}
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
      <div className="flex justify-center items-center flex-col gap-y-4 mt-10">
        {allProducts.length && (
          <button
            className="text-white dark:text-black font-semibold text-base hover:text-black hover:bg-white/20 border-[0.5px]
           dark:hover:text-white dark:hover:bg-black transition  rounded-full px-6 py-2 bg-black dark:bg-white"
            onClick={() => setBuyCart(true)}
          >
            Comprar carrito ahora
          </button>
        )}
      </div>
      {buyCart && (
        <BuyCartModal
          closeBuyCartModal={() => setBuyCart(false)}
          total={total}
        />
      )}
    </>
  );
}
