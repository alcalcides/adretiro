import React, { useEffect, useState, useContext } from "react";
import CardContribution from "./CardContribution";
import { getContributionsOf } from "../../model/services/getContributionsOf";
import fullTimeStringToLocalTime from "../../model/library/fullTimeStringToLocalTime";
import { AuthContext } from "../../model/contexts/auth";

export default function Contributions() {
  const { user } = useContext(AuthContext);
  const [contributions, setContributions] = useState([]);
  useEffect(() => {
    async function getContributionsData(){
      const response = await getContributionsOf(user.username);
      setContributions(response); 
    }
    getContributionsData();
  }, [user.username]);

  return (
    <div className="row no-gutters justify-content-around">
      {contributions.map((contribution) => (
        <CardContribution
          key={contribution.id}
          date={fullTimeStringToLocalTime(contribution.date)}
          value={contribution.value}
          manager={contribution.manager}
          contributor={contribution.contributor}
        />
      ))}
    </div>
  );
}
