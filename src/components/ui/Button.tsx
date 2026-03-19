import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import { motion, HTMLMotionProps } from 'framer-motion';
import React from 'react';

export const buttonVariants = cva(

    [
        'inline-flex items-center justify-center whitespace-nowrap',
        'font-sans font-semibold text-[14px] tracking-[0.02em]',
        'rounded-full',
        'transition-all duration-300',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30',
        'disabled:pointer-events-none disabled:opacity-40',
        'select-none',
    ].join(' '),
    {
        variants: {
            variant: {
                // Primary — white fill (works on dark bg)
                default: 'bg-white text-black hover:bg-white/90',
                // Dark fill — for light sections
                dark: 'bg-black text-white hover:bg-black/80',
                // Outline
                outline: 'border border-white/20 bg-transparent text-white hover:bg-white/5',
                // Outline dark — for light sections
                'outline-dark': 'border border-black/20 bg-transparent text-black hover:bg-black/5',
                // Ghost
                ghost: 'bg-transparent text-white/70 hover:text-white',
                // Primary color (for shadcn compatibility)
                primary: 'bg-primary text-primary-foreground hover:bg-primary/90',
                // Secondary color
                secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
                // Destructive
                destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
                // Link style
                link: 'text-primary underline-offset-4 hover:underline',
            },

            size: {
                default: 'h-12 px-6 text-[14px]',
                sm:      'h-9  px-5 text-[13px]',
                lg:      'h-14 px-8 text-[15px]',
                icon:    'h-10 w-10',
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'default',
        },
    }
);

export interface ButtonProps
    extends Omit<HTMLMotionProps<'button'>, 'className'>,
        VariantProps<typeof buttonVariants> {
    className?: string;
    isDark?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, isDark = true, ...props }, ref) => {
        return (
            <motion.button
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                {...props}
            />
        );
    }
);
Button.displayName = 'Button';
