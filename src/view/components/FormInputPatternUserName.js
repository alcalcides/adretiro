import React from "react";
import { validateUserName } from "../../model/businessRules/validateUserName";
import { fixUserName } from "../../model/businessRules/fixUserName";

import FormInputText from "./FormInputText";

export default function FormInputPatternUserName({
  content,
  setContent,
  propertyID,
  tip = 'Esta é sua identificação no sistema. Use até 25 caracteres alfanuméricos. Prefira algo fácil como "nome-sobrenome"'
}) {
  return (
    <FormInputText
      typingValidation={fixUserName(setContent)}
      laterValidation={validateUserName(setContent)}
      title="Nome de Usuário"
      tip={tip}
      content={content}
      setContent={setContent}
      propertyID={propertyID}
    />
  );
}

