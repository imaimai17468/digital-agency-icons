export const locales = ['ja', 'en'] as const;
export type Locale = (typeof locales)[number];

export const isLocale = (value: string): value is Locale =>
  locales.some((locale) => locale === value);
