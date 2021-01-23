export default function getFilledFields(dataIn) {
  const temp = Object.entries(dataIn).filter(([key, value]) => {
    if (typeof value === "string" && value.length === 0) return false;
    else return true;
  });
  return Object.fromEntries(temp);
}
