import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import type { JSX } from 'react';
import { cv } from '@/data/cv';
import { GlowingEffect } from '@/components/ui/GlowingEffect';

interface AboutProps {
    isDark: boolean;
}

const highlights = [
    'Concurrent systems that handle real-time multi-process coordination',
    'Data-driven insights through cleaning, analysis, and visualization',
    'Web interfaces built with modern front-end fundamentals',
    'Robust database architectures with strict integrity rules',
    'Linux server environments configured for production use',
    'Interactive applications with physics and game logic from scratch',
];

const skills = [
    { category: 'Languages',   items: ['Python', 'Java', 'C++', 'C#', 'SQL'] },
    { category: 'Web',         items: ['HTML', 'CSS', 'JavaScript'] },
    { category: 'Tools',       items: ['MySQL', 'RStudio', 'Linux (Ubuntu)', 'Virtual Machines'] },
    { category: 'Core',        items: ['OOP', 'Data Structures', 'Multithreading', 'CRUD'] },
];

export function About({ isDark }: AboutProps): JSX.Element {
    const bg          = isDark ? '#0A0A0A' : '#F5F5F5';
    const textPrimary = isDark ? '#F5F5F5' : '#000000';
    const textMuted   = isDark ? '#B8B8B8' : '#555555';
    const borderColor = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.1)';
    const tagBg       = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.07)';
    const tagColor    = isDark ? 'rgba(245,245,245,0.7)' : 'rgba(0,0,0,0.65)';
    const checkColor  = isDark ? '#F5F5F5' : '#000000';

    return (
        <section
            id="about"
            className="w-full relative overflow-hidden"
            style={{ background: 'transparent', paddingTop: 120, paddingBottom: 120 }}
        >
            <div className="coda-container relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
                    {/* ── Left: Media block ── */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
                        className="flex flex-col gap-8"
                    >
                        {/* Avatar / initials block — with glow */}
                        <div
                            className="relative w-full rounded-[28px] overflow-hidden flex items-center justify-center transition-all duration-300"
                            style={{
                                aspectRatio: '4 / 3',
                                background: isDark ? '#0D0D0D' : '#E8E8E8',
                                border: `1px solid ${borderColor}`,
                            }}
                            onMouseEnter={(e) => {
                                (e.currentTarget as HTMLElement).style.transform = 'scale(1.01)';
                                (e.currentTarget as HTMLElement).style.borderColor = isDark
                                    ? 'rgba(255,255,255,0.12)'
                                    : 'rgba(0,0,0,0.12)';
                            }}
                            onMouseLeave={(e) => {
                                (e.currentTarget as HTMLElement).style.transform = 'scale(1)';
                                (e.currentTarget as HTMLElement).style.borderColor = borderColor;
                            }}
                        >
                            <GlowingEffect
                                spread={40}
                                glow={false}
                                disabled={false}
                                proximity={72}
                                inactiveZone={0.01}
                                borderWidth={1.5}
                            />
                            {/* Subtle radial glow */}
                            <div
                                aria-hidden="true"
                                className="absolute inset-0 pointer-events-none"
                                style={{
                                    background: isDark
                                        ? 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(255,255,255,0.06) 0%, transparent 60%)'
                                        : 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(0,0,0,0.04) 0%, transparent 60%)',
                                }}
                            />
                            <div
                                className="relative w-32 h-32 rounded-full flex items-center justify-center transition-all duration-300"
                                style={{
                                    background: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)',
                                    border: `1px solid ${borderColor}`,
                                }}
                                onMouseEnter={(e) => {
                                    (e.currentTarget as HTMLElement).style.transform = 'scale(1.05)';
                                    (e.currentTarget as HTMLElement).style.borderColor = isDark
                                        ? 'rgba(255,255,255,0.2)'
                                        : 'rgba(0,0,0,0.2)';
                                }}
                                onMouseLeave={(e) => {
                                    (e.currentTarget as HTMLElement).style.transform = 'scale(1)';
                                    (e.currentTarget as HTMLElement).style.borderColor = borderColor;
                                }}
                            >
                                <GlowingEffect
                                    spread={24}
                                    glow={false}
                                    disabled={false}
                                    proximity={40}
                                    inactiveZone={0.01}
                                    borderWidth={1}
                                />
                                <span
                                    className="font-sans font-black text-[48px] leading-none"
                                    style={{ color: textPrimary }}
                                >
                                    {cv.initials}
                                </span>
                            </div>
                        </div>

                        {/* Education mini-card — with glow */}
                        <div
                            className="relative rounded-[20px] p-6 transition-all duration-300"
                            style={{
                                background: isDark ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.04)',
                                border: `1px solid ${borderColor}`,
                            }}
                            onMouseEnter={(e) => {
                                (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px) scale(1.01)';
                                (e.currentTarget as HTMLElement).style.borderColor = isDark
                                    ? 'rgba(255,255,255,0.12)'
                                    : 'rgba(0,0,0,0.12)';
                            }}
                            onMouseLeave={(e) => {
                                (e.currentTarget as HTMLElement).style.transform = 'translateY(0) scale(1)';
                                (e.currentTarget as HTMLElement).style.borderColor = borderColor;
                            }}
                        >
                            <GlowingEffect
                                spread={24}
                                glow={false}
                                disabled={false}
                                proximity={40}
                                inactiveZone={0.01}
                                borderWidth={1}
                            />
                            <div className="flex items-center gap-3 mb-3">
                                <div
                                    className="w-2 h-2 rounded-full"
                                    style={{ background: isDark ? '#F5F5F5' : '#000000' }}
                                />
                                <span
                                    className="font-sans font-semibold"
                                    style={{ fontSize: 13, color: textMuted }}
                                >
                                    Currently Studying
                                </span>
                            </div>
                            <p
                                className="font-sans font-bold"
                                style={{ fontSize: 16, color: textPrimary, lineHeight: 1.4 }}
                            >
                                {cv.education[0].degree}
                            </p>
                            <p
                                className="font-sans font-normal mt-1"
                                style={{ fontSize: 14, color: textMuted }}
                            >
                                {cv.education[0].institution} · {cv.education[0].duration}
                            </p>
                        </div>
                    </motion.div>

                    {/* ── Right: Content ── */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
                        className="flex flex-col gap-8"
                    >
                        <div className="flex flex-col gap-4">
                            <span className="label-text" style={{ color: textMuted }}>
                                About Me
                            </span>
                            <h2
                                className="display-heading"
                                style={{ color: textPrimary }}
                            >
                                Turning complex problems into clean solutions
                            </h2>
                        </div>

                        {/* Highlights list */}
                        <div className="flex flex-col gap-4">
                            {highlights.map((item) => (
                                <div key={item} className="flex items-start gap-3">
                                    <CheckCircle2
                                        size={20}
                                        strokeWidth={2}
                                        style={{ color: checkColor, flexShrink: 0, marginTop: 2 }}
                                    />
                                    <span
                                        className="font-sans font-normal"
                                        style={{ fontSize: 15, lineHeight: 1.6, color: textMuted }}
                                    >
                                        {item}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* Skills grid — with glow */}
                        <div className="grid grid-cols-2 gap-4">
                            {skills.map(({ category, items }) => (
                                <div
                                    key={category}
                                    className="relative flex flex-col gap-2 p-4 rounded-[16px] transition-all duration-300"
                                    style={{
                                        background: isDark ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.04)',
                                        border: `1px solid ${borderColor}`,
                                    }}
                                    onMouseEnter={(e) => {
                                        (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px) scale(1.02)';
                                        (e.currentTarget as HTMLElement).style.borderColor = isDark
                                            ? 'rgba(255,255,255,0.12)'
                                            : 'rgba(0,0,0,0.12)';
                                    }}
                                    onMouseLeave={(e) => {
                                        (e.currentTarget as HTMLElement).style.transform = 'translateY(0) scale(1)';
                                        (e.currentTarget as HTMLElement).style.borderColor = borderColor;
                                    }}
                                >
                                    <GlowingEffect
                                        spread={20}
                                        glow={false}
                                        disabled={false}
                                        proximity={36}
                                        inactiveZone={0.01}
                                        borderWidth={1}
                                    />
                                    <span
                                        className="font-sans font-semibold"
                                        style={{ fontSize: 12, color: textMuted }}
                                    >
                                        {category}
                                    </span>
                                    <div className="flex flex-wrap gap-1.5">
                                        {items.map((skill) => (
                                            <span
                                                key={skill}
                                                className="font-sans font-medium rounded-full px-2.5 py-0.5"
                                                style={{
                                                    fontSize: 12,
                                                    background: tagBg,
                                                    color: tagColor,
                                                }}
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* CTAs — with glow */}
                        <div className="flex flex-wrap items-center gap-3 pt-2">
                            {/* Primary — solid button */}
                            <div
                                className="relative rounded-full"
                                style={{ border: '1px solid transparent' }}
                            >
                                <GlowingEffect
                                    spread={20}
                                    glow={false}
                                    disabled={false}
                                    proximity={40}
                                    inactiveZone={0.01}
                                    borderWidth={1.5}
                                />
                                <button
                                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                                    className="relative inline-flex items-center gap-2 font-sans font-semibold rounded-full transition-all duration-300"
                                    style={{
                                        height: 48,
                                        paddingLeft: 24,
                                        paddingRight: 24,
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
                                    spread={20}
                                    glow={false}
                                    disabled={false}
                                    proximity={40}
                                    inactiveZone={0.01}
                                    borderWidth={1.5}
                                />
                                <a
                                    href={`mailto:${cv.contact.email}`}
                                    className="relative inline-flex items-center gap-2 font-sans font-semibold rounded-full transition-all duration-300"
                                    style={{
                                        height: 48,
                                        paddingLeft: 24,
                                        paddingRight: 24,
                                        fontSize: 15,
                                        background: 'transparent',
                                        color: textMuted,
                                        textDecoration: 'none',
                                    }}
                                    onMouseEnter={(e) => {
                                        (e.currentTarget as HTMLElement).style.color = textPrimary;
                                    }}
                                    onMouseLeave={(e) => {
                                        (e.currentTarget as HTMLElement).style.color = textMuted;
                                    }}
                                >
                                    Send Email
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
