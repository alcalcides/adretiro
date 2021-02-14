import post from "./interface/post";

export async function orderStickers(id) {
  const { data } = await post(`/stickers/${id}`);
  return data;
}
