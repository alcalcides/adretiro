import { servers } from "../../servers.json"

export function getServer() {
  const dns = window.location.hostname;

  const server =
    dns === "localhost"
      ? servers.review
      : dns === "adretiro-dev.herokuapp.com"
      ? servers.review
      : dns === "adretiro-dev.herokuapp.com"
      ? servers.production
      : null;

  return server;
}
