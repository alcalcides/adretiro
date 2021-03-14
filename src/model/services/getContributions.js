import get from "./interface/get";

export async function getContributions() {
  const { data } = await get("/contributions");
  return data;
}
