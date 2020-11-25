import React, { useState, useEffect } from "react";

import "../../styles/stickersFrame.css";
import { membersPages } from "../../../model/adminAssets.json";
import { getUserNameFromURL } from "../../../model/library/utils";

import MenuMinified from "../../components/MenuMinified";
import JacobsSuns from "../../components/JacobsSuns";
import Footer from "../../components/Footer";

export default function MeusFilhosDeJaco() {
  const [userName, setUserName] = useState("");
  const [myJacobSuns, setMyJacobSuns] = useState([]);

  useEffect(() => {
    setUserName(getUserNameFromURL());
    setMyJacobSuns(["jose", "asser", "issacar", "juda", "gade"]);
  }, []);

  return (
    <div id="MeusFilhosDeJaco" className="container-fluid px-0">
      <div className="row no-gutters">
        <div className="col-12">
          <MenuMinified
            pages={membersPages}
            userName={userName}
            bgColor="dark"
            variantColor="dark"
          />
        </div>
      </div>
      <div className="row no-gutters">
        <h2 className="memberAreaPageTitle col-12">Meus filhos de Jacó</h2>
      </div>
      <main>
        <div className="row no-gutters justify-content-center">
          <div className="col-9" id="stickersFrame">
            <JacobsSuns myJacobSuns={myJacobSuns} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
