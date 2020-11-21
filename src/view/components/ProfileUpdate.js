import React, { useState, useEffect } from "react";

import SignUpForm from "./SignUpForm";

export default function ProfileUpdate() {
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [birthday, setBirthday] = useState("");
  const [mothersFullName, setMothersFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [enrolledDepartments] = useState([]);  
  const [defaultEnrolledDepartments, setDefaultEnrolledDepartments] = useState([]);  
  const [password, setPassword] = useState("");
  const [hasAcceptedTermsOfUse, setHasAcceptedTermsOfUse] = useState(false);

  function handleSignUpUpdate(e) {
    e.preventDefault();
    if (!hasAcceptedTermsOfUse) {
      return alert("Aceite os Termos de Uso");
    }

    handleDepartments();

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

  useEffect(() => {
    setFullName("user teste");
    setUsername("userteste");
    setBirthday("1990-02-02");
    setMothersFullName("minha mãe");
    setEmail("meu@email.teste");
    setPhoneNumber("+5571998765432");
    setDefaultEnrolledDepartments(["Senhores", "Crianças"])
  }, []);
  
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
      defaultChecked={defaultEnrolledDepartments}
      setPhoneNumber={setPhoneNumber}
      password={password}
      setPassword={setPassword}
      setHasAcceptedTermsOfUse={setHasAcceptedTermsOfUse}
      CTAFormSending="Salvar Alterações"
    />    
  );

  function handleDepartments() {
    const checkedDepartments = document.querySelectorAll('.form-check-input:checked');
    checkedDepartments.forEach(department => {
      if (!enrolledDepartments.includes(department.value))
        enrolledDepartments.push(department.value);
    });
  }

}
