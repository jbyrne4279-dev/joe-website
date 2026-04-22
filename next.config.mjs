/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        // Everything that isn't a versioned static asset — HTML pages, RSC
        // payloads, API, etc. Railway's Fastly edge otherwise honors Next's
        // default s-maxage=31536000 and can serve a cached HTML variant
        // where the client expected an RSC payload (or vice versa),
        // which crashes client-side navigation in Chrome.
        source: '/((?!_next/static|_next/image|favicon.ico).*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=0, s-maxage=0, must-revalidate',
          },
        ],
      },
    ]
  },
}

export default nextConfig
