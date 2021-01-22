import React, { createContext, useState, useEffect } from "react";
import useGoTo from "../../controller/hooks/useGoTo";
import jwt_decode from "jwt-decode";
import { signIn } from "../services/signIn";
import api from "../services/interface/api";

export const AuthContext = createContext();

export const STORAGE_KEY_TOKEN = "token@adretiro";

export default function AuthContextProvider({ children }) {
  const [user, setUser] = useState({});
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const { goTo } = useGoTo();

  useEffect(() => {
    const temp = JSON.parse(localStorage.getItem(STORAGE_KEY_TOKEN));
    if (temp) {
      setIsAuthenticated(true);
      authenticateFastly(localStorage.getItem(STORAGE_KEY_TOKEN).split(" ")[1]);
    }
    setLoading(false);
  }, []);

  async function authenticate({ username, password }) {
    try {
      const response = await signIn({ username, password });
      if (response.success === false) {
        throw new Error(response.reason);
      }

      return await authenticateFastly(response.data.token);
    } catch (error) {
      return error;
    }
  }

  async function authenticateFastly(token) {
    try {
      setIsAuthenticated(true);

      localStorage.setItem(
        STORAGE_KEY_TOKEN,
        JSON.stringify(`Bearer ${token}`)
      );
      api.defaults.headers.Authorization = `Bearer ${token}`;

      const decoded = await jwt_decode(token);
      setUser(decoded);

      return { success: true };
    } catch (error) {
      return { success: false };
    }
  }

  function logOut() {
    setIsAuthenticated(false);
    setUser({});
    localStorage.removeItem(STORAGE_KEY_TOKEN);
    api.defaults.headers.Authorization = null;
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
