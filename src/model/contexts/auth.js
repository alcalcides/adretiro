import React, { createContext, useState, useEffect } from "react";
import useGoTo from "../../controller/hooks/useGoTo";
import { signIn } from "../services/auth";
import api from "../services/interface/api";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [user, setUser] = useState({});
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const { goTo } = useGoTo();

  useEffect(() => {
    const temp = localStorage.getItem("token");
    if (temp) {
      setIsAuthenticated(true); // ATTENTION SECURITY deveria checkar o token
      setUser(JSON.parse(localStorage.getItem("user")));
      // api.defaults.headers.Authorization = 'Bearer ' + response.token;
    }
    setLoading(false);
  }, []);

  async function authenticate() {
    const response = await signIn();

    setIsAuthenticated(true); // ATTENTION SECURITY
    const token = `Bearer ${response.token}`;
    localStorage.setItem("token", JSON.stringify(token));
    // api.defaults.headers.Authorization = token;
    setUser(response.user);
    localStorage.setItem("user", JSON.stringify(response.user));

    console.log(response);
    return response;
  }

  async function authenticateFastly(token, user) {
    setIsAuthenticated(true);

    localStorage.setItem("token", JSON.stringify(`Bearer ${token}`));
    api.defaults.headers.Authorization = `Bearer ${token}`;

    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));

    return { success: true };
  }

  function logOut() {
    setIsAuthenticated(false);
    setUser({});
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    // api.defaults.headers.Authorization = undefined;
  }

  function handleLogOut(e) {
    e.preventDefault();
    logOut();
    goTo("/");
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        loading,
        authenticate,
        authenticateFastly,
        handleLogOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
