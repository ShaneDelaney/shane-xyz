import type { Metadata, Viewport } from 'next';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#000000',
};

export const metadata: Metadata = {
  title: 'Content Portfolio | Shane Delaney',
  description: 'Selected work showcasing content curation and audience growth strategies with measurable results across platforms. Strategic editorial development that connects and converts.',
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 