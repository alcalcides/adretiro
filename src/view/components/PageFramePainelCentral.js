import React from "react";

import adminAssets from "../../model/adminAssets.json";

const { adminPages } = adminAssets;

import UserBar from "./UserBar";
import MenuMinified from "./MenuMinified";
import TitleAdminsFrame from "./TitleAdminsFrame";
import Footer from "./Footer";
import PainelContributionTotal from "./PainelContributionTotal";
import PainelStickersAccount from "./PainelStickersAccount";
import PainelPlayersRank from "./PainelPlayersRank";

export default function PageFramePainelCentral() {

  return (
    <div id="PainelCentral">
      <UserBar/>
      <MenuMinified pages={adminPages}/>
      <TitleAdminsFrame/>
      <main className="row no-gutters px-3">
        <div className="col-12">
          <PainelContributionTotal />
          <PainelStickersAccount />
          <PainelPlayersRank />
        </div>
        
      </main>
      <Footer />
    </div>
  );
}
