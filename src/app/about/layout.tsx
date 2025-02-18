import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Me | Shane Delaney',
  description: 'Learn more about Shane Delaney - Digital Marketing & Content Strategy',
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 