'use client';

import { MatomoProvider as BaseMatomoProvider } from '@datapunt/matomo-tracker-react';

type Props = {
  value: ReturnType<typeof import('@datapunt/matomo-tracker-react').createInstance>;
  children: React.ReactNode;
};

export function MatomoProvider({ value, children }: Props) {
  return <BaseMatomoProvider value={value}>{children}</BaseMatomoProvider>;
} 