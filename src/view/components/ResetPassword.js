import React, { useState } from "react";
import useGoTo from "../../controller/hooks/useGoTo";
import useQueryParams from "../../controller/hooks/useQueryParams";
import { updatePassword } from "../../model/services/updatePassword";

import ResetPasswordForm from "./ResetPasswordForm";

export default function ResetPassword() {
  const { queryParams } = useQueryParams();
  const { goTo } = useGoTo();
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordCopy, setNewPasswordCopy] = useState("");
  const [hasAcceptedTermsOfUse, setHasAcceptedTermsOfUse] = useState(false);

  async function handlePasswordReset(e) {
    e.preventDefault();
    if (!hasAcceptedTermsOfUse) {
      return alert("Aceite os Termos de Uso");
    }

    if (newPassword !== newPasswordCopy) {
      return alert("Confirme a digitação da nova senha");
    }

    const token = queryParams.get("auth");
    if (!token) {
      return alert("Link incompleto. Siga o link que foi enviado para seu email.");
    }

    try {
      const data = { newPassword, token, hasAcceptedTermsOfUse };
      const response = await updatePassword(data);
      console.log(response);
      if (response.success === false) throw new Error(response.message);

      alert("Senha atualizada.");
      goTo("/acessar-minha-conta");

    } catch (err) {
      console.log(err);
      console.log(err.response);
      alert("Reset Password Error ", err.message);
    }
  }

  return (
    <ResetPasswordForm
      handlePasswordReset={handlePasswordReset}
      password={newPassword}
      setPassword={setNewPassword}
      passwordCopy={newPasswordCopy}
      setPasswordCopy={setNewPasswordCopy}
      setHasAcceptedTermsOfUse={setHasAcceptedTermsOfUse}
    />
  );
}
