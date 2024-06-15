import { useContext } from "react";
import { FiltersContext } from "../Context/filtersContext.tsx";
import { useNavigate } from "react-router-dom";
import useProducts from "./useProducts.tsx";

export function useFilters() {
  const { products } = useProducts();

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

  const searchResults = products.filter(
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
