import post from "./interface/post";

export async function signIn(data) {
  try {
    const response = await post("/authenticate", data);

    if (response.success === false) {
      throw new Error( response.reason );
    }

    return response;
    
  } catch (error) {
    throw new Error(error);
  }
}
