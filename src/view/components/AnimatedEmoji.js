import React from "react";

import GreatThumbEmoji from "../images/thumbs-up_640-min.png";

export default function AnimatedEmoji() {
  return (
    <div>
      <img
        src={GreatThumbEmoji}
        alt="Great!"
        className="img-fluid UpAndDownAnimation"
      />
    </div>
  );
}
