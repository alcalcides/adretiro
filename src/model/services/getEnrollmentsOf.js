import get from "./interface/get";

export async function getEnrollmentsOf(id) {

  const res = await get(`/list-departments/${id}`);
  return res.data;
}
