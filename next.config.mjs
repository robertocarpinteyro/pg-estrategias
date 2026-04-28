/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/propuestaZenith',
        destination: 'https://propuesta-zenith-woad.vercel.app',
      },
      {
        source: '/propuestaZenith/:path*',
        destination: 'https://propuesta-zenith-woad.vercel.app/:path*',
      },
    ];
  },
};

export default nextConfig;
