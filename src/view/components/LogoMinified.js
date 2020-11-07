import React from "react";
import { useHistory } from "react-router-dom";

import "../styles/logo.css";

import logoMinified from "../images/logo-without-background.svg";
import { siteName } from "../../model/adminAssets.json";

export default function Logo() {
  const history = useHistory();

  const goToHomePage = (e) => {
    e.preventDefault();
    history.push("/");
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
