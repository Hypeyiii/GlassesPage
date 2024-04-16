import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Layout from "./UI/Layout/Layout";
import VisionGlasses from "./UI/Pages/Glasses-Vision";
import SunGlasses from "./UI/Pages/Glasses-Sun";
import HomePage from "./UI/Pages/HomePage";
import ErrorPage from "./UI/Pages/ErrorPage";
import Cart from "./UI/Pages/Cart";
import Wishlist from "./UI/Pages/WishList";
import Loggin from "./UI/Pages/Loggin";
import Details from "./UI/Pages/Details";
import Checkout from "./UI/Pages/Checkout";
import SingIn from "./UI/Pages/SingIn";
import MyAccount from "./UI/Pages/MyAccount";
import Search from "./UI/Pages/Search";

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="Cart" element={<Cart />} />
          <Route path="Wishlist" element={<Wishlist />} />
          <Route path=":category/Product/:id" element={<Details />} />
          <Route path="Sun" element={<SunGlasses />} />
          <Route path="Vision" element={<VisionGlasses />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="User" element={<Loggin />} />
          <Route path="Sing-In" element={<SingIn />} />
          <Route path="My-account" element={<MyAccount />} />
          <Route path="Cart/Checkout" element={<Checkout />} />
          <Route path="/search/:term" element={<Search />} />
        </Route>
      </>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
