import { BiCart, BiMenu, BiSearch, BiUser } from "react-icons/bi";
import { HiHeart } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./Animations.css";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { FaUser, FaUserCheck } from "react-icons/fa";
import { useSetMobile } from "../Hooks/useSetMobile";
import TextAnimated from "../Design-System/TextAnimated";
import { useCart } from "../Hooks/useCart";
import { useFav } from "../Hooks/useFav";
import { useDarkMode } from "../Hooks/useDarkMode";
import { RxCross1 } from "react-icons/rx";
import { useSubmit } from "../Hooks/useSubmit";
import { useFilters } from "../Hooks/useFilters";

const Navbar = () => {
  const [isMenu, setIsMenu] = useState<boolean>(false);
  const { isLogged } = useSubmit();
  const { toggleColorScheme, isDarkModeOn } = useDarkMode();
  const { isMobile } = useSetMobile();
  const { countProducts } = useCart();
  const { countFavProducts } = useFav();
  const { showSearchTool, setShowSearchTool } = useFilters();

  console.log(showSearchTool);

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
      <div className="absolute top-0 w-full z-50 bg-gray-100 dark:bg-black/30 border-b-[1px] border-black/10 dark:border-white/20">
        <div
          className={`w-[80%] md:w-[70%] mx-auto flex flex-row justify-between items-center text-black/80 dark:text-white/80 py-4`}
        >
          {isMobile ? (
            <>
              {isMenu ? (
                <RxCross1 className="size-5" onClick={toggleMenu} />
              ) : (
                <BiMenu className="size-5" onClick={toggleMenu} />
              )}
              <NavLink to={"/"}>
                <TextAnimated text={"Glasses"} fontSize="28px" />
              </NavLink>
              <NavLink
                to={"/Cart"}
                className="hover:font-semibold relative hover:text-black dark:hover:text-white [&>div]:hover:bg-white transition"
              >
                <BiCart className="size-6" />
                <div className="absolute text-xs text-black bg-white/80 rounded-full px-1 right-[-5px] top-[15px]">
                  {countProducts}
                </div>
              </NavLink>
            </>
          ) : (
            <>
              {" "}
              <NavLink to={"/"}>
                <TextAnimated text={"Glasses"} fontSize="32px" />
              </NavLink>
              <div className="relative flex flex-row gap-4 h-full items-center justify-centertransition font-semibold cursor-pointer">
                <NavLink
                  id="nav-collection"
                  to="collection/Sun"
                  className="px-4 py-2 border-b-[1px] border-transparent dark:hover:border-white/20 hover:border-black/20"
                >
                  Lentes de Sol
                </NavLink>
                <NavLink
                  id="nav-collection"
                  to="collection/Vision"
                  className="px-4 py-2 border-b-[1px] border-transparent dark:hover:border-white/20 hover:border-black/20"
                >
                  Lentes de Vista
                </NavLink>
              </div>
              <div className="flex flex-row gap-x-4">
                <li className="hover:font-semibold list-none cursor-pointer hover:text-black dark:hover:text-white transition flex flex-row gap-1">
                  <button
                    className="group relative"
                    onClick={() => setShowSearchTool(!showSearchTool)}
                  >
                    <BiSearch className="size-6" />
                  </button>
                </li>
                <NavLink
                  id="nav-item"
                  to={`My-account`}
                  className="hover:font-semibold hover:text-black transition dark:hover:text-white"
                >
                  {isLogged ? (
                    <FaUserCheck className="size-6 relative" />
                  ) : (
                    <FaUser className="size-6 relative" />
                  )}
                </NavLink>
                <NavLink
                  id="nav-item"
                  to={"/Cart"}
                  className="hover:font-semibold relative hover:text-black dark:hover:text-white transition"
                >
                  <BiCart className="size-6" />
                  <div className="absolute text-xs text-white bg-black dark:text-black dark:bg-white rounded-full px-1 right-[-5px] top-[15px]">
                    {countProducts}
                  </div>
                </NavLink>
                <NavLink
                  id="nav-item"
                  to={"/WishList"}
                  className="hover:font-semibold relative hover:text-black dark:hover:text-white transition"
                >
                  <HiHeart className="size-6" />
                  <div className="absolute text-xs text-white bg-black/80 dark:text-black dark:bg-white/80 rounded-full px-1 right-[-5px] top-[15px]">
                    {countFavProducts}
                  </div>
                </NavLink>
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
      </div>
      <>
        <div
          className={`${
            isMenu ? "visible" : "invisible"
          } fixed inset-0 h-screen w-screen bg-gray-100/60 dark:bg-black/60 z-40`}
          onClick={toggleMenu}
        ></div>
        <div
          className={`${
            isMenu ? "slide-in-left visible" : "slide-out-left invisible"
          } fixed flex flex-col gap-4 w-[55%] h-full text-black dark:text-white justify-start items-start z-40
             bg-gray-100 dark:bg-black p-4 transition-all `}
          onClick={toggleMenu}
        >
          <NavLink to={"/"} className="text-xl font-bold mt-24 mb-5">
            Inicio
          </NavLink>
          <NavLink to={"collection/Sun"} className="font-light text-base">
            Lentes de Sol
          </NavLink>
          <NavLink to={"collection/Vision"} className="font-light text-base">
            Lentes de Vision
          </NavLink>
          <li
            className="flex flex-row gap-x-1 items-center text-xl font-bold mt-5"
            onClick={() => setShowSearchTool(true)}
          >
            <BiSearch className="size-6" />
            <p>Buscar</p>
          </li>
          <NavLink
            to={"/My-Account"}
            className="flex flex-row gap-x-1 items-center text-xl font-bold"
          >
            <BiUser className="size-6" />
            <p>Usuario</p>
          </NavLink>
          <NavLink
            to={"/WishList"}
            className="flex flex-row gap-x-1 items-center text-xl font-bold relative"
          >
            <HiHeart className="size-6" />
            <p>Favoritos</p>
            <div className="absolute text-xs text-black bg-white rounded-full px-1 top-4 left-3">
              {countFavProducts}
            </div>
          </NavLink>
          <li
            className="flex flex-row gap-x-1 items-center text-xl font-bold"
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
    </>
  );
};
export default Navbar;
