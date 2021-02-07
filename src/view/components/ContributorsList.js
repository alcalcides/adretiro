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
      <table className="table table-sm table-warning table-rounded text-dark">
        <thead className="h5">
          <tr className="">
            <th scope="col" className="align-middle text-center border-top-0 py-3">Username</th>
            <th scope="col" className="align-middle text-center border-top-0 py-3">Nome Completo</th>
            <th scope="col" className="align-middle text-center border-top-0 py-3">Ações</th>
          </tr>
        </thead>
        <tbody className="h6">
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
