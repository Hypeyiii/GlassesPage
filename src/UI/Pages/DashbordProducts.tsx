import { useEffect, useState } from "react";
import useProducts from "../Hooks/useProducts";
import "../Components/Animations.css";
import { Link } from "react-router-dom";
import { Products } from "../Interface/Products";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import { BiEdit } from "react-icons/bi";

const DashboardProducts = () => {
  const [products, setProducts] = useState<Products[]>([]);
  const [loading, setLoading] = useState(false);

  const { handleDelete } = useProducts();

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await fetch("https://glasses-page-api-rest-production.up.railway.app/glasses", {
          method: "GET",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error al obtener productos", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="mt-32 text-black dark:text-white md:w-[90%] w-[85%] mx-auto px-3">
      <h1 className="text-center text-2xl">Dashboard Products</h1>
      {loading ? (
        <div className="flex flex-col gap-2 justify-center items-center h-full mt-5">
          Loading...
          <AiOutlineLoading3Quarters className="spin size-32 md:size-52" />
        </div>
      ) : (
        <table className="w-full text-center mt-5 border-[0.5px] border-collapse border-white m-auto">
          <thead className="bg-black dark:bg-white text-white dark:text-black font-bold border-[0.5px] border-collapse border-black">
            <tr className="border-[0.5px] border-collapse border-white">
              <th className="py-3 border-[0.5px] border-collapse border-white dark:border-black hidden md:block">
                Id
              </th>
              <th className="py-3 border-[0.5px] border-collapse border-white dark:border-black text-[10px] md:text-base">
                Marca
              </th>
              <th className="py-3 border-[0.5px] border-collapse border-white dark:border-black text-[10px] md:text-base">
                Descripción
              </th>
              <th className="py-3 border-[0.5px] border-collapse border-white dark:border-black text-[10px] md:text-base">
                Precio
              </th>
              <th className="py-3 border-[0.5px] border-collapse border-white dark:border-black text-[10px] md:text-base">
                Stock
              </th>
              <th className="py-3 border-[0.5px] border-collapse border-white dark:border-black text-[10px] md:text-base">
                Imagen
              </th>
              <th className="py-3 border-[0.5px] border-collapse border-white dark:border-black text-[10px] md:text-base">
                Eliminar
              </th>
              <th className="py-3 border-[0.5px] border-collapse border-white dark:border-black text-[10px] md:text-base">
                Editar
              </th>
            </tr>
          </thead>
          <tbody>
            {products &&
              products.map((product) => (
                <tr key={product.id}>
                  <td className="py-3 border-[0.5px] border-collapse border-black dark:border-white hidden md:table-cell">
                    {product.id}
                  </td>
                  <td className="py-3 border-[0.5px] border-collapse border-black dark:border-white text-[10px] md:text-base ">
                    {product.brand}
                  </td>
                  <td className="py-3 border-[0.5px] border-collapse border-black dark:border-white text-[10px] md:text-base ">
                    {product.description}
                  </td>
                  <td className="py-3 border-[0.5px] border-collapse border-black dark:border-white text-[10px] md:text-base ">
                    {product.price}
                  </td>
                  <td className="py-3 border-[0.5px] border-collapse border-black dark:border-white text-[10px] md:text-base ">
                    {product.stock}
                  </td>
                  <td className="size-16 md:size-28 py-3 border-[0.5px] border-collapse border-black dark:border-white text-[10px] md:text-base ">
                    <img
                      src={product.image}
                      alt={product.brand}
                      className="w-[80%] h-auto m-auto"
                    />
                  </td>
                  <td className="py-1 md:py-3 border-[0.5px] border-collapse border-black dark:border-white text-[10px] md:text-base ">
                    <button
                      className="bg-red-500 rounded-full p-1 text-white md:p-1 text-xs"
                      onClick={() => handleDelete(product.id)}
                    >
                      <RxCross1 className="size-3 md:size-6" />
                    </button>
                  </td>
                  <td className="py-1 md:py-3 border-[0.5px] border-collapse border-black dark:border-white text-[10px] md:text-base ">
                    <Link
                      to={`Edit/${product.id}`}
                      className="text-blue-500 md:p-1 text-xs"
                    >
                      <BiEdit className="size-4 md:size-6 m-auto" />
                    </Link>
                  </td>
                </tr>
              ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={8}>
                <Link
                  to="Create"
                  className="bg-green-500 hover:bg-green-600 transition-all text-white block text-center h-full w-full py-4"
                >
                  Crear
                </Link>
              </td>
            </tr>
          </tfoot>
        </table>
      )}
    </div>
  );
};

export default DashboardProducts;
