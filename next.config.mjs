/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    formats: ['image/avif', 'image/webp'],
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
    ]
  },
};

export default nextConfig;
