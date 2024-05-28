import { useSubmit } from "../Hooks/useSubmit";
import { auth } from "../Context/firebaseConfig";
import { signOut } from "firebase/auth";
import { useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Account = () => {
  const { user, setIsLogged, setEmail, setPassword } = useSubmit();
  const [loading, setLoading] = useState(false);

  const handleLogout = () => {
    setLoading(true);
    signOut(auth)
      .then(() => {
        setLoading(false);
        setIsLogged(false);
        setEmail("");
        setPassword("");
        console.log("Sesión cerrada");
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  };

  return (
    <div className="m-auto w-[85%]">
      {user ? (
        <>
          <h1>Correo electrónico: {user.email}</h1>
          {/* <h1>ID: {user.uid}</h1> */}
        </>
      ) : (
        <h1>No user information available</h1>
      )}
      <button
        className="px-4 py-2 border rounded-xl m-auto flex flex-row gap-1 items-center"
        onClick={handleLogout}
      >
        {loading ? (
          <>
            <AiOutlineLoading3Quarters className="animate-spin" />
            Cerrando Sesión
          </>
        ) : (
          "Cerrar sesión"
        )}
      </button>
    </div>
  );
};

export default Account;
