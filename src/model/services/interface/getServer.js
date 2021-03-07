import { servers } from "../../servers.json";

export function getServer() {
  let server = servers.blind;
  
  const dns = window.location.hostname;
  if (dns === "localhost") server = servers.development;
  else if (dns === "10.0.0.117") server = servers.lan;
  else if (dns === "adretiro-dev.herokuapp.com") server = servers.review;
  else if (dns === "adretiro.com.br") server = servers.production;

  return server;
}
