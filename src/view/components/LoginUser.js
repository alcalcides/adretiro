import React, { useState } from "react";

import FormInputUserName from "./FormInputUserName";
import FormInputPassword from "./FormInputPassword";
import FormInputCheckTermOfUse from "./FormInputCheckTermOfUse";
import FormInputFinalButton from "./FormInputFinalButton";

export default function LoginUser() {
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
  }

  return (
    <form id="Login" className="col-10 col-md-6" onSubmit={handleUserLogin}>
      <FormInputUserName username={username} setUsername={setUsername} />
      <FormInputPassword password={password} setPassword={setPassword} />
      <FormInputCheckTermOfUse setHasAcceptedTermsOfUse={setHasAcceptedTermsOfUse} />
      <FormInputFinalButton callToAction={"Acessar Minha Conta"}/>
    </form>
  );
}
