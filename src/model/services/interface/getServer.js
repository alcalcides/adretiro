import serversJSON from "../../servers.json";

const { servers } = serversJSON;

export function getServer() {
  let server;

  const dns = window.location.hostname;
  switch (dns) {
    case "localhost":
      server = servers.development;
      break;
    case "adretiro-dev.herokuapp.com":
      server = servers.review;
      break;
    case "adretiro.com.br":
      server = servers.production;
      break;  
    default:
      server = servers.trap;
      break;
  }

  return server;
}
