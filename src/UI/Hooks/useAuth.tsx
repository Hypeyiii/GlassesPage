import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../Context/authContext";
import { useSubmit } from "./useSubmit";

export const useAuth = () => {
  const { setIsLogged, user, setUser } = useContext(AuthContext);

  const { username, password, email } = useSubmit();

  const [error, setError] = useState("");

  useEffect(() => {
    const verifyAuthentication = async () => {
      try {
        const response = await fetch(
          "https://glasses-page-api-rest-production.up.railway.app/users/verify",
          {
            method: "GET",
            credentials: "include",
          }
        );

        if (!response.ok) {
          setError("Error en la conexión");
        } else {
          const data = await response.json();
          console.log("Usuario autenticado", data);

          if (data) {
            setUser(data.data);
            setIsLogged(true);
          } else {
            throw new Error("Datos de usuario inválidos");
          }
        }
      } catch (error) {
        console.error("Error al verificar la autenticación", error);
      }
    };

    verifyAuthentication();
  }, [setIsLogged, setUser]);

  const handleRegister = async (
    e: React.FormEvent<HTMLFormElement>,
    setLoading: (arg0: boolean) => void
  ) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const response = await fetch(
        "https://glasses-page-api-rest-production.up.railway.app/users/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, email, password }),
          credentials: "include",
        }
      );
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Error al registrarse");
      }

      setIsLogged(true);
    } catch (error) {
      setError("Error al registrarse");
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (
    e: React.FormEvent<HTMLFormElement>,
    setLoading: (arg0: boolean) => void
  ) => {
    e.preventDefault();

    try {
      setLoading(true);
      const response = await fetch(
        "https://glasses-page-api-rest-production.up.railway.app/users/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
          credentials: "include",
        }
      );

      const data = await response.json();

      if (!response.ok) {
        setLoading(false);
        if (email.length === 0) {
          setError("El email es requerido");
        }

        setError("Credenciales invalidas");
      }

      if (data) {
        setIsLogged(true);
        setLoading(false);
      }
    } catch (error) {
      setError("Error en la conexión");
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      const response = await fetch(
        "https://glasses-page-api-rest-production.up.railway.app/users/logout",
        {
          method: "GET",
          credentials: "include",
        }
      );

      if (!response.ok) {
        throw new Error("Error al cerrar sesión");
      }

      setIsLogged(false);
      setUser(null);
    } catch (error) {
      setError("Error al salir de la sesión");
    }
  };

  return { user, logout, handleLogin, handleRegister, error };
};
