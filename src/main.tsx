import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { CartProvider } from "./Context/cartContext.tsx";
import { FavProvider } from "./Context/favContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <CartProvider>
    <FavProvider>
      <App />
    </FavProvider>
  </CartProvider>
);
