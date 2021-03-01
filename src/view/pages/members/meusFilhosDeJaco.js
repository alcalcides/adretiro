import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../../model/contexts/auth";
import PageFrameMeusFilhosDeJaco from "../../components/PageFrameMeusFilhosDeJaco";
import { getMyJacobsSons } from "../../../model/services/getMyJacobsSons";
import "../../styles/stickersFrame.css";
import { requestReward } from "../../../model/services/requestReward";

export default function MeusFilhosDeJaco() {
  const [myJacobSons, setMyJacobSons] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    async function retrivesMyJacobsSons() {
      const sons = await getMyJacobsSons(user.id);
      setMyJacobSons(sons);
    }
    retrivesMyJacobsSons();
  }, [user.id]);

  async function handleRewardRequest(e) {
    e.preventDefault();
    if (myJacobSons.length < 12) {
      const stickersLacking = 12 - myJacobSons.length;
      return alert(
        `Acumule mais ${stickersLacking} filhos de Jacó para pedir seu prêmio.`
      );
    } else {
      const response = await requestReward(user.id);

      if (response.success === false) {
        console.log(response);
        alert(response.message);
      } else if (response.data.success === true) {
        // code says: congratulations!
        alert(
          "Parabéns! Seu brinde pode ser retirado junto à equipe administrativa. Contribua para continuar colecionando!"
        );
        window.location.reload();
      } else {
        console.log(response);
        alert("Error", response);
      }
    }
  }

  return (
    <PageFrameMeusFilhosDeJaco
      myJacobSons={myJacobSons}
      handleRewardRequest={handleRewardRequest}
    />
  );
}
