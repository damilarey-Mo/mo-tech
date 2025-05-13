import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Workstation & Gaming Studio Setup | TeaMo - Lagos Studio Experts',
  description: 'Custom workstation and gaming studio setup for professionals, creators, and gamers. Discover our process, delivery times, and why TeaMo is your best choice for studio setup in Lagos.'
};

export default function WorkstationStudioSetupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 