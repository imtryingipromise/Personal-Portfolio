import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as RadixTabs from '@radix-ui/react-tabs';
import {
    Gamepad2,
    LayoutGrid,
    Plane,
    BarChart3,
    Database,
    Network,
    ExternalLink,
    ChevronDown,
    ChevronUp,
    CheckCircle2,
    FolderOpen,
} from 'lucide-react';
import { cv } from '@/data/cv';
import { BorderGlow } from '@/components/ui/BorderGlow';
import { WordReveal } from '@/components/ui/WordReveal';
import { LineReveal } from '@/components/ui/LineReveal';

interface ProjectsProps {
    isDark: boolean;
}

/* Split projects: first 2 are featured (have github), rest are "other" */
const featuredProjects = cv.projects.filter((p) => 'featured' in p && p.featured);
const otherProjects    = cv.projects.filter((p) => !('featured' in p && p.featured));

const featuredTabLabels = ['Dream Platformer', 'SmartQuiz'];
const featuredIcons     = [Gamepad2, LayoutGrid];

const otherIcons: Record<string, typeof Plane> = {
    'Airport Simulation System':      Plane,
    'Flight Delay Prediction System': BarChart3,
    'Hotel Booking Management System': Database,
    'Network Administration':          Network,
};

export function Projects({ isDark }: ProjectsProps) {
    const [activeTab, setActiveTab] = useState('0');
    const [expanded, setExpanded]   = useState(false);
    const [showOther, setShowOther] = useState(false);
    const activeIndex = parseInt(activeTab, 10);
    const project     = featuredProjects[activeIndex];
    const Icon        = featuredIcons[activeIndex];

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
    const detailBg     = isDark ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.02)';
    const checkColor   = isDark ? 'rgba(245,245,245,0.4)' : 'rgba(0,0,0,0.35)';

    const handleTabChange = (val: string) => {
        setActiveTab(val);
        setExpanded(false);
    };

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
                    transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                    className="flex flex-col gap-4 mb-6"
                >
                    <motion.span
                        className="label-text"
                        style={{ color: textMuted }}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        Academic Work
                    </motion.span>
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                        <WordReveal
                            text="Projects"
                            className="display-heading"
                            style={{ color: textPrimary }}
                            stagger={0.06}
                        />
                        <WordReveal
                            text="A mix of systems, data, web, and infrastructure work — each one taught me something new about building real software."
                            className="font-sans font-normal max-w-sm"
                            style={{ fontSize: 16, lineHeight: 1.6, color: textMuted }}
                            stagger={0.02}
                            delay={0.15}
                        />
                    </div>
                </motion.div>
                <LineReveal isDark={isDark} className="mb-12" />

                {/* ─── Featured Projects (tabbed) ─── */}
                <RadixTabs.Root value={activeTab} onValueChange={handleTabChange}>

                    {/* Tab trigger list */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
                    >
                        <RadixTabs.List
                            className="flex flex-wrap gap-2 mb-8"
                            aria-label="Featured Projects"
                        >
                            {featuredTabLabels.map((label, i) => {
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
                                    >
                                        <div
                                            className="grid grid-cols-1 lg:grid-cols-2"
                                            style={{ minHeight: 460 }}
                                        >
                                            {/* Left: text content */}
                                            <div
                                                className="flex flex-col justify-center gap-6 p-10 lg:p-14"
                                                style={{ borderRight: `1px solid ${borderColor}` }}
                                            >
                                                {/* Language badge + GitHub indicator */}
                                                <div className="flex items-center gap-2">
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
                                                    <span
                                                        className="inline-flex items-center font-sans font-semibold rounded-full"
                                                        style={{
                                                            fontSize: 10,
                                                            letterSpacing: '0.12em',
                                                            textTransform: 'uppercase',
                                                            height: 28,
                                                            paddingLeft: 12,
                                                            paddingRight: 12,
                                                            background: isDark ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.08)',
                                                            color: textPrimary,
                                                            border: `1px solid ${isDark ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.15)'}`,
                                                        }}
                                                    >
                                                        On GitHub
                                                    </span>
                                                </div>

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

                                                {/* Action buttons */}
                                                <div className="flex flex-wrap items-center gap-3 pt-2">
                                                    <button
                                                        onClick={() => setExpanded(!expanded)}
                                                        className="inline-flex items-center gap-2 font-sans font-semibold rounded-full transition-all duration-300"
                                                        style={{
                                                            height: 40,
                                                            paddingLeft: 20,
                                                            paddingRight: 20,
                                                            fontSize: 13,
                                                            background: isDark ? '#F5F5F5' : '#000000',
                                                            color: isDark ? '#000000' : '#FFFFFF',
                                                            border: 'none',
                                                            cursor: 'pointer',
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
                                                        {expanded ? 'Show Less' : 'Read More'}
                                                        {expanded ? <ChevronUp size={14} strokeWidth={2.5} /> : <ChevronDown size={14} strokeWidth={2.5} />}
                                                    </button>

                                                    {'github' in project && (
                                                        <a
                                                            href={project.github as string}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="inline-flex items-center gap-2 font-sans font-semibold rounded-full transition-all duration-300"
                                                            style={{
                                                                height: 40,
                                                                paddingLeft: 20,
                                                                paddingRight: 20,
                                                                fontSize: 13,
                                                                background: 'transparent',
                                                                color: textMuted,
                                                                border: `1px solid ${borderColor}`,
                                                                textDecoration: 'none',
                                                                cursor: 'pointer',
                                                            }}
                                                            onMouseEnter={(e) => {
                                                                (e.currentTarget as HTMLElement).style.color = textPrimary;
                                                                (e.currentTarget as HTMLElement).style.borderColor = borderHover;
                                                            }}
                                                            onMouseLeave={(e) => {
                                                                (e.currentTarget as HTMLElement).style.color = textMuted;
                                                                (e.currentTarget as HTMLElement).style.borderColor = borderColor;
                                                            }}
                                                        >
                                                            <ExternalLink size={14} strokeWidth={2} />
                                                            View on GitHub
                                                        </a>
                                                    )}
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
                                        </div>

                                        {/* Expandable details section */}
                                        <AnimatePresence>
                                            {expanded && 'details' in project && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: 'auto', opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                                                    style={{ overflow: 'hidden' }}
                                                >
                                                    <div
                                                        style={{
                                                            borderTop: `1px solid ${borderColor}`,
                                                            background: detailBg,
                                                        }}
                                                        className="p-10 lg:p-14"
                                                    >
                                                        <div className="flex flex-col gap-8 max-w-4xl">
                                                            {/* Overview */}
                                                            <div className="flex flex-col gap-3">
                                                                <span
                                                                    className="font-sans font-semibold"
                                                                    style={{
                                                                        fontSize: 12,
                                                                        letterSpacing: '0.12em',
                                                                        textTransform: 'uppercase',
                                                                        color: textMuted,
                                                                    }}
                                                                >
                                                                    Overview
                                                                </span>
                                                                <p
                                                                    className="font-sans font-normal"
                                                                    style={{ fontSize: 15, lineHeight: 1.75, color: textMuted }}
                                                                >
                                                                    {(project as any).details.overview}
                                                                </p>
                                                            </div>

                                                            {/* Key highlights */}
                                                            <div className="flex flex-col gap-4">
                                                                <span
                                                                    className="font-sans font-semibold"
                                                                    style={{
                                                                        fontSize: 12,
                                                                        letterSpacing: '0.12em',
                                                                        textTransform: 'uppercase',
                                                                        color: textMuted,
                                                                    }}
                                                                >
                                                                    Key Highlights
                                                                </span>
                                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                                                    {(project as any).details.highlights.map((item: string, idx: number) => (
                                                                        <div
                                                                            key={idx}
                                                                            className="flex items-start gap-3 p-4 rounded-[14px]"
                                                                            style={{
                                                                                background: isDark ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.04)',
                                                                                border: `1px solid ${borderColor}`,
                                                                            }}
                                                                        >
                                                                            <CheckCircle2
                                                                                size={16}
                                                                                strokeWidth={2}
                                                                                style={{ color: checkColor, flexShrink: 0, marginTop: 2 }}
                                                                            />
                                                                            <span
                                                                                className="font-sans font-normal"
                                                                                style={{ fontSize: 13, lineHeight: 1.6, color: textMuted }}
                                                                            >
                                                                                {item}
                                                                            </span>
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            </div>

                                                            {/* Tech stack */}
                                                            <div className="flex flex-col gap-3">
                                                                <span
                                                                    className="font-sans font-semibold"
                                                                    style={{
                                                                        fontSize: 12,
                                                                        letterSpacing: '0.12em',
                                                                        textTransform: 'uppercase',
                                                                        color: textMuted,
                                                                    }}
                                                                >
                                                                    Tech Stack
                                                                </span>
                                                                <div className="flex flex-wrap gap-2">
                                                                    {(project as any).details.techStack.map((tech: string) => (
                                                                        <span
                                                                            key={tech}
                                                                            className="font-sans font-medium rounded-full"
                                                                            style={{
                                                                                fontSize: 12,
                                                                                height: 30,
                                                                                paddingLeft: 14,
                                                                                paddingRight: 14,
                                                                                display: 'inline-flex',
                                                                                alignItems: 'center',
                                                                                background: isDark ? 'rgba(255,255,255,0.08)' : '#FFFFFF',
                                                                                color: textPrimary,
                                                                                border: `1px solid ${isDark ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.12)'}`,
                                                                            }}
                                                                        >
                                                                            {tech}
                                                                        </span>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>
                    </motion.div>

                    {/* Featured project counter + dots */}
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
                            Project {activeIndex + 1} of {featuredProjects.length}
                        </span>

                        <div className="flex items-center gap-1.5">
                            {featuredProjects.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => handleTabChange(String(i))}
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

                {/* ─── Other Projects toggle + grid ─── */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.35, ease: [0.4, 0, 0.2, 1] }}
                    className="mt-14 flex flex-col items-center"
                >
                    {/* Toggle button */}
                    <div
                        className="relative rounded-full"
                        style={{ border: `1px solid ${borderColor}` }}
                    >
                        <BorderGlow
                            spread={24}
                            glow={false}
                            disabled={false}
                            proximity={48}
                            inactiveZone={0.01}
                            borderWidth={1.5}
                        />
                        <button
                            onClick={() => setShowOther(!showOther)}
                            className="relative inline-flex items-center gap-2 font-sans font-semibold rounded-full transition-all duration-300"
                            style={{
                                height: 44,
                                paddingLeft: 24,
                                paddingRight: 24,
                                fontSize: 14,
                                background: 'transparent',
                                color: textMuted,
                                border: 'none',
                                cursor: 'pointer',
                            }}
                            onMouseEnter={(e) => {
                                (e.currentTarget as HTMLElement).style.color = textPrimary;
                            }}
                            onMouseLeave={(e) => {
                                (e.currentTarget as HTMLElement).style.color = textMuted;
                            }}
                        >
                            <FolderOpen size={16} strokeWidth={2} />
                            {showOther ? 'Hide Other Projects' : `Other Projects (${otherProjects.length})`}
                            {showOther ? <ChevronUp size={14} strokeWidth={2.5} /> : <ChevronDown size={14} strokeWidth={2.5} />}
                        </button>
                    </div>

                    {/* Other projects grid */}
                    <AnimatePresence>
                        {showOther && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
                                style={{ overflow: 'hidden', width: '100%' }}
                            >
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-8">
                                    {otherProjects.map((proj, idx) => {
                                        const OtherIcon = otherIcons[proj.name] || Database;
                                        return (
                                            <motion.div
                                                key={proj.name}
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{
                                                    duration: 0.4,
                                                    delay: idx * 0.08,
                                                    ease: [0.4, 0, 0.2, 1],
                                                }}
                                                className="relative rounded-[20px] p-6 flex flex-col gap-4 transition-all duration-300"
                                                style={{
                                                    background: cardBg,
                                                    border: `1px solid ${borderColor}`,
                                                }}
                                                onMouseEnter={(e) => {
                                                    (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
                                                    (e.currentTarget as HTMLElement).style.borderColor = borderHover;
                                                }}
                                                onMouseLeave={(e) => {
                                                    (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                                                    (e.currentTarget as HTMLElement).style.borderColor = borderColor;
                                                }}
                                            >
                                                <BorderGlow
                                                    spread={28}
                                                    glow={false}
                                                    disabled={false}
                                                    proximity={48}
                                                    inactiveZone={0.01}
                                                    borderWidth={1.5}
                                                />

                                                {/* Icon + language row */}
                                                <div className="flex items-center justify-between">
                                                    <div
                                                        className="w-10 h-10 rounded-xl flex items-center justify-center"
                                                        style={{
                                                            background: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.05)',
                                                        }}
                                                    >
                                                        <OtherIcon
                                                            size={20}
                                                            strokeWidth={1.5}
                                                            style={{ color: isDark ? 'rgba(245,245,245,0.5)' : 'rgba(0,0,0,0.35)' }}
                                                        />
                                                    </div>
                                                    <span
                                                        className="font-sans font-semibold rounded-full"
                                                        style={{
                                                            fontSize: 11,
                                                            letterSpacing: '0.1em',
                                                            textTransform: 'uppercase',
                                                            height: 26,
                                                            paddingLeft: 10,
                                                            paddingRight: 10,
                                                            display: 'inline-flex',
                                                            alignItems: 'center',
                                                            background: tagBg,
                                                            color: textMuted,
                                                            border: `1px solid ${borderColor}`,
                                                        }}
                                                    >
                                                        {proj.language}
                                                    </span>
                                                </div>

                                                {/* Title */}
                                                <h4
                                                    className="font-sans font-bold"
                                                    style={{ fontSize: 18, color: textPrimary, lineHeight: 1.3 }}
                                                >
                                                    {proj.name}
                                                </h4>

                                                {/* Description */}
                                                <p
                                                    className="font-sans font-normal"
                                                    style={{ fontSize: 14, lineHeight: 1.65, color: textMuted }}
                                                >
                                                    {proj.description}
                                                </p>

                                                {/* Tags */}
                                                <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
                                                    {proj.tags.map((tag) => (
                                                        <span
                                                            key={tag}
                                                            className="font-sans font-medium rounded-full"
                                                            style={{
                                                                fontSize: 11,
                                                                height: 24,
                                                                paddingLeft: 10,
                                                                paddingRight: 10,
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
                                            </motion.div>
                                        );
                                    })}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}
