import React, { useState, useContext } from "react";
import useGoTo from "../../controller/hooks/useGoTo";

import { AuthContext } from "../../model/contexts/auth";

import LoginUserForm from "./LoginUserForm";

export default function LoginUser() {
  const { authenticate, logOut } = useContext(AuthContext);
  const { goTo } = useGoTo();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [hasAcceptedTermsOfUse, setHasAcceptedTermsOfUse] = useState(false);

  async function handleUserLogin(e) {
    e.preventDefault();
    if (!hasAcceptedTermsOfUse) {
      return alert("Aceite os Termos de Uso");
    }

    try {
      const response = await authenticate({ username, password });      
      if(response.success !== true){
        throw new Error(response)
      }
      
      goTo(`/meus-filhos-de-jaco/${username}`);
      
    } catch (error) {
      logOut();
      alert(error);
      goTo(`/acessar-minha-conta`);
    }
  }

  return (
    <LoginUserForm
      handleUserLogin={handleUserLogin}
      username={username}
      setUsername={setUsername}
      password={password}
      setPassword={setPassword}
      setHasAcceptedTermsOfUse={setHasAcceptedTermsOfUse}
    />
  );
}
