import React from "react";

import { adminPages } from "../../model/adminAssets.json";

import UserBar from "./UserBar";
import MenuMinified from "./MenuMinified";
import TitleAdminsFrame from "./TitleAdminsFrame";
import ContributionsList from "./ContributionsList";
import Footer from "./Footer";

export default function PageFrameContribuicoes() {
  return (
    <div id="Contribuintes">
      <UserBar />
      <MenuMinified pages={adminPages} />
      <TitleAdminsFrame />
      <main className="row no-gutters justify-content-center">
        <div className="container">
          <ContributionsList />
        </div>
      </main>
      <Footer />
    </div>
  );
}
