import React, { useEffect, useState } from "react";
import numberToMoney from "../../model/library/niceNumbers";
import { getContributionTotal } from "../../model/services/getContributionTotal";

export default function PainelContributionTotal() {
  const [contributionTotal, setContributionTotal] = useState(0);

  useEffect(() => {
    async function getContributionTotalData() {
      const { contributionTotal } = await getContributionTotal();
      setContributionTotal(contributionTotal);
    }

    getContributionTotalData();
  }, []);

  return <p>Arrecadação Total: {numberToMoney(contributionTotal)}</p>;
}
