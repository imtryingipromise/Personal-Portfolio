    import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import type { JSX } from 'react';
import { cv } from '@/data/cv';
import { BorderGlow } from '@/components/ui/BorderGlow';
import { GradientBars } from '@/components/ui/gradient-bars-background';


interface EducationProps {

    isDark: boolean;
}

export function Education({ isDark }: EducationProps): JSX.Element {
    const bg          = isDark ? '#0A0A0A' : '#E8E8E8';
    const textPrimary = isDark ? '#F5F5F5' : '#111111';
    const textMuted   = isDark ? '#B8B8B8' : '#444444';
    const borderColor = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.1)';
    const cardBg      = isDark ? '#0D0D0D' : '#FFFFFF';


    return (
        <section
            id="education"
            className="w-full relative overflow-hidden"
            style={{ background: isDark ? '#0A0A0A' : '#E8E8E8', paddingTop: 120, paddingBottom: 120 }}
        >
            {/* Gradient Bars Background */}
            <GradientBars
                numBars={11}
                gradientFrom={isDark ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0, 0, 0, 0.06)'}
                gradientTo="transparent"
                animationDuration={3}
                className="opacity-100"
            />


            
            <div className="container relative z-10">





                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                    className="flex flex-col gap-4 mb-14"
                >

                    <span className="label-text" style={{ color: textMuted }}>
                        Academic Background
                    </span>
                    <h2 className="display-heading" style={{ color: textPrimary }}>
                        Education
                    </h2>
                </motion.div>

                {/* Education cards */}
                <div className="flex flex-col gap-6">
                    {cv.education.map((edu, i) => (
                        <motion.div
                            key={edu.institution}
                            initial={{ opacity: 0, y: 32 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.4, 0, 0.2, 1] }}
                            className="relative overflow-hidden rounded-[28px] p-8 md:p-10 backdrop-blur-md"
                            style={{
                                background: isDark ? 'rgba(13, 13, 13, 0.6)' : 'rgba(255, 255, 255, 0.6)',
                                border: `1px solid ${borderColor}`,
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

                            {/* Accent bar */}
                            <div
                                className="absolute top-0 left-0 right-0 h-px rounded-t-[28px]"
                                style={{
                                    background: isDark ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.15)',
                                }}
                            />

                            <div className="flex flex-col md:flex-row md:items-start gap-8">
                                <div
                                    className="relative w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-300"
                                    style={{
                                        background: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)',
                                        border: `1px solid ${borderColor}`,
                                    }}
                                    onMouseEnter={(e) => {
                                        (e.currentTarget as HTMLElement).style.transform = 'scale(1.05)';
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
                                        spread={20}
                                        glow={false}
                                        disabled={false}
                                        proximity={36}
                                        inactiveZone={0.01}
                                        borderWidth={1}
                                    />
                                    <GraduationCap
                                        size={28}
                                        strokeWidth={1.8}
                                        style={{ color: isDark ? '#F5F5F5' : '#000000' }}
                                    />
                                </div>

                                {/* Content */}
                                <div className="flex flex-col gap-4 flex-1">
                                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
                                        <div className="flex flex-col gap-1">
                                            <h3
                                                className="font-sans font-extrabold"
                                                style={{
                                                    fontSize: 'clamp(20px, 2.5vw, 26px)',
                                                    letterSpacing: '-0.01em',
                                                    color: textPrimary,
                                                    lineHeight: 1.2,
                                                }}
                                            >
                                                {edu.degree}
                                            </h3>
                                            <div className="flex items-center gap-2 mt-1">
                                                <MapPin size={14} strokeWidth={2} style={{ color: textMuted, flexShrink: 0 }} />
                                                <span
                                                    className="font-sans font-semibold"
                                                    style={{ fontSize: 16, color: textMuted }}
                                                >
                                                    {edu.institution}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Duration badge */}
                                        <div
                                            className="relative inline-flex items-center gap-2 rounded-full px-4 py-2 flex-shrink-0"
                                            style={{
                                                background: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.05)',
                                                border: `1px solid ${borderColor}`,
                                            }}
                                        >
                                            <BorderGlow
                                                spread={16}
                                                glow={false}
                                                disabled={false}
                                                proximity={28}
                                                inactiveZone={0.01}
                                                borderWidth={1}
                                            />
                                            <Calendar size={13} strokeWidth={2} style={{ color: textMuted }} />
                                            <span
                                                className="font-sans font-semibold"
                                                style={{ fontSize: 13, color: textPrimary }}
                                            >
                                                {edu.duration}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Note badge */}
                                    <div
                                        className="relative inline-flex items-center gap-2 rounded-full px-4 py-1.5 self-start"
                                        style={{
                                            background: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.05)',
                                            border: `1px solid ${borderColor}`,
                                        }}
                                    >
                                        <BorderGlow
                                            spread={12}
                                            glow={false}
                                            disabled={false}
                                            proximity={24}
                                            inactiveZone={0.01}
                                            borderWidth={1}
                                        />
                                        <span
                                            className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                                            style={{ background: isDark ? '#F5F5F5' : '#000000' }}
                                        />
                                        <span
                                            className="font-sans font-medium"
                                            style={{ fontSize: 13, color: textMuted }}
                                        >
                                            {edu.note}
                                        </span>
                                    </div>

                                    {/* Divider */}
                                    <div
                                        className="w-full h-px mt-2"
                                        style={{ background: borderColor }}
                                    />

                                    {/* Focus areas */}
                                    <div className="flex flex-col gap-3">
                                        <span className="label-text" style={{ color: textMuted }}>
                                            Focus Areas
                                        </span>
                                        <div className="flex flex-wrap gap-2">
                                            {cv.skills.focusAreas.map((subject) => (
                                                <span
                                                    key={subject}
                                                    className="relative font-sans font-medium rounded-full px-3 py-1 transition-all duration-300"
                                                    style={{
                                                        fontSize: 13,
                                                        background: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.05)',
                                                        color: textMuted,
                                                        border: `1px solid ${borderColor}`,
                                                    }}
                                                    onMouseEnter={(e) => {
                                                        (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px) scale(1.02)';
                                                        (e.currentTarget as HTMLElement).style.borderColor = isDark
                                                            ? 'rgba(255,255,255,0.15)'
                                                            : 'rgba(0,0,0,0.15)';
                                                    }}
                                                    onMouseLeave={(e) => {
                                                        (e.currentTarget as HTMLElement).style.transform = 'translateY(0) scale(1)';
                                                        (e.currentTarget as HTMLElement).style.borderColor = borderColor;
                                                    }}
                                                >
                                                    <BorderGlow
                                                        spread={12}
                                                        glow={false}
                                                        disabled={false}
                                                        proximity={24}
                                                        inactiveZone={0.01}
                                                        borderWidth={1}
                                                    />
                                                    {subject}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
