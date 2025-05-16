import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation/Navigation";
import Header from "@/components/header/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#000000',
};

export const metadata: Metadata = {
  title: {
    default: 'Shane Delaney | Content Curator',
    template: '%s | Shane Delaney'
  },
  description: 'Content Curator at Snap Inc. with a keen editorial eye for selecting and developing engaging content. Experience delivering measurable audience growth and retention through strategic content curation.',
  keywords: ['Content Curator', 'Snap Inc.', 'Editorial Development', 'Content Strategy', 'Audience Growth', 'Gen Z', 'Millennial Content'],
  authors: [{ name: 'Shane Delaney' }],
  creator: 'Shane Delaney',
  publisher: 'Shane Delaney',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    images: [], // This prevents any default image from being used in link previews
  },
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/logo.png',
    },
  },
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}
      >
        <Header />
        <main>
          {children}
        </main>
        <Navigation />
      </body>
    </html>
  );
}
