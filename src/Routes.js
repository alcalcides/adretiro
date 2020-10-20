import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Entrar from "./pages/Entrar";

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
