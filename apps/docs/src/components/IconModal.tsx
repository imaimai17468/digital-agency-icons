'use client';
import { useEffect, useState, useRef } from 'react';
import * as Icons from '@imaimai17468/digital-agency-icons-react';
import type { IconInfo } from '@/lib/icons';
import { useI18n } from '@/locales/client';

interface IconModalProps {
  icon: IconInfo | null;
  variant: 'fill' | 'line';
  onClose: () => void;
}

export function IconModal({ icon, variant, onClose }: IconModalProps) {
  const t = useI18n();
  const [copiedItem, setCopiedItem] = useState<string | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerElementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (icon) {
      triggerElementRef.current = document.activeElement as HTMLElement;
      dialog.showModal();
      document.body.style.overflow = 'hidden';

      requestAnimationFrame(() => {
        const focusableElements = dialog.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements.length > 0) {
          focusableElements[0].focus();
        }
      });
    } else {
      const restoreFocus = () => {
        if (triggerElementRef.current) {
          triggerElementRef.current.focus();
          triggerElementRef.current = null;
        }
        document.body.style.overflow = '';
      };

      dialog.addEventListener('close', restoreFocus, { once: true });
      dialog.close();
    }

    const handleCancel = (e: Event) => {
      e.preventDefault();
      onClose();
    };

    const handleClick = (e: MouseEvent) => {
      if (e.target === dialog) {
        onClose();
      }
    };

    if (icon) {
      dialog.addEventListener('cancel', handleCancel);
      dialog.addEventListener('click', handleClick);
    }

    return () => {
      dialog.removeEventListener('cancel', handleCancel);
      dialog.removeEventListener('click', handleClick);
    };
  }, [icon, onClose]);

  if (!icon)
    return (
      <dialog
        ref={dialogRef}
        className="backdrop:bg-black/50 backdrop:backdrop-blur-xs p-0 m-0 max-w-none w-full h-full max-h-none bg-transparent border-0"
      />
    );

  const componentName =
    variant === 'fill' ? icon.fillComponent : icon.lineComponent;
  const IconComponent = (Icons as any)[componentName];

  const importStatement = `import { ${componentName} } from '@imaimai17468/digital-agency-icons-react';`;
  const usageExample = `<${componentName} size={24} color="currentColor" />`;
  const usageExampleWithProps = `<${componentName}
  size={32}
  color="#1A1A1C"
  className="my-icon"
  aria-label="${icon.name}"
/>`;

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(label);
    setTimeout(() => setCopiedItem(null), 2000);
  };

  return (
    <dialog
      ref={dialogRef}
      className="backdrop:bg-black/50 backdrop:backdrop-blur-xs p-0 m-0 max-w-none w-full h-full max-h-none bg-transparent border-0 flex items-center justify-center"
      aria-label={`${icon.name}アイコンの詳細`}
    >
      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto m-4">
        {/* ヘッダー */}
        <div className="sticky top-0 z-10 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            {IconComponent && (
              <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg">
                <IconComponent size={32} color="currentColor" />
              </div>
            )}
            <div>
              <h2 className="text-2xl font-bold">{icon.name}</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {componentName} ({variant})
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
            aria-label={t('modal.close')}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* コンテンツ */}
        <div className="p-6 space-y-6">
          {/* インポート文 */}
          <section>
            <h3 className="text-lg font-semibold mb-3">{t('modal.import')}</h3>
            <div className="relative">
              <pre className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 overflow-x-auto text-sm">
                <code>{importStatement}</code>
              </pre>
              <button
                onClick={() => copyToClipboard(importStatement, 'import')}
                className="absolute top-2 right-2 p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                aria-label="Copy to clipboard"
              >
                {copiedItem === 'import' ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-green-600 dark:text-green-400"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-gray-600 dark:text-gray-400"
                  >
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                  </svg>
                )}
              </button>
            </div>
          </section>

          {/* 基本的な使い方 */}
          <section>
            <h3 className="text-lg font-semibold mb-3">{t('modal.basicUsage')}</h3>
            <div className="relative">
              <pre className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 overflow-x-auto text-sm">
                <code>{usageExample}</code>
              </pre>
              <button
                onClick={() => copyToClipboard(usageExample, 'basic')}
                className="absolute top-2 right-2 p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                aria-label="Copy to clipboard"
              >
                {copiedItem === 'basic' ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-green-600 dark:text-green-400"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-gray-600 dark:text-gray-400"
                  >
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                  </svg>
                )}
              </button>
            </div>
          </section>

          {/* プロパティ付きの使い方 */}
          <section>
            <h3 className="text-lg font-semibold mb-3">{t('modal.customization')}</h3>
            <div className="relative">
              <pre className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 overflow-x-auto text-sm">
                <code>{usageExampleWithProps}</code>
              </pre>
              <button
                onClick={() =>
                  copyToClipboard(usageExampleWithProps, 'advanced')
                }
                className="absolute top-2 right-2 p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                aria-label="Copy to clipboard"
              >
                {copiedItem === 'advanced' ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-green-600 dark:text-green-400"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-gray-600 dark:text-gray-400"
                  >
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                  </svg>
                )}
              </button>
            </div>
          </section>

          {/* プレビュー */}
          <section>
            <h3 className="text-lg font-semibold mb-3">{t('modal.preview')}</h3>
            <div className="grid grid-cols-3 gap-4">
              {[16, 24, 32, 48, 64, 96].map((size) => (
                <div
                  key={size}
                  className="flex flex-col items-center justify-center gap-2 p-4 border border-gray-200 dark:border-gray-700 rounded-lg"
                >
                  {IconComponent && (
                    <IconComponent size={size} color="currentColor" />
                  )}
                  <span className="text-xs text-gray-500">{size}px</span>
                </div>
              ))}
            </div>
          </section>

          {/* Props */}
          <section>
            <h3 className="text-lg font-semibold mb-3">{t('modal.availableProps')}</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-100 dark:bg-gray-800">
                  <tr>
                    <th className="px-4 py-2 text-left font-semibold">{t('modal.prop')}</th>
                    <th className="px-4 py-2 text-left font-semibold">{t('modal.type')}</th>
                    <th className="px-4 py-2 text-left font-semibold">
                      {t('modal.default')}
                    </th>
                    <th className="px-4 py-2 text-left font-semibold">{t('modal.description')}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  <tr>
                    <td className="px-4 py-2 font-mono text-xs">size</td>
                    <td className="px-4 py-2 font-mono text-xs">
                      number | string
                    </td>
                    <td className="px-4 py-2 font-mono text-xs">24</td>
                    <td className="px-4 py-2">{t('modal.iconSize')}</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 font-mono text-xs">color</td>
                    <td className="px-4 py-2 font-mono text-xs">string</td>
                    <td className="px-4 py-2 font-mono text-xs">
                      currentColor
                    </td>
                    <td className="px-4 py-2">{t('modal.iconColor')}</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 font-mono text-xs">className</td>
                    <td className="px-4 py-2 font-mono text-xs">string</td>
                    <td className="px-4 py-2">-</td>
                    <td className="px-4 py-2">{t('modal.cssClass')}</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 font-mono text-xs">style</td>
                    <td className="px-4 py-2 font-mono text-xs">
                      CSSProperties
                    </td>
                    <td className="px-4 py-2">-</td>
                    <td className="px-4 py-2">{t('modal.inlineStyle')}</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 font-mono text-xs">aria-label</td>
                    <td className="px-4 py-2 font-mono text-xs">string</td>
                    <td className="px-4 py-2">-</td>
                    <td className="px-4 py-2">{t('modal.a11yLabel')}</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 font-mono text-xs">title</td>
                    <td className="px-4 py-2 font-mono text-xs">string</td>
                    <td className="px-4 py-2">-</td>
                    <td className="px-4 py-2">{t('modal.tooltipTitle')}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* タグ */}
          {icon.tags.length > 0 && (
            <section>
              <h3 className="text-lg font-semibold mb-3">{t('modal.tags')}</h3>
              <div className="flex flex-wrap gap-2">
                {icon.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </dialog>
  );
}
