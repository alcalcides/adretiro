import React from "react";

import SiteTitle from "../components/SiteTitle";
import MainMenu from "../components/MainMenu";

export default function () {
  return (
    <div id="home" className="row no-gutters">
      <div className="col-12 col-md-6 pr-5">
        <SiteTitle/>
      </div>
      <div className="col-2 col-md-2"></div>
      <div className="col-10 col-md-4 align-self-center">
        <MainMenu />
      </div>
    </div>
  );
}
