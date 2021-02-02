import put from "./interface/put";

export async function updateContributor(data) {
  return await put("/contributors", data);
}
