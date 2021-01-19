import get from "./interface/get";

export async function getDepartments() {

  const res = await get("/list-departments");
  return res.data;
}
