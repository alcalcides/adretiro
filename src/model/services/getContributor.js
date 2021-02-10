import get from "./interface/get";

export async function getContributor(id) {
  const { data } = await get(`/contributors/${id}`);
  return data;
}
