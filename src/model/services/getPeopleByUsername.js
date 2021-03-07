import get from "./interface/get";

export async function getPeopleByUsername(username) {
  const { data } = await get(`/people?username=${username}`);
  return data;
}
