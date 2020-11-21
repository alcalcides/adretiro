import React from "react";

import "../styles/opacityClass.css";

export default function JacobSun({ sun, obtained }) {
  return (
    <div
      className={`col-6 col-sm-4 col-md-3 col-lg-2 
        bg-white p-3 border 
        d-flex justify-content-center
        ${!!obtained ? " opacity-1" : ""}
      `}
    >
      <img
        src={require(`../images/${sun}.png`)}
        className="img-fluid"
        alt={sun}
      />
    </div>
  );
}
