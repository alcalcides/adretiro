import get from "./interface/get";

export async function getGifts() {
  const { data } = await get("/reward-requests");
  return data;
}
