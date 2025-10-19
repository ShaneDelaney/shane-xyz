import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation/Navigation";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#ffffff',
};

export const metadata: Metadata = {
  title: "Shane Delaney | Digital Strategist & Creative Marketer",
  description: "Los Angeles-based digital strategist, creative marketer, and writer at Meta. Shaping stories and systems at the intersection of creativity and tech.",
  keywords: ["digital strategy", "content marketing", "creative marketing", "storytelling", "Meta", "Snap Inc", "developer marketing", "VR content", "tech marketing"],
  openGraph: {
    title: "Shane Delaney | Digital Strategist & Creative Marketer",
    description: "Los Angeles-based digital strategist, creative marketer, and writer at Meta. Shaping stories and systems at the intersection of creativity and tech.",
    url: "https://shanedelaney.xyz",
    siteName: "Shane Delaney",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shane Delaney | Digital Strategist & Creative Marketer",
    description: "Los Angeles-based digital strategist, creative marketer, and writer at Meta.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} font-sans antialiased min-h-screen flex flex-col bg-white text-gray-900`}
      >
        <Navigation />
        <main className="flex-grow pt-16">
          {children}
        </main>
        <footer className="py-4 text-center text-xs text-gray-400 border-t border-gray-200">
          <p>© {new Date().getFullYear()} Shane Delaney</p>
        </footer>
      </body>
    </html>
  );
}
