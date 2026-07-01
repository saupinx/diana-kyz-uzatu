import type { Language } from "@/data/invitation";

export const defaultLanguage: Language = "ru";
export const languageStorageKey = "diana-invitation-language";

export function isLanguage(value: string | null): value is Language {
  return value === "ru" || value === "kz";
}

export function getStoredLanguage(): Language {
  if (typeof window === "undefined") {
    return defaultLanguage;
  }

  const stored = window.localStorage.getItem(languageStorageKey);
  return isLanguage(stored) ? stored : defaultLanguage;
}

export function storeLanguage(language: Language) {
  if (typeof window !== "undefined") {
    window.localStorage.setItem(languageStorageKey, language);
  }
}
