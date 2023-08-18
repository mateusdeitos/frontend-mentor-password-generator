import { MAX_CHAR_LENGTH } from "../../constants";
const ratingMap: Array<{ limit: number; rating: Rating }> = [
  { rating: "too-weak", limit: 25 },
  { rating: "weak", limit: 50 },
  { rating: "medium", limit: 85 },
  { rating: "strong", limit: 100 },
];

const weights: Record<keyof Omit<PasswordOptions, "password">, number> = {
  length: 0.5,
  uppercase: 1,
  lowercase: 0.8,
  numbers: 1.5,
  symbols: 2,
};

export function calculateRating({
  length,
  uppercase,
  lowercase,
  numbers,
  symbols,
}: PasswordOptions): Rating {
  let score = (length / MAX_CHAR_LENGTH) * 25 * weights.length;
  if (uppercase) {
    score += 25 * weights.uppercase;
  }

  if (lowercase) {
    score += 25 * weights.lowercase;
  }

  if (numbers) {
    score += 25 * weights.numbers;
  }

  if (symbols) {
    score += 25 * weights.symbols;
  }

  // for safety, we'll make sure the score is never greater than 100
  score = Math.min(score, 100);

  return ratingMap.find((item) => score <= item.limit)?.rating || "too-weak";
}
