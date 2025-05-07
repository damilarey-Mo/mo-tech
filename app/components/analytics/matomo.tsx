"use client";

import { useMatomoTracking } from '@/app/hooks/useMatomo';

export default function MatomoAnalytics() {
  useMatomoTracking();
  return null;
} 