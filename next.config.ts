/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    unoptimized: true,
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  // Ensure any boosted-content requests redirect to the homepage
  async redirects() {
    return [
      {
        source: '/boosted-content',
        destination: '/',
        permanent: true,
      },
      {
        source: '/boosted-content/:path*',
        destination: '/',
        permanent: true,
      }
    ];
  }
};

// Conditionally use PWA only in production
let config = nextConfig;

// Only use PWA in production to avoid development issues
if (process.env.NODE_ENV === 'production') {
  const withPWA = require('next-pwa')({
    dest: 'public',
    register: true,
    skipWaiting: true,
    disable: false
  });
  config = withPWA(nextConfig);
}

export default config;
