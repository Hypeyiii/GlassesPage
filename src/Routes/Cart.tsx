import { BiLeftArrowAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useState } from "react";
import BuyCartModal from "../Modals/BuyCartModal.tsx";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";

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
          <div className="grid grid-cols-4 gap-4 text-black dark:text-white w-[80%] md:w-[70%] m-auto mt-32">
            <div className="col-span-4 flex flex-row items-center justify-between w-full text-xs md:text-base">
              <div>
                <Link to={"/"} className="text-black/60 dark:text-white/60">
                  Inicio /
                </Link>{" "}
                <Link
                  to={`/Cart`}
                  className="text-black dark:text-white"
                >
                  Cart
                </Link>
              </div>
              <div
                className="flex flex-row gap-1 items-center text-xs md:text-base border-b-[0.5px] border-transparent hover:border-black dark:hover:border-white cursor-pointer"
                onClick={backUp}
              >
                <BiLeftArrowAlt className="size-4" />
                <p>Regresar</p>
              </div>
            </div>
            <div className="col-span-4 md:col-span-3 grid grid-cols-4 h-fit w-full">
              <div className="col-span-4 grid grid-cols-4 mb-5 font-bold text-xs md:text-base">
                <div className="col-span-1 grid justify-center">Product</div>
                <div className="col-span-1 grid justify-center">Name</div>
                <div className="col-span-1 grid justify-center">Quantity</div>
                <div className="col-span-1 grid justify-center">Price</div>
              </div>
              {allProducts.map((product) => (
                <>
                  <div className="col-span-4 grid grid-cols-4 justify-center items-center border-t-[0.5px] border-black/10 dark:border-white/20 py-3 relative">
                    <div
                      key={product.id}
                      className="col-span-1 flex flex-row justify-center items-center border-r border-black/10 dark:border-white/10 w-full h-auto"
                    >
                      <div className="w-full bg-cover flex flex-row justify-center items-center">
                        <Link
                          to={`/ProductDetail/${product.id}`}
                          className="w-[60px] md:w-[100px] h-[40px] md:h-[80px] m-auto"
                        >
                          <img
                            src={product.image}
                            alt={product.description}
                            className="cursor-pointer"
                            onClick={() => showDetails(product as Products)}
                          />
                        </Link>
                        <div className="absolute right-0 flex justify-center itesm-center">
                          <RxCross1
                            className="text-black dark:text-white cursor-pointer size-4"
                            onClick={() => deleteProduct(product)}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-span-1 text-center text-xs md:text-base">
                      {product.brand}
                    </div>
                    <div
                      className="col-span-1 flex flex-row gap-1 md:gap-3 justify-center items-center py-1 px-2 md:p-2 md:w-[75px] m-auto border-[0.5px] border-black dark:border-white 
                    text-xs md:text-base"
                    >
                      {product.quantity}
                      <div className="flex flex-col">
                        <FaAngleUp
                          className="cursor-pointer"
                          onClick={() => addProduct(product)}
                        />
                        <FaAngleDown
                          className="cursor-pointer"
                          onClick={() => substractProduct(product)}
                        />
                      </div>
                    </div>
                    <div className="col-span-1 text-center text-xs md:text-base">
                      ${product.price}.00
                    </div>
                  </div>
                </>
              ))}
            </div>
            <div className="col-span-4 md:col-span-1 flex flex-col justify-center gap-4 text-black dark:text-white w-60 m-auto md:mt-10 md:mr-10 md:ml-auto">
              <div className="border-[1px] rounded-md border-black dark:border-white/50 p-4">
                <p className="flex justify-center border-b border-white/10 py-1 font-bold text-sm md:text-lg">
                  Total de la orden
                </p>
                <div className="flex flex-col text-xs md:text-base">
                  <div className="flex flex-row justify-between py-3 items-center border-b-[0.5px] border-black/30 dark:border-white/30">
                    <p className="font-bold">Subotal:</p>
                    <p>${total}.00</p>
                  </div>
                  <div className="flex flex-row justify-between py-3 items-center border-b-[0.5px] border-black/30 dark:border-white/30">
                    <p className="font-bold">Shipping:</p>
                    <p>{0}</p>
                  </div>
                  <div className="flex flex-row justify-between py-3 items-center border-b-[0.5px] border-black/30 dark:border-white/30">
                    <p className="font-bold">Total:</p>
                    <p>${total}.00</p>
                  </div>
                </div>
              </div>
              <button
                className="py-2 px-5 border-[0.5px] border-black dark:border-white/50 hover:bg-black hover:text-white
               dark:hover:bg-white dark:hover:text-black transition text-xs md:text-base"
                onClick={() => setBuyCart(true)}
              >
                Proceder a pagar
              </button>
              <Link
                to={"/"}
                className="py-2 px-5 border-[0.5px] border-black dark:border-white/50 hover:bg-black hover:text-white
               dark:hover:bg-white dark:hover:text-black transition flex justify-center text-xs md:text-base"
                onClick={() => setBuyCart(true)}
              >
                Seguir comprando
              </Link>
            </div>
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center w-full h-full">
          <h1 className="text-xl font-bold text-black dark:text-white mx-auto text-center">
            Tu carrito está vacío :(
          </h1>
          <Link
            to={"/"}
            className="py-2 px-5 border-[0.5px] border-black dark:border-white hover:bg-black hover:text-white
            dark:hover:bg-white dark:hover:text-black dark:text-white transition flex justify-center mt-6 uppercase font-bold"
          >
            Seguir comprando
          </Link>
        </div>
      )}
      {buyCart && (
        <BuyCartModal
          closeBuyCartModal={() => setBuyCart(false)}
          total={total}
        />
      )}
    </>
  );
};
export default Cart;
