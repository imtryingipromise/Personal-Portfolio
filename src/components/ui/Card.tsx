import { cn } from '@/lib/utils';
import { motion, HTMLMotionProps } from 'framer-motion';
import React from 'react';

export interface CardProps extends Omit<HTMLMotionProps<'div'>, 'className' | 'style' | 'children'> {
    className?: string;
    isDark?: boolean;
    children?: React.ReactNode;
}

/** Generic surface card — thin border, hover lift */
export const Card = React.forwardRef<HTMLDivElement, CardProps>(
    ({ className, children, isDark = true, ...props }, ref) => {
        const bg     = isDark ? '#111111' : '#FFFFFF';
        const border = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)';

        return (
            <motion.div
                ref={ref}
                className={cn('relative overflow-hidden rounded-[28px]', className)}
                style={{ background: bg, border: `1px solid ${border}` }}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                {...props}
            >
                {children}
            </motion.div>
        );
    }
);
Card.displayName = 'Card';

/* ─── Product Card ──────────────────────────────────────────────────────── */

export type ProductCardColor = 'blue' | 'green' | 'pink' | 'purple';

const palettes: Record<ProductCardColor, {
    bg: string;
    highlight: string;
    glow: string;
    blobA: string;
    blobB: string;
    shadow: string;
}> = {
    blue: {
        bg:        '#111111',
        highlight: '#1E1E1E',
        glow:      'rgba(255,255,255,0.18)',
        blobA:     'rgba(255,255,255,0.07)',
        blobB:     'rgba(255,255,255,0.05)',
        shadow:    '0 30px 80px rgba(0,0,0,0.6)',
    },
    green: {
        bg:        '#161616',
        highlight: '#242424',
        glow:      'rgba(255,255,255,0.14)',
        blobA:     'rgba(255,255,255,0.06)',
        blobB:     'rgba(255,255,255,0.04)',
        shadow:    '0 30px 80px rgba(0,0,0,0.6)',
    },
    pink: {
        bg:        '#0D0D0D',
        highlight: '#1A1A1A',
        glow:      'rgba(255,255,255,0.20)',
        blobA:     'rgba(255,255,255,0.08)',
        blobB:     'rgba(255,255,255,0.05)',
        shadow:    '0 30px 80px rgba(0,0,0,0.6)',
    },
    purple: {
        bg:        '#1C1C1C',
        highlight: '#2A2A2A',
        glow:      'rgba(255,255,255,0.12)',
        blobA:     'rgba(255,255,255,0.05)',
        blobB:     'rgba(255,255,255,0.03)',
        shadow:    '0 30px 80px rgba(0,0,0,0.6)',
    },
};

interface ProductCardProps {
    color: ProductCardColor;
    title: string;
    description: string;
    /** SVG icon element rendered in the graphic area */
    icon?: React.ReactNode;
    className?: string;
}

export function ProductCard({ color, title, description, icon, className }: ProductCardProps) {
    const p = palettes[color];

    return (
        <motion.div
            className={cn('relative overflow-hidden flex flex-col rounded-[28px] cursor-pointer', className)}
            style={{
                background: p.bg,
                boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                minHeight: 380,
            }}
            whileHover={{
                y: -8,
                scale: 1.02,
                boxShadow: p.shadow,
            }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
        >
            {/* ── Graphic area (top 60%) ── */}
            <div
                className="relative flex-1 flex items-center justify-center overflow-hidden"
                style={{ minHeight: 220 }}
            >
                {/* Base radial gradient */}
                <div
                    className="absolute inset-0"
                    style={{
                        background: `radial-gradient(circle at 40% 30%, ${p.highlight}, ${p.bg} 70%)`,
                    }}
                />

                {/* Soft 3D lighting overlay */}
                <div
                    className="absolute inset-0"
                    style={{
                        background: 'radial-gradient(circle at 40% 30%, rgba(255,255,255,0.25), transparent 60%)',
                    }}
                />

                {/* Blob A — large background blob */}
                <div
                    className="absolute"
                    style={{
                        width: 180,
                        height: 180,
                        background: `radial-gradient(circle, ${p.blobA}, transparent 70%)`,
                        borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
                        top: '10%',
                        left: '15%',
                        filter: 'blur(20px)',
                        opacity: 0.8,
                    }}
                />

                {/* Blob B — accent glow blob */}
                <div
                    className="absolute"
                    style={{
                        width: 120,
                        height: 120,
                        background: `radial-gradient(circle, ${p.blobB}, transparent 70%)`,
                        borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
                        bottom: '15%',
                        right: '10%',
                        filter: 'blur(15px)',
                        opacity: 0.7,
                    }}
                />

                {/* Glow orb center */}
                <div
                    className="absolute"
                    style={{
                        width: 100,
                        height: 100,
                        background: `radial-gradient(circle, ${p.glow}, transparent 70%)`,
                        borderRadius: '50%',
                        top: '30%',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        filter: 'blur(25px)',
                        opacity: 0.5,
                    }}
                />

                {/* Icon */}
                {icon && (
                    <div className="relative z-10 flex items-center justify-center" style={{ color: 'white' }}>
                        {icon}
                    </div>
                )}
            </div>

            {/* ── Content area (bottom) ── */}
            <div
                className="relative z-10 flex flex-col gap-2 p-7"
                style={{
                    background: `linear-gradient(to bottom, transparent, rgba(0,0,0,0.35))`,
                }}
            >
                <h3
                    className="font-sans font-extrabold text-white leading-tight"
                    style={{ fontSize: 28, letterSpacing: '-0.01em' }}
                >
                    {title}
                </h3>
                <p
                    className="font-sans font-normal text-white/90 leading-relaxed"
                    style={{ fontSize: 16 }}
                >
                    {description}
                </p>
            </div>
        </motion.div>
    );
}
