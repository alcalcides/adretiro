import React from "react";

import { membersPages } from "../../model/adminAssets.json";

import MenuMinified from "./MenuMinified";
import ProfileUpdate from "./ProfileUpdate";
import Footer from "./Footer";

export default function PageFrameMeuPerfil() {

  return (
    <div id="MeuPerfil">
      <MenuMinified pages={membersPages}/>
      <h2 className="memberAreaPageTitle">Meu Perfil</h2>
      <main className="row no-gutters justify-content-center">
        <ProfileUpdate />
      </main>
      <Footer />
    </div>
  );
}
