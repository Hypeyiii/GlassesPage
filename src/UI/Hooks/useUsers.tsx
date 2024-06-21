import { useEffect, useState } from "react";
import { Users } from "../Interface/Users";
import { useAuth } from "./useAuth";

export default function useUsers() {
  const { user } = useAuth();

  const [users, setUsers] = useState<Users[]>([]);
  const [userData, setUserData] = useState<Users | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    try {
      setLoading(true);
      fetch("https://glasses-page-api-rest-production.up.railway.app/users")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setUsers(data);
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
      await fetch(
        `https://glasses-page-api-rest-production.up.railway.app/users/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setLoading(false);
    } catch (error) {
      console.error("Error al eliminar producto", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchUserData = async () => {
      if (user?.id) {
        try {
          const response = await fetch(
            `https://glasses-page-api-rest-production.up.railway.app/users/${user.id}`,
            {
              method: "GET",
              credentials: "include",
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          const data = await response.json();
          setUserData(data);
        } catch (error) {
          console.error("Error al obtener usuario", error);
        }
      }
    };

    fetchUserData();
  }, [user?.id]);

  return { loading, handleDelete, users, userData };
}
