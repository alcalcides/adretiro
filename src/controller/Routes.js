import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "../view/pages/home";
import AcessarMinhaConta from "../view/pages/acessarMinhaConta";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/acessar-minha-conta" component={AcessarMinhaConta} />
      </Switch>
    </BrowserRouter>
  );
}
