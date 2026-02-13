// packages/ui/src/components/Navigation.tsx
"use client";

import React, { useEffect, useRef, useState } from "react";
import type { GlobalState } from "@repo/shared-state";
import {
    getGlobalState,
    subscribeToStateChanges,
    userOperations,
} from "@repo/shared-state";
import { uiEvents } from "@repo/shared-state";
import { AppleLogo } from "../icons/AppleLogo";
import { BagIcon } from "../icons/BagIcon";

interface NavItem {
    label: string;
    href: string;
}

interface NavigationProps {
    items: NavItem[];
    currentZone?: string;
}

export const Navigation: React.FC<NavigationProps> = ({ items, currentZone }) => {
    const [cartCount, setCartCount] = useState(() => {
        const s = getGlobalState();
        return s.cart.reduce((sum, i) => sum + i.quantity, 0);
    });

    const [userName, setUserName] = useState<string | null>(() => {
        const s = getGlobalState();
        return s.user?.name ?? null;
    });

    const [userEmail, setUserEmail] = useState<string | null>(() => {
        const s = getGlobalState();
        return s.user?.email ?? null;
    });

    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const unsubscribe = subscribeToStateChanges((newState: GlobalState) => {
            setCartCount(newState.cart.reduce((sum, i) => sum + i.quantity, 0));
            setUserName(newState.user?.name ?? null);
            setUserEmail(newState.user?.email ?? null);
        });

        const onDocMouseDown = (e: MouseEvent) => {
            if (!menuRef.current) return;
            if (!menuRef.current.contains(e.target as Node)) setMenuOpen(false);
        };

        document.addEventListener("mousedown", onDocMouseDown);

        return () => {
            document.removeEventListener("mousedown", onDocMouseDown);
            unsubscribe();
        };
    }, []);

    async function handleLogout() {
        try {
            await fetch("/logout", { method: "POST", credentials: "include" });
        } catch {
            // ignore network errors
        } finally {
            setMenuOpen(false);
            userOperations.logout(); // clears local user + cart (your current logic)
            window.location.href = "/";
        }
    }

    return (
        <nav className="sticky top-0 z-[1000] backdrop-blur-md bg-white/70">
            <div className="max-w-6xl mx-auto px-6 h-12 flex items-center justify-between">
                {/* Left: Apple mark */}
                <a href="/" className="text-lg font-medium tracking-tight text-black">
                    <AppleLogo className="h-4 w-4" />
                </a>

                {/* Center: links */}
                <ul className="flex items-center gap-8 text-sm">
                    {items.map((item) => {
                        const active = currentZone === item.href;
                        return (
                            <li key={item.href}>
                                <a
                                    href={item.href}
                                    className={`transition-colors ${active ? "text-black" : "text-gray-600 hover:text-black"
                                        }`}
                                >
                                    {item.label}
                                </a>
                            </li>
                        );
                    })}
                </ul>

                {/* Right: User + Bag */}
                <div className="flex items-center gap-4">
                    {/* User dropdown */}
                    {userName ? (
                        <div className="relative" ref={menuRef}>
                            <button
                                type="button"
                                onClick={() => setMenuOpen((v) => !v)}
                                className="text-sm text-gray-700 hover:text-black transition-colors inline-flex items-center gap-2"
                                aria-haspopup="menu"
                                aria-expanded={menuOpen}
                            >
                                <span className="max-w-[140px] truncate">{userName}</span>
                                <svg
                                    width="10"
                                    height="10"
                                    viewBox="0 0 10 10"
                                    className={`transition-transform ${menuOpen ? "rotate-180" : ""}`}
                                    aria-hidden="true"
                                >
                                    <path d="M1 3l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" />
                                </svg>
                            </button>

                            {menuOpen && (
                                <div
                                    role="menu"
                                    className="absolute right-0 mt-2 w-56 rounded-2xl border border-gray-200 bg-white shadow-lg overflow-hidden"
                                >
                                    <div className="px-4 py-3 border-b border-gray-100">
                                        <div className="text-sm font-medium text-gray-900 truncate">{userName}</div>
                                        {userEmail && (
                                            <div className="text-xs text-gray-500 truncate">{userEmail}</div>
                                        )}
                                    </div>

                                    <div className="py-1">
                                        <a
                                            role="menuitem"
                                            href="/profile"
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-black"
                                            onClick={() => setMenuOpen(false)}
                                        >
                                            Profile
                                        </a>

                                        <button
                                            role="menuitem"
                                            type="button"
                                            onClick={handleLogout}
                                            className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-black"
                                        >
                                            Logout
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    ) : (
                        <a
                            href="/oauth2/authorization/itp-frontbff"
                            className="text-sm text-gray-700 hover:text-black transition-colors"
                        >
                            Login
                        </a>
                    )}

                    {/* Cart */}
                    <button
                        type="button"
                        onClick={() => uiEvents.openCart()}
                        className="relative inline-flex items-center justify-center h-9 w-9 rounded-full hover:bg-gray-100 transition cursor-pointer"
                        aria-label="Shopping bag"
                        title="Bag"
                    >
                        <BagIcon className="h-6 w-6" />

                        {cartCount > 0 && (
                            <span className="absolute -top-1 -right-1 min-w-4 h-4 px-1 rounded-full bg-black text-white text-[9px] inline-flex items-center justify-center">
                                {cartCount}
                            </span>
                        )}
                    </button>
                </div>
            </div>
        </nav>
    );
};
