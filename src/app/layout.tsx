import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation/Navigation";
import Footer from "@/components/portfolio/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.shanedelaney.xyz"),
  title: "Shane Delaney | Find the story. Make it happen.",
  description: "Creative judgment and careful execution. Follow the work of Shane Delaney, from storytelling and content programming to global sports campaigns at TikTok.",
  keywords: ["TikTok", "campaign operations", "content strategy", "content marketing", "Meta", "Snap Inc", "editorial operations", "creator ecosystems", "platform growth"],
  openGraph: {
    title: "Shane Delaney | Find the story. Make it happen.",
    description: "From storytelling and content programming to global sports campaigns. Creative judgment, careful execution, and the next chapter.",
    url: "https://shanedelaney.xyz",
    siteName: "Shane Delaney",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shane Delaney | Find the story. Make it happen.",
    description: "From storytelling and content programming to global sports campaigns. Creative judgment, careful execution, and the next chapter.",
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
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||t===null)document.documentElement.classList.add('dark')}catch(e){document.documentElement.classList.add('dark')}})();`,
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`} style={{ background: 'var(--t-bg)', color: 'var(--t-primary)', transition: 'background 0.2s ease, color 0.2s ease' }}>
        <ThemeProvider>
          <Navigation />
          <a className="skip-link" href="#main-content">Skip to content</a>
          <main id="main-content">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
