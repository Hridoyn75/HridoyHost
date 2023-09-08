/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'api.telegram.org'
          },
        ],
      },
}

module.exports = nextConfig
