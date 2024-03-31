import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { CartProvider } from "./Context/cartContext.tsx";
import { FavProvider } from "./Context/favContext.tsx";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <CartProvider>
      <FavProvider>
      <Router>
        <App />
        </Router>
      </FavProvider>
    </CartProvider>
);
