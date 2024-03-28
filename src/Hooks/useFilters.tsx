import { useContext } from "react";
import { FiltersContext } from "../Context/filtersContext.tsx";
import sunglasses from "../Products/Products-SunGlasses.tsx";

export function useFilters() {
  const { filters } = useContext(FiltersContext);
  const filterSunGlasses = sunglasses.filter(
    (product) =>
      product.category === "Sun-Glasses" &&
      product.price >= filters.minPrice &&
      (filters.genre === "all" || product.genre === filters.genre) &&
      (filters.shape === "all" || product.shape === filters.shape)
  );
  const filterVisionGlasses = sunglasses.filter(
    (product) =>
      product.category === "Vision-Glasses" &&
      product.price >= filters.minPrice &&
      (filters.genre === "all" || product.genre === filters.genre) &&
      (filters.shape === "all" || product.shape === filters.shape)
  );
  return { filterSunGlasses, filterVisionGlasses };
}