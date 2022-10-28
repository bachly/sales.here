module.exports = {
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true,
    images: {
      unoptimized: true
    },
  },
  images: {
    unoptimized: true,
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
