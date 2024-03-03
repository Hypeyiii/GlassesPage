import { Link } from "react-router-dom";

export const PromotionImage = () => {
  return (
    <div className="grid grid-cols-12 w-screen items-center justify-center">
      <div className="col-span-3 relative bg-cover overflow-hidden">
        <img
          src="https://www.hawkersco.com/on/demandware.static/-/Library-Sites-Hawkers_Co_SharedLibrary/default/dw0fb86936/images/new-home/slider-collections/610X776_BANNER_COLLECTIONS_1_POLARIZED.jpg"
          alt="Promotion"
          className="h-[488px] w-full object-cover hover:scale-110 transition-all duration-1000"
        />
        <div className="absolute bottom-0 p-5">
          <Link
            to={"/Sun-Glasses"}
            className="uppercase text-lg border-2 py-2 px-4 border-black hover:border-transparent hover:bg-black hover:text-white transition-all duration-300"
          >
            Polarizadas
          </Link>
        </div>
      </div>
      <div className="col-span-3 relative bg-cover overflow-hidden">
        <img
          src="https://www.hawkersco.com/on/demandware.static/-/Library-Sites-Hawkers_Co_SharedLibrary/default/dw95c7adb9/images/new-home/slider-collections/610X776_BANNER_COLLECTIONS_2_SUMMER_ESSENTIALS.jpg"
          alt="Promotion"
          className="h-[488px] w-full object-cover hover:scale-110 transition-all duration-1000"
        />
        <div className="absolute bottom-0 p-5">
          <Link
            to={"/Woman-Sun-Glasses"}
            className="uppercase text-lg border-2 py-2 px-4 border-white text-white hover:border-transparent hover:bg-white hover:text-black transition-all duration-300"
          >
            Polarizadas
          </Link>
        </div>
      </div>
      <div className="col-span-3 relative bg-cover overflow-hidden">
        <img
          src="https://www.hawkersco.com/on/demandware.static/-/Library-Sites-Hawkers_Co_SharedLibrary/default/dw49dfd034/images/new-home/slider-collections/610X776_BANNER_COLLECTIONS_5_BEST_SELLERS.jpg"
          alt="Promotion"
          className="h-[488px] w-full object-cover hover:scale-110 transition-all duration-1000"
        />
        <div className="absolute bottom-0 p-5">
          <Link
            to={"/Sun-Glasses"}
            className="uppercase text-lg border-2 py-2 px-4 border-black hover:border-transparent hover:bg-black hover:text-white transition-all duration-300"
          >
            Polarizadas
          </Link>
        </div>
      </div>
      <div className="col-span-3 relative bg-cover overflow-hidden">
        <img
          src="https://www.hawkersco.com/on/demandware.static/-/Library-Sites-Hawkers_Co_SharedLibrary/default/dw0fb86936/images/new-home/slider-collections/610X776_BANNER_COLLECTIONS_1_POLARIZED.jpg"
          alt="Promotion"
          className="h-[488px] w-full object-cover hover:scale-110 transition-all duration-1000"
        />
        <div className="absolute bottom-0 p-5">
          <Link
            to={"/Sun-Glasses"}
            className="uppercase text-lg border-2 py-2 px-4 border-black hover:border-transparent hover:bg-black hover:text-white transition-all duration-300"
          >
            Polarizadas
          </Link>
        </div>
      </div>
    </div>
  );
};
export const PromotionLoggin = () => {
  return (
    <div
      className="mt-32 flex flex-col w-[65%] max-h-fit py-14 border-y-2 border-black dark:border-white
    items-center justify-center text-black dark:text-white"
    >
      <h1 className="text-base md:text-xl font-medium">
        Únete a la comunidad de Lentes
      </h1>
      <p className="text-sm md:text-base text-center font-bold">
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
export default { PromotionImage, PromotionLoggin };
