import { Link } from "react-router-dom";
import { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import {
  ClassicGlasses,
  ModernGlasses,
  SpaceGlasses,
} from "./Carrousel-Containers";

export const Carrousel = () => {
  const container = [<ModernGlasses />, <ClassicGlasses />, <SpaceGlasses />];
  const [index, setIndex] = useState(0);
  const [image, setImage] = useState(container[index]);

  const handlePrevious = () => {
    if (index === 0) {
      setIndex(container.length - 1);
    } else {
      setIndex(index - 1);
    }
    setImage(container[index]);
  };
  const handleNext = () => {
    if (index === container.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
    setImage(container[index]);
  };

  return (
    <div className="w-screen md:w-full flex flex-col gap-4 justify-center items-center relative [&>div>img]:hover:scale-105">
      {image}
      <button
        onClick={handlePrevious}
        className="absolute left-0 top-0 bottom-0 m-auto text-black dark:text-white p-1 bg-white/50 dark:bg-black/50 rounded-full h-fit"
      >
        <FaAngleLeft className="size-6 md:size-8" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-0 top-0 bottom-0 m-auto text-black dark:text-white p-1 bg-white/50 dark:bg-black/50  rounded-full h-fit"
      >
        <FaAngleRight className="size-6 md:size-8" />
      </button>
    </div>
  );
};
export const PromotionImage = () => {
  return (
    <div className="grid grid-cols-4 w-full m-auto h-auto items-center justify-center gap-2 md:gap-4">
      <div className="col-span-2 md:col-span-1 relative bg-cover overflow-hidden rounded-xl border-2 border-black/40 hover:border-black dark:border-white/40 dark:hover:border-white [&>img]:hover:opacity-100">
        <img
          src="https://www.hawkersco.com/on/demandware.static/-/Library-Sites-Hawkers_Co_SharedLibrary/default/dw0fb86936/images/new-home/slider-collections/610X776_BANNER_COLLECTIONS_1_POLARIZED.jpg"
          alt="Promotion"
          className="h-[300px] md:h-[488px] w-full object-cover hover:scale-105 transition-all duration-200 md:opacity-90 md:dark:opacity-70"
        />
        <div className="absolute bottom-0 p-5">
          <Link
            to={"/Sun-Glasses"}
            className="uppercase text-xs md:text-lg border-[1px] py-1 md:py-2 px-2 md:px-4 border-black hover:border-transparent hover:bg-black hover:text-white transition-all duration-300"
          >
            Polarizadas
          </Link>
        </div>
      </div>
      <div className="col-span-2 md:col-span-1 relative bg-cover overflow-hidden rounded-xl border-2 border-black/40 hover:border-black dark:border-white/40 dark:hover:border-white [&>img]:hover:opacity-100">
        <img
          src="https://www.hawkersco.com/on/demandware.static/-/Library-Sites-Hawkers_Co_SharedLibrary/default/dw95c7adb9/images/new-home/slider-collections/610X776_BANNER_COLLECTIONS_2_SUMMER_ESSENTIALS.jpg"
          alt="Promotion"
          className="h-[300px] md:h-[488px] w-full object-cover hover:scale-105 transition-all duration-200 md:opacity-90 md:dark:opacity-70"
        />
        <div className="absolute bottom-0 p-5">
          <Link
            to={"/Sun-Glasses"}
            className="uppercase text-xs md:text-lg border-[1px] py-1 md:py-2 px-2 md:px-4 border-white text-white hover:border-transparent hover:bg-white hover:text-black transition-all duration-300"
          >
            Polarizadas
          </Link>
        </div>
      </div>
      <div className="col-span-2 md:col-span-1 relative bg-cover overflow-hidden rounded-xl border-2 border-black/40 hover:border-black dark:border-white/40 dark:hover:border-white [&>img]:hover:opacity-100">
        <img
          src="https://www.hawkersco.com/on/demandware.static/-/Library-Sites-Hawkers_Co_SharedLibrary/default/dw49dfd034/images/new-home/slider-collections/610X776_BANNER_COLLECTIONS_5_BEST_SELLERS.jpg"
          alt="Promotion"
          className="h-[300px] md:h-[488px] w-full object-cover hover:scale-105 transition-all duration-200 md:opacity-90 md:dark:opacity-70"
        />
        <div className="absolute bottom-0 p-5">
          <Link
            to={"/Sun-Glasses"}
            className="uppercase text-xs md:text-lg border-[1px] py-1 md:py-2 px-2 md:px-4 border-black hover:border-transparent hover:bg-black hover:text-white transition-all duration-300"
          >
            Polarizadas
          </Link>
        </div>
      </div>
      <div className="col-span-2 md:col-span-1 relative bg-cover overflow-hidden rounded-xl border-2 border-black/40 hover:border-black dark:border-white/40 dark:hover:border-white [&>img]:hover:opacity-100">
        <img
          src="https://www.hawkersco.com/on/demandware.static/-/Library-Sites-Hawkers_Co_SharedLibrary/default/dw0fb86936/images/new-home/slider-collections/610X776_BANNER_COLLECTIONS_1_POLARIZED.jpg"
          alt="Promotion"
          className="h-[300px] md:h-[488px] w-full object-cover hover:scale-105 transition-all duration-200 md:opacity-90 md:dark:opacity-70"
        />
        <div className="absolute bottom-0 p-5">
          <Link
            to={"/Sun-Glasses"}
            className="uppercase text-xs md:text-lg border-[1px] py-1 md:py-2 px-2 md:px-4 border-black hover:border-transparent hover:bg-black hover:text-white transition-all duration-300"
          >
            Polarizadas
          </Link>
        </div>
      </div>
    </div>
  );
};

export const PromotionLogin = () => {
  return (
    <div
      className="flex flex-col gap-2 w-full max-h-fit
    items-center justify-center text-black dark:text-white"
    >
      <h1 className="text-base md:text-3xl font-medium text-center text-wrap">
        Únete a la comunidad de Lentes
      </h1>
      <p className="text-xs md:text-base text-center font-bold text-wrap">
        Registrate para acceder en exclusiva a las últimas tendencias, rebajas y
        ofertas especiales
      </p>
      <Link
        to="/My-account"
        className="py-2 px-10 bg-black text-white dark:bg-white dark:text-black text-sm font-normal"
      >
        Regístrate
      </Link>
    </div>
  );
};
export default { PromotionImage, PromotionLogin, Carrousel };
