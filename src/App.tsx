import "./App.css";
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
import { useCart } from "./Hooks/useCart";
import { useFav } from "./Hooks/useFav";
import { FiltersProvider } from "./Context/filtersContext";
import { useShowDetails } from "./Hooks/useShowDetails";

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
function App() {
  const {
    addToCart,
    total,
    allProducts,
    countProducts,
    isOnCart,
    deleteProduct,
    addProduct,
    substractProduct,
  } = useCart();
  const {
    allFavProducts,
    countFavProducts,
    addToFav,
    isFav,
    deleteFavProduct,
  } = useFav();

  const { selectedProduct, showProductDetails } = useShowDetails();

  return (
    <FiltersProvider>
      <div className="absolute top-0 left-0 right-0 bottom-0 overflow-y-auto z-[-2] bg-white dark:bg-black">
        <Router>
          <Navbar
            countProducts={countProducts}
            countFavProducts={countFavProducts}
          />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/Cart"
              element={
                <Cart
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
                  deleteProduct={deleteFavProduct}
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
    </FiltersProvider>
  );
}
export default App;