import React from "react";

import GreatThumbEmoji from "../images/thumbs-up-4007573_640.png";

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
