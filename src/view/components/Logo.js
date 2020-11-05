import React from "react";

import logo from "../images/logo-styled.svg";
import { siteName } from "../../model/adminAssets.json";

export default function Logo() {
  return <img src={logo} className="img-fluid" alt={siteName} />;
}
