import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../Context/authContext";
import { useSubmit } from "./useSubmit";
import { Users } from "../Interface/Users";

const useAuth = () => {
  const { setIsLogged } = useContext(AuthContext);

  const { username, password, email } = useSubmit();

  const [user, setUser] = useState<Users | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const verifyAuthentication = async () => {
      try {
        const response = await fetch("http://localhost:5000/users/verify", {
          method: "GET",
          credentials: "include",
        });

        if (!response.ok) {
          throw new Error("No autenticado");
        }

        const data = await response.json();
        console.log("Usuario autenticado", data);

        if (data) {
          setUser(data.data);
          setIsLogged(true);
        } else {
          throw new Error("Datos de usuario inválidos");
        }
      } catch (error) {
        console.error("Error al verificar la autenticación", error);
      }
    };

    verifyAuthentication();
  }, [setIsLogged]);

  const handleRegister = async (
    e: React.FormEvent<HTMLFormElement>,
    setLoading: (arg0: boolean) => void
  ) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const response = await fetch("http://localhost:5000/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
        credentials: "include",
      });
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

    setError("");
    try {
      setLoading(true);
      const response = await fetch("http://localhost:5000/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
        credentials: "include",
      });
      const data = await response.json();

      if (!response.ok) {
        setLoading(false);
        throw new Error(data.error || "Error al iniciar sesión");
      }

      setIsLogged(true);
      setLoading(false);
    } catch (error) {
      setError("Error al iniciar sesión");
    }
  };

  const logout = async (setLoading: (arg0: boolean) => void) => {
    try {
      setLoading(true);
      const response = await fetch("http://localhost:5000/users/logout", {
        method: "GET",
        credentials: "include",
      });

      if (!response.ok) {
        setLoading(false);
        throw new Error("Error al cerrar sesión");
      }

      setIsLogged(false);
      setUser(null);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("Error al cerrar sesión", error);
    }
  };

  return { user, logout, handleLogin, handleRegister, error };
};

export default useAuth;
