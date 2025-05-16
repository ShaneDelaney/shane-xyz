import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#000000',
};

export const metadata: Metadata = {
  title: "Shane Delaney | Trend & Content Strategy",
  description: "Helping brands catch what's next. Trend insights, content strategy, and creative consulting by Shane Delaney.",
  keywords: ["trend strategy", "content strategy", "creative strategy", "viral concepts", "brand voice", "Gen Z marketing"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} font-sans antialiased min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
} 