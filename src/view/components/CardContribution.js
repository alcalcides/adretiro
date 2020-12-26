import React from "react";

export default function CardContribution({ date, value, manager, contributor }) {
  return (
    <div className="card bg-success col-12 col-md-5 m-1">
      <div className="card-body">
        <h5 className="card-title">{date}</h5>
        <h6 className="card-subtitle text-dark m-2">R$ {value}</h6>
        <p className="card-text h6 mb-0">Por: {contributor}</p>
        <p className="card-text h6">Recebedor: {manager}</p>
      </div>
    </div>
  );
}
