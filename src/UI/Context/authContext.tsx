import React, { createContext, useState, ReactNode } from "react";

export interface User {
  email: string | null;
  uid: string;
}

interface AuthContextProps {
  username: string;
  setUsername: (value: string) => void;
  email: string;
  setEmail: (value: string) => void;
  password: string;
  setPassword: (value: string) => void;
  isLogged: boolean;
  setIsLogged: (value: boolean) => void;
  user: User | null;
  setUser: (value: User | null) => void;
}

export const AuthContext = createContext<AuthContextProps>({
  username: "",
  setUsername: (value: string) => {value},
  email: "",
  setEmail: (value: string) => {value},
  password: "",
  setPassword: (value: string) => {value},
  isLogged: false,
  setIsLogged: (value: boolean) => {value},
  user: null,
  setUser: (value: User | null) => {value},
});

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  return (
    <AuthContext.Provider
      value={{
        username,
        setUsername,
        email,
        setEmail,
        password,
        setPassword,
        isLogged,
        setIsLogged,
        user,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
