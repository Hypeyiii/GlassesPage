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
  setFilters: (filters: any) => {filters},
});

export function FiltersProvider({ children }: Filters) {
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
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
}
