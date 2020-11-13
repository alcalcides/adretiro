import React, { useState } from "react";

import SignUpForm from "./SignUpForm";

export default function SignUp() {
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [birthday, setBirthday] = useState("");
  const [mothersFullName, setMothersFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [enrolledDepartments] = useState([]);  
  const [password, setPassword] = useState("");
  const [hasAcceptedTermsOfUse, setHasAcceptedTermsOfUse] = useState(false);

  function handleSignUp(e) {
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
