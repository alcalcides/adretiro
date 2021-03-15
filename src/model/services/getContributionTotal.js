import get from "./interface/get";

export async function getContributionTotal() {
  const { data } = await get("/contribution-total");
  return data;
}
