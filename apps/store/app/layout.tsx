import type { Metadata } from 'next';
import './globals.css';
import { CartDrawer } from '@repo/ui';

export const metadata: Metadata = {
    title: 'Apple - Store',
    description: 'Shop the latest Apple products',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className="m-0 p-0 font-[-apple-system,BlinkMacSystemFont,'Segoe_UI',Roboto,sans-serif] bg-white antialiased">
                {children}
                <CartDrawer />
            </body>
        </html>
    );
}
