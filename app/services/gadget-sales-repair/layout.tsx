import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gadget Sales & Repair | TeaMo - Lagos Gadget Experts',
  description: 'Professional gadget repair and sales services in Lagos. Free pickup and delivery, expert diagnostics, and genuine parts. Get your devices fixed or buy new ones with warranty.'
};

export default function GadgetSalesRepairLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 