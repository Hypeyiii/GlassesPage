import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { CartProvider } from "./UI/Context/cartContext.tsx";
import { FavProvider } from "./UI/Context/favContext.tsx";
import { FiltersProvider } from "./UI/Context/filtersContext.tsx";
import { AuthProvider } from "./UI/Context/authContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <AuthProvider>
  <CartProvider>
    <FavProvider>
      <FiltersProvider>
        <App />
      </FiltersProvider>
    </FavProvider>
  </CartProvider>
  </AuthProvider>
);
