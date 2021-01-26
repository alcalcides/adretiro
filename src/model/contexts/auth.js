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
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const { goTo } = useGoTo();

  useEffect(() => {
    const temp = localStorage.getItem(STORAGE_KEY_TOKEN);
    if (temp) {
      const token = temp.split(" ")[1].replace('"', "");
      try {
        authenticateFastlyAdmin(token);
      } catch (error) {
        authenticateFastly(token);
      }
    }

    setLoading(false);
  }, []);

  async function authenticate({ username, password }) {
    try {
      const response = await signIn({ username, password });

      if (response.status !== 200) {
        throw new Error(response.reason);
      }
      return await authenticateFastly(response.data.token);
    } catch (error) {
      throw new Error(error);
    }
  }

  async function authenticateAdmin({ username, password }) {
    try {
      const response = await signIn({ username, password });
      return await authenticateFastlyAdmin(response.data.token);
    } catch (error) {
      throw new Error(error);
    }
  }

  async function authenticateFastly(token) {
    try {
      const decoded = await jwt_decode(token);

      // ATTENTION: these lines should to be a function.
      // I did this way to avoid problems with useEffect constraints
      setIsAuthenticated(true);
      localStorage.setItem(
        STORAGE_KEY_TOKEN,
        JSON.stringify(`Bearer ${token}`)
      );
      api.defaults.headers.Authorization = `Bearer ${token}`;
      setUser(decoded);
      // until here

      return { success: true };
    } catch (error) {
      throw new Error(error);
    }
  }

  async function authenticateFastlyAdmin(token) {
    try {
      const decoded = await jwt_decode(token);
      if (decoded.sub !== "manager") {
        throw new Error("Rever credenciais");
      }

      setIsAuthenticated(true);
      localStorage.setItem(
        STORAGE_KEY_TOKEN,
        JSON.stringify(`Bearer ${token}`)
      );
      api.defaults.headers.Authorization = `Bearer ${token}`;
      setUser(decoded);

      setIsAdmin(true);

      return { success: true };
    } catch (error) {
      throw new Error(error);
    }
  }

  function logOut() {
    setIsAuthenticated(false);
    setIsAdmin(false);
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
        isAdmin,
        loading,
        authenticate,
        authenticateAdmin,
        authenticateFastly,
        handleLogOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
