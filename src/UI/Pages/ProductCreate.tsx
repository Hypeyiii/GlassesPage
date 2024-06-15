import { useState } from "react";
import { Products } from "../Interface/Products";

const ProductCreate = () => {
  const [product, setProduct] = useState<Products>({
    id: "",
    total: 0,
    countProducts: 0,
    brand: "",
    description: "",
    category: "",
    genre: "",
    shape: "",
    color: "",
    price: 0,
    image: "",
    quantity: 0,
    stock: 0,
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleCreate = async () => {
    try {
      setLoading(true);
      await fetch(`http://localhost:5000/glasses`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      });
      setSuccess("Producto creado correctamente!");
      setLoading(false);
    } catch (error) {
      console.error("Error al crear producto", error);
      setLoading(false);
      setSuccess("Error al crear producto");
    }
  };

  if (loading) {
    return (
      <div className="text-black dark:text-white flex w-screen h-auto m-auto">
        Loading...
      </div>
    );
  }

  return (
    <div className="mt-32 text-black dark:text-white flex flex-col justify-center items-center gap-2 w-[85%] mx-auto">
      <h1>Create Product</h1>
      {success && <span className="text-green-300">{success}</span>}
      <span className="flex flex-row gap-2 justify-between w-1/3 items-center">
        <label>Brand</label>
        <input
          className="bg-black text-white dark:bg-white dark:text-black rounded-xl p-3 w-[80%] text-sm"
          type="text"
          value={product.brand}
          onChange={(e) => setProduct({ ...product, brand: e.target.value })}
        />
      </span>
      <span className="flex flex-row gap-2 justify-between w-1/3 items-center">
        <label>Description</label>
        <input
          className="bg-black text-white dark:bg-white dark:text-black rounded-xl p-3 w-[80%] text-sm"
          type="text"
          value={product.description}
          onChange={(e) =>
            setProduct({ ...product, description: e.target.value })
          }
        />
      </span>
      <span className="flex flex-row gap-2 justify-between w-1/3 items-center">
        <label>Category</label>
        <input
          className="bg-black text-white dark:bg-white dark:text-black rounded-xl p-3 w-[80%] text-sm"
          type="text"
          value={product.category}
          onChange={(e) => setProduct({ ...product, category: e.target.value })}
        />
      </span>
      <span className="flex flex-row gap-2 justify-between w-1/3 items-center">
        <label>Genre</label>
        <input
          className="bg-black text-white dark:bg-white dark:text-black rounded-xl p-3 w-[80%] text-sm"
          type="text"
          value={product.genre}
          onChange={(e) => setProduct({ ...product, genre: e.target.value })}
        />
      </span>
      <span className="flex flex-row gap-2 justify-between w-1/3 items-center">
        <label>Shape</label>
        <input
          className="bg-black text-white dark:bg-white dark:text-black rounded-xl p-3 w-[80%] text-sm"
          type="text"
          value={product.shape}
          onChange={(e) => setProduct({ ...product, shape: e.target.value })}
        />
      </span>
      <span className="flex flex-row gap-2 justify-between w-1/3 items-center">
        <label>Color</label>
        <input
          className="bg-black text-white dark:bg-white dark:text-black rounded-xl p-3 w-[80%] text-sm"
          type="text"
          value={product.color}
          onChange={(e) => setProduct({ ...product, color: e.target.value })}
        />
      </span>
      <span className="flex flex-row gap-2 justify-between w-1/3 items-center">
        <label>Price</label>
        <input
          className="bg-black text-white dark:bg-white dark:text-black rounded-xl p-3 w-[80%] text-sm"
          type="number"
          value={product.price}
          onChange={(e) =>
            setProduct({ ...product, price: Number(e.target.value) })
          }
        />
      </span>
      <span className="flex flex-row gap-2 justify-between w-1/3 items-center">
        <label>Image</label>
        <input
          className="bg-black text-white dark:bg-white dark:text-black rounded-xl p-3 w-[80%] text-sm"
          type="text"
          value={product.image}
          onChange={(e) => setProduct({ ...product, image: e.target.value })}
        />
      </span>
      <span className="flex flex-row gap-2 justify-between w-1/3 items-center">
        <label>Quantity</label>
        <input
          className="bg-black text-white dark:bg-white dark:text-black rounded-xl p-3 w-[80%] text-sm"
          type="number"
          value={product.quantity}
          onChange={(e) =>
            setProduct({ ...product, quantity: Number(e.target.value) })
          }
        />
      </span>
      <span className="flex flex-row gap-2 justify-between w-1/3 items-center">
        <label>Stock</label>
        <input
          className="bg-black text-white dark:bg-white dark:text-black rounded-xl p-3 w-[80%] text-sm"
          type="number"
          value={product.stock}
          onChange={(e) =>
            setProduct({ ...product, stock: Number(e.target.value) })
          }
        />
      </span>
      <button onClick={handleCreate}>Create</button>
    </div>
  );
};

export default ProductCreate;
