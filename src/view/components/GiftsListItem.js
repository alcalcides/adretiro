import React from "react";

import fullTimeStringToLocalTime from "../../model/library/fullTimeStringToLocalTime";

export default function GiftsListItem({ giftRequestData }) {
  return (
    <tr>
      <td className="px-1 px-sm-2 align-middle text-center">
        {giftRequestData.id}
      </td>
      <td className="px-1 px-sm-2 align-middle text-center">
        {giftRequestData.username}
      </td>
      <td className="px-1 px-sm-2 align-middle text-center">
        {fullTimeStringToLocalTime(giftRequestData.created_at)}
      </td>
    </tr>
  );
}
