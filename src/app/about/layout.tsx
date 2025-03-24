import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Me | Shane Delaney',
  description: 'Content Curator at Snap Inc. with proven success growing audiences and creating social media that people actually want to watch.',
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 