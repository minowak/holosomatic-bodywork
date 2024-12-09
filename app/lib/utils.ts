import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

import en from "@/locales/en.json";
import pl from "@/locales/pl.json";
import ua from "@/locales/ua.json";
import ru from "@/locales/ru.json";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export type Language = "en" | "pl" | "ru" | "ua";

export function getTranslations(lang?: Language | undefined) {
  if (lang === "pl") {
    return pl;
  }
  if (lang === "ua") {
    return ua;
  }
  if (lang === "ru") {
    return ru;
  }
  return en;
}
