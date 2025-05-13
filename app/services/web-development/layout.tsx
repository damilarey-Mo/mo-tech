import { Metadata } from 'next';
import { Suspense } from 'react';
import ErrorBoundary from './error-boundary';

export const metadata: Metadata = {
  title: 'Web Development | TeaMo - Lagos Web Development Experts',
  description: 'Custom web development services in Lagos. From responsive websites to complex web applications. Modern tech stack, intuitive design, and ongoing support.',
  keywords: 'web development, website design, web applications, Lagos, Nigeria, React, Next.js, Node.js',
  openGraph: {
    title: 'Web Development | TeaMo - Lagos Web Development Experts',
    description: 'Custom web development services in Lagos. From responsive websites to complex web applications. Modern tech stack, intuitive design, and ongoing support.',
    url: 'https://teamo.ng/services/web-development',
    siteName: 'TeaMo',
    images: [
      {
        url: '/images/web-development-og.jpg',
        width: 1200,
        height: 630,
        alt: 'TeaMo Web Development Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Development | TeaMo - Lagos Web Development Experts',
    description: 'Custom web development services in Lagos. From responsive websites to complex web applications. Modern tech stack, intuitive design, and ongoing support.',
    images: ['/images/web-development-og.jpg'],
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

function Loading() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-yellow-400"></div>
    </div>
  );
}

export default function WebDevelopmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ErrorBoundary>
      <Suspense fallback={<Loading />}>
        {children}
      </Suspense>
    </ErrorBoundary>
  );
} 