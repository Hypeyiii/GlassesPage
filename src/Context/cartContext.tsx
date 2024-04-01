import { createContext, useState } from "react";
import { Products } from "../Interface/Products";

export interface Cart {
  children: React.ReactNode;
}
export const CartContext = createContext({ 
    allProducts: [] as Products[],
    setAllProducts: (value: Products[]) => {value},
    total: 0,
    setTotal: (value: number) => {value},
    countProducts: 0,
    setCountProducts: (value: number) => {value},
    isOnCart: false,
    setIsOnCart: (value: boolean) => {value},  
});

export function CartProvider({ children }: Cart) {
  const [allProducts, setAllProducts] = useState<Products[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [countProducts, setCountProducts] = useState<number>(0);
  const [isOnCart, setIsOnCart] = useState<boolean>(false);
  return(
    <CartContext.Provider
      value={{
        allProducts,
        setAllProducts,
        total,
        setTotal,
        countProducts,
        setCountProducts,
        isOnCart,
        setIsOnCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
