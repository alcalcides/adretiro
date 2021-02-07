import React from "react";

import { IoMdKey } from "react-icons/io";
import { MdPerson } from "react-icons/md";
import { FcMoneyTransfer } from "react-icons/fc";
import { ImImages } from "react-icons/im";
import { IconContext } from "react-icons";

export default function ContributorsListItem({ contributorData }) {
  return (
    <tr>
      <td className="px-1 px-sm-2 align-middle">{contributorData.username}</td>
      <td className="px-1 px-sm-2 align-middle">{contributorData.fullName}</td>
      <td className="px-1 px-sm-2 align-middle">
        <div className="container">
          <div className="row justify-content-around">
            {/* see album */}
            <IconContext.Provider
              value={{ color: "darkred", size: "1.6rem" }}
              className="col-sm"
            >
              <ImImages className="my-1" />
            </IconContext.Provider>

            {/* contribution form */}
            <IconContext.Provider 
              value={{ size: "1.8rem" }} 
              className="col-sm"
            >              
              <FcMoneyTransfer />              
            </IconContext.Provider>

            {/* see stickers */}
            <IconContext.Provider
              value={{ color: "darkgoldenrod", size: "1.8rem" }}
              className="col-sm"
            >
              <IoMdKey />
            </IconContext.Provider>

            {/* see profile */}
            <IconContext.Provider
              value={{ color: "#646567", size: "1.8rem" }}
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
