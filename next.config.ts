import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        // Intercepta la raíz de la ruta
        source: '/propuestaZenith',
        destination: 'https://propuesta-zenith-woad.vercel.app',
      },
      {
        // Intercepta todos los archivos estáticos (JS, CSS, imágenes)
        source: '/propuestaZenith/:path*',
        destination: 'https://propuesta-zenith-woad.vercel.app/:path*',
      },
    ];
  },
};

export default nextConfig;
