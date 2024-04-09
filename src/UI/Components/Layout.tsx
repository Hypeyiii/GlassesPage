import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet, ScrollRestoration } from "react-router-dom";
import ScrollToTop from "../Components/ScrollToTop";
import CartPreview from "./CartPreview";

const Layout = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-auto z-[-2] bg-gray-100 dark:bg-black">
      <Navbar />
      <Outlet />
      <Footer />
      <ScrollToTop />
      <ScrollRestoration />
      <CartPreview />
    </div>
  );
};
export default Layout;
