import React from "react";

import fullTimeStringToLocalTime from "../../model/library/fullTimeStringToLocalTime";

export default function ContributionsListItem({ contributionData }) {
  return (
    <tr>
      <td className="px-1 px-sm-2 align-middle text-center">
        {contributionData.contributorUsername}
      </td>
      <td className="px-1 px-sm-2 align-middle text-center">
        {contributionData.managerUsername}
      </td>
      <td className="px-1 px-sm-2 align-middle text-center">
        {contributionData.value}
      </td>
      <td className="px-1 px-sm-2 align-middle text-center">
        {fullTimeStringToLocalTime(contributionData.created_at)}
      </td>
    </tr>
  );
}
