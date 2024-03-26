import { BiCart, BiMenu, BiSearch, BiUser } from "react-icons/bi";
import { HiHeart } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Navbar.css";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa";

export interface NavbarProps {
  countProducts: number;
}

const Navbar: React.FC<NavbarProps> = ({ countProducts }) => {
  const [collection, setCollection] = useState<boolean>(false);
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
          isMobile ? "absolute" : "absolute"
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
            <div
              className="relative flex flex-row gap-x-2 h-full items-center justify-center hover:bg-black/10 dark:hover:bg-white/30 transition px-4 font-semibold cursor-pointer"
              onClick={() => setCollection(!collection)}
            >
              Colecciones
              <FaAngleDown className="size-4"/>
              {collection && (
                <div className="absolute top-[65px]  bg-white dark:bg-black border-[1px] border-black dark:border-white rounded-md z-50 text-wrap w-[150px] ">
                  <div className="flex flex-col text-xs md:text-sm">
                    <Link
                      to="/Sun-Glasses"
                      className="dark:hover:bg-white dark:hover:text-black hover:bg-black hover:text-white px-4 py-2 rounded-t-md"
                    >
                      Lentes de Sol
                    </Link>
                    <Link
                      to="/Vision-Glasses"
                      className="dark:hover:bg-white dark:hover:text-black hover:bg-black hover:text-white px-4 py-2 rounded-b-md"
                    >
                      Lentes de Vista
                    </Link>
                  </div>
                </div>
              )}
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
