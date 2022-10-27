module.exports = {
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true,
    images: {
      unoptimized: true
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'samples.here.li',
        port: '',
        pathname: '/**',
      },
    ],
  }
}
