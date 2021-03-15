import get from "./interface/get";

export async function getStickersAccount(status) {
  const { data } = await get(`/stickers?status=${status}`);
  return data;
}
