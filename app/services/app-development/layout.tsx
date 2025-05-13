import { Metadata } from 'next';
import { Suspense } from 'react';
import ErrorBoundary from './error-boundary';

export const metadata: Metadata = {
  title: 'Mobile App Development | TeaMo - Lagos Mobile App Experts',
  description: 'Custom iOS & Android apps tailored to your business goals. Discover our process, delivery times, and why TeaMo is your best choice for mobile app development in Lagos.',
  keywords: 'mobile app development, iOS development, Android development, Flutter, React Native, Lagos, Nigeria',
  openGraph: {
    title: 'Mobile App Development | TeaMo - Lagos Mobile App Experts',
    description: 'Custom iOS & Android apps tailored to your business goals. Discover our process, delivery times, and why TeaMo is your best choice for mobile app development in Lagos.',
    url: 'https://teamo.ng/services/app-development',
    siteName: 'TeaMo',
    images: [
      {
        url: '/images/app-development-og.jpg',
        width: 1200,
        height: 630,
        alt: 'TeaMo Mobile App Development Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mobile App Development | TeaMo - Lagos Mobile App Experts',
    description: 'Custom iOS & Android apps tailored to your business goals. Discover our process, delivery times, and why TeaMo is your best choice for mobile app development in Lagos.',
    images: ['/images/app-development-og.jpg'],
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

export default function AppDevelopmentLayout({
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