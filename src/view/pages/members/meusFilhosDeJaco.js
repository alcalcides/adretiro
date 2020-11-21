import React, { useState, useEffect } from "react";

import "../../styles/stickersFrame.css";
import { membersPages } from "../../../model/adminAssets.json";
import { getUserNameFromURL } from "../../../model/library/utils";

import MenuMinified from "../../components/MenuMinified";
import JacobsSuns from "../../components/JacobsSuns";

export default function MeusFilhosDeJaco() {
  const [userName, setUserName] = useState("");
  const [myJacobSuns, setMyJacobSuns] = useState([]);

  useEffect(() => {
    setUserName(getUserNameFromURL());
    setMyJacobSuns(["jose", "asser", "issacar", "juda", "gade"]);
  }, [])

  return (
    <div id="MeusFilhosDeJaco">
      <MenuMinified
        pages={membersPages}
        userName={userName}
        bgColor="dark"
        variantColor="dark"
      />
      <h2 className="memberAreaPageTitle">Meus filhos de Jacó</h2>
      <main className="row no-gutters justify-content-center">
        <div className="col-9" id="stickersFrame">
          <JacobsSuns myJacobSuns={myJacobSuns}/>
        </div>
      </main>
    </div>
  );
}
