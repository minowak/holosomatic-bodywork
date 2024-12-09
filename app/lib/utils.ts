import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

import en from "@/locales/en.json";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export type Language = "en" | "pl" | "ru" | "ua";

export function getTranslations(lang?: Language | undefined) {
  return en;
}
