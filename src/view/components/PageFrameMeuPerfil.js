import React from "react";

import adminAssets from "../../model/adminAssets.json";

const { membersPages } = adminAssets;

import UserBar from "./UserBar";
import MenuMinified from "./MenuMinified";
import TitleMembersFrame from "./TitleMembersFrame";
import ProfileUpdate from "./ProfileUpdate";
import Footer from "./Footer";

export default function PageFrameMeuPerfil() {

  return (
    <div id="MeuPerfil">
      <UserBar/>
      <MenuMinified pages={membersPages}/>
      <TitleMembersFrame/>
      <main className="row no-gutters justify-content-center">
        <ProfileUpdate />
      </main>
      <Footer />
    </div>
  );
}
