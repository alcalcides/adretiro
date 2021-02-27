import post from "./interface/post";

export async function requestPasswordRecovery(username) {
  return await post(`/request-password-recovery/${username}`);
}
