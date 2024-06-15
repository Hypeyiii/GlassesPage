import { useContext } from "react";
import { FavContext } from "../Context/favContext";
import { Products } from "../Interface/Products";
export function useFav() {
  const {
    setIsFav,
    allFavProducts,
    setAllFavProducts,
    countFavProducts,
    setCountFavProducts,
    isFav,
  } = useContext(FavContext);

  const addToFav = (product: Products): Products[] => {
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
      setIsFav(true);
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
  };

  const productFav = (id: string): boolean => {
    return allFavProducts.some((product) => product.id === id);
  }

  return {
    addToFav,
    allFavProducts,
    setAllFavProducts,
    countFavProducts,
    setCountFavProducts,
    isFav,
    deleteFavProduct,
    productFav,
  };
}
