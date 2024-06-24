import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../Context/authContext";
import { useSubmit } from "./useSubmit";

export const useAuth = () => {
  const { setIsLogged, user, setUser } = useContext(AuthContext);
  const { username, password, email } = useSubmit();

  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState(false);

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
          // setError("Error en la verificación de autenticación");
        } else {
          const data = await response.json();
          if (data && data.data) {
            setUser(data.data);
            setIsLogged(true);
          } else {
            throw new Error("Datos de usuario inválidos");
          }
        }
      } catch (error) {
        // console.error("Error al verificar la autenticación", error);
      }
    };

    verifyAuthentication();
  }, [setIsLogged, setUser]);

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      if (!username || !email || !password) {
        throw new Error("Todos los campos son obligatorios");
      }

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
        throw new Error(data.message || "Error al registrar el usuario");
      }

      console.log("Usuario registrado", data);
      setUser(data.user); // Asegúrate de guardar el usuario en el contexto
      setIsLogged(true);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("Ocurrió un error desconocido");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      if (!email || !password) {
        throw new Error("El email y la contraseña son obligatorios");
      }

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
        throw new Error(data.message || "Credenciales inválidas");
      }

      setUser(data.user);
      setIsLogged(true);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("Ocurrió un error desconocido");
      }
    } finally {
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

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (error) {
      timer = setTimeout(() => {
        setError("");
      }, 3000);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [error]);

  return { user, logout, handleLogin, handleRegister, error, loading };
};
