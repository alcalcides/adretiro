import React from "react";

import "../styles/SignUpForm.css";

import FormInputPassword from "./FormInputPassword";
import FormInputSwitch from "./FormInputSwitch";
import FormInputFinalButton from "./FormInputFinalButton";
import FormInputPatternUserName from "./FormInputPatternUserName";
import FormInputPatternFullName from "./FormInputPatternFullName";
import FormInputPatternMothersFullName from "./FormInputPatternMothersFullName";
import FormInputPatternBirthday from "./FormInputPatternBirthday";
import FormInputPatternEmail from "./FormInputPatternEmail";
import FormInputPatternPhoneNumber from "./FormInputPatternPhoneNumber";
import FormInputPatternDepartments from "./FormInputPatternDepartments";

export default function SignUpForm({
  handleSignUp,
  fullName,
  setFullName,
  username,
  setUsername,
  birthday,
  setBirthday,
  mothersFullName,
  setMothersFullName,
  email,
  setEmail,
  phoneNumber,
  setPhoneNumber,
  password,
  setPassword,
  setHasAcceptedTermsOfUse,
}) {
  return (
    <form id="SignUpForm" className="col-10 col-md-6 publicForms" onSubmit={handleSignUp}>
      <FormInputPatternFullName
        content={fullName}
        setContent={setFullName}
        propertyID="fullNameForSignUp"
      />
      <FormInputPatternUserName
        content={username}
        setContent={setUsername}
        propertyID="userNameForSignUp"
      />
      <FormInputPatternBirthday
        content={birthday}
        setContent={setBirthday}
        propertyID="birthdayForSignUp"
      />
      <FormInputPatternMothersFullName
        content={mothersFullName}
        setContent={setMothersFullName}
        propertyID="mothersFullNameForSignUp"
      />
      <FormInputPatternEmail
        content={email}
        setContent={setEmail}
        propertyID="emailForSignUp"
      />
      <FormInputPatternPhoneNumber
        content={phoneNumber}
        setContent={setPhoneNumber}
        propertyID="phoneNumberForSignUp"
      />
      <FormInputPatternDepartments propertyID="departmentsForSignUp" />
      <FormInputPassword
        password={password}
        setPassword={setPassword}
        labelContent="Senha"
        propertyID="usersPassword"
      />
      <FormInputSwitch
        setHasAcceptedTermsOfUse={setHasAcceptedTermsOfUse}
        labelContent="Concordo com os Termos de Uso"
        propertyID="switchForTermsOfUse"
      />
      <FormInputFinalButton callToAction={"Acessar Minha Conta"} />
    </form>
  );
}
