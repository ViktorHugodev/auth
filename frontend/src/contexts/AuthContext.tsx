import { createContext, ReactNode, useEffect, useState } from "react";
import { setCookie, parseCookies, destroyCookie } from "nookies";
import { api } from "../services/apiClient"
import Router from "next/router";

interface SignInCredentials {
  email: string;
  password: string;
}
interface User {
  email: string;
  permissions: string[];
  roles: string[];
}
interface AuthContextData {
  signIn(credentials: SignInCredentials): Promise<void>;
  isAuthenticated: boolean;
  user: User;
}
interface AuthProvider {
  children: ReactNode;
}
export const AuthContext = createContext({} as AuthContextData);
export function signOut() {
  destroyCookie(undefined, "next.token");
  destroyCookie(undefined, "next.refreshToken");
  Router.push("/");
}
export function AuthProvider({ children }: AuthProvider) {
  const [user, setUser] = useState<User>();
  const isAuthenticated = !!user;
  useEffect(() => {
    const { "next.token": token } = parseCookies();
    if (token) {
      api
        .get("me")
        .then((response) => {
          const { email, roles, permissions } = response.data;
          setUser({ email, roles, permissions });
          console.log(response);
        })
        .catch(() => {
          signOut();
        });
    }
  }, []);

  async function signIn({ email, password }: SignInCredentials) {
    try {
      const response = await api.post("sessions", {
        email,
        password,
      });
      const { permissions, roles, token, refreshToken } = response.data;
      setCookie(undefined, "next.token", token, {
        maxAge: 30 * 24 * 60 * 60,
        path: "/",
      });
      setCookie(undefined, "next.refreshToken", refreshToken, {
        maxAge: 30 * 24 * 60 * 60,
        path: "/",
      });
      setUser({
        email,
        permissions,
        roles,
      });

      api.defaults.headers["Authorization"] = `Bearer ${token}`;
      //Primeiro token a setar para que não falhe no primeiro login
      Router.push("/dashboard");
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        signIn,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
