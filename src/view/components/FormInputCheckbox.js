import React from "react";

export default function FormInputCheckbox({
  value,
  name,
  propertyID,
  defaultChecked,
}) {
  return (
    <div className="form-check d-flex align-items-center mb-0">
      {defaultChecked && (
        <input
          type="checkbox"
          className="form-check-input my-auto"
          id={propertyID}
          value={value}
          name={name}
          defaultChecked
        />
      )}
      {!defaultChecked && (
        <input
          type="checkbox"
          className="form-check-input my-auto"
          id={propertyID}
          value={value}
          name={name}
        />
      )}
      <label className="form-check-label h4 my-2" htmlFor={propertyID}>
        {value}
      </label>
    </div>
  );
}
