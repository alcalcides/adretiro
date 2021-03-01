import React from "react";

import "../styles/opacityClass.css";

export default function JacobSon({ sonsName, obtained, imgSource }) {
  return (
    <span
      className={`col-6 col-sm-4 col-md-3 col-lg-2 
        bg-white p-3 border border-secondary 
        d-flex justify-content-center
        ${!obtained ? " opacity-1" : ""}
      `}
    >
      <img src={imgSource} className="img-fluid" alt={sonsName} />
    </span>
  );
}
