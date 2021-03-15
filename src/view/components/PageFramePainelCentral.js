import React from "react";

import { adminPages } from "../../model/adminAssets.json";

import UserBar from "./UserBar";
import MenuMinified from "./MenuMinified";
import TitleAdminsFrame from "./TitleAdminsFrame";
import Footer from "./Footer";
import PainelContributionTotal from "./PainelContributionTotal";

export default function PageFramePainelCentral() {

  return (
    <div id="PainelCentral">
      <UserBar/>
      <MenuMinified pages={adminPages}/>
      <TitleAdminsFrame/>
      <main className="row no-gutters justify-content-center">
        <PainelContributionTotal />
      </main>
      <Footer />
    </div>
  );
}
