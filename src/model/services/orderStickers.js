import post from "./interface/post";

export async function orderStickers(id) {
  return await post(`/stickers/${id}`);
}
