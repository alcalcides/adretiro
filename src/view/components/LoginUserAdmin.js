import React, { useState, useContext } from "react";
import useGoTo from "../../controller/hooks/useGoTo";

import { AuthContext } from "../../model/contexts/auth";

import LoginUserForm from "./LoginUserForm";

export default function LoginUserAdmin() {
  const { authenticateAdmin } = useContext(AuthContext);
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
      await authenticateAdmin({ username, password });
      goTo(`/painel-central/${username}`);
    } catch (error) {
      alert("Usuário ou senha incorretos");
      goTo(`/acesso-administrativo`);
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
