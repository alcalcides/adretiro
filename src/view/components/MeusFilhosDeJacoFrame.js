import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

import { membersPages } from "../../model/adminAssets.json";
import { AuthContext } from "../../model/contexts/auth";

import MenuMinified from "./MenuMinified";
import JacobsSuns from "./JacobsSuns";
import ButtonAnimated from "./ButtonAnimated";
import Footer from "./Footer";

export default function MeusFilhosDeJacoFrame({
  handleRewardRequest,
  myJacobSuns,
}) {
  const history = useHistory();
  const { logOut } = useContext(AuthContext);

  function handleLogOut(e){
    e.preventDefault();
    logOut();
    history.push("/acessar-minha-conta");

  }

  return (
    <div id="MeusFilhosDeJaco" className="container-fluid px-0">
      <div className="row no-gutters">
        <div className="col-12">
          <MenuMinified
            pages={membersPages}
            bgColor="dark"
            variantColor="dark"
          />
        </div>
      </div>
      <div className="row no-gutters">
        <h2 className="memberAreaPageTitle col-12">Meus filhos de Jacó</h2>
      </div>
      <button onClick={handleLogOut}>logout</button>
      <main>
        <div className="row no-gutters justify-content-center">
          <div className="col-9" id="stickersFrame">
            <JacobsSuns myJacobSuns={myJacobSuns} />
          </div>
        </div>
        <div className="row no-gutters">
          <div className="col my-3 text-center" id="rewardRequest">
            <ButtonAnimated
              callToAction="Quero meu brinde"
              actionToPerform={handleRewardRequest}
              animation="myBig"
              specialStyles="myRed"
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
