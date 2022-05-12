import React from "react";

import admin from "../../model/adminAssets.json";

const { mainPublicPages } = admin;

import MenuMinified from "./MenuMinified";
import LoginUserAdmin from "./LoginUserAdmin";
import Footer from "./Footer";

export default function PageFrameAcessoAdministrativo() {
  return (
    <div id="AcessarMinhaContaAdministrativa">
      <MenuMinified pages={mainPublicPages}/>
      <h2 className="publicPageTitle">Acesso Administrativo</h2>
      <main className="row no-gutters justify-content-center">
        <LoginUserAdmin />
      </main>
      <Footer />
    </div>
  );
}
