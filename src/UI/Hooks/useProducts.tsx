import { useEffect, useState } from "react";
import { Products } from "../Interface/Products";

export default function useProducts() {
  const [products, setProducts] = useState<Products[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    try {
      setLoading(true);
      fetch("http://localhost:5000/glasses")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setProducts(data);
          setLoading(false);
        });
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [setLoading]);

  const handleDelete = async (id: string) => {
    try {
      setLoading(true);
      await fetch(`http://localhost:5000/glasses/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      setProducts(products.filter((product) => String(product.id) !== id));
      setLoading(false);
    } catch (error) {
      console.error("Error al eliminar producto", error);
      setLoading(false);
    }
  };

  return { products, loading, handleDelete };
}
