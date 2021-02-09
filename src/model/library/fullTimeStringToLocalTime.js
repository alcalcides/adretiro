export default function fullTimeStringToLocalTime(fullTime) {
  return new Date(fullTime).toLocaleString();
}
