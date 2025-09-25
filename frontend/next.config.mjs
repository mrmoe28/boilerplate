/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Explicitly disable Turbopack
    turbo: false,
  },
};

export default nextConfig;