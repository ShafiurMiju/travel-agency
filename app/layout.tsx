import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: "Tripbirds Travels | Business & Tourist Visa Processing",
    template: "%s | Tripbirds Travels"
  },
  description: "Your trusted partner for visa processing, air ticket booking, and hotel reservations worldwide. Expert assistance for business and tourist visas to any country.",
  keywords: ["visa services", "travel agency", "business visa", "tourist visa", "air ticket booking", "hotel booking", "visa processing", "travel consultation"],
  authors: [{ name: "Tripbirds Travels" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Tripbirds Travels",
    title: "Tripbirds Travels",
    description: "Your trusted partner for visa processing, air ticket booking, and hotel reservations worldwide.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tripbirds Travels",
    description: "Your trusted partner for visa processing, air ticket booking, and hotel reservations worldwide.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
