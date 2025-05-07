'use client';

import { ReactNode, Suspense } from 'react';
import { useMatomoTracking } from '@/app/hooks/useMatomo';

interface MatomoProviderProps {
  children: ReactNode;
}

function MatomoTracker() {
  useMatomoTracking();
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