export function validateUserName(setContent) {
  return (e) => {    
    setContent(e.target.value
      .trim()
      .replace(/[ ]*/g, "")
    )
  };
}
