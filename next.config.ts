import withPWA from 'next-pwa';
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

const config = withPWA({
  ...nextConfig,
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === 'development',
    manifest: {
      name: 'Shane Delaney',
      short_name: 'Shane Delaney',
      description: 'Digital Marketing & Content Strategy',
      display: 'standalone',
      start_url: '/',
      background_color: '#FFFFFF',
      theme_color: '#000000',
      icons: [
        {
          src: '/logo.png',
          sizes: '192x192',
          type: 'image/png',
          purpose: 'any maskable',
        },
        {
          src: '/logo.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any maskable',
        },
      ],
    },
  },
});

export default config;
