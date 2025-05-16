import { Metadata } from 'next';
import { Suspense } from 'react';
import ErrorBoundary from '@/components/ErrorBoundary';

export const metadata: Metadata = {
  title: 'Graphics Design & Branding Services | TeaMo',
  description: 'Transform your brand with our professional graphic design and branding services. From logo design to complete brand identity, we create visual solutions that make your business stand out.',
  keywords: 'graphic design, branding, logo design, brand identity, print design, digital design, UI/UX design, packaging design, motion graphics, photography, image editing',
  openGraph: {
    title: 'Graphics Design & Branding Services | TeaMo',
    description: 'Transform your brand with our professional graphic design and branding services. From logo design to complete brand identity, we create visual solutions that make your business stand out.',
    type: 'website',
    locale: 'en_US',
    siteName: 'TeaMo',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Graphics Design & Branding Services | TeaMo',
    description: 'Transform your brand with our professional graphic design and branding services. From logo design to complete brand identity, we create visual solutions that make your business stand out.',
  },
};

export default function GraphicsDesignLayout({
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