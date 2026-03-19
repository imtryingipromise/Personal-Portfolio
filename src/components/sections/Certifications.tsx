import { motion } from 'framer-motion';
import { Award, Calendar, Clock } from 'lucide-react';
import type { JSX } from 'react';
import { cv } from '@/data/cv';
import { GlowingEffect } from '@/components/ui/GlowingEffect';

interface CertificationsProps {
    isDark: boolean;
}

export function Certifications({ isDark }: CertificationsProps): JSX.Element {
    const bg          = isDark ? '#000000' : '#F0F0F0';
    const textPrimary = isDark ? '#F5F5F5' : '#111111';
    const textMuted   = isDark ? '#B8B8B8' : '#444444';
    const borderColor = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.1)';
    const cardBg      = isDark ? '#0D0D0D' : '#FFFFFF';

    return (
        <section
            id="certifications"
            className="w-full"
            style={{ background: bg, paddingTop: 120, paddingBottom: 120 }}
        >
            <div className="coda-container">

                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                    className="flex flex-col gap-4 mb-14"
                >
                    <span className="label-text" style={{ color: textMuted }}>
                        Credentials
                    </span>
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                        <h2 className="display-heading" style={{ color: textPrimary }}>
                            Certifications
                        </h2>
                        <p
                            className="font-sans font-normal max-w-sm"
                            style={{ fontSize: 16, lineHeight: 1.6, color: textMuted }}
                        >
                            Professional certifications earned.
                        </p>
                    </div>
                </motion.div>

                {/* Certification cards — with glow */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {cv.certifications.map((cert, i) => (
                        <motion.div
                            key={cert.name}
                            initial={{ opacity: 0, y: 32 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.4, 0, 0.2, 1] }}
                            className="relative overflow-hidden rounded-[28px] p-8 flex flex-col gap-6 transition-all duration-300"
                            style={{
                                background: cardBg,
                                border: `1px solid ${borderColor}`,
                            }}
                            onMouseEnter={(e) => {
                                (e.currentTarget as HTMLElement).style.transform = 'translateY(-6px) scale(1.01)';
                                (e.currentTarget as HTMLElement).style.borderColor = isDark
                                    ? 'rgba(255,255,255,0.18)'
                                    : 'rgba(0,0,0,0.18)';
                            }}
                            onMouseLeave={(e) => {
                                (e.currentTarget as HTMLElement).style.transform = 'translateY(0) scale(1)';
                                (e.currentTarget as HTMLElement).style.borderColor = borderColor;
                            }}
                        >
                            {/* Glow effect */}
                            <GlowingEffect
                                spread={36}
                                glow={false}
                                disabled={false}
                                proximity={64}
                                inactiveZone={0.01}
                                borderWidth={1.5}
                            />

                            {/* Accent bar */}
                            <div
                                className="absolute top-0 left-0 right-0 h-px rounded-t-[28px]"
                                style={{
                                    background: isDark ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.15)',
                                }}
                            />

                            {/* Header row */}
                            <div className="flex items-start gap-5">
                                {/* Icon box — with glow */}
                                <div
                                    className="relative w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                                    style={{
                                        background: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.07)',
                                        border: `1px solid ${borderColor}`,
                                    }}
                                >
                                    <GlowingEffect
                                        spread={16}
                                        glow={false}
                                        disabled={false}
                                        proximity={28}
                                        inactiveZone={0.01}
                                        borderWidth={1}
                                    />
                                    <Award size={24} strokeWidth={1.8} style={{ color: isDark ? '#F5F5F5' : '#000000' }} />
                                </div>

                                {/* Name + issuer */}
                                <div className="flex flex-col gap-1 flex-1">
                                    <h3
                                        className="font-sans font-extrabold"
                                        style={{
                                            fontSize: 20,
                                            letterSpacing: '-0.01em',
                                            color: textPrimary,
                                            lineHeight: 1.25,
                                        }}
                                    >
                                        {cert.name}
                                    </h3>
                                    <span
                                        className="font-sans font-medium"
                                        style={{ fontSize: 14, color: textMuted }}
                                    >
                                        {cert.issuer}
                                    </span>
                                </div>
                            </div>

                            {/* Divider */}
                            <div className="w-full h-px" style={{ background: borderColor }} />

                            {/* Meta row */}
                            <div className="flex flex-wrap items-center gap-4">

                                {/* Date */}
                                <div className="flex items-center gap-2">
                                    <Calendar size={14} strokeWidth={2} style={{ color: textMuted }} />
                                    <span
                                        className="font-sans font-medium"
                                        style={{ fontSize: 13, color: textMuted }}
                                    >
                                        {cert.expected}
                                    </span>
                                </div>

                                {/* Status badge — with glow */}
                                <div
                                    className="relative inline-flex items-center gap-2 rounded-full px-3 py-1"
                                    style={{
                                        background: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.05)',
                                        border: `1px solid ${borderColor}`,
                                    }}
                                >
                                    <GlowingEffect
                                        spread={12}
                                        glow={false}
                                        disabled={false}
                                        proximity={24}
                                        inactiveZone={0.01}
                                        borderWidth={1}
                                    />
                                    <div
                                        className="w-1.5 h-1.5 rounded-full"
                                        style={{ background: isDark ? '#F5F5F5' : '#000000' }}
                                    />
                                    <span
                                        className="font-sans font-semibold"
                                        style={{ fontSize: 12, color: textPrimary }}
                                    >
                                        {cert.status}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
