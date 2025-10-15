import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio | Shane Delaney',
  description: 'Detailed project case studies showcasing content strategy, creative marketing, and digital storytelling across platforms.',
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

