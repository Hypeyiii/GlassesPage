import { useSubmit } from "../Hooks/useSubmit";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Context/firebaseConfig";
import { useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const LoggedInForm = () => {
  const { email, password, setEmail, setPassword, setIsLogged, setUser } =
    useSubmit();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
        setLoading(false);
        setIsLogged(true);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
        setLoading(false);
      });
  };

  return (
    <div className="text-black dark:text-white flex flex-col justify-center items-center gap-2 h-full rounded-tr-xl rounded-br-xl w-full">
      <h1 className="text-sm md:text-xl text-black">Iniciar sesión</h1>
      <form
        onSubmit={handleLogin}
        className="flex flex-col gap-3 text-white dark:text-black [&>input]:px-4 [&>input]:py-2 [&>input]:rounded-full [&>input]:border-[1px] [&>input]:border-black/50"
      >
        <input
          className="bg-gray-200 dark:bg-white"
          type="text"
          placeholder="Name"
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
