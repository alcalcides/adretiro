import React from "react";

import { adminPages } from "../../model/adminAssets.json";

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
