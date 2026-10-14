'use client';

import { useState } from 'react';

interface CodeBlockProps {
  npm?: string;
  yarn?: string;
  pnpm?: string;
}

export function CodeBlock({ npm, yarn, pnpm }: CodeBlockProps) {
  const [selected, setSelected] = useState<'pnpm' | 'npm' | 'yarn'>('pnpm');
  const [copied, setCopied] = useState(false);

  const commands = {
    pnpm,
    npm,
    yarn,
  };

  const handleCopy = async () => {
    const command = commands[selected];
    if (!command) return;

    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div>
      <div className="flex gap-2 mb-3">
        {pnpm && (
          <button
            type="button"
            onClick={() => setSelected('pnpm')}
            className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
              selected === 'pnpm'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            pnpm
          </button>
        )}
        {npm && (
          <button
            type="button"
            onClick={() => setSelected('npm')}
            className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
              selected === 'npm'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            npm
          </button>
        )}
        {yarn && (
          <button
            type="button"
            onClick={() => setSelected('yarn')}
            className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
              selected === 'yarn'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            yarn
          </button>
        )}
      </div>
      <div className="relative bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
        <code className="text-sm">{commands[selected]}</code>
        <button
          type="button"
          onClick={() => void handleCopy()}
          className="absolute top-2 right-2 p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          aria-label="Copy to clipboard"
        >
          {copied ? (
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
    </div>
  );
}
