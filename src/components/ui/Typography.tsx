import React from 'react';
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

const textVariants = cva('', {
    variants: {
        variant: {
            // Hero — 900 weight, 0.9 line-height, -0.02em tracking, clamp 80–160px
            hero: [
                'font-sans font-black leading-[0.9] tracking-[-0.02em]',
                '[font-size:clamp(80px,10vw,160px)]',
            ].join(' '),

            // Display — section titles, 800 weight, clamp 48–96px
            display: [
                'font-sans font-extrabold leading-[1.0] tracking-[-0.02em]',
                '[font-size:clamp(48px,6vw,96px)]',
            ].join(' '),

            // Heading — subsection titles
            h1: 'font-sans font-bold text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-[-0.01em]',
            h2: 'font-sans font-bold text-3xl md:text-4xl leading-[1.1] tracking-[-0.01em]',
            h3: 'font-sans font-semibold text-xl md:text-2xl leading-[1.2]',

            // Body — 18px, 1.7 line-height
            p: 'font-sans font-normal text-[18px] leading-[1.7]',

            // Small body
            small: 'font-sans font-normal text-[15px] leading-[1.6]',

            // Label — uppercase, 0.2em tracking, 12px, opacity handled by parent
            label: 'font-sans font-medium text-[12px] uppercase tracking-[0.2em]',

            // Caption
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
