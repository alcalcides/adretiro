import post from "./interface/post";

export async function createContributor(data) {
  try {
    const response = await post("/contributors", data);
    return response;
  } catch (reason) {
    throw new Error(reason);
  }
}
