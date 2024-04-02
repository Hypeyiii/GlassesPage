import { Link } from "react-router-dom";

export const PromotionImage = () => {
  return (
    <div className="grid grid-cols-4 w-[90%] md:w-[70%] m-auto h-auto items-center justify-center gap-2 md:gap-4">
      <div className="col-span-2 md:col-span-1 relative bg-cover overflow-hidden rounded-xl border-2 border-black/40 hover:border-black dark:border-white/40 dark:hover:border-white [&>img]:hover:opacity-100">
        <img
          src="https://www.hawkersco.com/on/demandware.static/-/Library-Sites-Hawkers_Co_SharedLibrary/default/dw0fb86936/images/new-home/slider-collections/610X776_BANNER_COLLECTIONS_1_POLARIZED.jpg"
          alt="Promotion"
          className="h-[300px] md:h-[488px] w-full object-cover hover:scale-105 transition-all duration-200 opacity-80 dark:opacity-50"
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
          className="h-[300px] md:h-[488px] w-full object-cover hover:scale-105 transition-all duration-200 opacity-80 dark:opacity-50"
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
          className="h-[300px] md:h-[488px] w-full object-cover hover:scale-105 transition-all duration-200 opacity-80 dark:opacity-50"
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
          className="h-[300px] md:h-[488px] w-full object-cover hover:scale-105 transition-all duration-200 opacity-80 dark:opacity-50"
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
      className="flex flex-col w-[65%] max-h-fit py-14 border-y-[1px] border-black dark:border-white
    items-center justify-center text-black dark:text-white"
    >
      <h1 className="text-base md:text-xl font-medium text-center text-wrap">
        Únete a la comunidad de Lentes
      </h1>
      <p className="text-sm md:text-base text-center font-bold text-wrap">
        Registrate para acceder en exclusiva a las últimas tendencias, rebajas y
        ofertas especiales
      </p>
      <Link
        to="User"
        className="my-4 py-2 px-10 bg-black text-white dark:bg-white dark:text-black text-sm font-normal"
      >
        Regístrate
      </Link>
    </div>
  );
};
export default { PromotionImage, PromotionLogin };
