import React, { useEffect, useState } from "react";

import { stickersExemple } from "../../model/services/stickersExemple";
import CardSticker from "./CardSticker";

export default function Stickers() {
  const [stickers, setStickers] = useState([]);

  useEffect(() => {
    setStickers(JSON.parse(stickersExemple)); //ATTENTION server call (not rewarded stickers)
  }, []);

  return (
    <div className="row no-gutters justify-content-around">
      {stickers.map((stickers) => (
        <CardSticker  
          key={stickers.id}
          label={stickers.label}
          jacobsSun={stickers.jacobsSun}
          status={stickers.status}
        />
      ))}
    </div>
  );
}
