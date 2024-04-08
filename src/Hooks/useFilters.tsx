import { useContext } from "react";
import { FiltersContext } from "../Context/filtersContext.tsx";
import sunglasses from "../Products/Products.tsx";

export function useFilters() {
  const { filters } = useContext(FiltersContext);
  const filterSunGlasses = sunglasses.filter(
    (product) =>
      product.category === "Sun" &&
      product.price >= filters.minPrice &&
      (filters.genre === "all" || product.genre === filters.genre) &&
      (filters.shape === "all" || product.shape === filters.shape) &&
      (filters.color === "all" || product.color === filters.color)
  );
  const filterVisionGlasses = sunglasses.filter(
    (product) =>
      product.category === "Vision" &&
      product.price >= filters.minPrice &&
      (filters.genre === "all" || product.genre === filters.genre) &&
      (filters.shape === "all" || product.shape === filters.shape) &&
      (filters.color === "all" || product.color === filters.color)
  );
  return { filterSunGlasses, filterVisionGlasses };
}