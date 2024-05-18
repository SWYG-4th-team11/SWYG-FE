/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://13.125.67.228:8080/api/:path*',
      },
    ];
  },
};

export default nextConfig;
