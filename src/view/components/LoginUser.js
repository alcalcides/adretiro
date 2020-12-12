import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";

import { AuthContext } from "../../model/contexts/auth";

import LoginUserForm from "./LoginUserForm";

export default function LoginUser() {
  const history = useHistory();
  const { authenticate } = useContext(AuthContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [hasAcceptedTermsOfUse, setHasAcceptedTermsOfUse] = useState(false);

  async function handleUserLogin(e) {
    e.preventDefault();
    if (!hasAcceptedTermsOfUse) {
      return alert("Aceite os Termos de Uso");
    }

    console.log({ username, password });
    const response = await authenticate({ username, password }); //ATTENTION: send form data
    history.push(`/meus-filhos-de-jaco/${response.user.name}`); //ATTENTION: check back response
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
