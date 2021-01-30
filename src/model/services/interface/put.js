import api from "./api";

export default async function put(route, data = null, config = null) {
  try {
    const response = await api.put(route, data, config);
    return response;
  } catch (reason) {
    if (reason.response.data) return reason.response.data;
    else throw new Error(reason);
  }
}
