import { useState, useEffect } from "react";
import { useSubmit } from "../Hooks/useSubmit";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import useAuth from "../Hooks/useAuth";

const SignInForm = () => {
  const { username, setUsername, email, password, setEmail, setPassword } =
    useSubmit();
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const { handleRegister } = useAuth();

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (error) {
      timer = setTimeout(() => {
        setError("");
      }, 5000);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [error]);

  return (
    <div className="text-black dark:text-white flex flex-col justify-center items-center gap-2 w-full h-full rounded-tr-xl rounded-br-xl">
      <div className="my-5 flex flex-col gap-1">
        <h1 className="text-sm md:text-2xl">Crear una cuenta</h1>
        <p className="text-xs md:text-base">
          ¡Disfrutarás de ofertas exclusivas, acceso prioritario y servicios
          especiales!
        </p>
      </div>
      <form
        className="flex flex-col gap-3 w-full md:w-[50%] text-white dark:text-black [&>input]:px-4 [&>input]:py-2 [&>input]:rounded-full [&>input]:border-[1px] [&>input]:border-black/50"
        onSubmit={(e) => handleRegister(e, setLoading)}
      >
        <input
          className="bg-gray-200 dark:bg-white"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="bg-gray-200 dark:bg-white"
          type="email"
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
          disabled={loading}
        >
          {loading ? (
            <>
              <AiOutlineLoading3Quarters className="spin" />
              <p>Registrando...</p>
            </>
          ) : (
            "Registrarte"
          )}
        </button>
        <div
          className={`h-auto m-auto w-fit text-xs md:text-sm font-bold text-red-500 ${
            error ? "visible" : "invisible"
          }`}
        >
          <p>{error ? error : "Aqui se muestra el error"}</p>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
