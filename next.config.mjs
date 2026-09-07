/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['three', '@react-three/fiber', '@react-three/drei'],
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
