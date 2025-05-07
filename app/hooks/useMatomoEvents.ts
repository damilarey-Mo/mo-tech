'use client';

import matomoInstance from '../lib/matomo';

export function useMatomoEvents() {
  const trackButtonClick = (buttonName: string, value?: number) => {
    matomoInstance.trackEvent({
      category: 'button',
      action: 'click',
      name: buttonName,
      value: value || 1
    });
  };

  const trackFormSubmit = (formName: string, success: boolean) => {
    matomoInstance.trackEvent({
      category: 'form',
      action: 'submit',
      name: formName,
      value: success ? 1 : 0
    });
  };

  const trackNavigation = (from: string, to: string) => {
    matomoInstance.trackEvent({
      category: 'navigation',
      action: 'navigate',
      name: `${from} -> ${to}`,
      value: 1
    });
  };

  const trackSearch = (query: string, resultsCount: number) => {
    matomoInstance.trackEvent({
      category: 'search',
      action: 'query',
      name: query,
      value: resultsCount
    });
  };

  const trackDownload = (fileName: string, fileType: string) => {
    matomoInstance.trackEvent({
      category: 'download',
      action: 'file',
      name: `${fileName} (${fileType})`,
      value: 1
    });
  };

  const trackVideoPlay = (videoName: string, duration: number) => {
    matomoInstance.trackEvent({
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