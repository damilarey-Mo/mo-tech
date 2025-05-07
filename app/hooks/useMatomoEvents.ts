'use client';

import { useMatomo } from '@datapunt/matomo-tracker-react';

export function useMatomoEvents() {
  const { trackEvent } = useMatomo();

  const trackButtonClick = (buttonName: string, value?: number) => {
    trackEvent({
      category: 'button',
      action: 'click',
      name: buttonName,
      value: value || 1
    });
  };

  const trackFormSubmit = (formName: string, success: boolean) => {
    trackEvent({
      category: 'form',
      action: 'submit',
      name: formName,
      value: success ? 1 : 0
    });
  };

  const trackNavigation = (from: string, to: string) => {
    trackEvent({
      category: 'navigation',
      action: 'navigate',
      name: `${from} -> ${to}`,
      value: 1
    });
  };

  const trackSearch = (query: string, resultsCount: number) => {
    trackEvent({
      category: 'search',
      action: 'query',
      name: query,
      value: resultsCount
    });
  };

  const trackDownload = (fileName: string, fileType: string) => {
    trackEvent({
      category: 'download',
      action: 'file',
      name: `${fileName} (${fileType})`,
      value: 1
    });
  };

  const trackVideoPlay = (videoName: string, duration: number) => {
    trackEvent({
      category: 'video',
      action: 'play',
      name: videoName,
      value: duration
    });
  };

  return {
    trackButtonClick,
    trackFormSubmit,
    trackNavigation,
    trackSearch,
    trackDownload,
    trackVideoPlay
  };
} 