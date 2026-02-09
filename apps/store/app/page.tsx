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
    const [showCart, setShowCart] = useState(false);

    useEffect(() => {
        setGlobalState(getGlobalState());
        const unsubscribe = subscribeToStateChanges(setGlobalState);
        return unsubscribe;
    }, []);

    const navItems = useMemo(
        () => [
            { label: 'Home', href: '/' },
            { label: 'Store', href: '/store' },
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
        globalState?.cart?.reduce((total, item) => total + item.price * item.quantity, 0) ??
        0;

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
        <div className="min-h-screen bg-white text-black">
            <Navigation items={navItems} currentZone="/store" />

            {/* Cart Drawer */}
            {showCart && (
                <>
                    {/* Overlay (blur + dim) */}
                    <div
                        className="fixed inset-0 bg-black/30 backdrop-blur-[2px] z-[999]"
                        onClick={() => setShowCart(false)}
                    />

                    <aside className="fixed top-0 right-0 w-full max-w-[420px] h-screen bg-white z-[1000] border-l border-gray-200">
                        <div className="h-full flex flex-col">
                            {/* Header */}
                            <div className="px-6 py-5 border-b border-gray-200 flex items-center justify-between">
                                <div>
                                    <div className="text-sm text-gray-500">Your bag</div>
                                    <h2 className="text-lg font-semibold tracking-tight m-0">
                                        Shopping Bag
                                    </h2>
                                </div>

                                <button
                                    onClick={() => setShowCart(false)}
                                    className="h-9 w-9 rounded-full bg-gray-100 hover:bg-gray-200 transition inline-flex items-center justify-center"
                                    aria-label="Close cart"
                                >
                                    ✕
                                </button>
                            </div>

                            {/* Body */}
                            <div className="flex-1 overflow-y-auto px-6 py-6">
                                {!globalState || globalState.cart.length === 0 ? (
                                    <div className="text-center mt-10">
                                        <div className="text-3xl">🛍️</div>
                                        <p className="mt-3 text-gray-600">Your bag is empty.</p>
                                        <a
                                            href="#products"
                                            onClick={() => setShowCart(false)}
                                            className="mt-4 inline-flex h-10 px-5 items-center justify-center rounded-full bg-black text-white text-sm font-medium hover:opacity-90 transition"
                                        >
                                            Shop products
                                        </a>
                                    </div>
                                ) : (
                                    <div className="space-y-3">
                                        {globalState.cart.map((item) => (
                                            <div
                                                key={item.id}
                                                className="flex gap-4 rounded-2xl border border-gray-200 bg-white p-4"
                                            >
                                                <div className="text-3xl leading-none">{item.image}</div>

                                                <div className="flex-1 min-w-0">
                                                    <div className="font-medium tracking-tight truncate">
                                                        {item.name}
                                                    </div>
                                                    <div className="mt-1 text-sm text-gray-600">
                                                        Qty {item.quantity}
                                                    </div>
                                                    <div className="mt-2 text-sm font-semibold">
                                                        ${(item.price * item.quantity).toFixed(2)}
                                                    </div>
                                                </div>

                                                <button
                                                    onClick={() => handleRemoveFromCart(item.id)}
                                                    className="h-9 w-9 rounded-full bg-gray-100 hover:bg-gray-200 transition inline-flex items-center justify-center"
                                                    aria-label="Remove item"
                                                >
                                                    🗑️
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Footer */}
                            {globalState && globalState.cart.length > 0 && (
                                <div className="px-6 py-5 border-t border-gray-200">
                                    <div className="flex items-center justify-between">
                                        <div className="text-sm text-gray-600">Total</div>
                                        <div className="text-lg font-semibold tracking-tight">
                                            ${cartTotal.toFixed(2)}
                                        </div>
                                    </div>

                                    <button
                                        onClick={handleCheckout}
                                        className="mt-4 w-full h-11 rounded-full bg-black text-white text-sm font-medium hover:opacity-90 transition"
                                    >
                                        Check out
                                    </button>

                                    <p className="mt-3 text-xs text-gray-500">
                                        Demo only. Checkout flow will be added later.
                                    </p>
                                </div>
                            )}
                        </div>
                    </aside>
                </>
            )}

            {/* Store Header */}
            <header className="border-b border-gray-200">
                <div className="max-w-6xl mx-auto px-6 py-14 text-center relative">
                    {/* Floating Cart (Apple-like pill) */}
                    <div className="fixed top-[70px] right-6 z-[999]">
                        <button
                            onClick={() => setShowCart((v) => !v)}
                            className="group relative inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/80 backdrop-blur-md px-4 h-11 shadow-sm hover:bg-white transition"
                        >
                            <span className="text-lg">🛍️</span>
                            <span className="text-sm font-medium text-gray-700 group-hover:text-black transition">
                                Bag
                            </span>

                            {cartCount > 0 && (
                                <span className="ml-1 inline-flex items-center justify-center min-w-6 h-6 px-2 rounded-full bg-black text-white text-xs font-semibold">
                                    {cartCount}
                                </span>
                            )}
                        </button>
                    </div>
                    <p className="text-sm text-gray-500">Apple Store</p>
                    <h1 className="mt-2 text-5xl md:text-6xl font-semibold tracking-tight">
                        Shop the latest.
                    </h1>
                    <p className="mt-5 text-lg text-gray-600 max-w-2xl mx-auto">
                        The best way to buy the products you love. Built as a separate Next.js
                        zone.
                    </p>
                </div>
            </header>

            {/* Products */}
            <main id="products" className="max-w-6xl mx-auto px-6 py-16">
                <div className="flex items-end justify-between gap-6">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
                            Products
                        </h2>
                        <p className="mt-2 text-gray-600">
                            Shared UI components and shared cart state across zones.
                        </p>
                    </div>

                    <a
                        href="/"
                        className="text-sm font-medium text-gray-700 hover:text-black transition"
                    >
                        Back to Home →
                    </a>
                </div>

                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product) => (
                        <Card
                            key={product.id}
                            title={product.title}
                            description={product.description}
                            image={product.image}
                            price={product.price}
                            onAddToCart={() => handleAddToCart(product)}
                        />
                    ))}
                </div>
            </main>
        </div>
    );
}
