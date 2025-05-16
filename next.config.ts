/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
}

const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development'
})

// Only use PWA in production
const config = process.env.NODE_ENV === 'production' 
  ? withPWA(nextConfig)
  : nextConfig;

module.exports = config;
