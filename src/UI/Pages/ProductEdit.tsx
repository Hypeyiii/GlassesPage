import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Products } from "../Interface/Products";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const ProductEdit = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Products | null>(null);
  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState("");

  useEffect(() => {
    const getProduct = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://glasses-page-api-rest-production.up.railway.app/glasses/${id}`, {
          method: "GET",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        setProduct(data);
        setLoading(false);
      } catch (error) {
        console.error("Error al obtener producto", error);
        setLoading(false);
      }
    };
    getProduct();
  }, [id]);

  const handleEdit = async () => {
    try {
      setLoading(true);
      await fetch(`https://glasses-page-api-rest-production.up.railway.app/glasses/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      });
      setSuccess("Producto editado correctamente!");
      setLoading(false);
    } catch (error) {
      console.error("Error al editar producto", error);
      setLoading(false);
      setSuccess("Error al editar producto");
    }
  };

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="mt-32 text-black dark:text-white flex flex-col justify-center items-center gap-2 w-[90%] md:w-[85%] px-4 mx-auto">
      <h1>Edit Product</h1>
      {success && <span className="text-green-300">{success}</span>}
      {loading ? (
        <div className="size-40 flex flex-col gap-2 text-black dark:text-white items-center justify-center">
          <AiOutlineLoading3Quarters className="spin size-32 text-black dark:text-white" />
          Loading...
        </div>
      ) : (
        <>
          <span className="flex flex-col md:flex-row gap-2 justify-start md:justify-between w-full md:w-1/3 items-start md:items-center">
            <label>Brand</label>
            <input
              className="bg-black text-white dark:bg-white dark:text-black rounded-xl p-3 w-full md:w-[80%] text-sm"
              type="text"
              value={product.brand}
              onChange={(e) =>
                setProduct({ ...product, brand: e.target.value })
              }
            />
          </span>
          <span className="flex flex-col md:flex-row gap-2 justify-start md:justify-between w-full md:w-1/3 items-start md:items-center">
            <label>Description</label>
            <input
              className="bg-black text-white dark:bg-white dark:text-black rounded-xl p-3 w-full md:w-[80%] text-sm"
              type="text"
              value={product.description}
              onChange={(e) =>
                setProduct({ ...product, description: e.target.value })
              }
            />
          </span>
          <span className="flex flex-col md:flex-row gap-2 justify-start md:justify-between w-full md:w-1/3 items-start md:items-center">
            <label>Category</label>
            <input
              className="bg-black text-white dark:bg-white dark:text-black rounded-xl p-3 w-full md:w-[80%] text-sm"
              type="text"
              value={product.category}
              onChange={(e) =>
                setProduct({ ...product, category: e.target.value })
              }
            />
          </span>
          <span className="flex flex-col md:flex-row gap-2 justify-start md:justify-between w-full md:w-1/3 items-start md:items-center">
            <label>Genre</label> {/* Corregido de "Brand" a "Genre" */}
            <input
              className="bg-black text-white dark:bg-white dark:text-black rounded-xl p-3 w-full md:w-[80%] text-sm"
              type="text"
              value={product.genre}
              onChange={(e) =>
                setProduct({ ...product, genre: e.target.value })
              }
            />
          </span>
          <span className="flex flex-col md:flex-row gap-2 justify-start md:justify-between w-full md:w-1/3 items-start md:items-center">
            <label>Shape</label>
            <input
              className="bg-black text-white dark:bg-white dark:text-black rounded-xl p-3 w-full md:w-[80%] text-sm"
              type="text"
              value={product.shape}
              onChange={(e) =>
                setProduct({ ...product, shape: e.target.value })
              }
            />
          </span>
          <span className="flex flex-col md:flex-row gap-2 justify-start md:justify-between w-full md:w-1/3 items-start md:items-center">
            <label>Color</label>
            <input
              className="bg-black text-white dark:bg-white dark:text-black rounded-xl p-3 w-full md:w-[80%] text-sm"
              type="text"
              value={product.color}
              onChange={(e) =>
                setProduct({ ...product, color: e.target.value })
              }
            />
          </span>
          <span className="flex flex-col md:flex-row gap-2 justify-start md:justify-between w-full md:w-1/3 items-start md:items-center">
            <label>Price</label>
            <input
              className="bg-black text-white dark:bg-white dark:text-black rounded-xl p-3 w-full md:w-[80%] text-sm"
              type="number"
              value={product.price}
              onChange={(e) =>
                setProduct({ ...product, price: Number(e.target.value) })
              }
            />
          </span>
          <span className="flex flex-col md:flex-row gap-2 justify-start md:justify-between w-full md:w-1/3 items-start md:items-center">
            <label>Image</label>
            <input
              className="bg-black text-white dark:bg-white dark:text-black rounded-xl p-3 w-full md:w-[80%] text-sm"
              type="text"
              value={product.image}
              onChange={(e) =>
                setProduct({ ...product, image: e.target.value })
              }
            />
          </span>
          <span className="flex flex-col md:flex-row gap-2 justify-start md:justify-between w-full md:w-1/3 items-start md:items-center">
            <label>Quantity</label>
            <input
              className="bg-black text-white dark:bg-white dark:text-black rounded-xl p-3 w-full md:w-[80%] text-sm"
              type="number"
              value={product.quantity}
              onChange={(e) =>
                setProduct({ ...product, quantity: Number(e.target.value) })
              }
            />
          </span>
          <span className="flex flex-col md:flex-row gap-2 justify-start md:justify-between w-full md:w-1/3 items-start md:items-center">
            <label>Stock</label>
            <input
              className="bg-black text-white dark:bg-white dark:text-black rounded-xl p-3 w-full md:w-[80%] text-sm"
              type="number"
              value={product.stock}
              onChange={(e) =>
                setProduct({ ...product, stock: Number(e.target.value) })
              }
            />
          </span>
        </>
      )}
      <button onClick={handleEdit}>Edit</button>
    </div>
  );
};

export default ProductEdit;
