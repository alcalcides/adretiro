import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../../model/contexts/auth"
import PageFrameMeusFilhosDeJaco from "../../components/PageFrameMeusFilhosDeJaco";
import { getMyJacobsSons } from "../../../model/services/getMyJacobsSons"
import "../../styles/stickersFrame.css";

export default function MeusFilhosDeJaco() {
  const [myJacobSuns, setMyJacobSuns] = useState([]);
  const { user } = useContext(AuthContext)

  useEffect(() => {
    async function retrivesMyJacobsSons() {
      const sons = await getMyJacobsSons(user.id)
      setMyJacobSuns(sons);
    }
    retrivesMyJacobsSons();
  }, [user.id]);

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
