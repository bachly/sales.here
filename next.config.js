module.exports = {
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true
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
