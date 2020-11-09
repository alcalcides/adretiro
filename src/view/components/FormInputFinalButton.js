import React from "react";

export default function FormInputFinalButton({ callToAction }) {
  return (
    <div className="text-center">
      <button type="submit" className="btn btn-primary ">
        {callToAction}
      </button>
    </div>
  );
}
