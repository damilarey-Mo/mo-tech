"use client";

import { useMatomoInteractions } from '@/app/hooks/useMatomo';

export default function MatomoAnalytics() {
  useMatomoInteractions();
  return null;
} 