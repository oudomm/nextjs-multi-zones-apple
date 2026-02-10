'use client';

import React, { useEffect, useMemo, useState } from 'react';
import type { GlobalState } from '@repo/shared-state';
import {
    getGlobalState,
    subscribeToStateChanges,
    cartOperations,
    uiEvents,
} from '@repo/shared-state';
import { Button } from './Button';

export function CartDrawer() {
    const [globalState, setGlobalState] = useState<GlobalState>(() => getGlobalState());
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const unsubState = subscribeToStateChanges((s) => setGlobalState(s));
        const unsubOpen = uiEvents.subscribeOpenCart(() => setOpen(true));
        return () => {
            unsubState();
            unsubOpen();
        };
    }, []);

    const cartTotal = useMemo(
        () => globalState.cart.reduce((t, i) => t + i.price * i.quantity, 0),
        [globalState.cart]
    );

    if (!open) return null;

    return (
        <>
            {/* Overlay */}
            <div
                className="fixed inset-0 bg-black/30 backdrop-blur-[2px] z-[999]"
                onClick={() => setOpen(false)}
            />

            {/* Drawer */}
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
                            onClick={() => setOpen(false)}
                            className="h-9 w-9 rounded-full bg-gray-100 hover:bg-gray-200 transition inline-flex items-center justify-center"
                            aria-label="Close cart"
                        >
                            ✕
                        </button>
                    </div>

                    {/* Body */}
                    <div className="flex-1 overflow-y-auto px-6 py-6">
                        {globalState.cart.length === 0 ? (
                            <div className="text-center mt-10">
                                <div className="text-3xl">🛍️</div>
                                <p className="mt-3 text-gray-600">Your bag is empty.</p>
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
                                            onClick={() => cartOperations.removeItem(item.id)}
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
                    {globalState.cart.length > 0 && (
                        <div className="px-6 py-5 border-t border-gray-200">
                            <div className="flex items-center justify-between">
                                <div className="text-sm text-gray-600">Total</div>
                                <div className="text-lg font-semibold tracking-tight">
                                    ${cartTotal.toFixed(2)}
                                </div>
                            </div>

                            <Button
                                variant='blue'
                                onClick={() => {
                                    // optional: go to store checkout flow
                                    window.location.href = '/store';
                                }}
                                className="mt-4 w-full h-11 rounded-full  text-sm font-medium hover:opacity-90 transition"
                            >
                                Check out
                            </Button>

                            <p className="mt-3 text-xs text-gray-500">
                                Demo only.
                            </p>
                        </div>
                    )}
                </div>
            </aside>
        </>
    );
}
