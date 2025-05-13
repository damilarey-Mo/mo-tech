import { Metadata } from 'next';
import { Suspense } from 'react';
import ErrorBoundary from './error-boundary';

export const metadata: Metadata = {
  title: 'Cybersecurity Services | TeaMo - Lagos Security Experts',
  description: 'Comprehensive cybersecurity solutions in Lagos. From penetration testing to security audits and compliance. Protect your business with our expert security services.',
  keywords: 'cybersecurity, security audit, penetration testing, Lagos, Nigeria, network security, data protection, compliance',
  openGraph: {
    title: 'Cybersecurity Services | TeaMo - Lagos Security Experts',
    description: 'Comprehensive cybersecurity solutions in Lagos. From penetration testing to security audits and compliance. Protect your business with our expert security services.',
    url: 'https://teamo.ng/services/cybersecurity',
    siteName: 'TeaMo',
    images: [
      {
        url: '/images/cybersecurity-og.jpg',
        width: 1200,
        height: 630,
        alt: 'TeaMo Cybersecurity Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cybersecurity Services | TeaMo - Lagos Security Experts',
    description: 'Comprehensive cybersecurity solutions in Lagos. From penetration testing to security audits and compliance. Protect your business with our expert security services.',
    images: ['/images/cybersecurity-og.jpg'],
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

export default function CybersecurityLayout({
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