import api from "./api";

export default async function get(route) {
  return api
    .get(route)
    .then((value) => {
      return value;
    })
    .catch((reason) => {
      return new Error(reason);
    });
}
