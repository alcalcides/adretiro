import React from "react";

export default function FormInputCheckbox({
  value,  
  name,
  propertyID,
  defaultChecked
}) {
  return (
    <div className="form-check d-flex align-items-center mb-0">
      <input
        type="checkbox"
        className="form-check-input my-auto"
        id={propertyID}
        value={value}
        name={name}
        defaultChecked={defaultChecked}
      />
      <label className="form-check-label h4 my-2" htmlFor={propertyID}>{value}</label>
    </div>
  );
}
