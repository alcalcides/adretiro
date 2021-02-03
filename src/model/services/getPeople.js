import get from "./interface/get";

export async function getPeople(id) {
  const { data } = await get(`/people/${id}`);
  return data;
}
