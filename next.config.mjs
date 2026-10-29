/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  poweredByHeader: false,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'Strict-Transport-Security', value: 'max-age=31536000' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
    ]
  },
  async redirects() {
    return [
      // Canonical host: send www.* to the root domain (keeps one canonical URL)
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.reinstatementcostassessment.org' }],
        destination: 'https://reinstatementcostassessment.org/:path*',
        permanent: true,
      },
      // Duplicate guide merged into the main page so the two stop competing for the same searches
      {
        source: '/resources/what-is-a-building-reinstatement-cost',
        destination: '/building-reinstatement-cost',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
