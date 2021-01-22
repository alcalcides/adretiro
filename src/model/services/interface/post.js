import api from "./api";

export default async function post(route, data = null, config = null) {
  return api
    .post(route, data, config)
    .then((value) => {
      return value;
    })
    .catch((reason) => {
      return { success: false, reason };
    });
}
