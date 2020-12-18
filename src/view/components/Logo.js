import React from "react";

import useGoTo from "../../controller/hooks/useGoTo";
import { siteName } from "../../model/adminAssets.json";

import logo from "../images/logo-styled.svg";
import "../styles/logo.css";

export default function Logo() {
  const { goTo } = useGoTo();
 
  function goToHomePage(e) {
      e.preventDefault();
      goTo("/");    
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
