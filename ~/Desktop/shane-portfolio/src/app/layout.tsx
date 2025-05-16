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
        className={`${inter.variable} font-sans antialiased min-h-screen flex flex-col`}
      >
        <main className="flex-grow">
          {children}
        </main>
        <footer className="py-6 text-center text-sm text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-800">
          <div className="container mx-auto px-4">
            <p>© {new Date().getFullYear()} Shane Delaney. All rights reserved.</p>
            <p className="mt-1">Powered by <a href="https://cursor.sh" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400">Cursor IDE</a></p>
          </div>
        </footer>
      </body>
    </html>
  );
} 