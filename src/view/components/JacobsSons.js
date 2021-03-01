import React from "react";

import { jacobSons } from "../../model/adminAssets.json";
import RÚBEN from "../images/RÚBEN.png";
import SIMEÃO from "../images/SIMEÃO.png";
import LEVI from "../images/LEVI.png";
import JUDÁ from "../images/JUDÁ.png";
import DÃ from "../images/DÃ.png";
import NAFTALI from "../images/NAFTALI.png";
import GADE from "../images/GADE.png";
import ASER from "../images/ASER.png";
import ISSACAR from "../images/ISSACAR.png";
import ZEBULOM from "../images/ZEBULOM.png";
import JOSÉ from "../images/JOSÉ.png";
import BENJAMIM from "../images/BENJAMIM.png";

import JacobSon from "./JacobSon";

export default function JacobsSons({ myJacobSons }) {
  const imagesSrc = [
    RÚBEN,
    SIMEÃO,
    LEVI,
    JUDÁ,
    DÃ,
    NAFTALI,
    GADE,
    ASER,
    ISSACAR,
    ZEBULOM,
    JOSÉ,
    BENJAMIM,
  ];

  return (
    <span className="row no-gutters">
      {jacobSons.map((son, index) => {
        return (
          <JacobSon
            key={son}
            sonsName={son}
            obtained={myJacobSons.includes(son)}
            imgSource={imagesSrc[index]}
          />
        );
      })}
    </span>
  );
}
