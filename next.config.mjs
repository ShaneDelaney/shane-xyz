/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  
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
  },
};

export default nextConfig; 