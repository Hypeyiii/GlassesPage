import { useCallback, useContext } from "react";
import { AuthContext } from "../Context/authContext";

export function useSubmit() {
  const {
    jwt,
    setJWT,
    username,
    setUsername,
    email,
    setEmail,
    password,
    setPassword,
  } = useContext(AuthContext);

  const login = useCallback(() => {
    setJWT(true)
  }, [setJWT]);

  return {
    isLogged: Boolean(jwt),
    login,
    jwt,
    username,
    setUsername,
    email,
    setEmail,
    password,
    setPassword,
  };
}
