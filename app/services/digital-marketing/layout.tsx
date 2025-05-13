import { Metadata } from 'next';
import { Suspense } from 'react';
import ErrorBoundary from '../error-boundary';

export const metadata: Metadata = {
  title: 'Digital Marketing Services | TeaMo - Lagos Digital Marketing Experts',
  description: 'Comprehensive digital marketing solutions including SEO, social media, content marketing, and PPC campaigns. Drive growth and engagement with our expert team in Lagos.',
  keywords: 'digital marketing, SEO, social media marketing, content marketing, PPC, email marketing, Lagos digital marketing, online marketing',
  openGraph: {
    title: 'Digital Marketing Services | TeaMo - Lagos Digital Marketing Experts',
    description: 'Comprehensive digital marketing solutions including SEO, social media, content marketing, and PPC campaigns. Drive growth and engagement with our expert team in Lagos.',
    url: 'https://teamotech.com/services/digital-marketing',
    siteName: 'TeaMo Tech',
    images: [
      {
        url: '/images/digital-marketing-og.jpg',
        width: 1200,
        height: 630,
        alt: 'TeaMo Digital Marketing Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Marketing Services | TeaMo - Lagos Digital Marketing Experts',
    description: 'Comprehensive digital marketing solutions including SEO, social media, content marketing, and PPC campaigns. Drive growth and engagement with our expert team in Lagos.',
    images: ['/images/digital-marketing-og.jpg'],
  },
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
  verification: {
    google: 'your-google-site-verification',
    yandex: 'your-yandex-verification',
  },
};

export default function DigitalMarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ErrorBoundary>
      <Suspense fallback={<div>Loading...</div>}>
        {children}
      </Suspense>
    </ErrorBoundary>
  );
} 