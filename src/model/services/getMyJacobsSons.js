import get from "./interface/get";

export async function getMyJacobsSons(id) {
  const { data } = await get(`/stickers/distincts/${id}`);
  return data;
}
