import React from "react";
import { useHistory } from "react-router-dom";

import "../styles/logo.css";

import logo from "../images/logo-styled.svg";
import { siteName } from "../../model/adminAssets.json";

export default function Logo() {
  const history = useHistory();

  function goToHomePage(e) {
    e.preventDefault();
    history.push("/");
  }

  return (
    <img
      src={logo}
      id="logo"
      className="img-fluid"
      alt={siteName}
      onClick={goToHomePage}
    />
  );
}
