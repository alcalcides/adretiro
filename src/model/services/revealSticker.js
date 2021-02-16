import post from "./interface/post";

export async function revealSticker(label) {
  return await post(`/stickers/reveal/${label}`);

}
