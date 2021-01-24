import React from "react";
import { Route } from "react-router-dom";

import PainelCentral from "../../view/pages/admin/painelCentral";

export default function MembersRoutes() {

  return (
    <>
      <Route path="/painel-central/:username" component={PainelCentral}/>
    </> 
  );
}
