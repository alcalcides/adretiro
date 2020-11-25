import React from "react";

import { membersPages } from "../../../model/adminAssets.json";

import MenuMinified from "../../components/MenuMinified";
import ProfileUpdate from "../../components/ProfileUpdate";
import Footer from "../../components/Footer";

export default function MeuPerfil() {
  const userName = "userteste";
  return (
    <div id="MeuPerfil">
      <MenuMinified
        pages={membersPages}
        userName={userName}
        bgColor="dark"
        variantColor="dark"
      />
      <h2 className="memberAreaPageTitle">Meu Perfil</h2>
      <main className="row no-gutters justify-content-center">
        <ProfileUpdate />
      </main>
      <Footer/>
    </div>
  );
}
