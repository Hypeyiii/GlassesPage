import { useContext } from "react";
import { AuthContext } from "../Context/authContext";

export function useSubmit() {
  const {
    user,
    setUser,
    username,
    setUsername,
    email,
    setEmail,
    password,
    setPassword,
    isLogged,
    setIsLogged,
  } = useContext(AuthContext);

  return {
    isLogged,
    setIsLogged,
    // login,
    user,
    setUser,
    username,
    setUsername,
    email,
    setEmail,
    password,
    setPassword,
  };
}
