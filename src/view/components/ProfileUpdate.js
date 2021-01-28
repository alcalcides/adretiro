import React, { useState, useContext, useEffect } from "react";

import { AuthContext } from "../../model/contexts/auth";
import { getEnrollmentsOf } from "../../model/services/getEnrollmentsOf";
import { getPeople } from "../../model/services/getPeople";

import SignUpForm from "./SignUpForm";

export default function ProfileUpdate() {
  const { user } = useContext(AuthContext);

  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [birthday, setBirthday] = useState("");
  const [mothersFullName, setMothersFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [enrolledDepartments, setEnrolledDepartment] = useState([]);
  const [password, setPassword] = useState("");
  const [hasAcceptedTermsOfUse, setHasAcceptedTermsOfUse] = useState(false);

  useEffect(() => {
    getPeople(user.id)
      .then((data) => {
        setFullName(data.full_name);
        setUsername(data.username);
        if (data.birthday) setBirthday(data.birthday.split("T")[0]);
        if (data.mothers_full_name) setMothersFullName(data.mothers_full_name);
        if (data.email) setEmail(data.email);
        if (data.whatsapp) setPhoneNumber(data.whatsapp);
      })
      .catch((err) => alert(err));

    getEnrollmentsOf(user.id)
      .then((res) => setEnrolledDepartment(res))
      .catch((err) => alert(err));
  }, [user]);

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
      alreadyEnrolledDepartments={enrolledDepartments}
      password={password}
      setPassword={setPassword}
      setHasAcceptedTermsOfUse={setHasAcceptedTermsOfUse}
      CTAFormSending="Salvar Alterações"
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
