export function getUserNameFromURL() {
  return document.location.pathname.split("/")[2];
}
