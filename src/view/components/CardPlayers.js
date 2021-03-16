import React, { useState } from "react";
import { GiMouse } from "react-icons/gi";
import ModalProfileGlance from "./ModalProfileGlance";
import { MdPerson } from "react-icons/md";
import { IconContext } from "react-icons";

export default function CardPlayers({
  fullName,
  username,
  stickersCount,
  place,
}) {
  const [display, setDisplay] = useState(false);
  const [isShownProfileGlance, setIsShownProfileGlance] = useState(false);

  function toggleDisplay() {
    setDisplay(!display);
  }

  function closeProfileGlance() {
    setIsShownProfileGlance(false);
  }
  function showProfileGlance() {
    setIsShownProfileGlance(true);
  }

  function defineButtonColor(display) {
    if (display) return "#00d";
    else return "#FFF";
  }

  return (
    <div className="card bg-primary col-12 m-1">
      <div className="text-right clickableUI">
        {display && (
          <IconContext.Provider
            value={{ color: "#646567", size: "1.8rem" }}
            className="col-sm"
          >
            <MdPerson onClick={showProfileGlance} cursor="pointer" />
          </IconContext.Provider>
        )}
        <GiMouse
          color={defineButtonColor(display)}
          size="1.8rem"
          onClick={toggleDisplay}
          cursor="pointer"
        />
      </div>
      <div className="card-body mt-3">
        <p className="card-title">
          <span className="">{place}º</span>
          <span className="text-dark h5">
            {" "}
            - com {stickersCount} filhos de Jacó
          </span>
        </p>
        <div className="card-text text-center">
          {display && (
            <div>
              <h5 className="h1">{fullName}</h5>
              <p className="h5">{username}</p>
            </div>
          )}
        </div>
      </div>
      {isShownProfileGlance && (
        <ModalProfileGlance
          username={username}
          isVisible={isShownProfileGlance}
          handleClose={closeProfileGlance}
        />
      )}
    </div>
  );
}
