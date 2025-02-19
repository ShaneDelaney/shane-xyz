import type { Metadata, Viewport } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio | Shane Delaney',
  description: 'A collection of my professional work across various platforms and mediums.',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#000000',
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 