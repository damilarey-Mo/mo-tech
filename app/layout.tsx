import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "TeaMo | Tech Support & Web Services in Lagos",
  description: "TeaMo provides comprehensive IT support, web development, and tech solutions for businesses in Lagos, Nigeria. Trust in our community-driven tech company for expert service.",
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
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider>
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
