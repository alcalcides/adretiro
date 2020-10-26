import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "../view/pages/home";
import Entrar from "../view/pages/entrar";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/entrar" component={Entrar} />
      </Switch>
    </BrowserRouter>
  );
}
