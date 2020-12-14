import React, { useState, useEffect , useContext } from "react";
import { useHistory } from "react-router-dom";

import { AuthContext } from "../../../model/contexts/auth";

import PageFrameMeusFilhosDeJaco from "../../components/PageFrameMeusFilhosDeJaco";

import "../../styles/stickersFrame.css";

export default function MeusFilhosDeJaco() {
  const [myJacobSuns, setMyJacobSuns] = useState([]);
  const history = useHistory();
  const { logOut } = useContext(AuthContext);

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
    window.scroll(0, 0);
    history.push("/acessar-minha-conta");
  }
  
  return (
    <PageFrameMeusFilhosDeJaco
      myJacobSuns={myJacobSuns}
      handleRewardRequest={handleRewardRequest}
      handleLogOut={handleLogOut}
    />
  );
}
