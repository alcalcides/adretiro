import React, { useState, useContext } from "react";
import { createContributor } from "../../model/services/createContributor";
import { AuthContext } from "../../model/contexts/auth";
import getFilledFields from "../../model/library/getFilledFields";

import SignUpForm from "./SignUpForm";
import useGoTo from "../../controller/hooks/useGoTo";

export default function SignUp() {
  const { authenticate } = useContext(AuthContext);
  const { goTo } = useGoTo();

  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [birthday, setBirthday] = useState("");
  const [mothersFullName, setMothersFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [enrolledDepartments] = useState([]);
  const [password, setPassword] = useState("");
  const [hasAcceptedTermsOfUse, setHasAcceptedTermsOfUse] = useState(false);

  async function handleSignUp(e) {
    e.preventDefault();
    if (!hasAcceptedTermsOfUse) {
      return alert("Aceite os Termos de Uso");
    }

    handleDepartments();

    const dataLiteral = {
      fullName,
      username,
      birthday,
      mothersFullName,
      email,
      phoneNumber,
      enrolledDepartments,
      password,
      hasAcceptedTermsOfUse,
    };

    const data = getFilledFields(dataLiteral);
    try {
      const contributorResponse = await createContributor(data);
      if (contributorResponse.success === false)
        throw new Error(contributorResponse.message);
      else {
        await authenticate({ username, password });        
        goTo(`/meus-filhos-de-jaco/${username}`);
      }
    } catch (reason) {
      setPassword("");
      alert(reason);
    }
  }

  return (
    <SignUpForm
      handleSignUp={handleSignUp}
      fullName={fullName}
      setFullName={setFullName}
      username={username}
      setUsername={setUsername}
      birthday={birthday}
      setBirthday={setBirthday}
      mothersFullName={mothersFullName}
      setMothersFullName={setMothersFullName}
      email={email}
      setEmail={setEmail}
      phoneNumber={phoneNumber}
      setPhoneNumber={setPhoneNumber}
      password={password}
      setPassword={setPassword}
      setHasAcceptedTermsOfUse={setHasAcceptedTermsOfUse}
      CTAFormSending="Fazer Cadastro"
    />
  );

  function handleDepartments() {
    includeCheckedDepartments();
    removeUncheckedDepartments();
  }

  function includeCheckedDepartments() {
    const checkedDepartments = document.querySelectorAll(
      ".form-check-input:checked"
    );
    checkedDepartments.forEach((department) => {
      if (!enrolledDepartments.includes(department.value)) {
        enrolledDepartments.push(department.value);
      }
    });
  }

  function removeUncheckedDepartments() {
    const unCheckedDepartments = document.querySelectorAll(
      ".form-check-input:not(:checked)"
    );
    unCheckedDepartments.forEach((department) => {
      if (enrolledDepartments.includes(department.value)) {
        enrolledDepartments.splice(
          enrolledDepartments.indexOf(department.value),
          1
        );
      }
    });
  }
}
