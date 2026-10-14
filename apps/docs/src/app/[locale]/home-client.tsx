'use client';

import { useState } from 'react';
import { useI18n } from '@/locales/client';
import Link from 'next/link';
import {
  AddFill,
  AddLine,
  ArrowRightFill,
  ArrowRightLine,
  SearchFill,
  SearchLine,
  HouseFill,
  HouseLine,
  SmartphoneFill,
  SmartphoneLine,
} from '@imaimai17468/digital-agency-icons-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CodeBlock } from '@/components/code-block';
import { Header } from '@/components/header';

export function HomeClient() {
  const t = useI18n();
  const [framework, setFramework] = useState<string>('react');
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <Header>
          <h1 className="text-4xl font-bold mb-4">{t('home.title')}</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
            {t('home.description')}
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/icons"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
            >
              <SearchFill size={20} />
              {t('home.searchAllIcons')}
            </Link>
            <a
              href="https://github.com/imaimai17468/digital-agency-icons"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500 text-gray-700 dark:text-gray-300 font-medium rounded-lg transition-colors"
            >
              <svg
                viewBox="0 0 24 24"
                width="20"
                height="20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              {t('home.github')}
            </a>
          </div>
        </Header>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">
            {t('quickDemo.title')}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { Fill: AddFill, Line: AddLine, name: 'Add' },
              {
                Fill: ArrowRightFill,
                Line: ArrowRightLine,
                name: 'Arrow Right',
              },
              { Fill: SearchFill, Line: SearchLine, name: 'Search' },
              { Fill: HouseFill, Line: HouseLine, name: 'House' },
              {
                Fill: SmartphoneFill,
                Line: SmartphoneLine,
                name: 'Smartphone',
              },
            ].map(({ Fill, Line, name }) => (
              <div key={name} className="border rounded-lg p-4">
                <div className="flex items-center gap-4 mb-2">
                  <Fill
                    size={32}
                    color="currentColor"
                    aria-label={`${name} Fill`}
                  />
                  <Line
                    size={32}
                    color="currentColor"
                    aria-label={`${name} Line`}
                  />
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {name}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">
            {t('installation.title')}
          </h2>
          <Tabs value={framework} onValueChange={setFramework}>
            <TabsList>
              <TabsTrigger value="react">React</TabsTrigger>
              <TabsTrigger value="vue">Vue 3</TabsTrigger>
              <TabsTrigger value="svelte">Svelte</TabsTrigger>
            </TabsList>
            <TabsContent value="react" className="space-y-4">
              <CodeBlock
                pnpm="pnpm add @imaimai17468/digital-agency-icons-react"
                npm="npm install @imaimai17468/digital-agency-icons-react"
                yarn="yarn add @imaimai17468/digital-agency-icons-react"
              />
            </TabsContent>
            <TabsContent value="vue" className="space-y-4">
              <CodeBlock
                pnpm="pnpm add @imaimai17468/digital-agency-icons-vue"
                npm="npm install @imaimai17468/digital-agency-icons-vue"
                yarn="yarn add @imaimai17468/digital-agency-icons-vue"
              />
            </TabsContent>
            <TabsContent value="svelte" className="space-y-4">
              <CodeBlock
                pnpm="pnpm add @imaimai17468/digital-agency-icons-svelte"
                npm="npm install @imaimai17468/digital-agency-icons-svelte"
                yarn="yarn add @imaimai17468/digital-agency-icons-svelte"
              />
            </TabsContent>
          </Tabs>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">{t('usage.title')}</h2>
          <Tabs value={framework} onValueChange={setFramework}>
            <TabsList>
              <TabsTrigger value="react">React</TabsTrigger>
              <TabsTrigger value="vue">Vue 3</TabsTrigger>
              <TabsTrigger value="svelte">Svelte</TabsTrigger>
            </TabsList>
            <TabsContent value="react">
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
                <pre className="text-sm overflow-x-auto">
                  {`import { AddFill, SearchLine } from '@imaimai17468/digital-agency-icons-react';

function App() {
  return (
    <div>
      <AddFill size={24} color="currentColor" />
      <SearchLine size={32} color="#1A1A1C" />
    </div>
  );
}`}
                </pre>
              </div>
            </TabsContent>
            <TabsContent value="vue">
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
                <pre className="text-sm overflow-x-auto">
                  {`<script setup lang="ts">
import { AddFill, SearchLine } from '@imaimai17468/digital-agency-icons-vue';
</script>

<template>
  <div>
    <AddFill :size="24" color="currentColor" />
    <SearchLine :size="32" color="#1A1A1C" />
  </div>
</template>`}
                </pre>
              </div>
            </TabsContent>
            <TabsContent value="svelte">
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
                <pre className="text-sm overflow-x-auto">
                  {`<script lang="ts">
  import { AddFill, SearchLine } from '@imaimai17468/digital-agency-icons-svelte';
</script>

<AddFill size={24} color="currentColor" />
<SearchLine size={32} color="#1A1A1C" />`}
                </pre>
              </div>
            </TabsContent>
          </Tabs>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">{t('features.title')}</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>{t('features.item1')}</li>
            <li>{t('features.item2')}</li>
            <li>{t('features.item3')}</li>
            <li>{t('features.item4')}</li>
            <li>{t('features.item5')}</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">
            {t('designSystem.title')}
          </h2>
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 bg-gray-50 dark:bg-gray-800">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {t('designSystem.description')}
            </p>
            <a
              href="https://www.digital.go.jp/policies/servicedesign/designsystem/Illustration_Icons"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 text-gray-700 dark:text-gray-300 rounded-lg transition-colors"
            >
              <svg
                viewBox="0 0 24 24"
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
              {t('designSystem.link')}
            </a>
          </div>
        </section>

        <section className="border-t border-gray-200 dark:border-gray-700 pt-12">
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-4">
              {t('viewAll.title')}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              {t('viewAll.description')}
            </p>
            <Link
              href="/icons"
              className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white text-lg font-medium rounded-lg transition-colors"
            >
              <SearchFill size={24} />
              {t('viewAll.button')}
              <ArrowRightFill size={20} />
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
