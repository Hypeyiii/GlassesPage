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

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Wishlist" element={<Wishlist />} />
        <Route path="/product/:id" element={<Details />} />
        <Route path="/Sun-Glasses" element={<SunGlasses />} />
        <Route path="/Vision-Glasses" element={<VisionGlasses />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/User" element={<Loggin />} />
      </Route>
    )
  );
  return (
      <RouterProvider router={router} />
  );
}
