import get from "./interface/get";

export async function getContributionsOf(username) {
  const { data } = await get(`/contributions/${username}`);
  return data;
}
