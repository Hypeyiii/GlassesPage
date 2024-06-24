import type { Orders } from "../Interface/Orders";
import { Link } from "react-router-dom";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useAuth } from "../Hooks/useAuth";
import { LuListOrdered } from "react-icons/lu";
import { useOrders } from "../Hooks/useOrders";

const Orders = () => {
  const { orders, loading} = useOrders({ orderid: ""});
  const { user } = useAuth();

  const myOrders = orders.filter((orders) => orders.userId === user?.id);

  return (
    <div className="mt-32 text-black dark:text-white w-[85%] mx-auto">
      <h1 className="text-center text-2xl">Mis ordenes</h1>
      {loading ? (
        <div className="flex flex-col gap-2 justify-center items-center h-full mt-5">
          Loading...
          <AiOutlineLoading3Quarters className="spin size-32 md:size-52" />
        </div>
      ) : !loading && myOrders.length > 0 ? (
        <table className="w-full text-center mt-5 border-[0.5px] border-collapse border-white">
          <thead className="bg-black dark:bg-white text-white dark:text-black font-bold border-[0.5px] border-collapse border-black">
            <tr className="border-[0.5px] border-collapse border-white">
              <th className="py-3 border-[0.5px] border-collapse border-white dark:border-black text-xs md:text-base">
                Número de orden
              </th>
              <th className="py-3 border-[0.5px] border-collapse border-white dark:border-black text-xs md:text-base">
                Estado
              </th>
              <th className="py-3 border-[0.5px] border-collapse border-white dark:border-black text-xs md:text-base">
                Fecha de registro
              </th>
              <th className="py-3 border-[0.5px] border-collapse border-white dark:border-black text-xs md:text-base">
                Ver
              </th>
            </tr>
          </thead>
          <tbody>
            {myOrders.map((order) => (
              <tr key={order.id}>
                <td className="py-3 border-[0.5px] border-collapse border-black dark:border-white text-xs md:text-base">
                  {order.id}
                </td>
                <td className="py-3 border-[0.5px] border-collapse border-black dark:border-white text-xs md:text-base">
                  {order.status}
                </td>
                <td className="py-3 border-[0.5px] border-collapse border-black dark:border-white text-xs md:text-base">
                  {order.date}
                </td>
                <td className="py-3 border-[0.5px] border-collapse border-black dark:border-white text-xs md:text-base">
                  <Link
                    to={`${order.id}`}
                    className="bg-blue-500 text-white p-1 text-xs md:text-base"
                  >
                    Ver detalle
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="flex flex-col items-center justify-center h-full gap-y-5 w-[50%] md:w-[20%] mx-auto text-black dark:text-white">
          <LuListOrdered className="size-32  opacity-20" />
          <h1 className="text-xl md:text-3xl font-bold  mx-auto text-center">
            Ups! No hay ordenes
          </h1>
          <p className="text-center">
            Explora articulos para conseguir tu primera orden!
          </p>
          <Link
            to={"/"}
            className="py-2 px-5 border-[0.5px] border-black dark:border-white hover:bg-black hover:text-white
            dark:hover:bg-white dark:hover:text-black dark:text-white transition flex justify-center uppercase font-bold text-center"
          >
            Explora articulos
          </Link>
        </div>
      )}
    </div>
  );
};
export default Orders;
