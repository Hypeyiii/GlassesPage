import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Layout from "./UI/Components/Layout";
import VisionGlasses from "./UI/Pages/Glasses-Vision";
import SunGlasses from "./UI/Pages/Glasses-Sun";
import HomePage from "./UI/Components/HomePage";
import ErrorPage from "./UI/Components/ErrorPage";
import Cart from "./UI/Components/Cart";
import Wishlist from "./UI/Components/WishList";
import Loggin from "./UI/Components/Loggin";
import Details from "./UI/Components/Details";
import Checkout from "./UI/Components/Checkout";
import SingUp from "./Auth/Components/SingUp";

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
        <Route path="Sing-Up" element={<SingUp />} />
        <Route path="Cart/Checkout" element={<Checkout />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}
