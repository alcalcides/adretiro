import React, { useState } from "react";

import { IoMdKey } from "react-icons/io";
import { MdPerson } from "react-icons/md";
import { FcMoneyTransfer } from "react-icons/fc";
import { ImImages } from "react-icons/im";
import { IconContext } from "react-icons";
import ModalContributionForm from "./ModalContributionForm";
import ModalProfileGlance from "./ModalProfileGlance";

export default function ContributorsListItem({ contributorData }) {
  const [isShownContributionForm, setIsShownContributionForm] = useState(false);
  const [isShownProfileGlance, setIsShownProfileGlance] = useState(false);

  function closeContributionForm() {
    setIsShownContributionForm(false);
  }
  function showContributionForm() {
    setIsShownContributionForm(true);
  }

  function closeProfileGlance() {
    setIsShownProfileGlance(false);
  }
  function showProfileGlance() {
    setIsShownProfileGlance(true);
  }

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
            <IconContext.Provider value={{ size: "1.8rem" }} className="col-sm">
              <FcMoneyTransfer
                onClick={showContributionForm}
                cursor="pointer"
              />
            </IconContext.Provider>
            <ModalContributionForm
              username={contributorData.username}
              isVisible={isShownContributionForm}
              handleClose={closeContributionForm}
            />
            
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
              <MdPerson 
                onClick={showProfileGlance}
                cursor="pointer"
              />
            </IconContext.Provider>
            <ModalProfileGlance
              username={contributorData.username}
              isVisible={isShownProfileGlance}
              handleClose={closeProfileGlance}
            />
          </div>
        </div>
      </td>
    </tr>
  );
}
