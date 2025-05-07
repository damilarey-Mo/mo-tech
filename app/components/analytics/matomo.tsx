"use client";

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

declare global {
  interface Window {
    _mtm: any[];
  }
}

export default function MatomoAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Initialize Matomo Tag Manager
    window._mtm = window._mtm || [];
    window._mtm.push({
      'mtm.startTime': new Date().getTime(),
      'event': 'mtm.Start'
    });

    // Create and append the Matomo Tag Manager script
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://cdn.matomo.cloud/teamo.matomo.cloud/container_S0sonybd.js';
    document.head.appendChild(script);

    return () => {
      // Cleanup script on unmount
      document.head.removeChild(script);
    };
  }, []);

  useEffect(() => {
    // Track page views through Tag Manager
    if (window._mtm) {
      const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '');
      window._mtm.push({
        'event': 'page_view',
        'page_url': url
      });
    }
  }, [pathname, searchParams]);

  return null;
} 