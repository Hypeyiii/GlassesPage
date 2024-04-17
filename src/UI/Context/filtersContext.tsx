import { createContext, useState } from "react";

export interface Filters {
  children: React.ReactNode;
}

export const FiltersContext = createContext({
  filters: {
    minPrice: 0,
    genre: "all",
    shape: "all",
    color: "all",
  },
  setFilters: (filters: any) => {
    filters;
  },
  searchTerm: "",
  setSearchTerm: (searchTerm: string) => {
    searchTerm;
  },
  showSearchTool: false,
  setShowSearchTool: (showSearchTool: boolean) => {
    showSearchTool;
  },
});

export function FiltersProvider({ children }: Filters) {
  const [showSearchTool, setShowSearchTool] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filters, setFilters] = useState({
    minPrice: 0,
    genre: "all",
    shape: "all",
    color: "all",
  });
  return (
    <FiltersContext.Provider
      value={{
        filters,
        setFilters,
        searchTerm,
        setSearchTerm,
        showSearchTool,
        setShowSearchTool,
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
}
