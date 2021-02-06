import React from "react";

import { adminPages } from "../../model/adminAssets.json";

import UserBar from "./UserBar";
import MenuMinified from "./MenuMinified";
import TitleAdminsFrame from "./TitleAdminsFrame";
import Footer from "./Footer";

export default function PageFramePainelCentral() {

  return (
    <div id="PainelCentral">
      <UserBar/>
      <MenuMinified pages={adminPages}/>
      <TitleAdminsFrame/>
      <main className="row no-gutters justify-content-center">
        Painel Central aqui
      </main>
      <Footer />
    </div>
  );
}
