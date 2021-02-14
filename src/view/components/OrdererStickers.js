import React, { useContext } from "react";
import ButtonAnimated from "./ButtonAnimated";
import { orderStickers } from "../../model/services/orderStickers";
import { AuthContext } from "../../model/contexts/auth";
import useGoTo from "../../controller/hooks/useGoTo";


export default function OrdererStickers() {
  const { user } = useContext(AuthContext);
  const { goTo } = useGoTo()
  async function handleOrderSticker(e) {
    e.preventDefault();
    const response = await orderStickers(user.id);
    if(response.success === true ){
        alert("Senhas liberadas!");
        goTo(`/minhas-senhas/${user.username}`)
    }
    else{
        alert(response)

    }
  }

  return (
    <ButtonAnimated
      callToAction="Liberar Senhas"
      actionToPerform={handleOrderSticker}
      animation="myBig"
      specialStyles="myRed"
    />
  );
}
