import React from 'react';
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

const textVariants = cva('', {
    variants: {
        variant: {
            hero: [
                'font-sans font-black leading-[0.9] tracking-[-0.02em]',
                '[font-size:clamp(80px,10vw,160px)]',
            ].join(' '),

            display: [
                'font-sans font-extrabold leading-[1.0] tracking-[-0.02em]',
                '[font-size:clamp(48px,6vw,96px)]',
            ].join(' '),

            h1: 'font-sans font-bold text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-[-0.01em]',
            h2: 'font-sans font-bold text-3xl md:text-4xl leading-[1.1] tracking-[-0.01em]',
            h3: 'font-sans font-semibold text-xl md:text-2xl leading-[1.2]',

            p: 'font-sans font-normal text-[18px] leading-[1.7]',

            small: 'font-sans font-normal text-[15px] leading-[1.6]',

            label: 'font-sans font-medium text-[12px] uppercase tracking-[0.2em]',

            caption: 'font-sans font-normal text-[11px] tracking-[0.1em]',
        },
    },
    defaultVariants: {
        variant: 'p',
    },
});

export interface TypographyProps
    extends React.HTMLAttributes<HTMLElement>,
        VariantProps<typeof textVariants> {
    as?: React.ElementType;
    href?: string;
    target?: string;
    rel?: string;
}

export function Typography({ className, variant, as: Component = 'p', ...props }: TypographyProps) {
    return (
        <Component className={cn(textVariants({ variant, className }))} {...props} />
    );
}
