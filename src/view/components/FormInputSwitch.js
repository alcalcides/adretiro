import React from "react";

export default function FormInputSwitch({
  setHasAcceptedTermsOfUse,
  labelContent,
  propertyID,
}) {
  return (
    <div className="custom-control custom-switch text-success my-3">
      <input
        type="checkbox"
        className="custom-control-input"
        id={propertyID}
        onClick={(e) =>
          setHasAcceptedTermsOfUse(
            document.querySelector(`#${propertyID}`).checked
          )
        }
      />
      <label
        className="custom-control-label h5"
        htmlFor={propertyID}
        onClick={(e) =>
          setHasAcceptedTermsOfUse(
            document.querySelector(`#${propertyID}`).checked
          )
        }
      >
        {labelContent}
      </label>
    </div>
  );
}
