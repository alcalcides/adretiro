import React, { useState, useEffect } from "react";
import { getPeopleByUsername } from "../../model/services/getPeopleByUsername";
import { getEnrollmentsOf } from "../../model/services/getEnrollmentsOf";
import ModalTemplate from "./ModalTemplate";

export default function ModalProfileGlance({
  username,
  isVisible,
  handleClose,
}) {
  const [fullName, setFullName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [mothersFullName, setMothersFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [enrolledDepartments, setEnrolledDepartment] = useState([]);

  useEffect(() => {
    async function getPeopleData() {
      try {
        const dataPeople = await getPeopleByUsername(username);
        setFullName(dataPeople.full_name);
        if (dataPeople.birthday) setBirthday(dataPeople.birthday.split("T")[0]);
        if (dataPeople.mothers_full_name)
          setMothersFullName(dataPeople.mothers_full_name);
        if (dataPeople.email) setEmail(dataPeople.email);
        if (dataPeople.whatsapp) setPhoneNumber(dataPeople.whatsapp);

        const dataEnrollments = await getEnrollmentsOf(dataPeople.id);
        setEnrolledDepartment(dataEnrollments);
      } catch (error) {
        alert(error);
      }
    }

    getPeopleData();
  }, [username]);
  return (
    <ModalTemplate
      title="Dados Cadastrais"
      isVisible={isVisible}
      handleClose={handleClose}
    >
      <p className="h4 mb-4 text-info">{fullName}</p>
      <p className="h5 text-info"><label className="text-secondary">Usuário:&nbsp;</label>{username}</p>
      <p className="h5 text-info"><label className="text-secondary">Nascimento:&nbsp;</label>{birthday}</p>
      <p className="h5 text-info"><label className="text-secondary">Filho(a) de:&nbsp;</label>{mothersFullName}</p>
      <p className="h5 text-info"><label className="text-secondary">Email:&nbsp;</label>{email}</p>
      <p className="h5 text-info"><label className="text-secondary">Whatsapp:&nbsp;</label>{phoneNumber}</p>
      <p className="h5 text-info"><label className="text-secondary">Matrículas:&nbsp;</label></p>
      <ul>
        {!!enrolledDepartments.length && enrolledDepartments.map((department, index) => (
          <li key={index} className="h6 text-info">{department}</li>
        ))}
      </ul>
    </ModalTemplate>
  );
}
