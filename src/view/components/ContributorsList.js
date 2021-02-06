import React, { useEffect, useState } from "react";
import { getContributors } from "../../model/services/getContributors";
import ContributorsListItem from "./ContributorsListItem";

export default function ContributorsList() {
  const [listOfContributors, setListOfContributors] = useState([]);

  useEffect(() => {
    async function getContributorsData() {
      const data = await getContributors();
      setListOfContributors(data);
    }

    getContributorsData();
  }, []);

  return (
    <div className="table-responsive">
      <table className="table table-sm table-warning text-dark">
        <thead className="h6">
          <tr>
            <th scope="col" className="align-middle text-center">Username</th>
            <th scope="col" className="align-middle text-center">Nome Completo</th>
            <th scope="col" className="align-middle text-center">Ações</th>
          </tr>
        </thead>
        <tbody className="h5">
          {listOfContributors.map((contributor) => (
            <ContributorsListItem
              key={contributor.username}
              contributorData={contributor}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
