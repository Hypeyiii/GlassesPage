import { Link } from "react-router-dom";
import "../Components/Animations.css";
import useUsers from "../Hooks/useUsers";
import LoadingSpin from "../Design-System/loading-spin";

const Dashboard = () => {
  const { userData, loading } = useUsers();

  return (
    <section className="mt-32 text-black flex flex-col gap-4 items-center justify-center text-xl dark:text-white w-[85%] m-auto">
      <h1 className="text-2xl">
        Bienvenido {userData?.username} a la sección de administración
      </h1>
      <div className="flex flex-col justify-start items-start gap-2 text-sm">
        {loading ? (
          <div className="flex justify-center items-center">
            <LoadingSpin
              smallSize={100}
              mediumSize={140}
              gMediumSize={100}
              gSmallSize={80}
              text=""
            />
          </div>
        ) : (
          <>
            <p>ID de usuario: {userData?.id}</p>
            <p>Nombre de usuario: {userData?.username}</p>
            <p>Correo electrónico: {userData?.email}</p>
            <p>Rol: {userData?.role}</p>
          </>
        )}
      </div>
      <span className="flex flex-col gap-2 items-center justify-center w-full text-center">
        <Link
          to="Products"
          className="p-1 md:p-2 w-full md:w-[50%] border-[0.5px] text-black dark:text-white border-black dark:border-white dark:hover:text-black dark:hover:border-white dark:hover:bg-white hover:text-white hover:bg-black transition-all duration-300"
        >
          Productos
        </Link>
        <Link
          to="Users"
          className="p-1 md:p-2 w-full md:w-[50%] border-[0.5px] text-black dark:text-white border-black dark:border-white dark:hover:text-black dark:hover:border-white dark:hover:bg-white hover:text-white hover:bg-black transition-all duration-300"
        >
          Usuarios
        </Link>
      </span>
    </section>
  );
};

export default Dashboard;
