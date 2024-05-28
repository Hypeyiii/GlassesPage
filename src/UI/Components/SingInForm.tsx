import React, { useState, useEffect } from "react";
import { useSubmit } from "../Hooks/useSubmit";
import { auth } from "../Context/firebaseConfig.js";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const SingInForm = () => {
  const { email, password, setEmail, setPassword, setIsLogged, setUser } =
    useSubmit();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
        setLoading(false);
        setIsLogged(true);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode, errorMessage);
        setLoading(false);
        setError(errorMessage);
      });
  };

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
    <div className="text-black dark:text-white flex flex-col justify-center items-center gap-2 h-full rounded-tr-xl rounded-br-xl">
      <div className="my-5 text-black flex flex-col gap-1">
        <h1 className="text-sm md:text-2xl">Crear una cuenta</h1>
        <p className="text-xs md:text-base">
          ¡Disfrutarás de ofertas exclusivas, acceso prioritario y servicios
          especiales!
        </p>
      </div>
      <form
        className="flex flex-col gap-3 w-[50%] text-white dark:text-black [&>input]:px-4 [&>input]:py-2 [&>input]:rounded-full [&>input]:border-[1px] [&>input]:border-black/50"
        onSubmit={onSubmit}
      >
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

export default SingInForm;
