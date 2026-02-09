import React from 'react';

interface NavItem {
    label: string;
    href: string;
}

interface NavigationProps {
    items: NavItem[];
    currentZone?: string;
}

export const Navigation: React.FC<NavigationProps> = ({ items, currentZone }) => {
    return (
        <nav className="sticky top-0 z-[1000] bg-[rgba(251,251,253,0.8)] backdrop-blur-xl border-b border-[#d2d2d7]">
            <div className="max-w-[980px] mx-auto h-11 flex items-center justify-between px-4 md:px-2">
                {/* Apple logo */}
                <a href="/" className="text-[#1d1d1f] hover:opacity-70 transition-opacity" aria-label="Apple">
                    <svg height="44" viewBox="0 0 14 44" width="14" xmlns="http://www.w3.org/2000/svg">
                        <path d="m13.0729 17.6825a3.61 3.61 0 0 0 -1.7502 3.0365 3.5132 3.5132 0 0 0 2.1369 3.2223 8.394 8.394 0 0 1 -1.0952 2.2592c-.6817.9877-1.3889 1.9753-2.4981 1.9753s-1.374-.6363-2.562-.6363c-1.1627 0-1.5728.6489-2.5845.6489s-1.7183-.9498-2.4982-2.076a10.5765 10.5765 0 0 1 -1.6641-5.6482 4.9693 4.9693 0 0 1 2.311-4.3 3.8343 3.8343 0 0 1 2.0494-.7754 4.4491 4.4491 0 0 0 1.7378.6615 4.1317 4.1317 0 0 0 1.6242-.5763 3.9435 3.9435 0 0 1 2.2476-.7 3.9931 3.9931 0 0 1 3.2589 1.8114zm-3.7286-3.3259a3.5652 3.5652 0 0 0 .8834-2.5725 .0634.0634 0 0 0 -.0762-.0446 3.7178 3.7178 0 0 0 -2.4308 1.2363 3.4629 3.4629 0 0 0 -.924 2.4773.0569.0569 0 0 0 .0634.0508 3.3894 3.3894 0 0 0 2.4842-1.1473z" fill="currentColor" />
                    </svg>
                </a>

                {/* Center nav items */}
                <ul className="flex items-center gap-7 list-none m-0 p-0">
                    {items.map((item) => {
                        const active = currentZone === item.href;
                        return (
                            <li key={item.href}>
                                <a
                                    href={item.href}
                                    className={`text-xs tracking-[.008em] no-underline transition-opacity hover:opacity-70 ${
                                        active
                                            ? 'text-[#1d1d1f] font-medium'
                                            : 'text-[#1d1d1f]'
                                    }`}
                                >
                                    {item.label}
                                </a>
                            </li>
                        );
                    })}
                </ul>

                {/* Bag icon */}
                <a href="/store" className="text-[#1d1d1f] hover:opacity-70 transition-opacity" aria-label="Shopping Bag">
                    <svg height="44" viewBox="0 0 14 44" width="14" xmlns="http://www.w3.org/2000/svg">
                        <path d="m11.3535 16.0283h-1.0205a3.4229 3.4229 0 0 0 -3.333-2.9648 3.4229 3.4229 0 0 0 -3.333 2.9648h-1.02a2.1184 2.1184 0 0 0 -2.117 2.1162v7.7155a2.1186 2.1186 0 0 0 2.1162 2.1167h8.707a2.1186 2.1186 0 0 0 2.1168-2.1167v-7.7155a2.1184 2.1184 0 0 0 -2.1165-2.1162zm-4.3535-1.8652a2.3169 2.3169 0 0 1 2.2222 1.8652h-4.4444a2.3169 2.3169 0 0 1 2.2222-1.8652zm5.37 11.6969a1.0182 1.0182 0 0 1 -1.0166 1.0171h-8.7072a1.0182 1.0182 0 0 1 -1.0166-1.0171v-7.7155a1.0178 1.0178 0 0 1 1.0166-1.0166h8.707a1.0178 1.0178 0 0 1 1.0168 1.0166z" fill="currentColor" />
                    </svg>
                </a>
            </div>
        </nav>
    );
};
