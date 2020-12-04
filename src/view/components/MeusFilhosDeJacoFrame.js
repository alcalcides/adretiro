import React, { useContext } from "react";

import { membersPages } from "../../model/adminAssets.json";
import { Context } from "../pages/members/meusFilhosDeJaco";

import MenuMinified from "./MenuMinified";
import JacobsSuns from "./JacobsSuns";
import ButtonAnimated from "./ButtonAnimated";
import Footer from "./Footer";

export default function MeusFilhosDeJacoFrame() {
  const { userName, myJacobSuns, handleRewardRequest } = useContext(Context);

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
