import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Analytics } from '@vercel/analytics/next';
import { ThemeProvider } from '@/components/theme-provider';
import { locales } from '@/locales';
import { I18nProviderClient } from '@/locales/client';
import '../globals.css';

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  const baseUrl = 'https://digital-agency-icons.vercel.app';

  const metadata: Record<string, any> = {
    ja: {
      title: {
        default: 'Digital Agency Icons - デジタル庁アイコンの非公式ライブラリ',
        template: '%s | Digital Agency Icons',
      },
      description:
        'デジタル庁デザインシステムのアイコンを、React・Vue・Svelteで簡単に使える非公式コンポーネントライブラリ。120個のアイコン（Fill/Line）、TypeScript完全対応、Tree-shaking対応。',
      keywords: [
        'デジタル庁',
        'Digital Agency',
        'アイコン',
        'Icons',
        'React',
        'Vue',
        'Svelte',
        'TypeScript',
        'デザインシステム',
        'Design System',
        '日本政府',
        'Japanese Government',
      ],
      openGraph: {
        title: 'Digital Agency Icons - デジタル庁アイコンの非公式ライブラリ',
        description:
          'デジタル庁デザインシステムのアイコンを、React・Vue・Svelteで簡単に使える非公式コンポーネントライブラリ',
      },
      twitter: {
        title: 'Digital Agency Icons - デジタル庁アイコンの非公式ライブラリ',
        description:
          'デジタル庁デザインシステムのアイコンを、React・Vue・Svelteで簡単に使える非公式コンポーネントライブラリ',
      },
    },
    en: {
      title: {
        default: 'Digital Agency Icons - Unofficial Icon Library',
        template: '%s | Digital Agency Icons',
      },
      description:
        'Unofficial component library for Digital Agency Design System icons. Easy to use with React, Vue, and Svelte. 120 icons (Fill/Line), full TypeScript support, tree-shaking ready.',
      keywords: [
        'Digital Agency',
        'Icons',
        'React',
        'Vue',
        'Svelte',
        'TypeScript',
        'Design System',
        'Japanese Government',
        'Japan',
      ],
      openGraph: {
        title: 'Digital Agency Icons - Unofficial Icon Library',
        description:
          'Unofficial component library for Digital Agency Design System icons. Easy to use with React, Vue, and Svelte.',
      },
      twitter: {
        title: 'Digital Agency Icons - Unofficial Icon Library',
        description:
          'Unofficial component library for Digital Agency Design System icons. Easy to use with React, Vue, and Svelte.',
      },
    },
  };

  const localeMeta = metadata[locale] || metadata.en;

  return {
    metadataBase: new URL(baseUrl),
    title: localeMeta.title,
    description: localeMeta.description,
    keywords: localeMeta.keywords,
    authors: [{ name: 'imaimai17468' }],
    creator: 'imaimai17468',
    publisher: 'imaimai17468',
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      type: 'website',
      locale: locale === 'ja' ? 'ja_JP' : 'en_US',
      url: `${baseUrl}/${locale}`,
      title: localeMeta.openGraph.title,
      description: localeMeta.openGraph.description,
      siteName: 'Digital Agency Icons',
    },
    twitter: {
      card: 'summary_large_image',
      title: localeMeta.twitter.title,
      description: localeMeta.twitter.description,
      creator: '@imaimai17468',
    },
    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: {
        'ja': `${baseUrl}/ja`,
        'en': `${baseUrl}/en`,
      },
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!locales.includes(locale as any)) {
    notFound();
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Digital Agency Icons',
    description:
      locale === 'ja'
        ? 'デジタル庁デザインシステムのアイコンを、React・Vue・Svelteで簡単に使える非公式コンポーネントライブラリ'
        : 'Unofficial component library for Digital Agency Design System icons. Easy to use with React, Vue, and Svelte.',
    applicationCategory: 'DeveloperApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'JPY',
    },
    author: {
      '@type': 'Person',
      name: 'imaimai17468',
    },
    programmingLanguage: ['TypeScript', 'JavaScript'],
    softwareVersion: '0.0.3',
  };

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <I18nProviderClient locale={locale}>{children}</I18nProviderClient>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
