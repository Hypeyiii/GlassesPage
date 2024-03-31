import { useState, useEffect } from "react";
import { BsHeartFill } from "react-icons/bs";
import "./Animations.css";
import NotificationAdded from "../Components/NotificationAdded.tsx";
import { Link } from "react-router-dom";
import { useSetMobile } from "../Hooks/useSetMobile.tsx";
import TextAnimated from "./TextAnimated.tsx";

export interface ProductItemProps {
  brand: string;
  price: number;
  image: string;
  description: string;
  stock: number;
  addedToCart: () => void;
  id: number;
  showDetails: () => void;
  addedToFav: () => void;
  isFav: boolean;
}

const ProductItem: React.FC<ProductItemProps> = ({
  brand,
  price,
  image,
  description,
  stock,
  addedToCart,
  id,
  showDetails,
  addedToFav,
  isFav,
}) => {
  const [isHover, setIsHover] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const [isAddedToFavs, setIsAddedToFavs] = useState(false);
  const { isMobile } = useSetMobile();

  useEffect(() => {
    if (isMobile) {
      setIsHover(true);
    } else {
      setIsHover(false);
    }
  }, [isMobile]);

  const added = () => {
    setIsAdded(true);
  };
  useEffect(() => {
    let timeout: number;
    if (isAdded) {
      timeout = setTimeout(() => {
        setIsAdded(false);
      }, 3000);
    }
    return () => clearTimeout(timeout);
  }, [isAdded]);

  useEffect(() => {
    let time: number;
    if (isAddedToFavs) {
      time = setTimeout(() => {
        setIsAddedToFavs(false);
      }, 3000);
    }
    return () => clearTimeout(time);
  }, [isAddedToFavs]);

  return (
    <>
      <div
        className="flex flex-col gap-y-4 relative"
        onMouseEnter={stock === 0 ? () => setIsHover(false) : () => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <div
          id="product-item"
          className={`text-white bg-[#f6f6f6] dark:bg-[#020202] rounded-sm ${stock === 0 ? "opacity-30" : "hover:shadow-xl dark:hover:shadow-md hover:shadow-black/40 dark:hover:shadow-white/5 border-[0.5px] border-black/10 hover:border-black/25 dark:border-white/10 dark:hover:border-white/20 opacity-85 hover:opacity-100"} 
          transition flex flex-col col-span-1 relative [&>div>img]:hover:scale-100 p-5 [&>div>#description]:hover:font-bold cursor-pointer h-fit w-full `}
        >
          <div className="absolute top-0 flex w-full justify-center">
            <div
              className="left-0 h-[1px] animate-border-width rounded-full bg-gradient-to-r from-[rgba(245,245,245,0)] to-[rgba(245,245,245,0)  
             dark:from-[rgba(17,17,17,0)] via-neutral-800 dark:via-white dark:to-[rgba(17,17,17,0)] transition-all duration-1000"
            />
          </div>
          <div
            id="hover"
            className={`absolute top-0 right-0 p-3 transition-all duration-500 ${
              isHover ? "fade-in visible" : "fade-out invisible"
            }`}
            onClick={addedToFav}
          >
            <BsHeartFill
              className={`size-4 ${
                isFav
                  ? "text-black dark:text-white"
                  : "text-black/60 dark:text-white/60"
              }`}
            />
          </div>
          <div className="relative col-span-5 md:col-span-3 m-auto flex flex-col justify-center items-center gap-y-1 size-[150px] md:size-[250px]">
            <Link to={`/ProductDetail/${id}`}>
              <img
                src={image}
                alt={brand + " image"}
                className="transition"
                onClick={showDetails}
              />
            </Link>
            {
              <div
                className={`absolute bottom-0 border-[0.5px] border-black/60 dark:border-white/60 py-1 px-2 hover:bg-black
               dark:hover:bg-white text-black/70 dark:text-white/80 hover:text-white dark:hover:text-black font-semibold text-xs mb-5 transition-all duration-500 ${
                 isHover ? "fade-in visible" : "fade-out invisible"
               }`}
                onClick={addedToCart}
              >
                {isAdded ? (
                  <p onClick={added}>Añadido al carrito</p>
                ) : (
                  <p onClick={added}>Añadir al carrito</p>
                )}
              </div>
            }
          </div>
          <div className="col-span-5 md:col-span-2 flex flex-col items-start justify-start gap-y-4 ">
            <p className=" text-black dark:text-white font-bold text-lg">
              {brand}
            </p>
            <p
              id="description"
              className="text-black/60 dark:text-white/60 text-sm font-semibold transition"
            >
              {description}
            </p>
            <p className="font-extrabold text-black dark:text-white text-sm">
              ${price}.00 mx
            </p>
          </div>
        </div>
        {stock === 0 ? (
          <div className="text-white dark:text-white absolute inset-0 m-auto flex justify-center items-center text-center text-wrap">
            <TextAnimated text={"Agotado por el momento"}/>
          </div>
        ) : (
          ""
        )}
      </div>

      <NotificationAdded
        isAdded={isAdded}
        addedText={"Añadido al carrito correctamente"}
      />

      <NotificationAdded
        isAdded={isAddedToFavs}
        addedText={"Añadido a favoritos correctamente"}
      />
    </>
  );
};
export default ProductItem;
