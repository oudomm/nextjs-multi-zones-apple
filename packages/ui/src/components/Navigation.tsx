'use client';

import React, { useEffect, useState } from 'react';
import type { GlobalState } from '@repo/shared-state';
import { getGlobalState, subscribeToStateChanges } from '@repo/shared-state';
import { uiEvents } from '@repo/shared-state';
import { AppleLogo } from '../icons/AppleLogo';
import { BagIcon } from '../icons/BagIcon';

interface NavItem {
    label: string;
    href: string;
}

interface NavigationProps {
    items: NavItem[];
    currentZone?: string;
}

export const Navigation: React.FC<NavigationProps> = ({ items, currentZone }) => {
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        // init
        const s = getGlobalState();
        setCartCount(s.cart.reduce((sum, i) => sum + i.quantity, 0));

        // subscribe
        const unsubscribe = subscribeToStateChanges((newState: GlobalState) => {
            setCartCount(newState.cart.reduce((sum, i) => sum + i.quantity, 0));
        });

        return unsubscribe;
    }, []);

    return (
        <nav className="sticky top-0 z-1000 backdrop-blur-md bg-white/70">
            <div className="max-w-6xl mx-auto px-6 h-12 flex items-center justify-between">
                {/* Left: Apple mark */}
                <a href="/" className="text-lg font-medium tracking-tight text-black">
                    <AppleLogo className='h-4 w-4' />
                </a>

                {/* Center: links */}
                <ul className="flex items-center gap-8 text-sm">
                    {items.map((item) => {
                        const active = currentZone === item.href;
                        return (
                            <li key={item.href}>
                                <a
                                    href={item.href}
                                    className={`transition-colors ${active ? 'text-black' : 'text-gray-600 hover:text-black'
                                        }`}
                                >
                                    {item.label}
                                </a>
                            </li>
                        );
                    })}
                </ul>

                {/* Right: Bag */}
                <button
                    type="button"
                    onClick={() => uiEvents.openCart()}
                    className="relative inline-flex items-center justify-center h-9 w-9 rounded-full hover:bg-gray-100 transition"
                    aria-label="Shopping bag"
                    title="Bag"
                >
                    <span className="text-base"><BagIcon className='h-12 w-12' /></span>

                    {cartCount > 0 && (
                        <span className="absolute bottom-1 right-1 min-w-4 h-4 rounded-full bg-black text-white text-[9px] inline-flex items-center justify-center">
                            {cartCount}
                        </span>
                    )}
                </button>
            </div>
        </nav>
    );
};
