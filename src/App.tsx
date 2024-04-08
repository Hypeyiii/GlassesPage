import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Components/Layout";
import VisionGlasses from "./Components/Glasses-Vision";
import SunGlasses from "./Components/Glasses-Sun";
import HomePage from "./Components/HomePage";
import ErrorPage from "./Components/ErrorPage";
import Cart from "./Components/Cart";
import Wishlist from "./Components/WishList";
import Loggin from "./Components/Loggin";
import Details from "./Components/Details";
import Checkout from "./Components/Checkout";

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="Cart" element={<Cart />} />
        <Route path="Wishlist" element={<Wishlist />} />
        <Route path=":category/Product/:id" element={<Details />} />
        <Route path="Sun" element={<SunGlasses />} />
        <Route path="Vision" element={<VisionGlasses />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="User" element={<Loggin />} />
        <Route path="Cart/Checkout" element={<Checkout />} />
      </Route>
    )
  );
  return (
      <RouterProvider router={router} />
  );
}
