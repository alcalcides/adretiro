import React, { useEffect, useState } from "react";
import { getStickersAccount } from "../../model/services/getStickersAccount";

export default function PainelStickersAccount() {
  const [stickersAvailable, setStickersAvailable] = useState(0);

  useEffect(() => {
    async function getStickersAccountData() {
      const { stickerAccount } = await getStickersAccount("available");
      setStickersAvailable(stickerAccount);
    }
    getStickersAccountData();
  }, []);

  return <p>Senhas disponíveis: {stickersAvailable}</p>;
}
