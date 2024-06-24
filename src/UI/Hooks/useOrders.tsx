import { useState, useEffect } from "react";
import { Orders } from "../Interface/Orders";
import { OrderDetails } from "../Interface/OrderDetails";
import { useNavigate } from "react-router-dom";

interface useOrderProps {
  orderid: string;
}

export const useOrders = ({ orderid }: useOrderProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [orders, setOrders] = useState<Orders[]>([]);
  const [message, setMessage] = useState<string>("");
  const [orderDetails, setOrderDetails] = useState<OrderDetails[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchOrders = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://glasses-page-api-rest-production.up.railway.app/orders`,
          {
            method: "GET",
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();
        setOrders(data);
      } catch (error) {
        console.error("Error al obtener las órdenes", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const handleDelete = async (id: string) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://glasses-page-api-rest-production.up.railway.app/orders/${id}`,
        {
          method: "DELETE",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      setOrders(data);
      setMessage("Orden eliminada correctamente");

      setTimeout(() => {
        navigate("/Orders");
      }, 3000);
    } catch (error) {
      console.error("Error al eliminar la orden", error);
      setMessage("Error al eliminar la orden");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchOrderDetails = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://glasses-page-api-rest-production.up.railway.app/orders/products/${orderid}`,
          {
            method: "GET",
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();
        setOrderDetails(data);
      } catch (error) {
        setMessage(`Error al obtener los detalles de la order ${orderid}`);
      } finally {
        setLoading(false);
      }
    };

    fetchOrderDetails();
  }, [orderid]);

  return { loading, orders, orderDetails, message, handleDelete };
};
