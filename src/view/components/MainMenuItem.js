import React from "react";
import { Link } from "react-router-dom";

import "../styles/MainMenuItem.css";

export default function MainMenuItem({ label, slug }) {
  return (
    <li className="my-4 text-center">
      <Link to={slug}>{label}</Link>
    </li>
  );
}
