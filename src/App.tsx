import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Layout from "./UI/Layout/Layout";
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
import Collection from "./UI/Pages/Collection";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useContext } from "react";
import { AuthContext } from "./UI/Context/authContext";
import Dashboard from "./UI/Pages/Dashboard";
import DashboardProducts from "./UI/Pages/DashbordProducts";
import ProductEdit from "./UI/Pages/ProductEdit";
import ProductCreate from "./UI/Pages/ProductCreate";
import DashboardUsers from "./UI/Pages/DashboardUsers";
import useUsers from "./UI/Hooks/useUsers";
import UsersCreate from "./UI/Pages/UsersCreate";
import UsersEdit from "./UI/Pages/UsersEdit";
export default function App() {
  const { isLogged } = useContext(AuthContext);
  const { userData } = useUsers();

  const stripePromise = loadStripe(
    "pk_test_51OkKmsBlx8QfT450Ul1ORZbvVVbcd0KEcWAPLHj5mP9P6BORvJ47mS9WFgDoC9ytYntZqMdNL3ITReBzaOkB3NOu00FOmepwfm"
  );

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="Cart" element={isLogged ? <Cart /> : <SingIn />} />
          <Route
            path="Wishlist"
            element={isLogged ? <Wishlist /> : <SingIn />}
          />
          <Route path="collection/:section" element={<Collection />} />
          <Route path=":category/Product/:id" element={<Details />} />
          <Route path="*" element={<ErrorPage />} />
          {isLogged && <Route path="User" element={<Loggin />} />}
          <Route path="Sing-In" element={<SingIn />} />
          <Route path="My-account" element={<MyAccount />} />
          <Route
            path="Cart/Checkout"
            element={
              <Elements stripe={stripePromise}>
                <Checkout />
              </Elements>
            }
          />
          <Route path="/search/:term" element={<Search />} />
          {userData?.role === "Admin" && (
            <>
              <Route path="/Dashboard" element={<Dashboard />} />
              <Route
                path="/Dashboard/Products"
                element={<DashboardProducts />}
              />
              <Route
                path="/Dashboard/Products/Edit/:id"
                element={<ProductEdit />}
              />
              <Route
                path="/Dashboard/Products/Create"
                element={<ProductCreate />}
              />
              <Route path="/Dashboard/Users" element={<DashboardUsers />} />
              <Route path="/Dashboard/Users/Create" element={<UsersCreate />} />
              <Route path="/Dashboard/Users/Edit/:id" element={<UsersEdit />} />
            </>
          )}
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
