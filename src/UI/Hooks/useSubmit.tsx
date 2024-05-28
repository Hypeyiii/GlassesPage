import { useContext } from "react";
import { AuthContext } from "../Context/authContext";

export function useSubmit() {
  const {
    jwt,
    // setJWT,
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
    jwt,
    username,
    setUsername,
    email,
    setEmail,
    password,
    setPassword,
  };
}
