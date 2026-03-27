import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import type { JSX } from 'react';
import { cv } from '@/data/cv';
import { BorderGlow } from '@/components/ui/BorderGlow';
import { WordReveal } from '@/components/ui/WordReveal';
import { LineReveal } from '@/components/ui/LineReveal';

interface AboutProps {
    isDark: boolean;
}

const skills = [
    { category: 'Languages',   items: [...cv.skills.programmingLanguages] },
    { category: 'Web',         items: [...cv.skills.webDevelopment] },
    { category: 'Tools',       items: [...cv.skills.tools] },
    { category: 'Core',        items: [...cv.skills.technicalSkills] },
];

export function About({ isDark }: AboutProps): JSX.Element {
    const textPrimary = isDark ? '#F5F5F5' : '#111111';
    const textMuted   = isDark ? '#B8B8B8' : '#444444';
    const borderColor = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.12)';
    const tagBg       = isDark ? 'rgba(255,255,255,0.08)' : '#FFFFFF';
    const tagColor    = isDark ? 'rgba(245,245,245,0.7)' : '#333333';

    return (
        <section
            id="about"
            className="w-full relative overflow-hidden"
            style={{ background: isDark ? '#0A0A0A' : '#E8E8E8', paddingTop: 120, paddingBottom: 120 }}
        >
            <div className="container relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
                    {/* Left: Media block */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
                        className="flex flex-col gap-8"
                    >
                        {/* Avatar / initials block with animated border */}
                        <div
                            className="relative w-full rounded-[28px] overflow-hidden flex items-center justify-center transition-all duration-500 group"
                            style={{
                                aspectRatio: '4 / 3',
                                background: isDark ? '#0D0D0D' : '#DEDEDE',
                                border: `1px solid ${borderColor}`,
                            }}
                            onMouseEnter={(e) => {
                                (e.currentTarget as HTMLElement).style.transform = 'scale(1.01)';
                                (e.currentTarget as HTMLElement).style.borderColor = isDark
                                    ? 'rgba(255,255,255,0.15)'
                                    : 'rgba(0,0,0,0.15)';
                            }}
                            onMouseLeave={(e) => {
                                (e.currentTarget as HTMLElement).style.transform = 'scale(1)';
                                (e.currentTarget as HTMLElement).style.borderColor = borderColor;
                            }}
                        >
                            <BorderGlow
                                spread={40}
                                glow={false}
                                disabled={false}
                                proximity={72}
                                inactiveZone={0.01}
                                borderWidth={1.5}
                            />
                            {/* Animated rings */}
                            <div
                                aria-hidden="true"
                                className="absolute inset-0 pointer-events-none flex items-center justify-center"
                            >
                                {[180, 220, 260].map((size, i) => (
                                    <motion.div
                                        key={size}
                                        className="absolute rounded-full"
                                        style={{
                                            width: size,
                                            height: size,
                                            border: `1px solid ${isDark ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.06)'}`,
                                        }}
                                        animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
                                        transition={{ duration: 20 + i * 10, repeat: Infinity, ease: 'linear' }}
                                    />
                                ))}
                            </div>
                            <div
                                className="relative w-32 h-32 rounded-full flex items-center justify-center transition-all duration-500"
                                style={{
                                    background: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)',
                                    border: `1px solid ${borderColor}`,
                                }}
                                onMouseEnter={(e) => {
                                    (e.currentTarget as HTMLElement).style.transform = 'scale(1.08)';
                                }}
                                onMouseLeave={(e) => {
                                    (e.currentTarget as HTMLElement).style.transform = 'scale(1)';
                                }}
                            >
                                <BorderGlow
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

                        {/* Education mini-card */}
                        <div
                            className="relative rounded-[20px] p-6 transition-all duration-300"
                            style={{
                                background: isDark ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.06)',
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
                            <BorderGlow
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

                    {/* Right: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 40, filter: 'blur(6px)' }}
                        whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
                        className="flex flex-col gap-8"
                    >
                        <div className="flex flex-col gap-4">
                            <motion.span
                                className="label-text"
                                style={{ color: textMuted }}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                            >
                                About Me
                            </motion.span>
                            <WordReveal
                                text="Turning complex problems into clean solutions"
                                className="display-heading"
                                style={{ color: textPrimary }}
                                stagger={0.04}
                                delay={0.1}
                            />
                        </div>

                        <LineReveal isDark={isDark} delay={0.3} />

                        {/* Bio paragraphs — staggered word reveals */}
                        <div className="flex flex-col gap-5">
                            <WordReveal
                                text="I'm Muqeet — a CS student at APU specializing in AI. I got into programming because I liked the idea of building things that actually work, and since then I've been diving into everything from concurrent C++ systems to full-stack web apps."
                                className="font-sans font-normal"
                                style={{ fontSize: 16, lineHeight: 1.75, color: textMuted }}
                                stagger={0.015}
                                delay={0.15}
                            />
                            <WordReveal
                                text="My projects range from a multithreaded airport simulator to a 4-level narrative platformer with boss fights and NPC dialogue. I enjoy the challenge of taking a vague idea and turning it into something polished — whether that's a database schema, a game engine, or a server config."
                                className="font-sans font-normal"
                                style={{ fontSize: 16, lineHeight: 1.75, color: textMuted }}
                                stagger={0.015}
                                delay={0.2}
                            />
                            <WordReveal
                                text="Right now I'm looking for an internship where I can contribute meaningfully, learn fast, and work alongside people who care about writing good software."
                                className="font-sans font-normal"
                                style={{ fontSize: 16, lineHeight: 1.75, color: textMuted }}
                                stagger={0.015}
                                delay={0.25}
                            />
                        </div>

                        {/* Skills grid — staggered reveal */}
                        <motion.div
                            className="grid grid-cols-2 gap-4"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={{
                                hidden: {},
                                visible: { transition: { staggerChildren: 0.08 } },
                            }}
                        >
                            {skills.map(({ category, items }) => (
                                <motion.div
                                    key={category}
                                    variants={{
                                        hidden:  { opacity: 0, y: 20 },
                                        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] as [number, number, number, number] } },
                                    }}
                                    className="relative flex flex-col gap-2 p-4 rounded-[16px] transition-all duration-300"
                                    style={{
                                        background: isDark ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.06)',
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
                                    <BorderGlow
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
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* CTAs */}
                        <div className="flex flex-wrap items-center gap-3 pt-2">
                            <div
                                className="relative rounded-full"
                                style={{ border: '1px solid transparent' }}
                            >
                                <BorderGlow
                                    spread={20}
                                    glow={false}
                                    disabled={false}
                                    proximity={40}
                                    inactiveZone={0.01}
                                    borderWidth={1.5}
                                />
                                <button
                                    onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
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
                                    See My Work
                                    <ArrowRight size={16} strokeWidth={2.5} />
                                </button>
                            </div>

                            <div
                                className="relative rounded-full"
                                style={{ border: `1px solid ${borderColor}` }}
                            >
                                <BorderGlow
                                    spread={20}
                                    glow={false}
                                    disabled={false}
                                    proximity={40}
                                    inactiveZone={0.01}
                                    borderWidth={1.5}
                                />
                                <a
                                    href={/Android|iPhone|iPad|iPod/i.test(typeof navigator !== 'undefined' ? navigator.userAgent : '') ? `mailto:${cv.contact.email}` : `https://mail.google.com/mail/?view=cm&to=${cv.contact.email}`} target="_blank" rel="noopener noreferrer"
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
