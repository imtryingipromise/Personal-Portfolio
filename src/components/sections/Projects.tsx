import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as RadixTabs from '@radix-ui/react-tabs';
import {
    Plane,
    BarChart3,
    Gamepad2,
    FileQuestion,
    Database,
    Network,
} from 'lucide-react';
import { cv } from '@/data/cv';
import { BorderGlow } from '@/components/ui/BorderGlow';

interface ProjectsProps {
    isDark: boolean;
}

const tabLabels = [
    'Airport Sim',
    'Flight Prediction',
    'Dream Platformer',
    'Quiz System',
    'Booking DB',
    'Network Admin',
];

const projectIcons = [
    Plane,
    BarChart3,
    Gamepad2,
    FileQuestion,
    Database,
    Network,
];

export function Projects({ isDark }: ProjectsProps) {
    const [activeTab, setActiveTab] = useState('0');
    const activeIndex = parseInt(activeTab, 10);
    const project     = cv.projects[activeIndex];
    const Icon        = projectIcons[activeIndex];

    const bg           = isDark ? '#000000' : '#F0F0F0';
    const cardBg       = isDark ? '#0A0A0A'  : '#FFFFFF';
    const visualBg     = isDark ? '#0D0D0D'  : '#E8E8E8';
    const iconCardBg   = isDark ? '#141414'  : '#D8D8D8';
    const textPrimary  = isDark ? '#F5F5F5'  : '#111111';
    const textMuted    = isDark ? '#B8B8B8'  : '#444444';
    const borderColor  = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.1)';
    const borderHover  = isDark ? 'rgba(255,255,255,0.18)' : 'rgba(0,0,0,0.22)';
    const tagBg        = isDark ? 'rgba(255,255,255,0.08)' : '#F0F0F0';
    const tagColor     = isDark ? 'rgba(245,245,245,0.65)' : '#333333';
    const activeBg     = isDark ? '#F5F5F5'  : '#111111';
    const activeText   = isDark ? '#000000'  : '#FFFFFF';
    const inactiveText = isDark ? 'rgba(245,245,245,0.45)' : 'rgba(0,0,0,0.5)';

    return (
        <section
            id="projects"
            className="w-full"
            style={{ background: bg, paddingTop: 120, paddingBottom: 120 }}
        >
            <div className="container">

                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                    className="flex flex-col gap-4 mb-12"
                >
                    <span className="label-text" style={{ color: textMuted }}>
                        Academic Work
                    </span>
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                        <h2 className="display-heading" style={{ color: textPrimary }}>
                            Projects
                        </h2>
                        <p
                            className="font-sans font-normal max-w-sm"
                            style={{ fontSize: 16, lineHeight: 1.6, color: textMuted }}
                        >
                            A mix of systems, data, web, and infrastructure work —
                            each one taught me something new about building real software.
                        </p>
                    </div>
                </motion.div>

                {/* Tabs */}
                <RadixTabs.Root value={activeTab} onValueChange={setActiveTab}>

                    {/* Tab trigger list */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
                    >
                        <RadixTabs.List
                            className="flex flex-wrap gap-2 mb-8"
                            aria-label="Projects"
                        >
                            {tabLabels.map((label, i) => {
                                const isActive = activeTab === String(i);
                                return (
                                    <div
                                        key={i}
                                        className="relative rounded-full"
                                        style={{
                                            border: `1px solid ${isActive ? activeBg : borderColor}`,
                                            transition: 'border-color 0.25s cubic-bezier(0.4,0,0.2,1)',
                                        }}
                                        onMouseEnter={(e) => {
                                            if (!isActive) {
                                                (e.currentTarget as HTMLElement).style.borderColor = borderHover;
                                            }
                                        }}
                                        onMouseLeave={(e) => {
                                            if (!isActive) {
                                                (e.currentTarget as HTMLElement).style.borderColor = borderColor;
                                            }
                                        }}
                                    >
                                        {!isActive && (
                                            <BorderGlow
                                                spread={24}
                                                glow={false}
                                                disabled={false}
                                                proximity={52}
                                                inactiveZone={0.01}
                                                borderWidth={1.5}
                                            />
                                        )}
                                        <RadixTabs.Trigger
                                            value={String(i)}
                                            className="relative font-sans font-semibold rounded-full outline-none cursor-pointer select-none"
                                            style={{
                                                fontSize: 13,
                                                height: 36,
                                                paddingLeft: 18,
                                                paddingRight: 18,
                                                display: 'flex',
                                                alignItems: 'center',
                                                background: isActive ? activeBg : 'transparent',
                                                color: isActive ? activeText : inactiveText,
                                                border: 'none',
                                                transition: 'background 0.25s cubic-bezier(0.4,0,0.2,1), color 0.25s cubic-bezier(0.4,0,0.2,1)',
                                            }}
                                            onMouseEnter={(e) => {
                                                if (!isActive) {
                                                    (e.currentTarget as HTMLElement).style.color = textPrimary;
                                                }
                                            }}
                                            onMouseLeave={(e) => {
                                                if (!isActive) {
                                                    (e.currentTarget as HTMLElement).style.color = inactiveText;
                                                }
                                            }}
                                        >
                                            {label}
                                        </RadixTabs.Trigger>
                                    </div>
                                );
                            })}
                        </RadixTabs.List>
                    </motion.div>

                    {/* Content panel */}
                    <motion.div
                        initial={{ opacity: 0, y: 32 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
                    >
                        <div
                            className="relative rounded-[28px]"
                            style={{ border: `1px solid ${borderColor}` }}
                        >
                            <BorderGlow
                                spread={48}
                                glow={false}
                                disabled={false}
                                proximity={80}
                                inactiveZone={0.01}
                                borderWidth={2}
                            />

                            <div
                                className="rounded-[27px] overflow-hidden"
                                style={{ background: cardBg }}
                            >
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeTab}
                                        initial={{ opacity: 0, y: 14 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -14 }}
                                        transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                                        className="grid grid-cols-1 lg:grid-cols-2"
                                        style={{ minHeight: 460 }}
                                    >
                                        {/* Left: text content */}
                                        <div
                                            className="flex flex-col justify-center gap-6 p-10 lg:p-14"
                                            style={{ borderRight: `1px solid ${borderColor}` }}
                                        >
                                            {/* Language badge */}
                                            <span
                                                className="inline-flex items-center self-start font-sans font-semibold rounded-full"
                                                style={{
                                                    fontSize: 11,
                                                    letterSpacing: '0.12em',
                                                    textTransform: 'uppercase',
                                                    height: 28,
                                                    paddingLeft: 12,
                                                    paddingRight: 12,
                                                    background: tagBg,
                                                    color: textMuted,
                                                    border: `1px solid ${borderColor}`,
                                                }}
                                            >
                                                {project.language}
                                            </span>

                                            {/* Project name */}
                                            <h3
                                                className="font-sans font-extrabold leading-tight"
                                                style={{
                                                    fontSize: 'clamp(26px, 3.5vw, 42px)',
                                                    letterSpacing: '-0.02em',
                                                    color: textPrimary,
                                                }}
                                            >
                                                {project.name}
                                            </h3>

                                            {/* Description */}
                                            <p
                                                className="font-sans font-normal"
                                                style={{
                                                    fontSize: 16,
                                                    lineHeight: 1.75,
                                                    color: textMuted,
                                                    maxWidth: 420,
                                                }}
                                            >
                                                {project.description}
                                            </p>

                                            {/* Tech tags */}
                                            <div className="flex flex-wrap gap-2 pt-2">
                                                {project.tags.map((tag) => (
                                                    <span
                                                        key={tag}
                                                        className="font-sans font-medium rounded-full"
                                                        style={{
                                                            fontSize: 12,
                                                            height: 28,
                                                            paddingLeft: 12,
                                                            paddingRight: 12,
                                                            display: 'inline-flex',
                                                            alignItems: 'center',
                                                            background: tagBg,
                                                            color: tagColor,
                                                            border: `1px solid ${borderColor}`,
                                                        }}
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Right: visual */}
                                        <div
                                            className="flex items-center justify-center p-10 lg:p-14"
                                            style={{ background: visualBg }}
                                        >
                                            <div
                                                className="relative rounded-[20px] w-full"
                                                style={{
                                                    border: `1px solid ${borderColor}`,
                                                    maxWidth: 300,
                                                    aspectRatio: '1 / 1',
                                                    transition: 'border-color 0.3s cubic-bezier(0.4,0,0.2,1), transform 0.3s cubic-bezier(0.4,0,0.2,1)',
                                                }}
                                                onMouseEnter={(e) => {
                                                    (e.currentTarget as HTMLElement).style.borderColor = borderHover;
                                                    (e.currentTarget as HTMLElement).style.transform = 'translateY(-6px) scale(1.02)';
                                                }}
                                                onMouseLeave={(e) => {
                                                    (e.currentTarget as HTMLElement).style.borderColor = borderColor;
                                                    (e.currentTarget as HTMLElement).style.transform = 'translateY(0) scale(1)';
                                                }}
                                            >
                                                <BorderGlow
                                                    spread={32}
                                                    glow={false}
                                                    disabled={false}
                                                    proximity={56}
                                                    inactiveZone={0.01}
                                                    borderWidth={2}
                                                />

                                                <div
                                                    className="absolute inset-0 rounded-[19px] flex items-center justify-center overflow-hidden"
                                                    style={{ background: iconCardBg }}
                                                >
                                                    <div
                                                        aria-hidden="true"
                                                        className="absolute inset-0 pointer-events-none"
                                                        style={{
                                                            background: isDark
                                                                ? 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.06) 0%, transparent 65%)'
                                                                : 'radial-gradient(circle at 50% 50%, rgba(0,0,0,0.04) 0%, transparent 65%)',
                                                        }}
                                                    />
                                                    <Icon
                                                        size={88}
                                                        strokeWidth={1.1}
                                                        style={{
                                                            color: isDark
                                                                ? 'rgba(245,245,245,0.5)'
                                                                : 'rgba(0,0,0,0.3)',
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>
                    </motion.div>

                    {/* Project counter + dot indicators */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.3 }}
                        className="flex items-center justify-between mt-5 px-1"
                    >
                        <span
                            className="font-sans font-normal"
                            style={{ fontSize: 13, color: textMuted }}
                        >
                            Project {activeIndex + 1} of {cv.projects.length}
                        </span>

                        <div className="flex items-center gap-1.5">
                            {cv.projects.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setActiveTab(String(i))}
                                    aria-label={`Go to project ${i + 1}`}
                                    className="rounded-full"
                                    style={{
                                        width:  i === activeIndex ? 20 : 6,
                                        height: 6,
                                        background: i === activeIndex
                                            ? textPrimary
                                            : isDark ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.15)',
                                        border: 'none',
                                        cursor: 'pointer',
                                        padding: 0,
                                        transition: 'width 0.3s cubic-bezier(0.4,0,0.2,1), background 0.3s cubic-bezier(0.4,0,0.2,1)',
                                    }}
                                />
                            ))}
                        </div>
                    </motion.div>
                </RadixTabs.Root>
            </div>
        </section>
    );
}
