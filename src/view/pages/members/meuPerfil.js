import React, { useState, createContext } from "react";

import MeuPerfilFrame from "../../components/MeuPerfilFrame";

export const Context = createContext();

export default function MeuPerfil() {
  const userName = useState("userteste");
  
  return (
    <Context.Provider value={{ userName }}>
      <MeuPerfilFrame />
    </Context.Provider>
  );
}
