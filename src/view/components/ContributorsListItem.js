import React from "react";

import { IoMdKey } from "react-icons/io";
import { MdPerson } from "react-icons/md";
import { FcMoneyTransfer } from "react-icons/fc";
import { ImImages } from "react-icons/im";
import { IconContext } from "react-icons";

export default function ContributorsListItem({ contributorData }) {
  return (
    <tr>
      <td className="px-1 px-sm-2">{contributorData.username}</td>
      <td className="px-1 px-sm-2">{contributorData.fullName}</td>
      <td className="px-1 px-sm-2">
        <div className="container">
          <div className="row justify-content-around">
            <IconContext.Provider
              value={{ color: "darkred", size: "1.6rem" }}
              className="col-sm"
            >
              <ImImages className="my-1" />
            </IconContext.Provider>

            <IconContext.Provider 
              value={{ size: "1.8rem" }} 
              className="col-sm"
            >
              <FcMoneyTransfer />
            </IconContext.Provider>

            <IconContext.Provider
              value={{ color: "darkgoldenrod", size: "1.8rem" }}
              className="col-sm"
            >
              <IoMdKey />
            </IconContext.Provider>

            <IconContext.Provider
              value={{ color: "midnightblue", size: "1.8rem" }}
              className="col-sm"
            >
              <MdPerson />
            </IconContext.Provider>
          </div>
        </div>
      </td>
    </tr>
  );
}
