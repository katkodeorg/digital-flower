export function encodeString(message: string) {
  return encodeRot13(message);
}

export function decodeString(message: string) {
  return decodeRot13(message);
}

export function encodeRot13(message: string) {
  return message.replace(/[a-z]/gi, (letter) =>
    String.fromCharCode(
      letter.charCodeAt(0) + (letter.toLowerCase() <= "m" ? 13 : -13)
    )
  );
}

export function decodeRot13(message: string) {
  return message.replace(/[a-z]/gi, (letter) =>
    String.fromCharCode(
      letter.charCodeAt(0) - (letter.toLowerCase() <= "m" ? -13 : +13)
    )
  );
}

// copy to clipboard
 