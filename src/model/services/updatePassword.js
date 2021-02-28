import post from "./interface/post";

export async function updatePassword(data) {
  return await post(`/update-password`, data);
}
