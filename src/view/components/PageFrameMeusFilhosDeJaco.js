import React from "react";

import { membersPages } from "../../model/adminAssets.json";

import MenuMinified from "./MenuMinified";
import JacobsSuns from "./JacobsSuns";
import ButtonAnimated from "./ButtonAnimated";
import Footer from "./Footer";
import TitleMembersFrame from "./TitleMembersFrame";
import UserBar from "./UserBar";

export default function PageFrameMeusFilhosDeJaco({
  handleRewardRequest,
  myJacobSuns
}) {

  return (
    <div id="MeusFilhosDeJaco" className="container-fluid px-0">
      <UserBar/>
      <div className="row no-gutters">
        <div className="col-12">
          <MenuMinified pages={membersPages}/>
        </div>
      </div>
      <TitleMembersFrame/>
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
