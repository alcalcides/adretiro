import get from "./interface/get";

export async function getContributors() {
  const { data } = await get("/contributors");
  return data;
}
