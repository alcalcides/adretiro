import React, { useEffect, useState } from "react";
import { getGifts } from "../../model/services/getGifts";
import GiftsListItem from "./GiftsListItem";

export default function GiftsList() {
  const [listOfGifts, setListOfGifts] = useState([]);

  useEffect(() => {
    async function getGiftsData() {
      const data = await getGifts();
      setListOfGifts(data);
    }

    getGiftsData();
  }, []);

  return (
    <div className="table-responsive">
      <table className="table table-sm table-success table-rounded">
        <thead className="h5">
          <tr className="">
            <th scope="col" className="align-middle text-center border-top-0 py-3">ID</th>
            <th scope="col" className="align-middle text-center border-top-0 py-3">Contribuinte</th>
            <th scope="col" className="align-middle text-center border-top-0 py-3">Data do Registro</th>
          </tr>
        </thead>
        <tbody className="h6">
          {listOfGifts.map((giftRequestData) => (
            <GiftsListItem
              key={giftRequestData.id}
              giftRequestData={giftRequestData}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
