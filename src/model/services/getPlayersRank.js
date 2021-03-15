import get from "./interface/get";

export async function getPlayersRank() {
  const { data } = await get("/stickers-rank");
  return data;
}
