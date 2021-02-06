import React from "react";
import { Route } from "react-router-dom";
import Contribuintes from "../../view/pages/admin/contribuintes";
import PainelCentral from "../../view/pages/admin/painelCentral";

export default function MembersRoutes() {

  return (
    <>
      <Route path="/painel-central/:username" component={PainelCentral}/>
      <Route path="/contribuintes/:username" component={Contribuintes}/>
    </> 
  );
}
