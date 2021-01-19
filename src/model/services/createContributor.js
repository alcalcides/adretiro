import post from "./interface/post";

export async function createContributor(data) {
  return await post("contributors", data);
}
