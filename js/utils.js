export function removeNonealphanumericCharacters(text) {
  return text.replace(/[^a-zA-Z0-9\s]/g, '')
}

export function isValidInput(text) {
  return (
    text.trim().length > 0 &&
    text === text.toLowerCase()
  );
}

