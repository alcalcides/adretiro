import React from "react";

import logo from "../images/logo-styled.svg";
import { siteName } from "../../model/adminAssets.json";

export default function Logo({ size }) {
  return <img src={logo} width={size} alt={siteName} />;
}