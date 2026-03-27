import { motion } from 'framer-motion';
import { Code2, Wrench, Cpu, Users, Terminal, BookOpen } from 'lucide-react';
import type { JSX } from 'react';
import { cv } from '@/data/cv';
import { BorderGlow } from '@/components/ui/BorderGlow';
import { WordReveal } from '@/components/ui/WordReveal';
import { LineReveal } from '@/components/ui/LineReveal';

interface SkillsProps {
    isDark: boolean;
}


const skillCategories = [
    {
        icon: Code2,
        title: 'Programming Languages',
        description: 'The languages I reach for when solving problems — from low-level C++ to high-level Python.',
        tags: cv.skills.programmingLanguages,
    },
    {
        icon: Terminal,
        title: 'Web Development',
        description: 'Building interfaces that look good and work well, using the fundamentals that matter.',
        tags: cv.skills.webDevelopment,
    },
    {
        icon: Cpu,
        title: 'Core Knowledge',
        description: 'The CS foundations everything else is built on — how I think about and structure code.',
        tags: cv.skills.technicalSkills,
    },
    {
        icon: Wrench,
        title: 'Tools & Technologies',
        description: 'My go-to toolkit for writing, testing, and shipping software efficiently.',
        tags: cv.skills.tools,
    },
    {
        icon: BookOpen,
        title: 'Systems & Administration',
        description: 'Hands-on experience setting up and securing real server environments from scratch.',
        tags: cv.skills.systemsAdmin,
    },
    {
        icon: Users,
        title: 'Soft Skills',
        description: 'The human side of engineering — collaboration, leadership, and clear communication.',
        tags: cv.skills.softSkills,
    },
];

export function Skills({ isDark }: SkillsProps): JSX.Element {
    const bg          = isDark ? '#000000' : '#F0F0F0';
    const textPrimary = isDark ? '#F5F5F5' : '#111111';
    const textMuted   = isDark ? '#B8B8B8' : '#444444';
    const borderColor = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.1)';
    const cardBg      = isDark ? '#0D0D0D' : '#FFFFFF';
    const tagBg       = isDark ? 'rgba(255,255,255,0.06)' : '#F0F0F0';
    const tagColor    = isDark ? 'rgba(245,245,245,0.6)' : '#333333';

    return (
        <section
            id="skills"
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
                        Competencies
                    </motion.span>
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                        <WordReveal
                            text="Skills"
                            className="display-heading"
                            style={{ color: textPrimary }}
                            stagger={0.06}
                        />
                        <WordReveal
                            text={`${cv.skills.programmingLanguages.length} programming languages, ${cv.skills.tools.length} tools, and a range of technical and soft skills developed through academic projects.`}
                            className="font-sans font-normal max-w-sm"
                            style={{ fontSize: 16, lineHeight: 1.6, color: textMuted }}
                            stagger={0.02}
                            delay={0.15}
                        />
                    </div>
                </motion.div>
                <LineReveal isDark={isDark} className="mb-12" />

                {/* Skill card grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-60px' }}
                    variants={{
                        hidden: {},
                        visible: { transition: { staggerChildren: 0.1 } },
                    }}
                >
                    {skillCategories.map((category) => {
                        const Icon = category.icon;
                        return (
                            <motion.div
                                key={category.title}
                                variants={{
                                    hidden:  { opacity: 0, y: 40, filter: 'blur(10px)', scale: 0.95 },
                                    visible: { opacity: 1, y: 0, filter: 'blur(0px)', scale: 1, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] } },
                                }}
                                className="relative group flex flex-col gap-5 p-7 rounded-[28px] transition-all duration-300"
                                style={{
                                    background: cardBg,
                                    border: `1px solid ${borderColor}`,
                                }}
                                onMouseEnter={(e) => {
                                    (e.currentTarget as HTMLElement).style.transform = 'translateY(-6px) scale(1.01)';
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
                                    spread={32}
                                    glow={false}
                                    disabled={false}
                                    proximity={56}
                                    inactiveZone={0.01}
                                    borderWidth={1.5}
                                />

                                {/* Icon */}
                                <div
                                    className="relative w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300"
                                    style={{
                                        background: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)',
                                        color: isDark ? '#F5F5F5' : '#000000',
                                    }}
                                    onMouseEnter={(e) => {
                                        (e.currentTarget as HTMLElement).style.transform = 'scale(1.08)';
                                    }}
                                    onMouseLeave={(e) => {
                                        (e.currentTarget as HTMLElement).style.transform = 'scale(1)';
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
                                    <Icon size={20} strokeWidth={1.8} />
                                </div>

                                {/* Text */}
                                <div className="flex flex-col gap-2">
                                    <h3
                                        className="font-sans font-bold"
                                        style={{ fontSize: 17, letterSpacing: '-0.01em', color: textPrimary }}
                                    >
                                        {category.title}
                                    </h3>
                                    <p
                                        className="font-sans font-normal"
                                        style={{ fontSize: 13, lineHeight: 1.65, color: textMuted }}
                                    >
                                        {category.description}
                                    </p>
                                </div>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {category.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="font-sans font-medium rounded-full px-3 py-1"
                                            style={{
                                                fontSize: 12,
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
                </motion.div>
            </div>
        </section>
    );
}
