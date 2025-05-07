'use client';

import { ReactNode, Suspense } from 'react';
import { useMatomoPageView } from '@/app/hooks/useMatomo';

interface MatomoProviderProps {
  children: ReactNode;
}

function MatomoTracker() {
  useMatomoPageView();
  return null;
}

export function MatomoProvider({ children }: MatomoProviderProps) {
  return (
    <>
      <Suspense fallback={null}>
        <MatomoTracker />
      </Suspense>
      {children}
    </>
  );
} 