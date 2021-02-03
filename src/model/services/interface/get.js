import api from "./api";

export default async function get(route) {
  return await api.get(route);
}
