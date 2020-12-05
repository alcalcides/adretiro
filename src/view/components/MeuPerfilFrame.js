import React, { useContext } from "react";

import { membersPages } from "../../model/adminAssets.json";
import { Context } from "../pages/members/meuPerfil";

import MenuMinified from "./MenuMinified";
import ProfileUpdate from "./ProfileUpdate";
import Footer from "./Footer";

export default function MeuPerfilFrame() {
  const { userName } = useContext(Context);

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
      <Footer />
    </div>
  );
}
