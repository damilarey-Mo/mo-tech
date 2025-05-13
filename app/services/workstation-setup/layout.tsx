import { Metadata } from 'next';
import { Suspense } from 'react';
import ErrorBoundary from './error-boundary';

export const metadata: Metadata = {
  title: 'Workstation Setup Services | TeaMo - Lagos IT Experts',
  description: 'Professional workstation setup and network configuration services in Lagos. From individual workstations to complete office setups, we provide comprehensive IT infrastructure solutions.',
  keywords: 'workstation setup, network configuration, IT infrastructure, office setup, printer setup, server configuration, cloud integration, Lagos IT services',
  openGraph: {
    title: 'Workstation Setup Services | TeaMo - Lagos IT Experts',
    description: 'Professional workstation setup and network configuration services in Lagos. From individual workstations to complete office setups, we provide comprehensive IT infrastructure solutions.',
    url: 'https://teamotech.com/services/workstation-setup',
    siteName: 'TeaMo Tech',
    images: [
      {
        url: '/images/workstation-setup-og.jpg',
        width: 1200,
        height: 630,
        alt: 'TeaMo Workstation Setup Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Workstation Setup Services | TeaMo - Lagos IT Experts',
    description: 'Professional workstation setup and network configuration services in Lagos. From individual workstations to complete office setups, we provide comprehensive IT infrastructure solutions.',
    images: ['/images/workstation-setup-og.jpg'],
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

export default function WorkstationSetupLayout({
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