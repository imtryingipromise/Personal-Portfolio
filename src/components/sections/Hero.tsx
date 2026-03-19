import { motion } from 'framer-motion';
import { Download, ArrowRight } from 'lucide-react';
import { cv } from '@/data/cv';
import { GlowingEffect } from '@/components/ui/GlowingEffect';
import GradientBackground from '@/components/ui/gradient-background';
import { TextScramble } from '@/components/ui/TextScramble';
import { CountUp } from '@/components/ui/CountUp';

interface HeroProps {
    isDark: boolean;
}

export function Hero({ isDark }: HeroProps) {
    const textPrimary   = isDark ? '#F5F5F5' : '#111111';
    const textSecondary = isDark ? '#B8B8B8' : '#444444';
    const borderColor   = isDark ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.15)';

    const scrollTo = (id: string) =>
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

    return (
        <section
            id="hero"
            className="w-full relative overflow-hidden"
            style={{
                minHeight: '100vh',
                paddingTop: 160,
                paddingBottom: 160,
            }}
        >
            {/* Animated Gradient Background */}
            <GradientBackground isDark={isDark} />

            {/* Giant backdrop text behind everything */}
            <div
                className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden z-[1]"
                aria-hidden="true"
            >
                <motion.span
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
                    className="font-sans font-black uppercase whitespace-nowrap"
                    style={{
                        fontSize: 'clamp(200px, 28vw, 420px)',
                        lineHeight: 1,
                        letterSpacing: '-0.04em',
                        color: 'transparent',
                        WebkitTextStroke: isDark
                            ? '1.5px rgba(255,255,255,0.06)'
                            : '2px rgba(0,0,0,0.08)',
                        userSelect: 'none',
                    }}
                >
                    MM
                </motion.span>
            </div>

            {/* Content Container */}
            <div className="coda-container relative z-10">
                <div className="flex flex-col items-center text-center gap-8 max-w-5xl mx-auto">

                    {/* Status badge — with glow */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                    >
                        <div
                            className="relative inline-flex items-center gap-2 font-sans font-medium rounded-full px-4 py-1.5"
                            style={{
                                fontSize: 12,
                                letterSpacing: '0.15em',
                                textTransform: 'uppercase',
                                color: textSecondary,
                                border: `1px solid ${borderColor}`,
                                background: isDark ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.04)',
                            }}
                        >
                            <GlowingEffect
                                spread={20}
                                glow={false}
                                disabled={false}
                                proximity={40}
                                inactiveZone={0.01}
                                borderWidth={1}
                            />
                            <span
                                className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                                style={{ background: isDark ? '#F5F5F5' : '#000000' }}
                            />
                            Available for opportunities

                        </div>
                    </motion.div>

                    {/* Name heading — scramble reveal */}
                    <motion.h1
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
                        className="font-sans font-black uppercase tracking-tight"
                        style={{
                            fontSize: 'clamp(44px, 8vw, 96px)',
                            lineHeight: 0.95,
                            letterSpacing: '-0.03em',
                            color: textPrimary,
                        }}
                    >
                        <TextScramble
                            text={cv.shortName}
                            speed={35}
                            delay={400}
                        />
                    </motion.h1>


                    {/* Title */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
                        className="font-sans font-semibold"
                        style={{
                            fontSize: 'clamp(18px, 2.5vw, 24px)',
                            color: textSecondary,
                            lineHeight: 1.4,
                        }}
                    >
                        {cv.title}
                    </motion.p>

                    {/* Summary */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
                        className="font-sans font-normal max-w-2xl"
                        style={{
                            fontSize: 16,
                            lineHeight: 1.7,
                            color: textSecondary,
                        }}
                    >
                        {cv.summary}
                    </motion.p>

                    {/* CTAs — with glow */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.35, ease: [0.4, 0, 0.2, 1] }}
                        className="flex flex-wrap items-center justify-center gap-3"
                    >
                        {/* Primary — solid button */}
                        <div
                            className="relative rounded-full"
                            style={{ border: '1px solid transparent' }}
                        >
                            <GlowingEffect
                                spread={24}
                                glow={false}
                                disabled={false}
                                proximity={48}
                                inactiveZone={0.01}
                                borderWidth={1.5}
                            />
                            <button
                                onClick={() => scrollTo('contact')}
                                className="relative inline-flex items-center gap-2 font-sans font-semibold rounded-full transition-all duration-300"
                                style={{
                                    height: 52,
                                    paddingLeft: 28,
                                    paddingRight: 28,
                                    fontSize: 15,
                                    background: isDark ? '#F5F5F5' : '#000000',
                                    color: isDark ? '#000000' : '#FFFFFF',
                                }}
                                onMouseEnter={(e) => {
                                    (e.currentTarget as HTMLElement).style.transform = 'scale(1.03)';
                                    (e.currentTarget as HTMLElement).style.opacity = '0.92';
                                }}
                                onMouseLeave={(e) => {
                                    (e.currentTarget as HTMLElement).style.transform = 'scale(1)';
                                    (e.currentTarget as HTMLElement).style.opacity = '1';
                                }}
                            >
                                Get in Touch
                                <ArrowRight size={16} strokeWidth={2.5} />
                            </button>
                        </div>

                        {/* Secondary — outline button */}
                        <div
                            className="relative rounded-full"
                            style={{ border: `1px solid ${borderColor}` }}
                        >
                            <GlowingEffect
                                spread={24}
                                glow={false}
                                disabled={false}
                                proximity={48}
                                inactiveZone={0.01}
                                borderWidth={1.5}
                            />
                            <a
                                href={`${import.meta.env.BASE_URL}cv.pdf`}
                                download

                                className="relative inline-flex items-center gap-2 font-sans font-semibold rounded-full transition-all duration-300"
                                style={{
                                    height: 52,
                                    paddingLeft: 28,
                                    paddingRight: 28,
                                    fontSize: 15,
                                    background: 'transparent',
                                    color: textSecondary,
                                    textDecoration: 'none',
                                }}
                                onMouseEnter={(e) => {
                                    (e.currentTarget as HTMLElement).style.color = textPrimary;
                                }}
                                onMouseLeave={(e) => {
                                    (e.currentTarget as HTMLElement).style.color = textSecondary;
                                }}
                            >
                                <Download size={15} strokeWidth={2} />
                                Download CV
                            </a>
                        </div>
                    </motion.div>

                    {/* Stats row — CV-accurate */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.45, ease: [0.4, 0, 0.2, 1] }}
                        className="flex flex-wrap items-center justify-center gap-8"
                        style={{
                            borderTop: `1px solid ${borderColor}`,
                            paddingTop: 32,
                            width: '100%',
                        }}
                    >
                        {cv.stats.map(({ value, label }) => (
                            <div key={label} className="flex flex-col items-center gap-1">
                                <CountUp
                                    target={value}
                                    className="font-sans font-black"
                                    style={{ fontSize: 28, letterSpacing: '-0.02em', color: textPrimary }}
                                />
                                <span
                                    className="font-sans font-normal text-center"
                                    style={{ fontSize: 13, color: textSecondary }}
                                >
                                    {label}
                                </span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
