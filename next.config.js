/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: ['./src/styles'],
  },
  // Add Vercel specific configurations
  output: 'standalone',
  // Ensure images from external sources can be optimized
  images: {
    domains: ['nexchain.ai'],
    unoptimized: true,
  },
}

module.exports = nextConfig 