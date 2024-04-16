import { createContext, useState } from "react";
import { SiEa } from "react-icons/si";

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
});

export function FiltersProvider({ children }: Filters) {
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
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
}
