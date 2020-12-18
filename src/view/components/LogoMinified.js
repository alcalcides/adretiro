import React from "react";
import useGoTo from "../../controller/hooks/useGoTo";

import { siteName } from "../../model/adminAssets.json";

import logoMinified from "../images/logo-without-background.svg";
import "../styles/logo.css";

export default function Logo() {
  const { goTo} = useGoTo();

  const goToHomePage = (e) => {
    e.preventDefault();
    goTo("/");
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
