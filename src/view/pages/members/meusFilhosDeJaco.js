import React, { useState, useEffect , useContext } from "react";

import { AuthContext } from "../../../model/contexts/auth";
import useGoTo from "../../../controller/hooks/useGoTo";

import PageFrameMeusFilhosDeJaco from "../../components/PageFrameMeusFilhosDeJaco";

import "../../styles/stickersFrame.css";

export default function MeusFilhosDeJaco() {
  const [myJacobSuns, setMyJacobSuns] = useState([]);
  const { logOut } = useContext(AuthContext);
  const { goTo } = useGoTo();

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

  function handleLogOut(e){
    e.preventDefault();
    logOut();
    goTo("/");
  }
  
  return (
    <PageFrameMeusFilhosDeJaco
      myJacobSuns={myJacobSuns}
      handleRewardRequest={handleRewardRequest}
      handleLogOut={handleLogOut}
    />
  );
}
