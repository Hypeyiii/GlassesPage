import "./App.css";
import { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import VisionGlasses from "./Routes/Glasses-Vision";
import SunGlasses from "./Routes/Glasses-Sun";
import HomePage from "./Routes/HomePage";
import ErrorPage from "./Routes/ErrorPage";
import Cart from "./Routes/Cart";
import Wishlist from "./Routes/WishList";
import ProductDetail from "./Routes/ProductDetail";
import Loggin from "./Routes/Loggin";

export interface Products {
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
function App() {
  const [allProducts, setAllProducts] = useState<Products[]>([]);
  const [allFavProducts, setAllFavProducts] = useState<Products[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [countProducts, setCountProducts] = useState<number>(0);
  const [countFavProducts, setCountFavProducts] = useState<number>(0);
  const [isOnCart, setIsOnCart] = useState<boolean>(false);
  const [isFav, setIsFav] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<Products | null>(null);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const addToCart = (product: Products): Products[] => {
    setIsOnCart(true);
    const existingProduct = allProducts.find((p) => p.id === product.id);
    if (existingProduct) {
      const newProducts = allProducts.map((p) => {
        if (p.id === product.id) {
          return { ...p, quantity: p.quantity + 1 };
        }
        return p;
      });
      setCountProducts(countProducts + 1);
      setTotal(total + product.price);
      setAllProducts(newProducts);
      return newProducts;
    } else {
      setCountProducts(countProducts + 1);
      setTotal(total + product.price);
      const newProduct = { ...product, quantity: 1 };
      setAllProducts([...allProducts, newProduct]);
      return [...allProducts, newProduct];
    }
  };

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
      setTotal(total + product.price);
      setAllFavProducts(newProducts);
      return newProducts;
    } else {
      setCountFavProducts(countFavProducts + 1);
      setTotal(total + product.price);
      const newProduct = { ...product, quantity: 1 };
      setAllFavProducts([...allFavProducts, newProduct]);
      return [...allFavProducts, newProduct];
    }
  }

  const deleteProduct = (product: Products): Products[] => {
    const newProducts = allProducts.filter((p) => p.id !== product.id);
    setTotal(total - product.price);
    setCountProducts(countProducts - product.quantity);
    setAllProducts(newProducts);
    return newProducts;
  };

  const addProduct = (product: Products): Products[] => {
    const newProducts = allProducts.map((p) => {
      if (p.id === product.id) {
        return { ...p, quantity: p.quantity + 1 };
      }
      return p;
    });
    setCountProducts(countProducts + 1);
    setTotal(total + product.price);
    setAllProducts(newProducts);
    return newProducts;
  };

  const substractProduct = (product: Products): Products[] => {
    const newProducts = allProducts.map((p) => {
      if (p.id === product.id) {
        return { ...p, quantity: p.quantity - 1 };
      }
      return p;
    });
    setCountProducts(countProducts - 1);
    setTotal(total - product.price);
    setAllProducts(newProducts);
    if (product.quantity === 1) {
      deleteProduct(product);
    }
    return newProducts;
  };

  const showProductDetails = (product: Products): Products[] => {
    setSelectedProduct(product);
    return allProducts;
  };

  useEffect(() => {
    let timeout: number;
    if (isOnCart) {
      timeout = setTimeout(() => {
        setIsOnCart(false);
      }, 5000);
    }
    return () => clearTimeout(timeout);
  }, [isOnCart]);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [isMobile]);
  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 overflow-y-auto z-[-2] bg-white dark:bg-black">
      <Router>
        <Navbar countProducts={countProducts} countFavProducts={countFavProducts}/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/Cart"
            element={
              <Cart
                isMobile={isMobile}
                addToCart={addToCart}
                allProducts={allProducts}
                deleteProduct={deleteProduct}
                total={total}
                addProduct={addProduct}
                substractProduct={substractProduct}
                showDetails={showProductDetails}
              />
            }
          />
          <Route
            path="/Wishlist"
            element={
              <Wishlist
                allFavProducts={allFavProducts}
                deleteProduct={deleteProduct}
                showDetails={showProductDetails}
                addToCart={addToCart}
              />
            }
          />
          <Route
            path="/ProductDetail/:id"
            element={
              <ProductDetail
                category={selectedProduct?.category || ""}
                description={selectedProduct?.description || ""}
                image={selectedProduct?.image || ""}
                brand={selectedProduct?.brand || ""}
                price={selectedProduct?.price || 0}
                addToCart={() => addToCart(selectedProduct as Products)}
                isAdded={isOnCart}
              />
            }
          />
          <Route
            path="/Sun-Glasses"
            element={
              <SunGlasses
                isFav={isFav}
                addedToFav={addToFav}
                addToCart={addToCart}
                showDetails={showProductDetails}
              />
            }
          />
          <Route
            path="/Vision-Glasses"
            element={
              <VisionGlasses
                isFav={isFav}
                addedToFav={addToFav}
                addToCart={addToCart}
                showDetails={showProductDetails}
              />
            }
          />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/User" element={<Loggin />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
export default App;
