import React from 'react';

type Variant = 'primary' | 'secondary' | 'outline' | 'blue' | 'blueOutline' | 'white';
type Size = 'sm' | 'md' | 'lg';

interface ButtonLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    variant?: Variant;
    size?: Size;
}

const base =
    'inline-flex items-center justify-center rounded-full font-medium transition select-none ' +
    'focus:outline-none focus-visible:ring-2 focus-visible:ring-black/20';

const sizeClasses: Record<Size, string> = {
    sm: 'h-9 px-4 text-sm',
    md: 'h-11 px-6 text-sm',
    lg: 'h-12 px-7 text-base',
};

const variantClasses: Record<Variant, string> = {
    primary: 'bg-black text-white hover:opacity-90',
    secondary: 'bg-gray-100 text-black hover:bg-gray-200',
    outline: 'border border-gray-300 text-black hover:bg-gray-100',
    blue: 'bg-[#0076DF] text-white hover:opacity-95',
    blueOutline: 'border border-[#0076DF] text-[#0076DF] hover:bg-[#0076DF] hover:text-white',
    white: 'bg-white text-black'
};

export const ButtonLink: React.FC<ButtonLinkProps> = ({
    variant = 'blue',
    size = 'md',
    className = '',
    ...props
}) => {
    return (
        <a
            className={`${base} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
            {...props}
        />
    );
};
