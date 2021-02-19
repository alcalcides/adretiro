export function validateFullText(setContent) {
  return (e) => {    
    setContent(e.target.value
      .trim()
      .replace(/[ ]{2,}/g, " ")
      )
  };
}
