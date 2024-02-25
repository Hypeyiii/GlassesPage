import { useState, useEffect } from "react";
import { BsHeartFill } from "react-icons/bs";
import "./ProductItem.css";
import NotificationAdded from "../Components/NotificationAdded.tsx";
import { Link } from "react-router-dom";

export interface ProductItemProps {
  brand: string;
  price: number;
  image: string;
  description: string;
  addedToCart: () => void;
  id: number;
  showDetails: () => void;
}

const ProductItem: React.FC<ProductItemProps> = ({
  brand,
  price,
  image,
  description,
  addedToCart,
  id,
  showDetails,
}) => {
  const [isHover, setIsHover] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const [isAddedToFavs, setIsAddedToFavs] = useState(false);
  const [isFav, setIsFav] = useState(false);

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

  const addedToFav = () => {
    setIsAddedToFavs(!isAddedToFavs);
    setIsFav(!isFav);
  };

  const handleHover = () => {
    setIsHover(!isHover);
  };

  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
      setIsHover(true);
    } else {
      setIsMobile(false);
      setIsHover(false);
    }
  }, [isMobile]);

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
        className="text-white bg-[#f6f6f6] dark:bg-black/80 rounded-sm hover:shadow-2xl dark:hover:shadow-lg hover:shadow-black/40 dark:hover:shadow-white/5 border-[0.5px]
     border-black/10 hover:border-black/25 dark:border-white/10 dark:hover:border-white/20 transition flex-flex-col col-span-1 relative [&>div>img]:hover:scale-100 p-5 [&>div>#description]:hover:font-bold cursor-pointer h-fit w-full 
      opacity-85 hover:opacity-100"
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
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
        <div
          className="relative col-span-5 md:col-span-3 m-auto flex flex-col justify-center items-center gap-y-10 md:size-[300px]"
          onClick={showDetails}
        >
          <Link to={`/ProductDetail/${id}`}>
            <img
              src={image}
              alt={brand + " image"}
              className="transition scale-90"
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

      {isAdded && (
        <NotificationAdded
          isAdded={isAdded}
          addedText={"Añadido al carrito correctamente"}
        />
      )}

      {isFav && (
        <NotificationAdded
          isAdded={isAddedToFavs}
          addedText={"Añadido a favoritos correctamente"}
        />
      )}
    </>
  );
};
export default ProductItem;
