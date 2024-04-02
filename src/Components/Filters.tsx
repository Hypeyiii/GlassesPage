import { useState, useContext } from "react";
import { FiltersContext } from "../Context/filtersContext.tsx";
import './Animations.css'

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
    products.forEach(product => {
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
        className="mt-20 md:mt-32 text-white w-[70%] m-auto flex flex-row gap-4 justify-center items-start gap-x-14
       relative pt-10 mb-5 border-t-[1px] border-black/20 dark:border-white/20"
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
          htmlFor="color"
          className="flex flex-row  gap-x-2 text-xs md:text-sm lg:text-base"
        >
          <input
            type="checkbox"
            id="color-black"
            value="black"
            onChange={handleChangeColor}
            className="size-3 md:size-5 rounded-full active:bg-white"
            style={{ backgroundColor: "black" }}
          />
          <span>Negro</span>
        </label>
        <label
          htmlFor="color"
          className="flex flex-row  gap-x-2 text-xs md:text-sm lg:text-base"
        >
          <input
            type="checkbox"
            id="color-brown"
            value="brown"
            onChange={handleChangeColor}
            className="size-3 md:size-5 rounded-full"
            style={{ backgroundColor: "brown" }}
          />
          <span>Marrón</span>
        </label>
        <label
          htmlFor="color"
          className="flex flex-row  gap-x-2 text-xs md:text-sm lg:text-base"
        >
          <input
            type="checkbox"
            id="color-red"
            value="red"
            onChange={handleChangeColor}
            className="size-3 md:size-5 rounded-full"
            style={{ backgroundColor: "red" }}
          />
          <span>Rojo</span>
        </label>
        <label
          htmlFor="color"
          className="flex flex-row  gap-x-2 text-xs md:text-sm lg:text-base"
        >
          <input
            type="checkbox"
            id="color-pink"
            value="pink"
            onChange={handleChangeColor}
            className="size-3 md:size-5 rounded-full"
            style={{ backgroundColor: "pink" }}
          />
          <span>Rosa</span>
        </label>
        <label
          htmlFor="color"
          className="flex flex-row  gap-x-2 text-xs md:text-sm lg:text-base"
        >
          <input
            type="checkbox"
            id="color-gold"
            value="gold"
            onChange={handleChangeColor}
            className="size-3 md:size-5 rounded-full"
            style={{ backgroundColor: "gold" }}
          />
          <span>Oro</span>
        </label>
        <label
          htmlFor="color"
          className="flex flex-row  gap-x-2 text-xs md:text-sm lg:text-base"
        >
          <input
            type="checkbox"
            id="color-tornasol"
            value="tornasol"
            onChange={handleChangeColor}
            className="size-3 md:size-5 rounded-full"
            style={{ backgroundColor: "tornasol" }}
          />
          <span>Tornasol</span>
        </label>
        <label
          htmlFor="color"
          className="flex flex-row  gap-x-2 text-xs md:text-sm lg:text-base"
        >
          <input
            type="checkbox"
            id="color-blue"
            value="blue"
            onChange={handleChangeColor}
            className="size-3 md:size-5 rounded-full"
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
              htmlFor="shape"
              className="flex flex-row  gap-x-2 text-xs md:text-sm lg:text-base"
            >
              <input
                type="checkbox"
                id="shape-square"
                value="squared"
                onChange={handleChangeShape}
                className="size-3 md:size-5 rounded-full"
                style={{ backgroundColor: "black" }}
              />
              <span>Cuadrados</span>
            </label>
            <label
              htmlFor="shape"
              className="flex flex-row  gap-x-2 text-xs md:text-sm lg:text-base"
            >
              <input
                type="checkbox"
                id="shape-round"
                value="circle"
                onChange={handleChangeShape}
                className="size-3 md:size-5 rounded-full"
                style={{ backgroundColor: "brown" }}
              />
              <span>Circulares</span>
            </label>
            <label
              htmlFor="shape"
              className="flex flex-row  gap-x-2 text-xs md:text-sm lg:text-base"
            >
              <input
                type="checkbox"
                id="shape-aviator"
                value="aviator"
                onChange={handleChangeShape}
                className="size-3 md:size-5 rounded-full"
                style={{ backgroundColor: "red" }}
              />
              <span>Aviador</span>
            </label>
            <label
              htmlFor="shape"
              className="flex flex-row  gap-x-2 text-xs md:text-sm lg:text-base"
            >
              <input
                type="checkbox"
                id="shape-cat-eye"
                value="cat-eye"
                onChange={handleChangeShape}
                className="size-3 md:size-5 rounded-full"
                style={{ backgroundColor: "pink" }}
              />
              <span>Cat-eye</span>
            </label>
            <label
              htmlFor="shape"
              className="flex flex-row  gap-x-2 text-xs md:text-sm lg:text-base"
            >
              <input
                type="checkbox"
                id="shape-heart"
                value="heart"
                onChange={handleChangeShape}
                className="size-3 md:size-5 rounded-full"
                style={{ backgroundColor: "gold" }}
              />
              <span>Corazón</span>
            </label>
          </div>
    </>
  );
};
export default Filters;
