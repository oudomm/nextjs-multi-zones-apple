import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary';
    children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
    variant = 'primary',
    children,
    className = '',
    ...props
}) => {
    const base =
        'inline-flex items-center justify-center h-11 px-6 rounded-full text-sm font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-black/20';

    const variants =
        variant === 'primary'
            ? 'bg-black text-white hover:opacity-90'
            : 'bg-gray-100 text-black hover:bg-gray-200';

    return (
        <button className={`${base} ${variants} ${className}`} {...props}>
            {children}
        </button>
    );
};
