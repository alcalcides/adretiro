import post from "./interface/post";

export async function requestReward(id) {
  return await post(`/request-reward/${id}`);
}
