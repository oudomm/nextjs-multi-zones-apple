'use client';

import { AppleLogo, Button, ButtonLink, Navigation } from '@repo/ui';
import { useMemo } from 'react';
import Image from 'next/image';

export default function HomePage() {

  const navItems = useMemo(
    () => [
      { label: 'Home', href: '/' },
      { label: 'Store', href: '/store' },
      { label: 'iPhone', href: '/iphone' },
      { label: 'Mac', href: '/mac' },
    ],
    []
  );

  return (
    <div className="min-h-screen bg-white text-[#1d1d1f]">
      <Navigation items={navItems} currentZone="/" />

      {/* Hero */}
      <section className="bg-pink-50 text-center overflow-hidden border-[#d2d2d7] mb-3 max-h-150">
        <div className="pt-14 pb-0 max-w-xl mx-auto">
          <h2 className="mt-2 text-3xl md:text-7xl font-semibold tracking-[-0.015em] leading-[1.05] text-[#1d1d1f]">
            Valentine’s Day
          </h2>
          <h3 className="text-2xl md:text-3xl font-normal text-[#1d1d1f]">There’s still time to get gifts they’ll love.</h3>
          <div className="mt-5 flex items-center justify-center gap-5">
            <ButtonLink href='/store' variant='blue' size='lg'>Shop</ButtonLink>
          </div>
          <div className="mt-8 flex justify-center">
            <div className="relative w-full h-80 md:h-95">
              <Image
                src="/images/apple-products.png"
                alt="Apple Products"
                fill
                className="object-contain"
                priority
                unoptimized
              />
            </div>

          </div>
        </div>
      </section>

      {/* iPhone */}
      <section className="bg-[#f5f5f7] text-center overflow-hidden border-[#d2d2d7] mb-3 max-h-150">
        <div className="pt-14 pb-0 max-w-[980px] mx-auto">
          <h2 className="mt-2 text-3xl md:text-7xl font-semibold tracking-[-0.015em] leading-[1.05] text-[#1d1d1f]">
            iPhone
          </h2>
          <h3 className="text-2xl md:text-3xl font-normal text-[#1d1d1f]">Say hello to the latest generation of iPhone.</h3>
          <div className="mt-5 flex items-center justify-center gap-5">
            <ButtonLink href='/mac' variant='blue' size='lg'>Learn more</ButtonLink>
            <ButtonLink href='/store' variant='blueOutline' size='lg'>Shop iPhone</ButtonLink>
          </div>
          <div className="mt-8 flex justify-center">
            <div className="relative w-full h-80 md:h-95">
              <Image
                src="/images/iphone-17-series.webp"
                alt="iPhone 17 Series"
                fill
                className="object-contain"
                priority
              />
            </div>

          </div>
        </div>
      </section>

      {/* iWatch */}
      <section className="bg-[#f5f5f7] text-center overflow-hidden border-[#d2d2d7] mb-3 max-h-150">
        <div className="pt-14 pb-0 max-w-3xl mx-auto">
          <div className='flex justify-center items-center'>
            <AppleLogo className='h-11 w-11' />
            <h2 className="mt-2 text-3xl md:text-5xl font-semibold tracking-[-0.015em] leading-[1.05] text-[#1d1d1f] uppercase">
              Watch <span className='font-normal'>Series 11 </span>
            </h2>
          </div>

          <h3 className="text-xl md:text-2xl font-normal text-[#1d1d1f]">Say hello to the latest generation of iPhone.</h3>
          <div className="mt-5 flex items-center justify-center gap-5">
            <ButtonLink href='/mac' variant='blue' size='lg'>Learn more</ButtonLink>
            <ButtonLink href='/store' variant='blueOutline' size='lg'>Shop iPhone</ButtonLink>
          </div>
          <div className="mt-8 flex justify-center">
            <div className="relative w-full h-80 md:h-95">
              <Image
                src="/images/watch-series-11.png"
                alt="Apple Watch Series 11"
                fill
                className="object-contain"
                priority
              />
            </div>

          </div>
        </div>
      </section>

      {/* Two-up tiles */}
      <section className="bg-white px-3 mb-3">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-[1440px] mx-auto">
          {/* AirPods Pro */}
          <div className="bg-black text-center overflow-hidden group max-h-150">

            <div className="pt-12 px-8">
              <div className='flex justify-center items-center'>
                <AppleLogo className='h-9 w-9 text-white' />
                <h2 className="mt-2 text-2xl md:text-4xl font-semibold tracking-[-0.015em] leading-[1.05] text-white uppercase">
                  Watch
                </h2>
              </div>

              <h3 className="mt-1 text-[21px] text-white flex flex-col">
                <span>The new Black Unity band.</span>
                <span>Inspired by the power of connection.</span>
              </h3>

              <div className="mt-4 flex items-center justify-center gap-5 text-[17px]">
                <ButtonLink href='/mac' variant='white' size='sm'>Shop</ButtonLink>

              </div>
            </div>
            <div className="mt-4 flex justify-center pb-8">
              <div className="relative w-full h-80 md:h-95">
                <Image
                  src="/images/watch-band.webp"
                  alt="Apple Watch Band"
                  fill
                  className="object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>

            </div>
          </div>

          {/* Apple Watch */}
          <div className="bg-linear-to-b from-[#ADDCEE] to-[#F1F5F6] text-center overflow-hidden group max-h-150">

            <div className="pt-12 px-8">
              <h2 className="text-[28px] md:text-[40px] font-semibold tracking-[-0.015em] text-[#1d1d1f]">
                iPad Air
              </h2>
              <h3 className="mt-1 text-[21px] text-[#6e6e73]">
                Thinnest ever. Biggest display.
              </h3>
              <div className="mt-4 flex items-center justify-center gap-5 text-[17px]">
                <ButtonLink href='/mac' variant='blue' size='sm'>Learn more</ButtonLink>
                <ButtonLink href='/store' variant='blueOutline' size='sm'>Buy</ButtonLink>
              </div>
            </div>
            <div className="mt-4 flex justify-center pb-8">
              <div className="relative w-full h-80 md:h-95">
                <Image
                  src="/images/ipad-air.png"
                  alt="iPad Air"
                  fill
                  className="object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>

            </div>
          </div>

          {/* MacBook Pro 14*/}
          <div className="bg-black text-center overflow-hidden group max-h-150">

            <div className="pt-12 px-8">
              <h2 className="text-[28px] md:text-[40px] font-semibold tracking-[-0.015em] text-white">
                MacBook Pro 14"
              </h2>
              <h3 className="mt-1 text-[21px] text-white">
                Supercharged by M5.
              </h3>
              <div className="mt-4 flex items-center justify-center gap-5 text-[17px]">
                <ButtonLink href='/mac' variant='blue' size='sm'>Learn more</ButtonLink>
                <ButtonLink href='/store' variant='blueOutline' size='sm'>Buy</ButtonLink>
              </div>
            </div>
            <div className="mt-12 flex justify-center pb-8">
              <div className="relative w-full h-60 md:h-70">
                <Image
                  src="/images/macbook-pro-14.png"
                  alt="MacBook Pro 14"
                  fill
                  className="object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>

            </div>
          </div>

          {/* AirPod Pro 3 */}
          <div className="bg-[#F5F5F7] text-center overflow-hidden group max-h-150">

            <div className="pt-12 px-8">
              <h2 className="text-[28px] md:text-[40px] font-semibold tracking-[-0.015em] text-[#1d1d1f]">
                AirPod Pro 3
              </h2>
              <h3 className="mt-1 text-[21px] text-black flex flex-col">
                <span>The world’s best in-ear </span>
                <span>Active Noise Cancellation.</span>
              </h3>
              <div className="mt-4 flex items-center justify-center gap-5 text-[17px]">
                <ButtonLink href='/mac' variant='blue' size='sm'>Learn more</ButtonLink>
                <ButtonLink href='/store' variant='blueOutline' size='sm'>Buy</ButtonLink>
              </div>
            </div>
            <div className="mt-12 flex justify-center pb-8">
              <div className="relative w-full h-60 md:h-70">
                <Image
                  src="/images/airpod-pro-3.webp"
                  alt="AirPod Pro 3"
                  fill
                  className="object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                />
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
