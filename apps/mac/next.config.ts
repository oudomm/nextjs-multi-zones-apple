import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  basePath: '/mac',
  assetPrefix: '/mac-static',
  transpilePackages: ['@repo/ui', '@repo/shared-state'],
  poweredByHeader: false,
  compress: true,
};

export default nextConfig;
