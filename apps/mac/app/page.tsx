import { Navigation } from "@repo/ui";

export default function MacPage() {
    const navItems = [
        { label: 'Home', href: '/' },
        { label: 'Store', href: '/store' },
        { label: 'Mac', href: '/mac' },
    ];

    return (
        <div className="min-h-screen bg-white text-[#1d1d1f]">
            <Navigation items={navItems} currentZone="/mac" />

            {/* Hero */}
            <section className="bg-white text-center border-b border-[#d2d2d7]">
                <div className="max-w-[980px] mx-auto px-6 pt-16 pb-10">
                    <p className="text-[17px] text-[#6e6e73]">Mac</p>
                    <h1 className="mt-2 text-[56px] md:text-[80px] font-semibold tracking-[-0.015em] leading-[1.05]">
                        Supercharged for pros.
                    </h1>
                    <p className="mt-4 text-[21px] text-[#6e6e73]">
                        Meet the most powerful lineup of Mac ever.
                    </p>

                    <div className="mt-6 flex justify-center gap-6 text-[21px]">
                        <a href="/store" className="text-[#06c] hover:underline">
                            Shop Mac &gt;
                        </a>
                        <a href="/store" className="text-[#06c] hover:underline">
                            Compare models &gt;
                        </a>
                    </div>

                    <div className="mt-10 flex justify-center">
                        <img
                            src="/images/macbook-pro.webp"
                            className="max-h-[420px] object-contain"
                        />
                    </div>
                </div>
            </section>

            {/* Product Grid */}
            <section className="bg-[#f5f5f7] py-14">
                <div className="max-w-[1200px] mx-auto px-6">
                    <h2 className="text-[40px] font-semibold tracking-[-0.015em] text-center">
                        Explore the Mac lineup.
                    </h2>

                    <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            {
                                name: 'MacBook Air',
                                desc: 'Strikingly thin. M-series performance.',
                            },
                            {
                                name: 'MacBook Pro',
                                desc: 'Mind-blowing performance for pros.',
                            },
                            {
                                name: 'iMac',
                                desc: 'A stunning all-in-one desktop.',
                            },
                        ].map((m) => (
                            <div
                                key={m.name}
                                className="bg-white rounded-3xl p-8 text-center border border-[#d2d2d7]"
                            >
                                <h3 className="text-[24px] font-semibold">{m.name}</h3>
                                <p className="mt-2 text-[#6e6e73] text-[17px]">{m.desc}</p>

                                <div className="mt-4">
                                    <a href="/store" className="text-[#06c] hover:underline">
                                        Learn more &gt;
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
