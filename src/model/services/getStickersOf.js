import get from "./interface/get";

export async function getStickersOf(username) {
  const { data } = await get(`/stickers/${username}`);
  return data;
}
