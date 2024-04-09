import { useCart } from "../Hooks/useCart";
import {Link} from "react-router-dom";

const Checkout = () => {
  const { total, allProducts } = useCart();
  return (
    <div className="mt-24 md:mt-32 text-black dark:text-white w-[70%] m-auto">
      <h1>Checkout</h1>
      <p>Total a pagar: ${total}.00</p>
      {allProducts.map((product) => (
        <div key={product.id} className="mt-5 flex flex-row gap-3 justify-center items-center border-b w-fit">
          <Link to={`/${product.category}/Product/${product.id}`} className="size-32 flex justify-center items-center">
            <img src={product.image} alt={product.description} />
          </Link>
          <p>{product.description}</p>
          <p>${product.price}.00</p>
        </div>
      ))}
    </div>
  );
};
export default Checkout;
