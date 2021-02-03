import React, { useState, useContext, useEffect } from "react";
import useGoTo from "../../controller/hooks/useGoTo";

import { AuthContext, STORAGE_KEY_TOKEN } from "../../model/contexts/auth";
import getFilledFields from "../../model/library/getFilledFields";
import { getEnrollmentsOf } from "../../model/services/getEnrollmentsOf";
import { getPeople } from "../../model/services/getPeople";
import { updateContributor } from "../../model/services/updateContributor";

import SignUpForm from "./SignUpForm";

export default function ProfileUpdate() {
  const { user } = useContext(AuthContext);
  const { goTo } = useGoTo();

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
    async function getPeopleData() {
      try {
        const dataPeople = await getPeople(user.id);
        setFullName(dataPeople.full_name);
        setUsername(dataPeople.username);
        if (dataPeople.birthday) setBirthday(dataPeople.birthday.split("T")[0]);
        if (dataPeople.mothers_full_name) setMothersFullName(dataPeople.mothers_full_name);
        if (dataPeople.email) setEmail(dataPeople.email);
        if (dataPeople.whatsapp) setPhoneNumber(dataPeople.whatsapp);

        const dataEnrollments = await getEnrollmentsOf(user.id);
        setEnrolledDepartment(dataEnrollments);
      } catch (error) {
        alert(error);
      }
    }

    getPeopleData();
  }, [user]);

  async function handleSignUpUpdate(e) {
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
      const response = await updateContributor(data);
      if (response.success === false) throw new Error(response.message);
      else {
        localStorage.setItem(
          STORAGE_KEY_TOKEN,
          JSON.stringify(`Bearer ${response.data.token}`)
        );
        alert("Dados atualizados");
        goTo(window.location.pathname);
      }
    } catch (reason) {
      console.log(reason);
      alert(reason);
    } finally {
      setPassword("");
    }
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
