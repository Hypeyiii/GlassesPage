import type { OrderDetails } from "../Interface/OrderDetails";
import { useParams } from "react-router-dom";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useOrders } from "../Hooks/useOrders";
import useProducts from "../Hooks/useProducts";

const OrderDetails = () => {
  const { id } = useParams<{ id: string }>();

  const { message, loading, orderDetails, handleDelete } = useOrders({
    orderid: id as string,
  });
  const { products } = useProducts();

  return (
    <div className="mt-32 text-black dark:text-white w-[85%] mx-auto">
      <h1 className="text-center text-2xl">Mis ordenes</h1>
      {loading ? (
        <div className="flex flex-col gap-2 justify-center items-center h-full mt-5">
          Loading...
          <AiOutlineLoading3Quarters className="spin size-32 md:size-52" />
        </div>
      ) : message ? (
        <div className="text-center text-red-500 text-2xl flex flex-col gap-2 mt-5">
          {message}
          <p className="text-black dark:text-white">Regresando...</p>
        </div>
      ) : (
        <>
          <table className="w-full text-center mt-5 border-[0.5px] border-collapse border-white">
            <thead className="bg-black dark:bg-white text-white dark:text-black font-bold border-[0.5px] border-collapse border-black">
              <tr className="border-[0.5px] border-collapse border-white">
                <th className="py-3 border-[0.5px] border-collapse border-white dark:border-black text-xs md:text-base">
                  Producto
                </th>
                <th className="py-3 border-[0.5px] border-collapse border-white dark:border-black text-xs md:text-base">
                  Cantidad
                </th>
                <th className="py-3 border-[0.5px] border-collapse border-white dark:border-black text-xs md:text-base">
                  Precio
                </th>
              </tr>
            </thead>
            <tbody>
              {orderDetails.map((order) => (
                <tr key={order.orderId}>
                  <td className="py-3 border-[0.5px] border-collapse border-black dark:border-white text-xs md:text-base">
                    {products
                      .filter((product) => product.id === order.productId)
                      .map((product) => (
                        <span
                          key={product.id}
                          className="flex flex-col gap-1 size-32 text-center items-center justify-center m-auto"
                        >
                          <div className="flex m-auto w- h-auto">
                            <img
                              src={product.image}
                              className="w-full h-auto"
                            />
                          </div>
                          {product.brand}
                        </span>
                      ))}
                  </td>
                  <td className="py-3 border-[0.5px] border-collapse border-black dark:border-white text-xs md:text-base">
                    {order.quantity}
                  </td>
                  <td className="py-3 border-[0.5px] border-collapse border-black dark:border-white text-xs md:text-base">
                    {products
                      .filter((product) => product.id === order.productId)
                      .map((product) => (
                        <span key={product.id}>${product.price}.00</span>
                      ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button
            className="w-full flex justify-center px-4 py-2 border border-white text-white bg-red-700 hover:bg-red-500"
            onClick={() => handleDelete(id as string)}
          >
            Cancelar orden
          </button>
        </>
      )}
    </div>
  );
};
export default OrderDetails;
