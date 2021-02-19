export function fixPhoneNumber(setContent) {
  return (e) => {
    setContent(e.target.value
      .replace(/[^0-9]/g, ""));
  };
}
