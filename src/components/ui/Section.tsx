import React from 'react';
import { cn } from '@/lib/utils';

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    padless?: boolean;
}

export function Section({ className, padless = false, children, ...props }: SectionProps) {
    return (
        <section
            className={cn(
                'w-full',
                !padless && 'py-16 md:py-24',
                className
            )}
            {...props}
        >
            {children}
        </section>
    );
}
