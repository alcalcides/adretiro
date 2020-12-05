import React, { useContext } from "react";

import { jacobSuns } from "../../model/adminAssets.json";
import { Context } from "../pages/members/meusFilhosDeJaco";

import JacobSun from "./JacobSun";

export default function JacobsSuns() {
  const { myJacobSuns } = useContext(Context);

  return (
    <span className="row no-gutters">
      {jacobSuns.map((sun) => (
        <JacobSun key={sun} sun={sun} obtained={!myJacobSuns.includes(sun)} />
      ))}
    </span>
  );
}
