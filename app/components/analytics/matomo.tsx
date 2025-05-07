"use client";

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

declare global {
  interface Window {
    _paq: any[];
  }
}

export default function MatomoAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Initialize Matomo
    window._paq = window._paq || [];
    
    // Configure Matomo
    window._paq.push(["setCookieDomain", "*.teamo-five.vercel.app"]);
    window._paq.push(["setDoNotTrack", true]);
    window._paq.push(['trackPageView']);
    window._paq.push(['enableLinkTracking']);
    
    // Set up Matomo
    const u = "https://teamo.matomo.cloud/";
    window._paq.push(['setTrackerUrl', u + 'matomo.php']);
    window._paq.push(['setSiteId', '1']);
    
    // Create and append the Matomo script
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://cdn.matomo.cloud/teamo.matomo.cloud/matomo.js';
    document.head.appendChild(script);

    // Add noscript fallback
    const noscript = document.createElement('noscript');
    const p = document.createElement('p');
    const img = document.createElement('img');
    img.referrerPolicy = 'no-referrer-when-downgrade';
    img.src = 'https://teamo.matomo.cloud/matomo.php?idsite=1&rec=1';
    img.style.border = '0';
    img.alt = '';
    p.appendChild(img);
    noscript.appendChild(p);
    document.body.appendChild(noscript);

    return () => {
      // Cleanup script on unmount
      document.head.removeChild(script);
      document.body.removeChild(noscript);
    };
  }, []);

  useEffect(() => {
    // Track page views
    if (window._paq) {
      const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '');
      window._paq.push(['setCustomUrl', url]);
      window._paq.push(['trackPageView']);
    }
  }, [pathname, searchParams]);

  return null;
} 