'use client';

import { Navigation } from '@repo/ui';
import { useMemo } from 'react';
import Image from 'next/image';

export default function HomePage() {

  const navItems = useMemo(
    () => [
      { label: 'Home', href: '/' },
      { label: 'Store', href: '/store' },
      { label: 'Mac', href: '/mac' },
    ],
    []
  );

  return (
    <div className="min-h-screen bg-white text-[#1d1d1f]">
      <Navigation items={navItems} currentZone="/" />

      {/* Hero — iPhone */}
      <section className="bg-white text-center overflow-hidden border-b border-[#d2d2d7]">
        <div className="pt-14 pb-0 max-w-[980px] mx-auto">
          <h2 className="text-[17px] font-normal text-[#6e6e73]">iPhone 17 Pro Max</h2>
          <h1 className="mt-2 text-[56px] md:text-[96px] font-semibold tracking-[-0.015em] leading-[1.05] text-[#1d1d1f]">
            Hello, Apple Intelligence.
          </h1>
          <div className="mt-5 flex items-center justify-center gap-5">
            <a href="/store" className="text-[#06c] text-[21px] hover:underline">
              Learn more &gt;
            </a>
            <a href="/store" className="text-[#06c] text-[21px] hover:underline">
              Buy &gt;
            </a>
          </div>
          <div className="mt-8 flex justify-center">
            <div className="relative w-full h-[420px] md:h-[520px]">
              <Image
                src="/images/iphone-17-pro-max.png"
                alt="iPhone 17 Pro Max"
                fill
                className="object-contain"
                priority
              />
            </div>

          </div>
        </div>
      </section>

      {/* MacBook Pro */}
      <section className="bg-[#f5f5f7] text-center overflow-hidden">
        <div className="pt-14 pb-0 max-w-[980px] mx-auto">
          <h2 className="text-[17px] font-semibold text-[#1d1d1f]">MacBook Pro</h2>
          <h3 className="mt-2 text-[48px] md:text-[64px] font-semibold tracking-[-0.015em] leading-[1.05] text-[#1d1d1f]">
            Lean. Mean. M5 machine.
          </h3>
          <div className="mt-5 flex items-center justify-center gap-5">
            <a href="/store" className="text-[#06c] text-[21px] hover:underline">
              Learn more &gt;
            </a>
            <a href="/store" className="text-[#06c] text-[21px] hover:underline">
              Buy &gt;
            </a>
          </div>
          <div className="mt-8 flex justify-center">
            <div className="relative w-full h-[360px] md:h-[420px]">
              <Image
                src="/images/macbook-pro.webp"
                alt="MacBook Pro"
                fill
                className="object-contain"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Two-up tiles */}
      <section className="bg-white px-3 pt-3">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-[1440px] mx-auto">
          {/* AirPods Pro */}
          <div className="bg-[#f5f5f7] rounded-3xl text-center overflow-hidden group">

            <div className="pt-12 px-8">
              <h2 className="text-[28px] md:text-[40px] font-semibold tracking-[-0.015em] text-[#1d1d1f]">
                AirPods Pro 3
              </h2>
              <h3 className="mt-1 text-[21px] text-[#6e6e73]">
                Hearing Aid Feature. A world first.
              </h3>
              <div className="mt-4 flex items-center justify-center gap-5 text-[17px]">
                <a href="/store" className="text-[#06c] hover:underline">Learn more &gt;</a>
                <a href="/store" className="text-[#06c] hover:underline">Buy &gt;</a>
              </div>
            </div>
            <div className="mt-4 flex justify-center pb-8">
              <div className="relative w-full h-[260px] md:h-[320px]">
                <Image
                  src="/images/airpods-pro-3.png"
                  alt="AirPods Pro 3"
                  fill
                  className="object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>

            </div>
          </div>

          {/* Apple Watch */}
          <div className="bg-[#f5f5f7] rounded-3xl text-center overflow-hidden group">

            <div className="pt-12 px-8">
              <h2 className="text-[28px] md:text-[40px] font-semibold tracking-[-0.015em] text-[#1d1d1f]">
                Apple Watch Series 10
              </h2>
              <h3 className="mt-1 text-[21px] text-[#6e6e73]">
                Thinnest ever. Biggest display.
              </h3>
              <div className="mt-4 flex items-center justify-center gap-5 text-[17px]">
                <a href="/store" className="text-[#06c] hover:underline">Learn more &gt;</a>
                <a href="/store" className="text-[#06c] hover:underline">Buy &gt;</a>
              </div>
            </div>
            <div className="mt-4 flex justify-center pb-8">
              <div className="relative w-full h-[260px] md:h-[320px]">
                <Image
                  src="/images/apple-watch-11.png"
                  alt="Apple Watch Series 10"
                  fill
                  className="object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Architecture section */}
      <section className="bg-white px-3 pt-3 pb-3">
        <div className="max-w-[1440px] mx-auto bg-[#f5f5f7] rounded-3xl px-8 md:px-14 py-14">
          <div className="max-w-[980px] mx-auto">
            <h3 className="text-[32px] md:text-[40px] font-semibold tracking-[-0.015em] text-[#1d1d1f]">
              Multi-Zone Architecture.
            </h3>
            <p className="mt-3 text-[17px] text-[#6e6e73] leading-[1.47] max-w-[600px]">
              Each section of this site is its own Next.js app. The home app
              proxies requests via rewrites. Shared packages ensure one
              consistent experience.
            </p>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="rounded-2xl bg-white p-6 border border-[#d2d2d7]">
                <div className="text-[15px] text-[#6e6e73]">Home zone</div>
                <div className="mt-1 text-[21px] font-semibold text-[#1d1d1f]">:3000</div>
                <div className="mt-3 text-[15px] text-[#6e6e73]">
                  Main entry point. Rewrites to other zones.
                </div>
              </div>
              <div className="rounded-2xl bg-white p-6 border border-[#d2d2d7]">
                <div className="text-[15px] text-[#6e6e73]">Store zone</div>
                <div className="mt-1 text-[21px] font-semibold text-[#1d1d1f]">:3001</div>
                <div className="mt-3 text-[15px] text-[#6e6e73]">
                  basePath: /store
                </div>
              </div>
              <div className="rounded-2xl bg-white p-6 border border-[#d2d2d7]">
                <div className="text-[15px] text-[#6e6e73]">Mac zone</div>
                <div className="mt-1 text-[21px] font-semibold text-[#1d1d1f]">:3002</div>
                <div className="mt-3 text-[15px] text-[#6e6e73]">
                  basePath: /mac
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#f5f5f7] px-6 pt-4 pb-6">
        <div className="max-w-[980px] mx-auto">
          <div className="border-t border-[#d2d2d7] pt-5">
            <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between text-xs text-[#6e6e73]">
              <div>
                Copyright &copy; {new Date().getFullYear()} Multi-Zones Demo. Built with Next.js | Tailwind CSS | Turborepo
              </div>
              <div className="flex gap-6">
                <a className="hover:text-[#1d1d1f] hover:underline transition" href="/">Home</a>
                <a className="hover:text-[#1d1d1f] hover:underline transition" href="/store">Store</a>
                <a className="hover:text-[#1d1d1f] hover:underline transition" href="/mac">Mac</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
