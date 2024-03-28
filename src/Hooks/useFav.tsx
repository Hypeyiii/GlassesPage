import { useContext } from "react";
import { FavContext } from "../Context/favContext";

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
}

export function useFav(){
    const {setIsFav, allFavProducts, setAllFavProducts, countFavProducts, setCountFavProducts, isFav} = useContext(FavContext);
    const addToFav = (product: Products): Products[] => {
        setIsFav(true);
        const existingProduct = allFavProducts.find((p) => p.id === product.id);
        if (existingProduct) {
          const newProducts = allFavProducts.map((p) => {
            if (p.id === product.id) {
              return { ...p, quantity: p.quantity + 1 };
            }
            return p;
          });
          setAllFavProducts(newProducts);
          return newProducts;
        } else {
          setCountFavProducts(countFavProducts + 1);
          const newProduct = { ...product, quantity: 1 };
          setAllFavProducts([...allFavProducts, newProduct]);
          return [...allFavProducts, newProduct];
        }
      };

      const deleteFavProduct = (product: Products): Products[] => {
        const newProducts = allFavProducts.filter((p) => p.id !== product.id);
        setAllFavProducts(newProducts);
        setCountFavProducts(countFavProducts - 1);
        return newProducts;
      }
      return {addToFav, allFavProducts, setAllFavProducts, countFavProducts, setCountFavProducts, isFav, deleteFavProduct}
}