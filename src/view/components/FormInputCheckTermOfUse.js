import React from "react";

export default function FormInputCheckTermOfUse({ setHasAcceptedTermsOfUse }) {
  return (
    <div className="custom-control custom-switch text-success my-3">
      <input
        type="checkbox"
        className="custom-control-input"
        id="switchForTermsOfUse"
        onClick={(e) =>
          setHasAcceptedTermsOfUse(
            document.querySelector("#switchForTermsOfUse").checked
          )
        }
      />
      <label
        className="custom-control-label h5"
        htmlFor="switchForTermsOfUse"
        onClick={(e) =>
          setHasAcceptedTermsOfUse(
            document.querySelector("#switchForTermsOfUse").checked
          )
        }
      >
        Concordo com os termos de uso
      </label>
    </div>
  );
}
