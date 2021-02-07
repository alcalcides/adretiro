import React, { useState } from "react";
import ModalTemplate from "./ModalTemplate";
import numberToMoney from "../../model/library/niceNumbers";
import Errors from "../../model/Errors";
import createContribution from "../../model/services/createContribution";

export default function ModalContributionForm({
  username,
  isVisible,
  handleClose,
}) {
  const [money, setMoney] = useState(0);

  async function handleContribution(e) {
    e.preventDefault();
    try {
      if (money < 0.01) {
        return alert(Errors.valueNotAllowed);
      } else {
        const data = { username, value: money };
        const response = await createContribution(data);
        if (response.success === false) {
          throw new Error(response.message);
        }

        alert(
          `Registrado ${numberToMoney(
            response.data.value
          )} de contribuição em nome de ${username}`
        );

        setMoney(0);
      }
    } catch (e) {
      alert(e);
    }
  }

  return (
    <ModalTemplate
      title="Registro de contribuição"
      isVisible={isVisible}
      handleClose={handleClose}
      saveButton={true}
      handleSave={handleContribution}
      callToAction="Registrar"
    >
      <form>
        <div className="form-row align-items-center">
          <label
            htmlFor="contributionsValue"
            className="col-auto col-form-label col-form-label-sm text-letf"
          >
            Username:
          </label>
          <input
            className="form-control col-auto"
            type="text"
            name="contributionsUsername"
            id="contributionsUsername"
            readOnly={true}
            value={username}
          />
        </div>
        <div className="form-row align-items-center">
          <label
            htmlFor="contributionsValue"
            className="col-auto col-form-label col-form-label-sm text-letf"
          >
            Valor:
          </label>
          <input
            className="form-control col-auto"
            type="number"
            name="contributionsValue"
            id="contributionsValue"
            min={0.01}
            step={0.01}
            value={money}
            onChange={(e) => setMoney(Number(e.target.value))}
          />
        </div>
      </form>
      <p className="h6">Valor a Registrar: {numberToMoney(money)}</p>
    </ModalTemplate>
  );
}
