'use client';

import { ReactNode, useEffect } from 'react';
import { useMatomoTracking } from '@/app/hooks/useMatomo';

interface MatomoProviderProps {
  children: ReactNode;
}

export function MatomoProvider({ children }: MatomoProviderProps) {
  useMatomoTracking();
  return <>{children}</>;
} 