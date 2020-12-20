import React, { useState, useEffect } from "react";

import PageFrameMeusFilhosDeJaco from "../../components/PageFrameMeusFilhosDeJaco";

import "../../styles/stickersFrame.css";

export default function MeusFilhosDeJaco() {
  const [myJacobSuns, setMyJacobSuns] = useState([]);

  useEffect(() => {
    setMyJacobSuns(["jose", "asser", "issacar", "juda", "gade"]); // ATTENTION get via api
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
    <PageFrameMeusFilhosDeJaco
      myJacobSuns={myJacobSuns}
      handleRewardRequest={handleRewardRequest}
    />
  );
}
