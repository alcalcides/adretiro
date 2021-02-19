export function fixUserName(setContent) {
  return (e) => {
    setContent(e.target.value
      .trim()
      .substring(0, 25)
    );
  };
}
