/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@repo/ui', '@repo/shared-state'],
  poweredByHeader: false,
  compress: true,

  async rewrites() {
    const store = process.env.STORE_URL ?? 'http://localhost:3001';
    const mac = process.env.MAC_URL ?? 'http://localhost:3003';
    const iphone = process.env.IPHONE_URL ?? 'http://localhost:3002';

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

        // iPhone pages
        { source: '/iphone', destination: `${iphone}/iphone`},
        { source: '/iphone/:path*', destination: `${iphone}/iphone/:path*`},
        // iPhone assets
        {source: '/iphone-static/:path*', destination: `${iphone}/iphone-static/:path*`}
      ],
    };
  },
};

export default nextConfig;
