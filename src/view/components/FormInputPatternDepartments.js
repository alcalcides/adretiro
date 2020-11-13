import React, { useState, useEffect } from "react";

import FormInputCheckbox from "./FormInputCheckbox";

export default function FormInputPatternDepartments({ propertyID }) {
  const [departmentsList, setDepartmentsList] = useState([]);

  useEffect(() => {
    setDepartmentsList(["Senhores", "Senhoras", "Crianças"]); // get this from database
  }, []);

  return (
    <div>
      <p className="mb-0">Departamentos Oficiais</p>
      <small className="text-secondary">Selecione todos os seus departamentos</small>
      {departmentsList.map((department) => (
        <FormInputCheckbox
          key={department}
          value={department}
          name="departments"
          propertyID={`${department}CheckBox`}
        />
      ))}
    </div>
  );
}
