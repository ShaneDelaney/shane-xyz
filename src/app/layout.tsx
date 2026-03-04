import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation/Navigation";
import ShaneGPT from "@/components/ShaneGPT";

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
  title: "Shane Delaney | Editorial Operations & Content Strategy",
  description: "Los Angeles-based Marketing & Editorial Operations Specialist at Meta. Managing high-volume content pipelines, XFN coordination, and editorial systems for Horizon's developer ecosystem.",
  keywords: ["editorial operations", "content strategy", "content marketing", "Meta", "Snap Inc", "editorial pipeline", "XFN coordination", "developer marketing", "content operations"],
  openGraph: {
    title: "Shane Delaney | Editorial Operations & Content Strategy",
    description: "Los Angeles-based Marketing & Editorial Operations Specialist at Meta. Managing high-volume content pipelines, XFN coordination, and editorial systems for Horizon's developer ecosystem.",
    url: "https://shanedelaney.xyz",
    siteName: "Shane Delaney",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shane Delaney | Editorial Operations & Content Strategy",
    description: "Marketing & Editorial Operations Specialist at Meta.",
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
        <main className="flex-grow">
          {children}
        </main>
        <footer className="py-6 text-center text-xs text-gray-400 border-t border-gray-100 space-y-1">
          <p>© {new Date().getFullYear()} Shane Delaney · Los Angeles, CA</p>
          <p>Built with <a href="https://claude.ai/code" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 transition-colors underline underline-offset-2">Claude Code</a></p>
        </footer>
        <ShaneGPT />
      </body>
    </html>
  );
}
