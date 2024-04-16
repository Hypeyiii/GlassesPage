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
});

export function AuthProvider({ children }: Auth) {
  const [jwt, setJWT] = useState(false);
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <AuthContext.Provider
      value={{
        jwt,
        setJWT,
        username,
        setUsername,
        email,
        setEmail,
        password,
        setPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
