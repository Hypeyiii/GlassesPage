import { BiCart, BiMenu, BiSearch, BiUser } from "react-icons/bi";
import { HiHeart } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Navbar.css";
import { MdDarkMode, MdLightMode } from "react-icons/md";

export interface NavbarProps {
  countProducts: number;
}

const Navbar: React.FC<NavbarProps> = ({ countProducts }) => {
  const [isSunGlassHover, setIsSunGlassHover] = useState<boolean>(false);
  const [isVisionGlassHover, setIsVisionGlassHover] = useState<boolean>(false);
  const [isDarkModeOn, setIsDarkModeOn] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isMenu, setIsMenu] = useState<boolean>(false);

  const toggleColorScheme = () => {
    document.querySelector("body")?.classList.toggle("dark");
    setIsDarkModeOn(!isDarkModeOn);
  };
  useEffect(() => {
    const prefersDarkMode =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (prefersDarkMode) {
      document.querySelector("body")?.classList.add("dark");
      setIsDarkModeOn(true);
    } else {
      document.querySelector("body")?.classList.remove("dark");
      setIsDarkModeOn(false);
    }
  }, [setIsDarkModeOn]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setIsMobile]);

  const toggleMenu = () => {
    setIsMenu(!isMenu);
    if (isMenu) {
      document.querySelector("body")?.classList.add("overflow-hidden");
    } else {
      document.querySelector("body")?.classList.remove("overflow-hidden");
    }
  };
  return (
    <>
      <div
        className={`${
          isMobile ? "fixed" : "absolute"
        } w-full z-50 flex flex-row h-fit justify-between items-center bg-white/90 dark:bg-black/85 text-black/80 dark:text-white/80 
        border-b-[1px] border-b-black dark:border-b-white p-4 md:p-0 md:px-4 md:h-[65px]`}
      >
        {isMobile ? (
          <>
            <BiMenu className="size-6" onClick={toggleMenu} />
            <Link
              to={"/"}
              className="font-thin inline-flex text-3xl
      animate-background-shine bg-[linear-gradient(110deg,#939393,45%,#1e293b,55%,#939393)] bg-[length:250%_100%] bg-clip-text text-transparent"
            >
              Glasses
            </Link>
            <Link
              to={"/Cart"}
              className="hover:font-semibold relative hover:text-black dark:hover:text-white [&>div]:hover:bg-white transition"
            >
              <BiCart className="size-6" />
              <div className="absolute text-xs text-black bg-white/80 rounded-full px-1 right-[-5px] top-[15px]">
                {countProducts}
              </div>
            </Link>
          </>
        ) : (
          <>
            {" "}
            <Link
              to={"/"}
              className="font-thin inline-flex text-3xl
      animate-background-shine bg-[linear-gradient(110deg,#939393,45%,#1e293b,55%,#939393)] bg-[length:250%_100%] bg-clip-text text-transparent"
            >
              Glasses
            </Link>
            <div className="flex font-light h-full flex-row items-center justify-center">
              <Link
                to={"/"}
                className="flex h-full items-center justify-center hover:bg-black/10 dark:hover:bg-white/30 transition px-4 font-semibold"
              >
                Inicio
              </Link>
              <Link
                className="flex h-full items-center justify-center hover:bg-black/10 dark:hover:bg-white/30 transition px-4 cursor-pointer font-semibold"
                onMouseEnter={() => setIsSunGlassHover(true)}
                onMouseLeave={() => setIsSunGlassHover(false)}
                onClick={() => setIsSunGlassHover(false)}
                to={"/Sun-Glasses"}
              >
                Lentes de Sol
                <div
                  className={`fixed left-0 top-[64px] bg-white dark:bg-black border-y-2 dark:border-y-white border-y-black flex 
            items-center justify-center w-screen mx-auto text-black dark:text-white p-10 transition-all duration-300 ${
              isSunGlassHover ? "fade-in visible" : "invisible fade-out"
            }`}
                  onClick={() => setIsSunGlassHover(false)}
                >
                  <div
                    className={`grid grid-cols-12 mx-auto uppercase w-[70%] gap-5 ${
                      isSunGlassHover ? "slide-in-top" : "slide-out-top"
                    }`}
                  >
                    <div className="col-span-2 flex flex-col gap-4 items-start justify-start">
                      <p className="text-sm font-semibold">Destacado</p>
                      <Link
                        to={"/Sun-Glasses"}
                        className="text-xs font-light hover:underline"
                      >
                        lentes de sol
                      </Link>
                    </div>
                    <div className="col-span-2 flex flex-col gap-4 items-start justify-start">
                      <p className="text-sm font-semibold">Género</p>
                      <Link
                        to={"/Man-Sun-Glasses"}
                        className="text-xs font-light hover:underline"
                      >
                        Hombre
                      </Link>
                      <Link
                        to={"/Woman-Sun-Glasses"}
                        className="text-xs font-light hover:underline"
                      >
                        Mujer
                      </Link>
                    </div>
                    <div className="col-span-2 flex flex-col gap-4 items-start justify-start">
                      <p className="text-sm font-semibold">Forma</p>
                      <Link
                        to={"/Squared-Sun-Glasses"}
                        className="text-xs font-light hover:underline"
                      >
                        Cuadrado
                      </Link>
                      <Link
                        to={"/Circle-Sun-Glasses"}
                        className="text-xs font-light hover:underline"
                      >
                        Circular
                      </Link>
                      <Link
                        to={"/Heart-Sun-Glasses"}
                        className="text-xs font-light hover:underline"
                      >
                        Corazón
                      </Link>
                    </div>
                    <div className="col-span-3 overflow-hidden flex flex-col gap-3 bg-cover items-start justify-start">
                      <img
                        src="https://m.media-amazon.com/images/I/4161HYLkB3L._AC_SY1000_.jpg"
                        alt="glasses"
                        className="transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:shadow-white/20"
                      />
                      <p className="text-xs font-bold">
                        Los mejores lentes para sol
                      </p>
                    </div>
                    <div className="col-span-3 overflow-hidden bg-cover relative flex flex-col gap-3 items-center justify-center">
                      <img
                        src="https://babyin.mx/cdn/shop/products/image_bd46bbab-fc71-4606-9096-1cd242f89f61_1024x1024@2x.jpg?v=1596683809"
                        alt="glasses"
                        className="transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:shadow-white/20"
                      />
                      <p className="text-xs font-bold">
                        Los mejores lentes para sol
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
              <Link
                to={"/Vision-Glasses"}
                className="relative flex h-full items-center justify-center hover:bg-black/10 dark:hover:bg-white/30 transition px-4 font-semibold"
                onMouseEnter={() => setIsVisionGlassHover(true)}
                onMouseLeave={() => setIsVisionGlassHover(false)}
                onClick={() => setIsVisionGlassHover(false)}
              >
                Lentes de Vision
                <div
                  className={`z-50 fade-in fixed left-0 top-[64px] bg-white dark:bg-black border-y-2 dark:border-y-white border-y-black flex items-center justify-center
            w-screen mx-auto text-black dark:text-white p-10 transition-all ${
              isVisionGlassHover ? "visible" : "invisible fade-out"
            }`}
                  onClick={() => setIsVisionGlassHover(false)}
                >
                  <div
                    className={`grid grid-cols-12 mx-auto uppercase w-[70%] gap-5 ${
                      isVisionGlassHover ? "slide-in-top" : "slide-out-top"
                    }`}
                  >
                    <div className="col-span-2 flex flex-col gap-4 items-start justify-start">
                      <p className="text-sm font-semibold">Destacado</p>
                      <p className="text-xs font-light hover:underline">
                        Lentes de aumento
                      </p>
                    </div>
                    <div className="col-span-2 flex flex-col gap-4 items-start justify-start">
                      <p className="text-sm font-semibold">Género</p>
                      <p className="text-xs font-light hover:underline">
                        Hombre
                      </p>
                      <p className="text-xs font-light hover:underline">
                        Mujer
                      </p>
                    </div>
                    <div className="col-span-2 flex flex-col gap-4 items-start justify-start">
                      <p className="text-sm font-semibold">Forma</p>
                      <p className="text-xs font-light hover:underline">
                        Cuadrado
                      </p>
                      <p className="text-xs font-light hover:underline">
                        Circular
                      </p>
                    </div>
                    <div className="col-span-3 flex flex-col gap-3 bg-cover overflow-hidden items-center justify-center">
                      <img
                        src="https://down-mx.img.susercontent.com/file/sg-11134201-23020-94iqsbiidunv61"
                        alt="glasses"
                        className="transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:shadow-black/50"
                      />
                      <p className="text-xs font-bold">
                        Los mejores lentes para la visión
                      </p>
                    </div>
                    <div className="col-span-3 flex flex-col bg-cover overflow-hidden gap-3 items-center justify-center">
                      <img
                        src="https://media.gq.com.mx/photos/605e5ac940c44aa45469e115/4:3/w_2668,h_2001,c_limit/lentes-755650749.jpg"
                        alt="glasses"
                        className="transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:shadow-black/50 h-full"
                      />
                      <p className="text-xs font-bold">
                        Los mejores lentes para la visión
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="flex flex-row gap-x-4">
              <li className="hover:font-semibold list-none cursor-pointer hover:text-black dark:hover:text-white transition">
                <BiSearch className="size-6" />
              </li>
              <Link
                to={"/User"}
                className="hover:font-semibold hover:text-black transition dark:hover:text-white"
              >
                <BiUser className="size-6" />
              </Link>
              <Link
                to={"/Cart"}
                className="hover:font-semibold relative hover:text-black dark:hover:text-white [&>div]:hover:bg-white transition"
              >
                <BiCart className="size-6" />
                <div className="absolute text-xs text-white bg-black/80 dark:text-black dark:bg-white/80 rounded-full px-1 right-[-5px] top-[15px]">
                  {countProducts}
                </div>
              </Link>
              <Link
                to={"/Favs"}
                className="hover:font-semibold relative hover:text-black dark:hover:text-white [&>div]:hover:bg-white transition"
              >
                <HiHeart className="size-6" />
                <div className="absolute text-xs text-white bg-black/80 dark:text-black dark:bg-white/80 rounded-full px-1 right-[-5px] top-[15px]">
                  0
                </div>
              </Link>
              <li
                className="hover:font-semibold list-none cursor-pointer hover:text-black dark:hover:text-white transition"
                onClick={toggleColorScheme}
              >
                {isDarkModeOn ? (
                  <MdDarkMode className="size-6 scale-in-center" />
                ) : (
                  <MdLightMode className="size-6 scale-in-center" />
                )}
              </li>
            </div>
          </>
        )}
      </div>
      {isMobile && isMenu && (
        <>
          <div
            className="fixed top-0 bottom-0 w-screen h-screen bg-white/80 dark:bg-black/95 z-10"
            onClick={toggleMenu}
          ></div>
          <div
            className="slide-in-left fixed flex flex-col w-full h-[70%] text-black dark:text-white justify-between items-center mt-32 z-50"
            onClick={toggleMenu}
          >
            <Link
              to={"/Sun-Glasses"}
              className="font-bold text-base hover:bg-black/10 dark:hover:bg-white/30 transition px-4 cursor-pointer"
            >
              Lentes de Sol
            </Link>
            <Link
              to={"/Vision-Glasses"}
              className="font-bold text-base hover:bg-black/10 dark:hover:bg-white/30 transition px-4"
            >
              Lentes de Vision
            </Link>
            <li
              className="hover:font-semibold list-none cursor-pointer hover:text-black dark:hover:text-white transition
            flex flex-row items-center gap-x-1 text-base font-semibold"
            >
              <BiSearch className="size-6" />
              <p>Buscar</p>
            </li>
            <Link
              to={"/User"}
              className="hover:font-semibold hover:text-black transition dark:hover:text-white flex flex-row items-center gap-x-1 text-base font-semibold"
            >
              <BiUser className="size-6" />
              <p>Usuario</p>
            </Link>
            <Link
              to={"/Favs"}
              className="hover:font-semibold relative hover:text-black dark:hover:text-white [&>div]:hover:bg-white transition
                flex flex-row items-center gap-x-1 text-base font-semibold"
            >
              <HiHeart className="size-6" />
              <p>Favoritos</p>
              <div className="absolute text-xs text-black bg-white/80 rounded-full px-1 right-[70px] top-[15px]">
                0
              </div>
            </Link>
            <li
              className="hover:font-semibold list-none cursor-pointer hover:text-black dark:hover:text-white transition"
              onClick={toggleColorScheme}
            >
              {isDarkModeOn ? (
                <div className="flex flex-row gap-x-1">
                  <MdDarkMode className="size-6 scale-in-center" />{" "}
                  <p>DarkMode</p>
                </div>
              ) : (
                <div className="flex flex-row gap-x-1">
                  <MdLightMode className="size-6 scale-in-center" />
                  <p>LightMode</p>
                </div>
              )}
            </li>
          </div>
        </>
      )}
    </>
  );
};
export default Navbar;
