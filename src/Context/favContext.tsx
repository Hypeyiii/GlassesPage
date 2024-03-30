import React, { createContext, useState } from "react";

interface Products {
  id: number;
  brand: string;
  price: number;
  image: string;
  description: string;
  quantity: number;
  total: number;
  countProducts: number;
  category: string;
  genre: string;
  shape: string;
  color: string;
  stock: number;
}

interface Fav {
  children: React.ReactNode;
}

export const FavContext = createContext({
  allFavProducts: [] as Products[],
  setAllFavProducts: (value: Products[]) => {
    value;
  },
  countFavProducts: 0,
  setCountFavProducts: (value: number) => {
    value;
  },
  isFav: false,
  setIsFav: (value: boolean) => {
    value;
  },
});

export function FavProvider({ children }: Fav) {
  const [allFavProducts, setAllFavProducts] = useState<Products[]>([]);
  const [countFavProducts, setCountFavProducts] = useState<number>(0);
  const [isFav, setIsFav] = useState<boolean>(false);
  return (
    <FavContext.Provider
      value={{
        allFavProducts,
        setAllFavProducts,
        countFavProducts,
        setCountFavProducts,
        isFav,
        setIsFav,
      }}
    >
      {children}
    </FavContext.Provider>
  );
}
