import { Link } from "react-router-dom";
import { useCart } from "../Hooks/useCart";
import { RxCross1 } from "react-icons/rx";
import { Products } from "../Interface/Products";
import "./Animations.css";

const CartPreview = () => {
  const { allProducts, deleteProduct, showCartPreview, setShowCartPreview } =
    useCart();
  return (
    <div
      className={`absolute inset-0 w-full h-full z-50 flex justify-end transition-all ${
        showCartPreview ? "visible" : "invisible"
      }`}
      onClick={() => setShowCartPreview(false)}
    >
      <div
        className={`fixed flex flex-col h-full w-[70%] md:w-[30%] bg-white dark:bg-black border-l-[1px] border-black/50 dark:border-white/50
        text-black dark:text-white px-4 py-20 overflow-y-auto transition-all ${
          showCartPreview
            ? "slide-in-right visible"
            : "slide-out-right invisible"
        }`}
      >
        <div className="absolute top-0 right-0 p-3">
          <RxCross1
            className="size-6 cursor-pointer"
            onClick={() => setShowCartPreview(false)}
          />
        </div>
        <p className="text-2xl font-extrabold">Your Cart</p>
        {allProducts.map((product) => (
          <div
            key={product.id}
            className="grid grid-cols-6 w-full py-4 border-b border-black/50 dark:border-white/50 gap-5"
          >
            <Link
              to={`/product/${product.id}`}
              className="col-span-2 size-[70px] md:size-[150px] flex items-center justify-center"
            >
              <img
                src={product.image}
                alt={`Imagen del producto ${product.brand}`}
                className="cursor-pointer"
              />
            </Link>
            <div className="col-span-3 flex flex-col justify-between items-start">
              <div className="flex flex-col gap-1">
                <p className="text-sm md:text-base font-bold">{product.brand}</p>
                <p className="text-xs md:text-sm font-light">{product.category}</p>
              </div>
              <p className="text-[10px] md:text-xs font-light">Cantidad: {product.quantity}</p>
            </div>
            <div className="col-span-1 relative flex justify-end items-end">
              <div onClick={() => deleteProduct(product as Products)}>
                <RxCross1 className="absolute top-0 right-0 cursor-pointer" />
              </div>
              <p className="text-[9px] md:text-sm font-bold">${product.price}.00</p>
            </div>
          </div>
        ))}
      </div>
      <div
        className={`fixed bottom-0 w-[70%] md:w-[30%] h-[10%] flex justify-center items-center bg-white dark:bg-black border-l-[1px] border-black/50 dark:border-white/50 p-4 ${showCartPreview
        ? "slide-in-right visible"
        : "slide-out-right invisible"
    }`}
      >
        <Link
          to={"Cart"}
          className="text-sm md:text-base flex justify-center items-center w-full py-2 md:py-4 bg-black dark:bg-white text-white dark:text-black hover:opacity-80 transition"
        >
          Ver carrito
        </Link>
      </div>
    </div>
  );
};
export default CartPreview;