import React, { useState, useEffect } from "react";
import { getDepartments } from "../../model/services/getDepartments";

import FormInputCheckbox from "./FormInputCheckbox";

export default function FormInputPatternDepartments({
  alreadyEnrolledDepartments,
}) {
  const [departmentsList, setDepartmentsList] = useState([]);

  useEffect(() => {
    let unmounted = false;

    async function fetchListOfDepartments() {
      const response = await getDepartments();
      setDepartmentsList(response);
    }
    fetchListOfDepartments();

    return () => {
      unmounted = true;
      console.log("unmounted", unmounted);
    };
  }, []);

  return (
    <div>
      <p className="mb-0">Departamentos da Igreja</p>
      <small className="text-secondary">
        Selecione o(s) seu(s) departamento(s)
      </small>
      {departmentsList.map((department) => (
        <FormInputCheckbox
          key={department}
          value={department}
          name="departments"
          propertyID={`${department}CheckBox`}
          defaultChecked={alreadyEnrolledDepartments.includes(department)}
        />
      ))}
    </div>
  );
}
