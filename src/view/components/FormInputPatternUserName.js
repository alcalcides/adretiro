import React from "react";

import FormInputText from "./FormInputText";

export default function FormInputPatternUserName({
  content,
  setContent,
  propertyID,
}) {
  return (
    <FormInputText
      title="Nome de Usuário"
      tip="Seu nome de identificação no sistema."
      placeholder="nome-facil"
      content={content}
      setContent={setContent}
      propertyID={propertyID}
    />
  );
}
