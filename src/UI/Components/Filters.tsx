import { useState, useContext } from "react";
import { FiltersContext } from "../Context/filtersContext.tsx";
import "./Animations.css";

const Filters = () => {
  const [showColors, setShowColors] = useState(false);
  const [showShapes, setShowShapes] = useState(false);

  const handleChangeShape = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setFilters({ ...filters, shape: event.target.value });
      animateProducts(true);
    } else {
      setFilters({ ...filters, shape: "all" });
      animateProducts(false);
    }
  };

  const animateProducts = (animate: boolean) => {
    const products = document.querySelectorAll("#product-item");
    products.forEach((product) => {
      if (animate) {
        product.classList.add("scale-in-center");
      } else {
        product.classList.remove("scale-in-center");
      }
    });
  };

  const handleChangeColor = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setFilters({ ...filters, color: event.target.value });
      animateProducts(true);
    } else {
      setFilters({ ...filters, color: "all" });
      animateProducts(true);
    }
  };

  const { filters, setFilters } = useContext(FiltersContext);

  const toggleColorMenu = () => {
    setShowColors(!showColors);
    setShowShapes(false);
  };

  if (showColors == true) {
    document.querySelector("#button-color")?.classList.remove("opacity-30");
  } else {
    document.querySelector("#button-color")?.classList.add("opacity-30");
  }

  const toggleShapeMenu = () => {
    setShowShapes(!showShapes);
    setShowColors(false);
  };

  if (showShapes == true) {
    document.querySelector("#button-shape")?.classList.remove("opacity-30");
  } else {
    document.querySelector("#button-shape")?.classList.add("opacity-30");
  }

  return (
    <>
      <div
        className="w-[70%] m-auto flex flex-row gap-4 justify-center items-start gap-x-14
       relative pt-10 mb-5"
      >
        <div className="text-black dark:text-white flex justify-center items-center flex-col">
          <button
            className="text-lg md:text-2xl opacity-30 md:hover:opacity-100"
            id="button-color"
            onClick={toggleColorMenu}
          >
            Color
          </button>
        </div>
        <div className="text-black dark:text-white flex justify-center items-center flex-col">
          <button
            className="text-lg md:text-2xl opacity-30 md:hover:opacity-100"
            id="button-shape"
            onClick={toggleShapeMenu}
          >
            Forma
          </button>
        </div>
      </div>
      <div
        id="menu-color"
        className={`text-black dark:text-white  mx-auto p-2 max-w-fit grid grid-cols-3 md:grid-cols-4 justify-center items-center gap-2 md:gap-5 mb-5 
          ${showColors ? "scale-in-center" : "hidden"}`}
      >
        <label
          htmlFor="black"
          className="flex flex-row items-center gap-x-2 text-xs md:text-sm lg:text-base"
        >
          <input
            type="checkbox"
            id="black"
            value="black"
            onChange={handleChangeColor}
            className="color-option md:size-5 rounded-full active:bg-white"
            style={{ backgroundColor: "black" }}
          />
          <span className="option-text">Negro</span>
        </label>
        <label
          htmlFor="brown"
          className="flex flex-row items-center gap-x-2 text-xs md:text-sm lg:text-base"
        >
          <input
            type="checkbox"
            id="brown"
            value="brown"
            onChange={handleChangeColor}
            className="color-option md:size-5 rounded-full"
            style={{ backgroundColor: "brown" }}
          />
          <span>Marrón</span>
        </label>
        <label
          htmlFor="red"
          className="flex flex-row items-center gap-x-2 text-xs md:text-sm lg:text-base"
        >
          <input
            type="checkbox"
            id="red"
            value="red"
            onChange={handleChangeColor}
            className="color-option md:size-5 rounded-full"
            style={{ backgroundColor: "red" }}
          />
          <span>Rojo</span>
        </label>
        <label
          htmlFor="pink"
          className="flex flex-row items-center gap-x-2 text-xs md:text-sm lg:text-base"
        >
          <input
            type="checkbox"
            id="pink"
            value="pink"
            onChange={handleChangeColor}
            className="color-option md:size-5 rounded-full"
            style={{ backgroundColor: "pink" }}
          />
          <span>Rosa</span>
        </label>
        <label
          htmlFor="gold"
          className="flex flex-row items-center gap-x-2 text-xs md:text-sm lg:text-base"
        >
          <input
            type="checkbox"
            id="gold"
            value="gold"
            onChange={handleChangeColor}
            className="color-option md:size-5 rounded-full"
            style={{ backgroundColor: "gold" }}
          />
          <span>Oro</span>
        </label>
        <label
          htmlFor="tornasol"
          className="flex flex-row items-center gap-x-2 text-xs md:text-sm lg:text-base"
        >
          <input
            type="checkbox"
            id="tornasol"
            value="tornasol"
            onChange={handleChangeColor}
            className="color-option md:size-5 rounded-full"
            style={{ backgroundColor: "lightblue" }}
          />
          <span>Tornasol</span>
        </label>
        <label
          htmlFor="blue"
          className="flex flex-row items-center gap-x-2 text-xs md:text-sm lg:text-base"
        >
          <input
            type="checkbox"
            id="blue"
            value="blue"
            onChange={handleChangeColor}
            className="color-option md:size-5 rounded-full"
            style={{ backgroundColor: "blue" }}
          />
          <span>Azul</span>
        </label>
      </div>
      <div
        id="menu-shape"
        className={`text-black dark:text-white  mx-auto p-2 max-w-fit grid grid-cols-3 md:grid-cols-4 justify-center items-center gap-5 mb-5
          ${showShapes ? "scale-in-center" : "hidden"}`}
      >
        <label
          htmlFor="squared"
          className="flex flex-row items-center gap-x-2 text-xs md:text-sm lg:text-base"
        >
          <input
            type="checkbox"
            id="squared"
            value="squared"
            onChange={handleChangeShape}
            className="shape-option md:size-5 rounded-full"
          />
          <span>Cuadrados</span>
        </label>
        <label
          htmlFor="circle"
          className="flex flex-row items-center gap-x-2 text-xs md:text-sm lg:text-base"
        >
          <input
            type="checkbox"
            id="circle"
            value="circle"
            onChange={handleChangeShape}
            className="shape-option md:size-5 rounded-full"
          />
          <span>Circulares</span>
        </label>
        <label
          htmlFor="aviator"
          className="flex flex-row items-center gap-x-2 text-xs md:text-sm lg:text-base"
        >
          <input
            type="checkbox"
            id="aviator"
            value="aviator"
            onChange={handleChangeShape}
            className="shape-option md:size-5 rounded-full"
          />
          <span>Aviador</span>
        </label>
        <label
          htmlFor="cat-eye"
          className="flex flex-row items-center gap-x-2 text-xs md:text-sm lg:text-base"
        >
          <input
            type="checkbox"
            id="cat-eye"
            value="cat-eye"
            onChange={handleChangeShape}
            className="shape-option md:size-5 rounded-full"

          />
          <span>Cat-eye</span>
        </label>
        <label
          htmlFor="shape"
          className="flex flex-row items-center gap-x-2 text-xs md:text-sm lg:text-base"
        >
          <input
            type="checkbox"
            id="heart"
            value="heart"
            onChange={handleChangeShape}
            className="shape-option md:size-5 rounded-full"
          />
          <label htmlFor="heart">Corazón</label>
        </label>
      </div>
    </>
  );
};
export default Filters;
