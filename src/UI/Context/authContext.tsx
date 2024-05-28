import { createContext, useState } from "react";

export interface Auth {
  children: React.ReactNode;
}

export const AuthContext = createContext({
  jwt: false,
  setJWT: (value: boolean) => {
    value;
  },
  username: "",
  setUsername: (value: string) => {
    value;
  },
  email: "",
  setEmail: (value: string) => {
    value;
  },
  password: "",
  setPassword: (value: string) => {
    value;
  },

  isLogged: false,
  setIsLogged: (value: boolean) => {
    value;
  },

  user: null,

  setUser: (value: null) => {
    value;
  },
});

export function AuthProvider({ children }: Auth) {
  const [jwt, setJWT] = useState(false);
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        jwt,
        setJWT,
        username,
        setUsername,
        email,
        setEmail,
        password,
        setPassword,
        isLogged,
        setIsLogged,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
