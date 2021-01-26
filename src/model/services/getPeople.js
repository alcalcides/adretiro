import get from "./interface/get";

export async function getPeople(id) {
  try {
    const res = await get(`/people/${id}`);
    return res.data;
  } catch (error) {
    return new Error(error);
  }
}
