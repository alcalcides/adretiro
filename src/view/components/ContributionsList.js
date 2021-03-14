import React, { useEffect, useState } from "react";
import { getContributions } from "../../model/services/getContributions";
import ContributionsListItem from "./ContributionsListItem";

export default function ContributionsList() {
  const [listOfContributions, setListOfContributions] = useState([]);

  useEffect(() => {
    async function getContributionsData() {
      const data = await getContributions();
      setListOfContributions(data);
    }

    getContributionsData();
  }, []);

  return (
    <div className="table-responsive">
      <table className="table table-sm table-primary table-rounded">
        <thead className="h5">
          <tr className="">
            <th scope="col" className="align-middle text-center border-top-0 py-3">Contribuinte</th>
            <th scope="col" className="align-middle text-center border-top-0 py-3">Recebedor</th>
            <th scope="col" className="align-middle text-center border-top-0 py-3">Valor</th>
            <th scope="col" className="align-middle text-center border-top-0 py-3">Data do Registro</th>
          </tr>
        </thead>
        <tbody className="h6">
          {listOfContributions.map((contribution) => (
            <ContributionsListItem
              key={contribution.id}
              contributionData={contribution}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
