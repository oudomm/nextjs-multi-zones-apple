import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  basePath: '/iphone',
  assetPrefix: '/iphone-static',
  transpilePackages: ['@repo/ui', '@repo/shared-state'],
  poweredByHeader: false,
  compress: true,
};

export default nextConfig;
