import React from "react";

import "../styles/animationsForButton.css";
import "../styles/stylesForButtons.css"

export default function ButtonAnimated({ callToAction, actionToPerform, animation, specialStyles }) {
  
  return (
    <button
      className={"ButtonAnimated " + animation + " " + specialStyles}
      onClick={actionToPerform}
    >
      {callToAction}
    </button>
  );
}
