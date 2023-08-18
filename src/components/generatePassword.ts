const alphabet = "abcdefghijklmnopqrstuvwxyz";
const upperCaseAlphabet = alphabet.toUpperCase();
const numberOptions = "0123456789";
const symbolOptions = "!@#$%^&*()_+-=[]{};':\",./<>?";

export function generatePassword({
  length,
  lowercase,
  numbers,
  symbols,
  uppercase,
}: Omit<PasswordOptions, "password">): string {
  const parts: string[] = [];
  const baseRandomArray: string[] = [];
  if (lowercase) {
    baseRandomArray.push(...alphabet.split(""));
  }

  if (uppercase) {
    baseRandomArray.push(...upperCaseAlphabet.split(""));
  }

  if (numbers) {
    baseRandomArray.push(...numberOptions.split(""));
  }

  if (symbols) {
    baseRandomArray.push(...symbolOptions.split(""));
  }

  baseRandomArray.sort(() => Math.random() - 0.5);

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * baseRandomArray.length);
    parts.push(baseRandomArray[randomIndex]);
  }

  return parts.join("");
}
