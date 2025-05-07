import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import MatomoAnalytics from "./components/analytics/matomo";
import Script from 'next/script';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TeaMo - Leading IT Solutions Provider in Lagos",
  description: "TeaMo is a premier IT solutions provider in Lagos, offering comprehensive technology services including web development, cybersecurity, and IT infrastructure management.",
  keywords: "Tech Support Lagos, IT Services Nigeria, Web Development Lagos, Website Management Lagos, Affordable Hosting Nigeria, Professional Workstation Setup Lagos",
  openGraph: {
    title: "TeaMo | Tech Support & Web Services in Lagos",
    description: "Comprehensive IT support, web development, and tech solutions for businesses in Lagos, Nigeria.",
    url: "https://teamotech.com",
    siteName: "TeaMo IT/Tech Solutions",
    images: [
      {
        url: "/images/teamo-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "TeaMo IT/Tech Solutions",
      },
    ],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TeaMo IT/Tech Solutions | Tech Support & Web Services in Lagos",
    description: "Comprehensive IT support, web development, and tech solutions for businesses in Lagos, Nigeria.",
    images: ["/images/teamo-twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  metadataBase: new URL("https://teamotech.com"),
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script id="matomo-tag-manager" strategy="beforeInteractive">
          {`
            var _mtm = window._mtm = window._mtm || [];
            _mtm.push({'mtm.startTime': (new Date().getTime()), 'event': 'mtm.Start'});
            (function() {
              var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
              g.async=true; g.src='https://cdn.matomo.cloud/teamo.matomo.cloud/container_S0sonybd.js'; s.parentNode.insertBefore(g,s);
            })();
          `}
        </Script>
      </head>
      <body className={`${inter.className} font-sans antialiased bg-gray-50 dark:bg-gray-900`}>
        <ThemeProvider>
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1 pt-16">{children}</main>
            <Footer />
            <MatomoAnalytics />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
