'use client';

import { ButtonLink, Navigation } from '@repo/ui';
import macbookPro16 from '@repo/ui/assets/images/macbook-pro-16.png';
import Image from 'next/image';

export default function MacPage() {
  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Store', href: '/store' },
    { label: 'iPhone', href: '/iphone' },
    { label: 'Mac', href: '/mac' },
  ];

  return (
    <div className="min-h-screen bg-white text-[#1d1d1f]">
      <Navigation items={navItems} currentZone="/mac" />

      {/* HERO (Dark like Apple MacBook Pro section) */}
      <section className="bg-[#F5F5F7] text-black text-center overflow-hidden">
        <div className="max-w-[980px] mx-auto px-6 pt-16 pb-10">
          <p className="text-[15px] text-gray-600">MacBook Pro</p>

          <h1 className="mt-2 text-[48px] md:text-[72px] font-semibold tracking-[-0.02em] leading-[1.05]">
            Supercharged for pros.
          </h1>

          <p className="mt-4 text-xl md:text-2xl text-gray-600">
            Extreme performance. Pro-level power.
          </p>

          <div className="mt-6 flex justify-center gap-6">
            <ButtonLink href="/store" variant="blue" size="lg">
              Buy
            </ButtonLink>
            <ButtonLink href="/store" variant="blueOutline" size="lg">
              Shop Mac
            </ButtonLink>
          </div>

          <div className="mt-12 flex justify-center">
            <Image
              src={macbookPro16}
              alt="MacBook Pro 16"
              className="max-h-[420px] object-contain"
              priority
            />
          </div>
        </div>
      </section>

      {/* PERFORMANCE SECTION */}
      <section className="bg-white text-center">
        <div className="max-w-[980px] mx-auto px-6 pt-16 pb-12">
          <h2 className="text-[36px] md:text-[52px] font-semibold tracking-[-0.02em]">
            Built for Apple Silicon.
          </h2>

          <p className="mt-4 text-[18px] md:text-[20px] text-[#6e6e73]">
            Incredible speed, efficiency, and battery life across the Mac lineup.
          </p>

          <div className="mt-10 flex justify-center">
            <Image
              src={macbookPro16}
              alt="Mac performance"
              className="max-h-[320px] object-contain"
            />
          </div>
        </div>
      </section>

      {/* LINEUP */}
      <section className="bg-[#F5F5F7] py-16">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-[36px] md:text-[44px] font-semibold tracking-[-0.015em] text-center">
            Explore the Mac lineup.
          </h2>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: 'MacBook Air',
                desc: 'Strikingly thin. Everyday performance.',
              },
              {
                name: 'MacBook Pro',
                desc: 'Unmatched power for professionals.',
              },
              {
                name: 'iMac',
                desc: 'A beautiful all-in-one desktop.',
              },
            ].map((m) => (
              <div
                key={m.name}
                className="rounded-3xl border border-[#d2d2d7] p-8 text-center hover:shadow-sm transition bg-white"
              >
                <h3 className="text-[22px] font-semibold">{m.name}</h3>

                <p className="mt-2 text-[#6e6e73] text-[16px]">{m.desc}</p>

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

      {/* FOOTER NOTE */}
      <footer className="bg-white px-6 py-8">
        <div className="max-w-[980px] mx-auto text-center text-xs text-[#6e6e73]">
          Mac zone — independent Next.js app in a multi-zone architecture.
        </div>
      </footer>
    </div>
  );
}
