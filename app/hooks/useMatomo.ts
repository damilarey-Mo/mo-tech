'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import matomoInstance from '../lib/matomo';

export function useMatomoTracking() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Track page views
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '');
    matomoInstance.trackPageView({
      documentTitle: document.title,
      href: url,
    });
  }, [pathname, searchParams]);

  // Track user interactions
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const trackUserInteractions = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      
      // Track clicks on links
      if (target.tagName === 'A') {
        matomoInstance.trackEvent({
          category: 'link',
          action: 'click',
          name: target.getAttribute('href') || 'unknown',
          value: 1
        });
      }

      // Track clicks on buttons
      if (target.tagName === 'BUTTON') {
        matomoInstance.trackEvent({
          category: 'button',
          action: 'click',
          name: target.textContent || target.getAttribute('aria-label') || 'unknown',
          value: 1
        });
      }

      // Track form submissions
      if (target.tagName === 'FORM') {
        matomoInstance.trackEvent({
          category: 'form',
          action: 'submit',
          name: target.getAttribute('id') || target.getAttribute('name') || 'unknown',
          value: 1
        });
      }
    };

    // Track scroll depth
    const trackScrollDepth = () => {
      const scrollPercent = (window.scrollY + window.innerHeight) / document.documentElement.scrollHeight * 100;
      if (scrollPercent >= 25 && scrollPercent < 50) {
        matomoInstance.trackEvent({
          category: 'scroll',
          action: 'depth',
          name: '25%',
          value: 25
        });
      } else if (scrollPercent >= 50 && scrollPercent < 75) {
        matomoInstance.trackEvent({
          category: 'scroll',
          action: 'depth',
          name: '50%',
          value: 50
        });
      } else if (scrollPercent >= 75 && scrollPercent < 100) {
        matomoInstance.trackEvent({
          category: 'scroll',
          action: 'depth',
          name: '75%',
          value: 75
        });
      } else if (scrollPercent >= 100) {
        matomoInstance.trackEvent({
          category: 'scroll',
          action: 'depth',
          name: '100%',
          value: 100
        });
      }
    };

    // Track time on page
    let timeOnPage = 0;
    const timeInterval = setInterval(() => {
      timeOnPage += 10;
      if (timeOnPage % 30 === 0) { // Track every 30 seconds
        matomoInstance.trackEvent({
          category: 'engagement',
          action: 'time',
          name: 'time_on_page',
          value: timeOnPage
        });
      }
    }, 10000);

    // Add event listeners
    document.addEventListener('click', trackUserInteractions);
    window.addEventListener('scroll', trackScrollDepth);

    // Cleanup
    return () => {
      document.removeEventListener('click', trackUserInteractions);
      window.removeEventListener('scroll', trackScrollDepth);
      clearInterval(timeInterval);
    };
  }, []);
} 