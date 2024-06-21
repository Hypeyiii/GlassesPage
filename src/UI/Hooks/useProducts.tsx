import { useEffect, useState } from "react";
import { Products } from "../Interface/Products";

export default function useProducts() {
  const [products, setProducts] = useState<Products[]>([]);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<string>("");

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

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "https://glasses-page-api-rest-production.up.railway.app/glasses",
          {
            method: "GET",
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError("Error al obtener productos");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleCreate = async () => {
    try {
      setLoading(true);
      await fetch(
        `https://glasses-page-api-rest-production.up.railway.app/glasses`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(product),
        }
      );
      setSuccess("Producto creado correctamente!");
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError("Error al crear producto");
    }
  };

  const handleDelete = async (id: string) => {
    try {
      setLoading(true);
      await fetch(
        `https://glasses-page-api-rest-production.up.railway.app/glasses/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setProducts(products.filter((product) => String(product.id) !== id));
      setLoading(false);
    } catch (error) {
      console.error("Error al eliminar producto", error);
      setLoading(false);
    }
  };

  const handleClean = () => {
    setProduct({
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
    setSuccess("");
  };

  const getProduct = async (id: string) => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://glasses-page-api-rest-production.up.railway.app/glasses/${id}`,
        {
          method: "GET",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      setProduct(data);
      setLoading(false);
    } catch (error) {
      console.error("Error al obtener producto", error);
      setLoading(false);
    }
  };

  return {
    products,
    loading,
    error,
    success,
    handleCreate,
    handleDelete,
    setProduct,
    handleClean,
    getProduct,
    product,
  };
}
