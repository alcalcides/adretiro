import React from "react";

import { jacobSuns } from "../../model/adminAssets.json";

import JacobSun from "./JacobSun";

export default function JacobsSuns({ myJacobSuns }) {
  return (
    <span className="row no-gutters">
      {jacobSuns.map((sun) => (
        <JacobSun key={sun} sun={sun} obtained={!myJacobSuns.includes(sun)} />
      ))}
    </span>
  );
}
