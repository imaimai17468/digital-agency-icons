'use client';

import { useState } from 'react';
import { getIconComponent, type IconInfo } from '@/lib/icons';
import { IconModal } from './IconModal';
import { useI18n } from '@/locales/client';

interface IconGridProps {
  icons: IconInfo[];
}

type IconVariant = 'fill' | 'line';

export function IconGrid({ icons }: IconGridProps) {
  const t = useI18n();
  const [selectedIcon, setSelectedIcon] = useState<IconInfo | null>(null);
  const [variant, setVariant] = useState<IconVariant>('fill');

  if (icons.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-gray-500 dark:text-gray-400 text-lg">
          {t('icons.noResults')}
        </p>
        <p className="text-gray-400 dark:text-gray-500 text-sm mt-2">
          {t('icons.tryDifferentKeyword')}
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* バリアント切り替え */}
      <div className="flex gap-2 justify-end">
        <button
          type="button"
          onClick={() => setVariant('fill')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            variant === 'fill'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
          }`}
        >
          Fill
        </button>
        <button
          type="button"
          onClick={() => setVariant('line')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            variant === 'line'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
          }`}
        >
          Line
        </button>
      </div>

      {/* アイコングリッド */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
        {icons.map((icon) => {
          const componentName =
            variant === 'fill' ? icon.fillComponent : icon.lineComponent;
          const IconComponent = getIconComponent(componentName);

          if (!IconComponent) return null;

          return (
            <button
              type="button"
              key={`${icon.name}-${variant}`}
              onClick={() => setSelectedIcon(icon)}
              className="group relative flex flex-col items-center justify-center gap-2 p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all"
              title={t('icons.clickToView')}
            >
              <IconComponent
                size={32}
                color="currentColor"
                className="text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400"
              />
              <span className="text-xs text-center text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 wrap-break-word w-full">
                {icon.name}
              </span>
            </button>
          );
        })}
      </div>

      {/* 結果件数 */}
      <div className="text-center text-sm text-gray-500 dark:text-gray-400">
        {icons.length} {t('icons.count')}
      </div>

      {/* モーダル */}
      <IconModal
        icon={selectedIcon}
        variant={variant}
        onClose={() => setSelectedIcon(null)}
      />
    </div>
  );
}
