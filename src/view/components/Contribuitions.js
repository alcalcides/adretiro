import React, { useEffect, useState } from "react";

import { contributionsExemple } from "../../model/services/contributionsExemple";
import CardContribution from "./CardContribution";

export default function Contributions() {
  const [contributions, setContributions] = useState([]);

  useEffect(() => {
    setContributions(JSON.parse(contributionsExemple)); //ATTENTION server call
  }, []);

  return (
    <div className="row no-gutters justify-content-around">
      {contributions.map((contribution) => (
        <CardContribution
          key={contribution.id}
          date={contribution.date}
          value={contribution.value}
          manager={contribution.manager}
          contributor={contribution.contributor}
        />
      ))}
    </div>
  );
}
