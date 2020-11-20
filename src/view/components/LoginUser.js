import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import LoginUserForm from "./LoginUserForm";

export default function LoginUser() {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [hasAcceptedTermsOfUse, setHasAcceptedTermsOfUse] = useState(false);

  function handleUserLogin(e) {
    e.preventDefault();
    if (!hasAcceptedTermsOfUse) {
      return alert("Aceite os Termos de Uso");
    }

    console.log({
      username,
      password,
      hasAcceptedTermsOfUse,
    });

    alert(`Em construção.`);
    history.push("/meus-filhos-de-jaco/userteste");
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
