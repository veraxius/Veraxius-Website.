/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: "/vasp", destination: "/aimprogram", permanent: true },
    ];
  },
  images: {
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 300, 384],
  },
};
export default nextConfig;
