import { useContext, useEffect } from "react";
import { CartContext } from "../Context/cartContext";
import { Products } from "../Interface/Products";

export function useCart() {
  const {
    allProducts,
    setAllProducts,
    total,
    setTotal,
    countProducts,
    setCountProducts,
    setIsOnCart,
    isOnCart,
    setShowCartPreview,
    showCartPreview,
  } = useContext(CartContext);

  const getAllStorageProducts = (): Products[] => {
    try {
      const storedProducts = localStorage.getItem("cart");
      if (storedProducts) {
        return JSON.parse(storedProducts);
      } else {
        return [];
      }
    } catch (error) {
      console.error("Error retrieving products from localStorage:", error);
      return [];
    }
  };

  useEffect(() => {
    const storedProducts = getAllStorageProducts();
    setAllProducts(storedProducts);
    
    // Calculate countProducts from updated allProducts
    const totalCount = storedProducts.reduce((acc, curr) => acc + curr.quantity, 0);
    setCountProducts(totalCount);

    // Calculate total price from updated allProducts if needed
    // const totalPrice = storedProducts.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);
    // setTotal(totalPrice);

  }, [setAllProducts, setCountProducts]);

  const updateLocalStorage = (products: Products[]): void => {
    localStorage.setItem("cart", JSON.stringify(products));
  };

  const calculateTotals = (products: Products[]): { total: number; count: number } => {
    let totalPrice = 0;
    let totalCount = 0;

    products.forEach((p) => {
      totalPrice += p.price * p.quantity;
      totalCount += p.quantity;
    });

    return { total: totalPrice, count: totalCount };
  };

  const addToCart = (product: Products): void => {
    setShowCartPreview(true);
    setIsOnCart(true);

    const updatedProducts = [...allProducts];
    const existingProductIndex = updatedProducts.findIndex((p) => p.id === product.id);

    if (existingProductIndex !== -1) {
      // Product already exists in cart, update quantity
      updatedProducts[existingProductIndex].quantity++;
    } else {
      // Product is new in cart, add it
      updatedProducts.push({ ...product, quantity: 1 });
    }

    setAllProducts(updatedProducts);
    const { total: updatedTotal } = calculateTotals(updatedProducts);
    setTotal(updatedTotal);
    setCountProducts(countProducts + 1); // Increment countProducts by 1

    updateLocalStorage(updatedProducts);
  };

  const deleteProduct = (product: Products): void => {
    const updatedProducts = allProducts.filter((p) => p.id !== product.id);
    setAllProducts(updatedProducts);
    const { total: updatedTotal } = calculateTotals(updatedProducts);
    setTotal(updatedTotal);
    setCountProducts(countProducts - product.quantity); // Decrement countProducts by product quantity

    updateLocalStorage(updatedProducts);
  };

  const addProduct = (product: Products): void => {
    const updatedProducts = allProducts.map((p) => {
      if (p.id === product.id) {
        return { ...p, quantity: p.quantity + 1 };
      }
      return p;
    });

    setAllProducts(updatedProducts);
    const { total: updatedTotal } = calculateTotals(updatedProducts);
    setTotal(updatedTotal);
    setCountProducts(countProducts + 1); // Increment countProducts by 1

    updateLocalStorage(updatedProducts);
  };

  const substractProduct = (product: Products): void => {
    const updatedProducts = allProducts.map((p) => {
      if (p.id === product.id && p.quantity > 1) {
        return { ...p, quantity: p.quantity - 1 };
      }
      return p;
    });

    setAllProducts(updatedProducts);
    const { total: updatedTotal } = calculateTotals(updatedProducts);
    setTotal(updatedTotal);
    setCountProducts(countProducts - 1); // Decrement countProducts by 1

    updateLocalStorage(updatedProducts);
  };

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (isOnCart) {
      timeout = setTimeout(() => {
        setIsOnCart(false);
      }, 5000);
    }
    return () => clearTimeout(timeout);
  }, [isOnCart, setIsOnCart]);

  return {
    allProducts,
    total,
    countProducts,
    addToCart,
    deleteProduct,
    addProduct,
    substractProduct,
    showCartPreview,
    setShowCartPreview,
  };
}
