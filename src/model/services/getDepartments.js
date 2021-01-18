import { getServer } from "./interface/getServer";
import get from "./interface/get"

export async function getDepartments() {
  const provider = getServer();
      
  const res = await get(provider + "/list-departments");
  return res.data;

}

