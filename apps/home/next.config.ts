import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  transpilePackages: ['@repo/ui', '@repo/shared-state'],
  poweredByHeader: false,
  compress: true,

  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'store.storeimages.cdn-apple.com' },
    ],
  },

  async rewrites() {
    const store = process.env.STORE_URL ?? 'http://localhost:3001';
    const mac = process.env.MAC_URL ?? 'http://localhost:3002';

    return {
      beforeFiles: [
        // Store pages
        { source: '/store', destination: `${store}/store` },
        { source: '/store/:path*', destination: `${store}/store/:path*` },
        // Store assets
        { source: '/store-static/:path*', destination: `${store}/store-static/:path*` },

        // Mac pages
        { source: '/mac', destination: `${mac}/mac` },
        { source: '/mac/:path*', destination: `${mac}/mac/:path*` },
        // Mac assets
        { source: '/mac-static/:path*', destination: `${mac}/mac-static/:path*` },
      ],
    };
  },
};

export default nextConfig;
