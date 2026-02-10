'use client';

import { Navigation, ButtonLink } from '@repo/ui';
import { useMemo } from 'react';
import Image from 'next/image';
import iphone17Series from '@repo/ui/assets/images/iphone-17-series.webp';
import iphone17 from '@repo/ui/assets/images/iphone-17.webp';
import iphoneAir from '@repo/ui/assets/images/iphone-air.webp';


export default function IPhonePage() {
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
      <Navigation items={navItems} currentZone="/iphone" />

      {/* Hero: iPhone 17 Pro */}
      <section className="bg-[#F5F5F7] text-black text-center overflow-hidden">
        <div className="pt-16 pb-0 max-w-[980px] mx-auto px-6">
          <p className="text-[15px] text-gray-600">New</p>

          <h1 className="mt-3 text-5xl md:text-7xl font-semibold tracking-[-0.02em] leading-[1.05]">
            iPhone 17 Pro
          </h1>

          <p className="mt-3 text-xl md:text-2xl text-gray-600">
            Exceptional performance. Ultimate pro camera system.
          </p>

          <div className="mt-7 flex items-center justify-center gap-4">
            <ButtonLink href="/store" variant="blue" size="lg">
              Buy
            </ButtonLink>
            <ButtonLink href="/store" variant="blueOutline" size="lg">
              Shop iPhone
            </ButtonLink>
          </div>

          <div className="mt-10 flex justify-center">
            <div className="relative w-full h-[420px] md:h-[520px]">
              {/* Use your own asset. If it’s still named iphone-17-series.webp, keep it. */}
              <Image
                src={iphone17Series}
                alt="iPhone 17 lineup"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* iPhone 17 */}
      <section className="bg-white text-center overflow-hidden">
        <div className="pt-16 pb-0 max-w-[980px] mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-semibold tracking-[-0.02em]">
            iPhone 17
          </h2>

          <p className="mt-3 text-xl md:text-2xl text-[#6e6e73]">
            Power player. Energy expert.
          </p>

          <div className="mt-7 flex items-center justify-center gap-4">
            <ButtonLink href="/store" variant="blue" size="lg">
              Learn more
            </ButtonLink>
            <ButtonLink href="/store" variant="blueOutline" size="lg">
              Buy
            </ButtonLink>
          </div>

          <div className="mt-10 flex justify-center">
            <div className="relative w-full h-[420px] md:h-[520px]">
              <Image
                src={iphone17}
                alt="iPhone 17"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* iPhone Air */}
      <section className="bg-[#F5F5F7] text-center overflow-hidden border-t border-[#d2d2d7]">
        <div className="pt-16 pb-14 max-w-[980px] mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-semibold tracking-[-0.02em]">
            iPhone Air
          </h2>

          <p className="mt-3 text-xl md:text-2xl text-[#6e6e73]">
            Light. Fast. Built for everyday.
          </p>

          <div className="mt-7 flex items-center justify-center gap-4">
            <ButtonLink href="/store" variant="blue" size="lg">
              Learn more
            </ButtonLink>
            <ButtonLink href="/store" variant="blueOutline" size="lg">
              Buy
            </ButtonLink>
          </div>

          {/* If you don’t have an iPhone Air image yet, reuse your lineup image for now */}
          <div className="mt-10 flex justify-center">
            <div className="relative w-full h-[360px] md:h-[420px]">
              <Image
                src={iphoneAir}
                alt="iPhone Air"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Compare */}
      <section className="bg-[#f5f5f7] py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-center text-3xl md:text-4xl font-semibold tracking-[-0.015em]">
            Explore the lineup.
          </h3>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                name: 'iPhone 17 Pro',
                desc: 'Pro camera system and top performance.',
              },
              {
                name: 'iPhone 17',
                desc: 'The latest generation. Balanced and powerful.',
              },
              {
                name: 'iPhone Air',
                desc: 'Lightweight design for everyday use.',
              },
            ].map((p) => (
              <div
                key={p.name}
                className="rounded-3xl bg-white p-8 border border-[#d2d2d7] text-center"
              >
                <div className="text-[22px] font-semibold">{p.name}</div>
                <div className="mt-2 text-[15px] text-[#6e6e73]">{p.desc}</div>
                <div className="mt-5 flex justify-center">
                  <ButtonLink href="/store" variant="blue" size="sm">
                    Shop
                  </ButtonLink>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white px-6 py-10">
        <div className="max-w-[980px] mx-auto text-center text-xs text-[#6e6e73]">
          iPhone zone — independent Next.js app in a multi-zone architecture.
        </div>
      </footer>
    </div>
  );
}
