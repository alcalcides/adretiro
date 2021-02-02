import post from "./interface/post";

export async function signIn(data) {
  const response = await post("/authenticate", data);

  if (response.success === false) {
    throw new Error(response.message);
  }

  return response;
}
