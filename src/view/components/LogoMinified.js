import React, { useContext } from "react";
import useGoTo from "../../controller/hooks/useGoTo";

import { siteName } from "../../model/adminAssets.json";
import { AuthContext } from "../../model/contexts/auth";

import logoMinified from "../images/logo-without-background.svg";
import "../styles/logo.css";

export default function Logo() {
  const { isAuthenticated, user } = useContext(AuthContext);
  const { goTo } = useGoTo();

  const goToHomePage = (e) => {
    e.preventDefault();

    if (isAuthenticated) {
      goTo(`/meus-filhos-de-jaco/${user.username}`);
    } 
    else {
      goTo("/");
    }
  };

  return (
    <img
      src={logoMinified}
      id="logo"
      className="img-fluid"
      alt={siteName}
      onClick={goToHomePage}
    />
  );
}
