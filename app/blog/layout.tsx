import React from 'react';

export const metadata = {
  title: 'TeaMo Tech Blog - Expert IT Insights and Solutions',
  description: 'Stay updated with the latest technology trends, tips, and expert insights from TeaMo\'s tech specialists. Learn about cybersecurity, cloud computing, IT solutions, and more.',
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-900/90 to-yellow-900/80 dark:from-amber-900/90 dark:to-yellow-900/80">
      {children}
    </main>
  );
} 