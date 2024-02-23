import "./App.css";
import { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer.tsx";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import VisionGlasses from "./Routes/Glasses-Vision";
import SunGlasses from "./Routes/Glasses-Sun";
import HomePage from "./Routes/HomePage.tsx";
import ErrorPage from "./Routes/ErrorPage.tsx";
import Cart from "./Routes/Cart.tsx";
import SquaredSunGlasses from "./Routes/Glasses-SquaredSun.tsx";
import CircleSunGlasses from "./Routes/Glasses-CircleSunGlasses.tsx";
import HeartSunGlasses from "./Routes/Glasses-HeartSunGlasses.tsx";
import WomenSunGlasses from "./Routes/Glasses-WomenSunGlasses.tsx";
import ManSunGlasses from "./Routes/Glasses-ManSunGlasses.tsx";
import ProductDetail from "./Routes/ProductDetail.tsx";

function App() {
  const [allProducts, setAllProducts] = useState<any[]>([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);
  const [isOnCart, setIsOnCart] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any[]>([]);

  const addToCart = (product) => {
    setIsOnCart(true);
    if (allProducts.find((p) => p.id === product.id)) {
      const newProducts = allProducts.map((p) => {
        if (p.id === product.id) {
          return { ...p, quantity: p.quantity + 1 };
        }
        return p;
      });
      setCountProducts(countProducts + product.quantity);
      setTotal(total + product.price * product.quantity);
      return setAllProducts(newProducts);
    }
    setCountProducts(countProducts + product.quantity);
    setTotal(total + product.price * product.quantity);
    setAllProducts([...allProducts, product]);
  };
  useEffect(() => {
    let timeout: number;
    if (isOnCart) {
      timeout = setTimeout(() => {
        setIsOnCart(false);
      }, 3000);
    }
    return () => clearTimeout(timeout);
  }, [isOnCart]);

  const deleteProduct = (product) => {
    const newProducts = allProducts.filter((p) => p.id !== product.id);
    setTotal(total - product.price * product.quantity);
    setCountProducts(countProducts - product.quantity);
    setAllProducts(newProducts);
  };
  const addProduct = (product) => {
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
  const substractProduct = (product) => {
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
  const showProductDetails = (product) => {
    setSelectedProduct(product);
  };
  return (
    <>
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
                  id={selectedProduct.id}
                />
              }
            />
            <Route
              path="/ProductDetail/:id"
              element={
                <ProductDetail
                  description={selectedProduct.description}
                  image={selectedProduct.image}
                  brand={selectedProduct.brand}
                  price={selectedProduct.price}
                  addToCart={() => addToCart(selectedProduct)}
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
                  addedToCart={addToCart}
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
    </>
  );
}
export default App;
