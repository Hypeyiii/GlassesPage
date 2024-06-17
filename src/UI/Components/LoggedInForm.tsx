import { AiOutlineLoading3Quarters } from "react-icons/ai";
import useAuth from "../Hooks/useAuth";
import { useSubmit } from "../Hooks/useSubmit";
import { useState } from "react";

const LoggedInForm = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const { email, password, setEmail, setPassword } = useSubmit();
  const { handleLogin, error } = useAuth();

  return (
    <div className="text-black dark:text-white flex flex-col justify-center items-center gap-2 h-full rounded-tr-xl rounded-br-xl w-full">
      <h1 className="text-sm text-black dark:text-white md:text-2xl">Iniciar sesión</h1>
      <p className="text-xs text-black dark:text-white md:text-base">
        ¡Si eres propietario de una cuenta inicia sesión para disfrutar de ofertas exclusivas dentro de nuestra tienda!
      </p>
      <form
        onSubmit={(e) => handleLogin(e, setLoading)}
        className="flex flex-col gap-3 w-full md:w-[50%] text-white dark:text-black [&>input]:px-4 [&>input]:py-2 [&>input]:rounded-full [&>input]:border-[1px] [&>input]:border-black/50"
      >
        <input
          className="bg-gray-200 dark:bg-white"
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="bg-gray-200 dark:bg-white"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="px-4 py-2 border bg-gray-600 dark:bg-white flex flex-row gap-1 items-center justify-center"
        >
          {loading ? (
            <>
              <AiOutlineLoading3Quarters className="spin" />
              <p>Iniciando sesión...</p>
            </>
          ) : (
            "Iniciar sesión"
          )}
        </button>
        {error && <p className="text-red-500">{error}</p>}
      </form>
    </div>
  );
};

export default LoggedInForm;
