import { useEffect, useState } from "react";
import useProducts from "../Hooks/useProducts";
import "../Components/Animations.css";
import { Link } from "react-router-dom";
import { Products } from "../Interface/Products";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const DashboardProducts = () => {
  const [products, setProducts] = useState<Products[]>([]);
  const [loading, setLoading] = useState(false);

  const { handleDelete } = useProducts();

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await fetch("http://localhost:5000/glasses", {
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
    <div className="mt-32 text-black dark:text-white w-[85%] mx-auto">
      <h1 className="text-center text-2xl">Dashboard Products</h1>
      {loading ? (
        <div className="flex flex-col gap-2 justify-center items-center h-full mt-5">
          Loading...
          <AiOutlineLoading3Quarters className="spin size-32 md:size-52" />
        </div>
      ) : (
        <table className="w-full text-center mt-5 border-[0.5px] border-collapse border-white">
          <thead className="bg-black dark:bg-white text-white dark:text-black font-bold border-[0.5px] border-collapse border-black">
            <tr className="border-[0.5px] border-collapse border-white">
              <th className="py-3 border-[0.5px] border-collapse border-white dark:border-black">
                Id
              </th>
              <th className="py-3 border-[0.5px] border-collapse border-white dark:border-black">
                Marca
              </th>
              <th className="py-3 border-[0.5px] border-collapse border-white dark:border-black">
                Descripción
              </th>
              <th className="py-3 border-[0.5px] border-collapse border-white dark:border-black">
                Precio
              </th>
              <th className="py-3 border-[0.5px] border-collapse border-white dark:border-black">
                Stock
              </th>
              <th className="py-3 border-[0.5px] border-collapse border-white dark:border-black">
                Imagen
              </th>
              <th className="py-3 border-[0.5px] border-collapse border-white dark:border-black">
                Eliminar
              </th>
              <th className="py-3 border-[0.5px] border-collapse border-white dark:border-black">
                Editar
              </th>
            </tr>
          </thead>
          <tbody>
            {products &&
              products.map((product) => (
                <tr key={product.id}>
                  <td className="py-3 border-[0.5px] border-collapse border-black dark:border-white">
                    {product.id}
                  </td>
                  <td className="py-3 border-[0.5px] border-collapse border-black dark:border-white">
                    {product.brand}
                  </td>
                  <td className="py-3 border-[0.5px] border-collapse border-black dark:border-white">
                    {product.description}
                  </td>
                  <td className="py-3 border-[0.5px] border-collapse border-black dark:border-white">
                    {product.price}
                  </td>
                  <td className="py-3 border-[0.5px] border-collapse border-black dark:border-white">
                    {product.stock}
                  </td>
                  <td className="size-28 py-3 border-[0.5px] border-collapse border-black dark:border-white">
                    <img
                      src={product.image}
                      alt={product.brand}
                      className="w-[80%] h-auto m-auto"
                    />
                  </td>
                  <td className="py-3 border-[0.5px] border-collapse border-black dark:border-white">
                    <button
                      className="bg-red-500 text-white p-1 text-xs"
                      onClick={() => handleDelete(product.id)}
                    >
                      Eliminar
                    </button>
                  </td>
                  <td className="py-3 border-[0.5px] border-collapse border-black dark:border-white">
                    <Link
                      to={`Edit/${product.id}`}
                      className="bg-blue-500 text-white p-1 text-xs"
                    >
                      Editar
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
