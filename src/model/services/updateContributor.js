import put from "./interface/put";

export async function updateContributor(data) {
  try {
    const response = await put("/contributors", data);
    return response;
  } catch (reason) {
    throw new Error(reason);
  }
}
