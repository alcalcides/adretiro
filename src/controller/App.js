import React from "react";
import { BrowserRouter } from "react-router-dom";

import RoutesADRetiro from "./routes/RoutesADRetiro";
import AuthContextProvider from "../model/contexts/auth";

import "bootstrap/dist/css/bootstrap.min.css";
import "../view/styles/theme.css";

export default function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <RoutesADRetiro />
      </AuthContextProvider>
    </BrowserRouter>
  );
}
