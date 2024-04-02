import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet, ScrollRestoration } from "react-router-dom";
import ScrollToTop from "../Components/ScrollToTop";

const Layout = () => {
  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 overflow-y-auto z-[-2] bg-gray-100 dark:bg-black">
      <Navbar />
      <Outlet />
      <Footer />
      <ScrollToTop />
      <ScrollRestoration />
    </div>
  );
};
export default Layout;
