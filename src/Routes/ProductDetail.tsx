import { BsArrowLeft } from "react-icons/bs";
import NotificationAdded from "../Components/NotificationAdded.tsx";
import { AiFillHeart } from "react-icons/ai";

interface ProductDetailProps {
  description: string;
  image: string;
  brand: string;
  price: number;
  addToCart: () => void;
  isAdded: boolean;
}

const ProductDetail: React.FC<ProductDetailProps> = ({
  description,
  image,
  brand,
  price,
  addToCart,
  isAdded,
}) => {
  const backUp = () => {
    window.history.back();
  };
  return (
    <>
      <div className="grid grid-cols-4 items-center justify-center mt-32 w-[95%] mx-auto relative">
        <div
          className="absolute top-0 left-0 p-3 text-black dark:text-white flex flex-row gap-2 items-center justify-center text-base cursor-pointer transition
      font-semibold hover:underline"
          onClick={backUp}
        >
          <BsArrowLeft />
          <p>{brand}</p>
        </div>
        <div className="size-[400px] md:size-[700px] flex mx-auto items-center justify-center col-span-4 md:col-span-3 cursor-zoom-in">
          <img src={image} alt="" />
        </div>
        <div className="text-black dark:text-white flex flex-col gap-4 items-start justify-start col-span-4 md:col-span-1">
          <div className="flex flex-row justify-between items-center w-full list-none">
            <span className="uppercase text-white dark:text-black py-1 px-4 bg-black dark:bg-white rounded-full font-semibold text-xs">
              Solo en línea
            </span>
            <li>
              <AiFillHeart className="size-6 text-black dark:text-white" />
            </li>
          </div>
          <p className="font-bold text-base md:text-xl ">{brand}</p>
          <p className="font-light text-base underline">{description}</p>
          <p className="font-light text-xl">${price}.00 mx</p>
          <div className="flex gap-4">
            <button
              className="bg-black/60 hover:bg-black transition dark:bg-white/80 dark:hover:bg-white text-white dark:text-black text-xs 
              font-medium py-2 px-6 rounded-full"
              onClick={addToCart}
            >
              Añadir al carrito
            </button>
          </div>
        </div>
      </div>
      {isAdded && (
        <NotificationAdded
          isAdded={isAdded}
          addedText={"Añadido al carrito correctamente"}
        />
      )}
    </>
  );
};
export default ProductDetail;
