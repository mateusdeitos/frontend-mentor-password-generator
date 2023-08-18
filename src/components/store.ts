import { writable } from "svelte/store";
import { generatePassword } from "./generatePassword";

const defaultOptions: PasswordOptions = {
  length: 8,
  uppercase: true,
  lowercase: true,
  numbers: false,
  symbols: false,
};

export const formStore = writable<PasswordOptions & { password: string }>({
  ...defaultOptions,
  password: generatePassword(defaultOptions),
});
