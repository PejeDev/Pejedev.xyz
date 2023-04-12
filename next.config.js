/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  },
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        port: '',
        hostname: 'static.ghost.org'
      },
      {
        protocol: 'https',
        port: '',
        hostname: 'ghost.pejedev.xyz'
      },
      {
        protocol: 'https',
        port: '',
        hostname: 'images.unsplash.com'
      }
    ]
  }
}

module.exports = nextConfig
