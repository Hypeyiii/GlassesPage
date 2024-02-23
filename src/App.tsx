import "./App.css";
import { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import VisionGlasses from "./Routes/Glasses-Vision";
import SunGlasses from "./Routes/Glasses-Sun";
import HomePage from "./Routes/HomePage";
import ErrorPage from "./Routes/ErrorPage";
import Cart from "./Routes/Cart";
import SquaredSunGlasses from "./Routes/Glasses-SquaredSun";
import CircleSunGlasses from "./Routes/Glasses-CircleSunGlasses";
import HeartSunGlasses from "./Routes/Glasses-HeartSunGlasses";
import WomenSunGlasses from "./Routes/Glasses-WomenSunGlasses";
import ManSunGlasses from "./Routes/Glasses-ManSunGlasses";
import ProductDetail from "./Routes/ProductDetail";

export interface Sunglass {
  id: number;
  brand: string;
  price: number;
  image: string;
  description: string;
  quantity: number;
  total: number;
  deleteProduct: (product: Sunglass) => void;
}
export interface SunglassProps {
  allProducts: Sunglass[];
  deleteProduct: (product: Sunglass) => void;
}

const App: React.FC<SunglassProps>= () => {
  const [allProducts, setAllProducts] = useState<Sunglass[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [countProducts, setCountProducts] = useState<number>(0);
  const [isOnCart, setIsOnCart] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<Sunglass | null>(null);

  const addToCart = (product: Sunglass) => {
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
    } else {
      setCountProducts(countProducts + 1);
      setTotal(total + product.price);
      setAllProducts([...allProducts, { ...product, quantity: 1 }]);
    }
  };

  const deleteProduct = (product: Sunglass) => {
    const newProducts = allProducts.filter((p) => p.id !== product.id);
    setTotal(total - product.price * product.quantity);
    setCountProducts(countProducts - product.quantity);
    setAllProducts(newProducts);
  };

  const addProduct = (product: Sunglass) => {
    const newProducts = allProducts.map((p) => {
      if (p.id === product.id) {
        return { ...p, quantity: p.quantity + 1 };
      }
      return p;
    });
    setCountProducts(countProducts + 1);
    setTotal(total + product.price);
    setAllProducts(newProducts);
  };

  const substractProduct = (product: Sunglass) => {
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
  };

  const showProductDetails = (product: Sunglass) => {
    setSelectedProduct(product);
  };

  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 overflow-y-auto z-[-2] bg-white dark:bg-black">
      <Router>
        <Navbar countProducts={countProducts} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/Cart"
            element={
              <Cart
                allProducts={allProducts}
                deleteProduct={deleteProduct}
                total={total}
                addProduct={addProduct}
                substractProduct={substractProduct}
                showDetails={showProductDetails}
                id={selectedProduct?.id}
              />
            }
          />
          <Route
            path="/ProductDetail/:id"
            element={
              <ProductDetail
                description={selectedProduct?.description || ""}
                image={selectedProduct?.image || ""}
                brand={selectedProduct?.brand || ""}
                price={selectedProduct?.price || 0}
                addToCart={() => addToCart(selectedProduct as Sunglass)}
                isAdded={isOnCart}
              />
            }
          />
          <Route
            path="/Vision-Glasses"
            element={
              <VisionGlasses
                addToCart={addToCart}
                showDetails={showProductDetails}
              />
            }
          />
          <Route
            path="/Sun-Glasses"
            element={
              <SunGlasses
                addToCart={addToCart}
                showDetails={showProductDetails}
              />
            }
          />
          <Route path="*" element={<ErrorPage />} />
          <Route
            path="/Squared-Sun-Glasses"
            element={
              <SquaredSunGlasses
                addToCart={addToCart}
                showDetails={showProductDetails}
              />
            }
          />
          <Route
            path="/Circle-Sun-Glasses"
            element={
              <CircleSunGlasses
                addToCart={addToCart}
                showDetails={showProductDetails}
              />
            }
          />
          <Route
            path="/Heart-Sun-Glasses"
            element={
              <HeartSunGlasses
                addToCart={addToCart}
                showDetails={showProductDetails}
              />
            }
          />
          <Route
            path="/Women-Sun-Glasses"
            element={
              <WomenSunGlasses
                addToCart={addToCart}
                showDetails={showProductDetails}
              />
            }
          />
          <Route
            path="/Man-Sun-Glasses"
            element={
              <ManSunGlasses
                addToCart={addToCart}
                showDetails={showProductDetails}
              />
            }
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
