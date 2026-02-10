'use client';

import { Navigation, Card, Button } from '@repo/ui';
import { useEffect, useMemo, useState } from 'react';
import {
    getGlobalState,
    subscribeToStateChanges,
    cartOperations,
    type GlobalState,
} from '@repo/shared-state';

export default function StorePage() {
    const [globalState, setGlobalState] = useState<GlobalState | null>(null);

    useEffect(() => {
        setGlobalState(getGlobalState());
        const unsubscribe = subscribeToStateChanges(setGlobalState);
        return unsubscribe;
    }, []);

    const navItems = useMemo(
        () => [
            { label: 'Home', href: '/' },
            { label: 'Store', href: '/store' },
            { label: 'iPhone', href: '/iphone' },
            { label: 'Mac', href: '/mac' },
        ],
        []
    );

    const products = useMemo(
        () => [
            {
                id: 'iphone-15-pro-max',
                title: 'iPhone 15 Pro Max',
                description: 'The ultimate iPhone with the longest battery life ever.',
                image: '📱',
                price: '$1,199',
            },
            {
                id: 'iphone-15-pro',
                title: 'iPhone 15 Pro',
                description: 'Titanium. A17 Pro chip. Action button.',
                image: '📱',
                price: '$999',
            },
            {
                id: 'iphone-15',
                title: 'iPhone 15',
                description: 'A total powerhouse. Dynamic Island. 48MP camera.',
                image: '📱',
                price: '$799',
            },
            {
                id: 'macbook-pro-16',
                title: 'MacBook Pro 16"',
                description: 'M3 Max chip. Up to 128GB unified memory.',
                image: '💻',
                price: '$2,499',
            },
            {
                id: 'macbook-pro-14',
                title: 'MacBook Pro 14"',
                description: 'M3 Pro chip. Supercharged performance.',
                image: '💻',
                price: '$1,999',
            },
            {
                id: 'macbook-air',
                title: 'MacBook Air',
                description: 'M2 chip. Strikingly thin. Take it anywhere.',
                image: '💻',
                price: '$1,099',
            },
            {
                id: 'airpods-pro-2',
                title: 'AirPods Pro (2nd gen)',
                description: 'Adaptive Audio. Up to 2x more ANC.',
                image: '🎧',
                price: '$249',
            },
            {
                id: 'airpods-max',
                title: 'AirPods Max',
                description: 'Computational audio. Cinema-like sound.',
                image: '🎧',
                price: '$549',
            },
            {
                id: 'apple-watch-ultra-2',
                title: 'Apple Watch Ultra 2',
                description: 'Rugged and capable. Precision GPS.',
                image: '⌚',
                price: '$799',
            },
        ],
        []
    );

    const cartCount =
        globalState?.cart?.reduce((sum, item) => sum + item.quantity, 0) ?? 0;

    const cartTotal =
        globalState?.cart?.reduce((total, item) => total + item.price * item.quantity, 0) ?? 0;

    const handleAddToCart = (product: (typeof products)[0]) => {
        cartOperations.addItem({
            id: product.id,
            name: product.title,
            price: parseFloat(product.price.replace('$', '').replace(',', '')),
            quantity: 1,
            image: product.image,
        });
    };

    const handleRemoveFromCart = (itemId: string) => {
        cartOperations.removeItem(itemId);
    };

    const handleCheckout = () => {
        if (!globalState?.user) {
            alert('Please sign in to checkout');
            window.location.href = '/mac';
            return;
        }
        alert('Checkout functionality coming soon!');
    };

    return (
        <div className="min-h-screen bg-white text-[#1d1d1f]">
            <Navigation items={navItems} currentZone="/store" />

            {/* Hero */}
            <header className="relative overflow-hidden border-b border-[#d2d2d7]">
                <div className="absolute inset-0 bg-linear-to-b from-[#f5f5f7] via-white to-white" />
                <div className="relative max-w-6xl mx-auto px-6 pt-14 pb-10 md:pt-20 md:pb-14">
                    <div className="flex flex-col items-center text-center">
                        <p className="text-[15px] text-gray-600">Apple Store</p>
                        <h1 className="mt-3 text-5xl md:text-7xl font-semibold tracking-[-0.02em] leading-[1.05]">
                            Shop the latest.
                        </h1>
                        <p className="mt-4 text-xl md:text-2xl text-gray-600 max-w-2xl">
                            Built as a separate Next.js zone. Shared UI components and shared cart state across zones.
                        </p>

                        <div className="mt-8 flex flex-col sm:flex-row gap-3">
                            <a
                                href="#products"
                                className="inline-flex items-center justify-center rounded-full px-5 py-3 text-[15px] font-medium bg-[#0071e3] text-white hover:opacity-90 transition"
                            >
                                Browse products
                            </a>
                            <a
                                href="/"
                                className="inline-flex items-center justify-center rounded-full px-5 py-3 text-[15px] font-medium border border-[#d2d2d7] text-[#1d1d1f] hover:bg-[#f5f5f7] transition"
                            >
                                Back to Home
                            </a>
                        </div>
                    </div>
                </div>
            </header>

            {/* Sticky Cart Summary */}
            <section className="sticky top-[56px] z-30 bg-white/80 backdrop-blur border-b border-[#d2d2d7]">
                <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <div className="h-9 w-9 rounded-full bg-[#f5f5f7] flex items-center justify-center text-[16px]">
                            🛍️
                        </div>
                        <div className="leading-tight">
                            <div className="text-[13px] text-[#6e6e73]">Your bag</div>
                            <div className="text-[15px] font-medium">
                                {cartCount} item{cartCount === 1 ? '' : 's'} • ${cartTotal.toLocaleString()}
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-2">
                        <button
                            onClick={handleCheckout}
                            className="rounded-full px-4 py-2 text-[14px] font-medium bg-[#0071e3] text-white hover:opacity-90 transition"
                        >
                            Checkout
                        </button>
                    </div>
                </div>
            </section>

            {/* Products */}
            <main id="products" className="bg-white">
                <div className="max-w-6xl mx-auto px-6 py-12 md:py-16">
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                        <div>
                            <h2 className="text-[28px] md:text-[34px] font-semibold tracking-[-0.015em]">
                                Products
                            </h2>
                            <p className="mt-2 text-[15px] text-[#6e6e73]">
                                Add items to cart — shared state updates instantly across zones.
                            </p>
                        </div>

                        <div className="flex gap-2">
                            <a
                                href="/iphone"
                                className="rounded-full px-4 py-2 text-[14px] font-medium border border-[#d2d2d7] hover:bg-[#f5f5f7] transition"
                            >
                                iPhone →
                            </a>
                            <a
                                href="/mac"
                                className="rounded-full px-4 py-2 text-[14px] font-medium border border-[#d2d2d7] hover:bg-[#f5f5f7] transition"
                            >
                                Mac →
                            </a>
                        </div>
                    </div>

                    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                        {products.map((product) => (
                            <div
                                key={product.id}
                                className="rounded-3xl border border-[#d2d2d7] bg-white overflow-hidden hover:shadow-sm transition-shadow"
                            >
                                {/* Top area (emoji thumbnail) */}
                                <div className="px-6 pt-6">
                                    <div className="h-12 w-12 rounded-2xl bg-[#f5f5f7] flex items-center justify-center text-[24px]">
                                        {product.image}
                                    </div>
                                </div>

                                {/* Use your shared Card for consistency */}
                                <div className="px-2 pb-2">
                                    <Card
                                        title={product.title}
                                        description={product.description}
                                        image={''} // we render emoji above, so keep Card clean
                                        price={product.price}
                                        onAddToCart={() => handleAddToCart(product)}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Cart list (optional / nice) */}
                    {!!globalState?.cart?.length && (
                        <section className="mt-14">
                            <h3 className="text-[20px] font-semibold tracking-[-0.01em]">
                                Bag preview
                            </h3>

                            <div className="mt-4 rounded-3xl border border-[#d2d2d7] bg-[#f5f5f7] p-4 md:p-6">
                                <div className="space-y-3">
                                    {globalState.cart.map((item) => (
                                        <div
                                            key={item.id}
                                            className="flex items-center justify-between gap-4 rounded-2xl bg-white border border-[#d2d2d7] px-4 py-3"
                                        >
                                            <div className="flex items-center gap-3">
                                                <div className="h-10 w-10 rounded-xl bg-[#f5f5f7] flex items-center justify-center">
                                                    {item.image ?? '🛍️'}
                                                </div>
                                                <div className="leading-tight">
                                                    <div className="text-[15px] font-medium">{item.name}</div>
                                                    <div className="text-[13px] text-[#6e6e73]">
                                                        Qty {item.quantity} • ${item.price.toLocaleString()}
                                                    </div>
                                                </div>
                                            </div>

                                            <button
                                                onClick={() => handleRemoveFromCart(item.id)}
                                                className="rounded-full px-3 py-2 text-[13px] font-medium border border-[#d2d2d7] hover:bg-[#f5f5f7] transition"
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-6 flex items-center justify-between">
                                    <div className="text-[15px] text-[#6e6e73]">Total</div>
                                    <div className="text-[18px] font-semibold">
                                        ${cartTotal.toLocaleString()}
                                    </div>
                                </div>

                                <div className="mt-4 flex justify-end">
                                    <button
                                        onClick={handleCheckout}
                                        className="rounded-full px-5 py-3 text-[14px] font-medium bg-[#0071e3] text-white hover:opacity-90 transition"
                                    >
                                        Checkout
                                    </button>
                                </div>
                            </div>
                        </section>
                    )}
                </div>
            </main>
        </div>
    );
}
