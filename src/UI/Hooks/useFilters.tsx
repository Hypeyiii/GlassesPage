import { useContext } from "react";
import { FiltersContext } from "../Context/filtersContext.tsx";
import sunglasses from "../Data/Data.tsx";
import { useNavigate } from "react-router-dom";

export function useFilters() {
  const navigate = useNavigate();
  const {
    searchTerm,
    setSearchTerm,
    showSearchTool,
    setShowSearchTool,
    setFilters,
  } = useContext(FiltersContext);

  const cleanFilters = () => {
    setFilters({
      shape: "all",
      color: "all",
    });
  }

  console.log(showSearchTool);

  const handleChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    setShowSearchTool(false);
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
      product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.genre?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return {
    handleChangeSearch,
    searchTerm,
    handleSearch,
    handleKeyDown,
    searchResults,
    showSearchTool,
    setShowSearchTool,
    cleanFilters,
  };
}
