import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from 'sonner';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  title: {
    default: 'Mountain View SDA Church Kantafu - A Place of Worship & Community',
    template: '%s | Mountain View SDA Church Kantafu',
  },
  description:
    'Mountain View Seventh-day Adventist Church in Kantafu, Kenya. Join us for worship, Bible study, and community fellowship. All are welcome.',
  keywords: [
    'SDA Church',
    'Seventh-day Adventist',
    'Kantafu',
    'Kenya',
    'Mountain View',
    'worship',
    'Bible study',
    'Sabbath',
  ],
  authors: [{ name: 'Mountain View SDA Church Kantafu' }],
  creator: 'Mountain View SDA Church Kantafu',
  metadataBase: new URL('https://mountain-view-sda-ruddy.vercel.app'),
  openGraph: {
    type: 'website',
    locale: 'en_KE',
    siteName: 'Mountain View SDA Church Kantafu',
    title: 'Mountain View SDA Church Kantafu',
    description: 'A place of worship, love, hope, and community in Kantafu, Kenya.',
    images: [
      {
        url: '/SDA-logo.png',
        width: 512,
        height: 512,
        alt: 'Mountain View SDA Church Logo',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Mountain View SDA Church Kantafu',
    description: 'A place of worship, love, hope, and community in Kantafu, Kenya.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Toaster position="bottom-right" richColors closeButton />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
