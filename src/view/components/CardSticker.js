import React, { useEffect, useState } from "react";
import AnimatedEmoji from "./AnimatedEmoji";

export default function CardSticker({ label, jacobsSun, status }) {
  const [active, setActive] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  function handleRevealSticker() {
    setIsPlaying(true);
    setTimeout(() => {
      alert("em construção"); //ATTENTION server side and refresh
      setIsPlaying(false);
    }, 3000);

    
  }

  useEffect(() => {
    if (status === "revealed") {
      setActive(true);
    }
  }, [status]);

  if (isPlaying)
    return (
      <div className="card col-sm-4 col-md-2 m-1 bg-warning">
        <div className="card-body m-3">
          <AnimatedEmoji />
        </div>
      </div>
    );
  else
    return (
      <div className="card col-sm-4 col-md-2 m-1 bg-warning">
        <div className="card-body text-dark">
          <h5 className="card-title">{label}</h5>
          {active && (
            <h6 className="card-subtitle text-light m-2 h3">{jacobsSun}</h6>
          )}
        </div>
        {!active && (
          <button
            className="btn btn-warning border rounded-0"
            onClick={handleRevealSticker}
          >
            Revelar
          </button>
        )}
      </div>
    );
}
