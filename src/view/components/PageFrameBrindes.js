import React from "react";

import adminAssets from "../../model/adminAssets.json";

const { adminPages } = adminAssets;

import UserBar from "./UserBar";
import MenuMinified from "./MenuMinified";
import TitleAdminsFrame from "./TitleAdminsFrame";
import GiftsList from "./GiftsList";
import Footer from "./Footer";

export default function PageFrameBrindes() {
  return (
    <div id="Contribuintes">
      <UserBar />
      <MenuMinified pages={adminPages} />
      <TitleAdminsFrame />
      <main className="row no-gutters justify-content-center">
        <div className="container">
          <GiftsList />
        </div>
      </main>
      <Footer />
    </div>
  );
}
