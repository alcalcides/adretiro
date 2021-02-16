import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../model/contexts/auth";
import { getStickersOf } from "../../model/services/getStickersOf";
import CardSticker from "./CardSticker";

export default function Stickers() {
  const { user } = useContext(AuthContext);
  const [stickers, setStickers] = useState([]);

  useEffect(() => {
    async function getStickersData() {
      const response = await getStickersOf(user.id);
      setStickers(response);
    }
    getStickersData();
  }, [user.id]);

  return (
    <div className="row no-gutters justify-content-around">
      {stickers.map((stickers) => (
        <CardSticker
          key={stickers.label}
          label={stickers.label}
          jacobsSun={stickers.name}
          status={stickers.status}
        />
      ))}
    </div>
  );
}
