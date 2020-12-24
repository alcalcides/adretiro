import React from "react";

export default function LoadingProgress() {
  return (
    <div className="LoadingProgress d-flex justify-content-center align-items-center">
      <div className="spinner-border text-light text-center" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}
