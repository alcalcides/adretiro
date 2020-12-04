import React, { useState, useEffect, createContext } from "react";

import "../../styles/stickersFrame.css";
import { getUserNameFromURL } from "../../../model/library/utils";
import MeusFilhosDeJacoFrame from "../../components/MeusFilhosDeJacoFrame";

export const Context = createContext();

export default function MeusFilhosDeJaco() {
  const [userName, setUserName] = useState("");
  const [myJacobSuns, setMyJacobSuns] = useState([]);

  useEffect(() => {
    setUserName(getUserNameFromURL());
    setMyJacobSuns(["jose", "asser", "issacar", "juda", "gade"]);
  }, []);

  function handleRewardRequest(e) {
    e.preventDefault();
    if (myJacobSuns.length < 12) {
      const stickersLacking = 12 - myJacobSuns.length;
      return alert(
        `Acumule mais ${stickersLacking} filhos de Jacó para pedir seu prêmio.`
      );
    } else {
      return alert("Em construção");
    }
  }

  return (
    <Context.Provider value={{ userName, myJacobSuns, handleRewardRequest }}>
      <MeusFilhosDeJacoFrame />
    </Context.Provider>
  );
}
