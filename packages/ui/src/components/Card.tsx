import React from 'react';
import { Button } from './Button';

interface CardProps {
    title: string;
    description: string;
    image?: string;
    price?: string;
    onAddToCart?: () => void;
}

export const Card: React.FC<CardProps> = ({
    title,
    description,
    image,
    price,
    onAddToCart,
}) => {
    return (
        <div className="group h-full rounded-2xl border border-gray-200 bg-white overflow-hidden transition hover:border-gray-300">
            {/* Product stage */}
            {image && (
                <div className="flex items-center justify-center bg-gradient-to-b from-gray-50 to-white h-[220px]">
                    <div className="text-5xl leading-none transition-transform duration-300 group-hover:scale-[1.03]">
                        {image}
                    </div>
                </div>
            )}

            <div className="p-6 flex flex-col h-[calc(100%-220px)]">
                <h3 className="text-lg font-semibold tracking-tight text-black">
                    {title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-gray-600 flex-1">
                    {description}
                </p>

                {price && (
                    <div className="mt-5 flex items-center justify-between gap-4">
                        <span className="text-sm font-semibold text-black tracking-tight">
                            {price}
                        </span>

                        {onAddToCart && (
                            <Button variant='blue'
                                onClick={(e) => {
                                    e.stopPropagation();
                                    onAddToCart();
                                }}

                            >
                                Add to bag
                            </Button>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};
