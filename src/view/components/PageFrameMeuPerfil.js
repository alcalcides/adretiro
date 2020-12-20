import React from "react";

import { membersPages } from "../../model/adminAssets.json";

import MenuMinified from "./MenuMinified";
import NavMembers from "./NavMembers";
import ProfileUpdate from "./ProfileUpdate";
import Footer from "./Footer";

export default function PageFrameMeuPerfil() {

  return (
    <div id="MeuPerfil">
      <MenuMinified pages={membersPages}/>
      <NavMembers/>
      <main className="row no-gutters justify-content-center">
        <ProfileUpdate />
      </main>
      <Footer />
    </div>
  );
}
