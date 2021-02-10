import React, { useEffect, useState, useContext } from "react";
import numberToMoney from "../../model/library/niceNumbers";
import { AuthContext } from "../../model/contexts/auth";
import { getContributor } from "../../model/services/getContributor";

export default function AccountBalance() {
  const [accountBalance, setAccountBalance] = useState(0);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    async function getAccountBalance() {
      const { amount } = await getContributor(user.id);
      setAccountBalance(amount);
    }
    getAccountBalance();
  });

  return <p className="mb-0">Saldo: {numberToMoney(accountBalance)}</p>;
}
