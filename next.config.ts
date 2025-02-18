import withPWA from 'next-pwa';
import type { NextConfig } from "next";

const config: NextConfig = withPWA({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
})({
  /* config options here */
});

export default config;
