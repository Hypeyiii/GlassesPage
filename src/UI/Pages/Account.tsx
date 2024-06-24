import { useAuth } from "../Hooks/useAuth";
import { useEffect, useState } from "react";
import { Users } from "../Interface/Users";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import "../Components/Animations.css";
import { Link } from "react-router-dom";

const Account = () => {
  const { logout, user } = useAuth();

  const [loading, setLoading] = useState<boolean>(false);
  const [userData, setUserData] = useState<Users | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      if (user?.id) {
        setLoading(true);
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
        } finally {
          setLoading(false);
        }
      }
    };

    fetchUserData();
  }, [user?.id]);

  return (
    <div className="m-auto w-[85%] mt-32 text-black dark:text-white">
      <h1 className="text-2xl font-bold text-center">Mi cuenta</h1>
      <p className="text-center text-gray-500">
        Bienvenido {loading ? "Obteniendo..." : userData?.username}
      </p>
      <hr className="my-4" />
      {loading ? (
        <div className="flex m-auto mt-2 justify-center items-center size-32 text-black dark:text-white">
          <AiOutlineLoading3Quarters className="spin size-32 text-black dark:text-white" />
        </div>
      ) : (
        <>
          <h2 className="text-lg font-bold">Datos de usuario</h2>
          <p>Nombre de usuario: {userData?.username}</p>
          <p>Correo electrónico: {userData?.email}</p>
        </>
      )}
      <hr className="my-4" />
      <section className="w-full flex flex-row gap-3 justify-center items-center m-auto">
        <button
          className="px-4 py-2 border rounded-xl border-black dark:border-white dark:text-white dark:bg-black bg-white hover:text-white hover:bg-black transition-all duration-300 ease-in-out dark:hover:bg-white dark:hover:text-black"
          onClick={() => logout()}
        >
          Cerrar Sesión
        </button>
        <Link to="/Orders">
          <button className="px-4 py-2 border rounded-xl border-black dark:border-white dark:text-white dark:bg-black bg-white hover:text-white hover:bg-black transition-all duration-300 ease-in-out dark:hover:bg-white dark:hover:text-black">
            Ver mis pedidos
          </button>
        </Link>
      </section>
    </div>
  );
};

export default Account;
