'use client';

import * as React from 'react';
import { isLocale } from '@/locales';
import { useChangeLocale, useCurrentLocale } from '@/locales/client';

export function LanguageToggle() {
  const locale = useCurrentLocale();
  const changeLocale = useChangeLocale();

  return (
    <select
      value={locale}
      onChange={(e) => {
        if (isLocale(e.target.value)) changeLocale(e.target.value);
      }}
      className="px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg text-sm font-medium focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer"
      aria-label="言語選択"
    >
      <option value="ja">🇯🇵 日本語</option>
      <option value="en">🇺🇸 English</option>
    </select>
  );
}
