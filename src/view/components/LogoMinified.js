import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import useGoTo from "../../controller/hooks/useGoTo";

import adminAssets from "../../model/adminAssets.json";
const { siteName } = adminAssets;

import { AuthContext } from "../../model/contexts/auth";

import logoMinified from "../images/logo-without-background.svg";
import "../styles/logo.css";

export default function Logo() {
  const { username } = useParams();
  const { isAuthenticated } = useContext(AuthContext);
  const { goTo } = useGoTo();

  const handleLogoClick = (e) => {
    e.preventDefault();

    if (isAuthenticated) {
      goTo(`/meus-filhos-de-jaco/${username}`);
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
      alt={`Logo da ${siteName}`}
      onClick={handleLogoClick}
    />
  );
}
