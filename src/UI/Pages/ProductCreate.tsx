import { AiOutlineLoading3Quarters } from "react-icons/ai";
import useProducts from "../Hooks/useProducts";

const ProductCreate = () => {
  const {
    handleCreate,
    loading,
    setProduct,
    product,
    success,
    error,
    handleClean,
  } = useProducts();

  if (loading) {
    return (
      <div className="flex flex-col gap-2 justify-center items-center h-full mt-5">
        <AiOutlineLoading3Quarters className="spin size-32 md:size-52 text-black dark:text-white" />
      </div>
    );
  }

  return (
    <div className="mt-32 text-black dark:text-white flex flex-col justify-center items-center gap-2 w-[90%] md:w-[85%] px-4 mx-auto">
      <h1>Create Product</h1>
      {success && <span className="text-green-300">{success}</span>}
      {error && <span className="text-red-300">{error}</span>}
      <span className="flex flex-col md:flex-row gap-2 justify-start md:justify-between w-full md:w-1/3 items-start md:items-center">
        <label>Brand</label>
        <input
          className="bg-black text-white dark:bg-white dark:text-black rounded-xl p-3 w-full md:w-[80%] text-sm"
          type="text"
          value={product.brand}
          onChange={(e) => setProduct({ ...product, brand: e.target.value })}
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
          onChange={(e) => setProduct({ ...product, category: e.target.value })}
        />
      </span>
      <span className="flex flex-col md:flex-row gap-2 justify-start md:justify-between w-full md:w-1/3 items-start md:items-center">
        <label>Genre</label>
        <input
          className="bg-black text-white dark:bg-white dark:text-black rounded-xl p-3 w-full md:w-[80%] text-sm"
          type="text"
          value={product.genre}
          onChange={(e) => setProduct({ ...product, genre: e.target.value })}
        />
      </span>
      <span className="flex flex-col md:flex-row gap-2 justify-start md:justify-between w-full md:w-1/3 items-start md:items-center">
        <label>Shape</label>
        <input
          className="bg-black text-white dark:bg-white dark:text-black rounded-xl p-3 w-full md:w-[80%] text-sm"
          type="text"
          value={product.shape}
          onChange={(e) => setProduct({ ...product, shape: e.target.value })}
        />
      </span>
      <span className="flex flex-col md:flex-row gap-2 justify-start md:justify-between w-full md:w-1/3 items-start md:items-center">
        <label>Color</label>
        <input
          className="bg-black text-white dark:bg-white dark:text-black rounded-xl p-3 w-full md:w-[80%] text-sm"
          type="text"
          value={product.color}
          onChange={(e) => setProduct({ ...product, color: e.target.value })}
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
          onChange={(e) => setProduct({ ...product, image: e.target.value })}
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
      {success ? (
        <button
          onClick={handleClean}
          className="bg-black text-white dark:bg-white dark:text-black px-4 py-2 font-semibold rounded-sm"
        >
          Create New
        </button>
      ) : (
        <button
          onClick={handleCreate}
          className="bg-black text-white dark:bg-white dark:text-black px-4 py-2 font-semibold rounded-sm"
        >
          Create
        </button>
      )}
    </div>
  );
};

export default ProductCreate;
