import React, { useState, useContext } from "react";
import useGoTo from "../../controller/hooks/useGoTo";

import { AuthContext } from "../../model/contexts/auth";

import LoginUserForm from "./LoginUserForm";

export default function LoginUser() {
  const { authenticate } = useContext(AuthContext);
  const { goTo } = useGoTo()

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
    goTo(`/admin/painel-central/${response.user.username}`); //ATTENTION: check back response
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
