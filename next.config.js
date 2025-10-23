/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['randomuser.me', 'placehold.co'],
    formats: ['image/webp', 'image/avif'],
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  transpilePackages: ['tailwind-merge'],
}

module.exports = nextConfig 