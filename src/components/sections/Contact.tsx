import { motion } from 'framer-motion';
import { Mail, MapPin, ArrowUpRight, Linkedin, Github } from 'lucide-react';
import type { JSX } from 'react';
import { cv } from '@/data/cv';
import { BorderGlow } from '@/components/ui/BorderGlow';


interface ContactProps {
    isDark: boolean;
}

const contactItems = [
    {
        icon: Mail,
        label: 'Email',
        value: cv.contact.email,
        href: `https://mail.google.com/mail/?view=cm&to=${cv.contact.email}`,
        isExternal: true,
    },
    {
        icon: MapPin,
        label: 'Location',
        value: cv.contact.address,
        href: '#',
        isExternal: false,
    },
];

// Social links
const socialItems = [
    {
        icon: Linkedin,
        label: 'LinkedIn',
        value: 'linkedin.com/in/muqeetmir',
        href: 'https://www.linkedin.com/in/muqeetmir/',
        isExternal: true,
    },
    {
        icon: Github,
        label: 'GitHub',
        value: 'github.com/imtryingpromise',
        href: 'https://github.com/imtryingpromise',
        isExternal: true,
    },
];


export function Contact({ isDark }: ContactProps): JSX.Element {
    const bg          = isDark ? '#000000' : '#F0F0F0';
    const textPrimary = isDark ? '#F5F5F5' : '#111111';
    const textMuted   = isDark ? '#B8B8B8' : '#444444';
    const borderColor = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.1)';
    const cardBg      = isDark ? '#0D0D0D' : '#FFFFFF';

    return (
        <section
            id="contact"
            className="w-full"
            style={{ background: bg, paddingTop: 120, paddingBottom: 120 }}
        >
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

                    {/* Left: CTA copy */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                        className="flex flex-col gap-8"
                    >
                        <div className="flex flex-col gap-4">
                            <span className="label-text" style={{ color: textMuted }}>
                                Contact
                            </span>
                            <h2 className="display-heading" style={{ color: textPrimary }}>
                                Get in Touch
                            </h2>
                        </div>

                        <p
                            className="font-sans font-normal"
                            style={{ fontSize: 17, lineHeight: 1.7, color: textMuted }}
                        >
                            I'm always open to connecting — whether it's a cool project idea,
                            an internship opportunity, or just a conversation about tech and AI.
                        </p>

                        <p
                            className="font-sans font-normal"
                            style={{ fontSize: 17, lineHeight: 1.7, color: textMuted }}
                        >
                            Feel free to reach out for academic collaborations,
                            internship opportunities, or any project inquiries.
                        </p>

                        {/* Primary CTA */}
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
                                <a
                                    href={`https://mail.google.com/mail/?view=cm&to=${cv.contact.email}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="relative inline-flex items-center gap-2 font-sans font-semibold rounded-full transition-all duration-300"
                                    style={{
                                        height: 48,
                                        paddingLeft: 24,
                                        paddingRight: 24,
                                        fontSize: 15,
                                        background: isDark ? '#F5F5F5' : '#000000',
                                        color: isDark ? '#000000' : '#FFFFFF',
                                        textDecoration: 'none',
                                    }}
                                    onMouseEnter={(e) => {
                                        (e.currentTarget as HTMLElement).style.transform = 'scale(1.02)';
                                        (e.currentTarget as HTMLElement).style.opacity = '0.9';
                                    }}
                                    onMouseLeave={(e) => {
                                        (e.currentTarget as HTMLElement).style.transform = 'scale(1)';
                                        (e.currentTarget as HTMLElement).style.opacity = '1';
                                    }}
                                >
                                    Send an Email
                                    <ArrowUpRight size={16} strokeWidth={2} />
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Contact cards */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.15, ease: [0.4, 0, 0.2, 1] }}
                        className="flex flex-col gap-4"
                    >
                        {contactItems.map(({ icon: Icon, label, value, href }) => (
                            <a
                                key={label}
                                href={href}
                                className="group relative flex items-center gap-5 p-6 rounded-[20px] transition-all duration-300"
                                style={{
                                    background: cardBg,
                                    border: `1px solid ${borderColor}`,
                                    textDecoration: 'none',
                                    cursor: href === '#' ? 'default' : 'pointer',
                                }}
                                onClick={href === '#' ? (e) => e.preventDefault() : undefined}
                                onMouseEnter={(e) => {
                                    if (href !== '#') {
                                        (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
                                        (e.currentTarget as HTMLElement).style.borderColor = isDark
                                            ? 'rgba(255,255,255,0.15)'
                                            : 'rgba(0,0,0,0.15)';
                                    }
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

                                {/* Icon badge */}
                                <div
                                    className="relative w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300"
                                    style={{
                                        background: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.07)',
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
                                    <Icon size={20} strokeWidth={2} />
                                </div>

                                {/* Text */}
                                <div className="flex flex-col gap-0.5 flex-1 min-w-0">
                                    <span
                                        className="font-sans font-semibold"
                                        style={{
                                            fontSize: 12,
                                            letterSpacing: '0.1em',
                                            textTransform: 'uppercase',
                                            color: textMuted,
                                        }}
                                    >
                                        {label}
                                    </span>
                                    <span
                                        className="font-sans font-medium"
                                        style={{
                                            fontSize: label === 'Location' ? 13 : 15,
                                            color: textPrimary,
                                            lineHeight: 1.4,
                                        }}
                                    >
                                        {value}
                                    </span>
                                </div>

                                {/* Arrow — only for clickable items */}
                                {href !== '#' && (
                                    <ArrowUpRight
                                        size={18}
                                        strokeWidth={2}
                                        style={{ color: textMuted, flexShrink: 0 }}
                                        className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
                                    />
                                )}
                            </a>
                        ))}

                        {/* Social links — LinkedIn & GitHub */}
                        <div className="flex flex-col gap-4 mt-4">
                            <span
                                className="font-sans font-semibold"
                                style={{
                                    fontSize: 12,
                                    letterSpacing: '0.1em',
                                    textTransform: 'uppercase',
                                    color: textMuted,
                                }}
                            >
                                Social
                            </span>
                            <div className="flex flex-wrap gap-3">
                                {socialItems.map(({ icon: Icon, label, href }) => (
                                    <a
                                        key={label}
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group relative flex items-center gap-2 px-5 py-3 rounded-full transition-all duration-300"
                                        style={{
                                            background: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.07)',
                                            border: `1px solid ${borderColor}`,
                                            textDecoration: 'none',
                                        }}
                                        onMouseEnter={(e) => {
                                            (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
                                            (e.currentTarget as HTMLElement).style.borderColor = isDark
                                                ? 'rgba(255,255,255,0.2)'
                                                : 'rgba(0,0,0,0.2)';
                                        }}
                                        onMouseLeave={(e) => {
                                            (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                                            (e.currentTarget as HTMLElement).style.borderColor = borderColor;
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
                                        <Icon size={18} strokeWidth={2} style={{ color: textPrimary }} />
                                        <span
                                            className="font-sans font-medium"
                                            style={{ fontSize: 14, color: textPrimary }}
                                        >
                                            {label}
                                        </span>
                                        <ArrowUpRight
                                            size={14}
                                            strokeWidth={2}
                                            style={{ color: textMuted }}
                                            className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
                                        />
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Availability badge */}
                        <div
                            className="relative flex items-center gap-3 p-5 rounded-[20px] mt-2"
                            style={{
                                background: isDark ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.04)',
                                border: `1px solid ${borderColor}`,
                            }}
                        >
                            <BorderGlow
                                spread={16}
                                glow={false}
                                disabled={false}
                                proximity={32}
                                inactiveZone={0.01}
                                borderWidth={1}
                            />
                            <div
                                className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                                style={{ background: isDark ? '#F5F5F5' : '#000000' }}
                            />
                            <span
                                className="font-sans font-medium"
                                style={{ fontSize: 14, color: textMuted }}
                            >
                                Open to internship and project opportunities
                            </span>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
