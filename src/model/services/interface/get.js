const axios = require("axios").default;

export default function get(uri) {
  return axios
    .get(uri)
    .then((value) => value)
    .catch((reason) => ({ success: false, reason }));
}
