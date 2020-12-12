import React from "react";
import { BrowserRouter } from "react-router-dom";

import Routes from "./routes/Routes";
import AuthContextProvider from "../model/contexts/auth";

import "bootstrap/dist/css/bootstrap.min.css";
import "../view/styles/theme.css";

export default function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </AuthContextProvider>
  );
}
