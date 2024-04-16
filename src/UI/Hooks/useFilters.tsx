import { useContext } from "react";
import { FiltersContext } from "../Context/filtersContext.tsx";
import sunglasses from "../Data/Data.tsx";
import { useNavigate } from "react-router-dom";

export function useFilters() {
  const navigate = useNavigate();
  const { filters, searchTerm, setSearchTerm } = useContext(FiltersContext);
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

  const handleChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    navigate(`/search/${searchTerm}`);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const searchResults = sunglasses.filter(
    (product) =>
      product.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return {
    filterSunGlasses,
    filterVisionGlasses,
    handleChangeSearch,
    searchTerm,
    handleSearch,
    handleKeyDown,
    searchResults,
  };
}
