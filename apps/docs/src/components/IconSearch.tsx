'use client';

import { useState } from 'react';
import { categories, type Category } from '@/lib/icons';
import { useI18n } from '@/locales/client';

interface IconSearchProps {
  onSearch: (query: string, category: Category) => void;
}

export function IconSearch({ onSearch }: IconSearchProps) {
  const t = useI18n();
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');

  const handleQueryChange = (newQuery: string) => {
    setQuery(newQuery);
    onSearch(newQuery, selectedCategory);
  };

  const handleCategoryChange = (newCategory: Category) => {
    setSelectedCategory(newCategory);
    onSearch(query, newCategory);
  };

  return (
    <div className="space-y-4">
      {/* 検索バー */}
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => handleQueryChange(e.target.value)}
          placeholder={t('icons.searchPlaceholder')}
          className="w-full px-4 py-3 pl-12 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
        />
        <svg
          className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>

      {/* カテゴリーフィルター */}
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            type="button"
            key={category}
            onClick={() => handleCategoryChange(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedCategory === category
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            {t(`icons.categories.${category}`)}
          </button>
        ))}
      </div>
    </div>
  );
}
