export function validatePhoneNumber(setContent) {
    return (e) => setContent(e.target.value.value
        .replace("_", "")    
    )
}