import React, { useEffect, useState } from "react";

export default function CardContribution({ label, jacobsSun, status }) {
  const [active, setActive] = useState(false);

  function handleRevealSticker() {
    alert("em construção"); //ATTENTION server side and refresh
  }

  useEffect(() => {
    if (status === "revealed") {
      setActive(true);
    }
  }, [status]);

  return (
    <div className="card col-sm-4 col-md-2 m-1 bg-warning">
      <div className={`card-body text-dark ${!active && "opacity-1"}`}>
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
