import React, { useState, useContext } from "react";

import { AuthContext } from "../../model/contexts/auth";

import SignUpForm from "./SignUpForm";

export default function ProfileUpdate() {
  const { user } = useContext(AuthContext);

  const [fullName, setFullName] = useState(user.fullName);
  const [username, setUsername] = useState(user.username);
  const [birthday, setBirthday] = useState(user.birthday);
  const [mothersFullName, setMothersFullName] = useState(user.mothersFullName);
  const [email, setEmail] = useState(user.email);
  const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber);
  const [enrolledDepartments, setEnrolledDepartments] = useState(user.enrolledDepartments);  
  const [password, setPassword] = useState("");
  const [hasAcceptedTermsOfUse, setHasAcceptedTermsOfUse] = useState(false);

  function handleSignUpUpdate(e) {
    e.preventDefault();
    if (!hasAcceptedTermsOfUse) {
      return alert("Aceite os Termos de Uso");
    }

    setEnrolledDepartments(handleDepartments());

    console.log({
      fullName,
      username,
      birthday,
      mothersFullName,
      email,
      phoneNumber,
      enrolledDepartments,
      password,
      hasAcceptedTermsOfUse,
    });

    alert(`Em construção.`);
  }
  
  return (
    <SignUpForm    
      handleSignUp={handleSignUpUpdate}
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
      enrolledDepartments={enrolledDepartments}
      password={password}
      setPassword={setPassword}
      setHasAcceptedTermsOfUse={setHasAcceptedTermsOfUse}
      CTAFormSending="Salvar Alterações"
    />    
  );

  function handleDepartments() {
    let departmentsListUpdate = [];
    const checkedDepartments = document.querySelectorAll('.form-check-input:checked');
    checkedDepartments.forEach(department => {
      departmentsListUpdate.push(department.value);
    });
    return departmentsListUpdate;
  }

}
