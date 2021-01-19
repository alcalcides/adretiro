import { servers } from "../../servers.json"

export function getServer() {
  const dns = window.location.hostname;

  const server =
    dns === "localhost"
      ? servers.development
      : dns === "adretiro-dev.herokuapp.com"
      ? servers.review
      : dns === "adretiro.com.br"
      ? servers.production
      : null;

  return server;
}
