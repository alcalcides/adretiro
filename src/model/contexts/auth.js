import React, { createContext, useState, useEffect } from "react";
import useGoTo from "../../controller/hooks/useGoTo";
import jwt_decode from "jwt-decode";
import { signIn } from "../services/signIn";
import api from "../services/interface/api";
import Errors from "../Errors";
import { adminPages, membersPages } from "../adminAssets.json";

export const AuthContext = createContext();

export const STORAGE_KEY_TOKEN = "token@adretiro";

export default function AuthContextProvider({ children }) {
  const [user, setUser] = useState({});
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const { goTo } = useGoTo();

  useEffect(() => {
    async function getAuthorization() {
      try {
        const slugTemp = window.location.pathname.split("/")[1];

        const isMemberArea = membersPages.find(
          (value) => value.slug === slugTemp
        );
        const isAdminArea = adminPages.find((value) => value.slug === slugTemp);

        if (isMemberArea || isAdminArea) {
          const temp = localStorage.getItem(STORAGE_KEY_TOKEN);
          if (temp === null) {
            throw new Error(Errors.tokenLost);
          }

          const token = temp.split(" ")[1].replace('"', "");
          const { payload } = await setUpAuthentication(token);

          if (isAdminArea && payload.sub !== "manager") {
            throw new Error(Errors.credentialError);
          }
        }
      } catch (error) {
        logOut();
        alert(error);
        setLoading(false);
        window.scroll(0, 0);
        window.location.href = "/";
      } finally {
        setLoading(false);
      }
    }

    getAuthorization();
  }, []);

  async function authenticateAdmin({ username, password }) {
    const response = await authenticate({ username, password });

    if (response.payload.sub !== "manager") {
      throw new Error(Errors.credentialError);
    } else return response;
  }

  async function authenticate({ username, password }) {
    const response = await signIn({ username, password });
    if (response.status !== 200) {
      throw new Error(response.reason);
    }

    return await setUpAuthentication(response.data.token);
  }

  async function setUpAuthentication(token) {
    const decoded = await jwt_decode(token);

    setIsAuthenticated(true);
    localStorage.setItem(STORAGE_KEY_TOKEN, JSON.stringify(`Bearer ${token}`));
    api.defaults.headers.Authorization = `Bearer ${token}`;
    setUser(decoded);
    if (decoded.sub === "manager") {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }

    return { success: true, payload: decoded };
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
        handleLogOut,
        logOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
