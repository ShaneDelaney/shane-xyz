import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation/Navigation";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: "Shane Delaney | Content Strategy",
  description: "Content strategist working at the intersection of platforms, creators, and emerging technology. Most recently at Meta and Snap Inc.",
  keywords: ["content strategy", "content marketing", "Meta", "Snap Inc", "editorial operations", "creator ecosystems", "platform growth"],
  openGraph: {
    title: "Shane Delaney | Content Strategy",
    description: "Content strategist at the intersection of platforms, creators, and emerging technology.",
    url: "https://shanedelaney.xyz",
    siteName: "Shane Delaney",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shane Delaney | Content Strategy",
    description: "Content strategist at the intersection of platforms, creators, and emerging technology.",
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
        {/* Anti-flash: read localStorage before React hydrates */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{if(localStorage.getItem('theme')==='dark')document.documentElement.classList.add('dark')}catch(e){}})();`,
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`} style={{ background: 'var(--t-bg)', color: 'var(--t-primary)', transition: 'background 0.2s ease, color 0.2s ease' }}>
        <ThemeProvider>
          <Navigation />
          <main className="flex-grow">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
