import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X, Download } from 'lucide-react';
import { cv } from '@/data/cv';

interface NavbarProps {
    isDark: boolean;
    onToggle: () => void;
}

const navLinks = [
    { label: 'About',            id: 'about'          },
    { label: 'Skills',           id: 'skills'         },
    { label: 'Projects',         id: 'projects'       },
    { label: 'Education',        id: 'education'      },
    { label: 'Certifications',   id: 'certifications' },
    { label: 'Contact',          id: 'contact'        },
];

export function Navbar({ isDark, onToggle }: NavbarProps) {
    const [scrolled, setScrolled]     = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const scrollTo = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        setMobileOpen(false);
    };

    const bg          = isDark ? '#000000' : '#F0F0F0';
    const borderColor = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.1)';
    const textPrimary = isDark ? '#F5F5F5' : '#111111';
    const textMuted   = isDark ? 'rgba(245,245,245,0.5)' : 'rgba(0,0,0,0.55)';

    return (
        <>
            <header
                className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
                style={{
                    background: scrolled
                        ? isDark ? 'rgba(0,0,0,0.88)' : 'rgba(240,240,240,0.88)'
                        : bg,
                    borderBottom: `1px solid ${scrolled ? borderColor : 'transparent'}`,
                    backdropFilter: scrolled ? 'blur(16px)' : 'none',
                    WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
                }}
            >
                <div className="coda-container">
                    <div className="flex h-16 items-center justify-between gap-8">

                        {/* ── Logo ── */}
                        <button
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            className="flex-shrink-0 flex items-center gap-2.5 group"
                        >
                            {/* Logo mark */}
                            <div
                                className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                                style={{ background: isDark ? '#F5F5F5' : '#000000' }}
                            >
                                <span
                                    className="font-sans font-black text-[11px] leading-none"
                                    style={{ color: isDark ? '#000000' : '#FFFFFF' }}
                                >
                                    {cv.initials}
                                </span>
                            </div>
                            <span
                                className="font-sans font-bold text-[15px] tracking-[-0.01em]"
                                style={{ color: textPrimary }}
                            >
                                {cv.shortName}
                            </span>
                        </button>

                        {/* ── Desktop center nav ── */}
                        <nav className="hidden lg:flex items-center gap-1 flex-1 justify-center">
                            {navLinks.map(({ label, id }) => (
                                <button
                                    key={id}
                                    onClick={() => scrollTo(id)}
                                    className="font-sans font-medium text-[14px] px-4 py-2 rounded-full transition-all duration-200"
                                    style={{ color: textMuted }}
                                    onMouseEnter={(e) => {
                                        (e.currentTarget as HTMLElement).style.color = textPrimary;
                                        (e.currentTarget as HTMLElement).style.background = isDark
                                            ? 'rgba(255,255,255,0.06)'
                                            : 'rgba(0,0,0,0.05)';
                                    }}
                                    onMouseLeave={(e) => {
                                        (e.currentTarget as HTMLElement).style.color = textMuted;
                                        (e.currentTarget as HTMLElement).style.background = 'transparent';
                                    }}
                                >
                                    {label}
                                </button>
                            ))}
                        </nav>

                        {/* ── Right actions ── */}
                        <div className="flex items-center gap-3 flex-shrink-0">
                            {/* Theme toggle */}
                            <button
                                onClick={onToggle}
                                aria-label="Toggle theme"
                                className="hidden md:flex items-center justify-center w-9 h-9 rounded-full transition-all duration-200"
                                style={{
                                    color: textMuted,
                                    background: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.05)',
                                }}
                                onMouseEnter={(e) => {
                                    (e.currentTarget as HTMLElement).style.color = textPrimary;
                                }}
                                onMouseLeave={(e) => {
                                    (e.currentTarget as HTMLElement).style.color = textMuted;
                                }}
                            >
                                {isDark ? <Sun size={15} /> : <Moon size={15} />}
                            </button>

                            {/* Download CV pill CTA */}
                            <a
                                href={`${import.meta.env.BASE_URL}cv.pdf`}
                                download
                                className="hidden md:flex items-center gap-2 font-sans font-semibold text-[14px] h-9 px-5 rounded-full transition-all duration-300"
                                style={{
                                    background: isDark ? '#F5F5F5' : '#000000',
                                    color:      isDark ? '#000000' : '#FFFFFF',
                                    textDecoration: 'none',
                                }}
                                onMouseEnter={(e) => {
                                    (e.currentTarget as HTMLElement).style.opacity = '0.88';
                                    (e.currentTarget as HTMLElement).style.transform = 'scale(1.02)';
                                }}
                                onMouseLeave={(e) => {
                                    (e.currentTarget as HTMLElement).style.opacity = '1';
                                    (e.currentTarget as HTMLElement).style.transform = 'scale(1)';
                                }}
                            >
                                <Download size={13} strokeWidth={2.5} />
                                Download CV
                            </a>

                            {/* Mobile menu toggle */}
                            <button
                                onClick={() => setMobileOpen((v) => !v)}
                                className="lg:hidden flex items-center justify-center w-9 h-9 rounded-full"
                                style={{
                                    color: textPrimary,
                                    background: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.05)',
                                }}
                                aria-label="Toggle menu"
                            >
                                {mobileOpen ? <X size={16} /> : <Menu size={16} />}
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* ── Mobile menu ── */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
                        className="fixed top-16 left-0 right-0 z-40 flex flex-col"
                        style={{
                            background: isDark ? '#0A0A0A' : '#E8E8E8',
                            borderBottom: `1px solid ${borderColor}`,
                        }}
                    >
                        <div className="coda-container py-4 flex flex-col gap-1">
                            {navLinks.map(({ label, id }) => (
                                <button
                                    key={id}
                                    onClick={() => scrollTo(id)}
                                    className="text-left font-sans font-medium text-[15px] py-3 px-4 rounded-xl transition-colors duration-200"
                                    style={{ color: textMuted }}
                                    onMouseEnter={(e) => {
                                        (e.currentTarget as HTMLElement).style.color = textPrimary;
                                        (e.currentTarget as HTMLElement).style.background = isDark
                                            ? 'rgba(255,255,255,0.05)'
                                            : 'rgba(0,0,0,0.04)';
                                    }}
                                    onMouseLeave={(e) => {
                                        (e.currentTarget as HTMLElement).style.color = textMuted;
                                        (e.currentTarget as HTMLElement).style.background = 'transparent';
                                    }}
                                >
                                    {label}
                                </button>
                            ))}

                            <div className="flex items-center gap-3 pt-3 pb-1 px-4">
                                <a
                                    href={`${import.meta.env.BASE_URL}cv.pdf`}
                                    download
                                    className="flex-1 flex items-center justify-center gap-2 font-sans font-semibold text-[14px] h-11 rounded-full transition-all duration-200"
                                    style={{
                                        background: isDark ? '#F5F5F5' : '#000000',
                                        color:      isDark ? '#000000' : '#FFFFFF',
                                        textDecoration: 'none',
                                    }}
                                >
                                    <Download size={14} strokeWidth={2.5} />
                                    Download CV
                                </a>
                                <button
                                    onClick={onToggle}
                                    className="flex items-center justify-center w-11 h-11 rounded-full"
                                    style={{
                                        color: textMuted,
                                        background: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.05)',
                                    }}
                                >
                                    {isDark ? <Sun size={15} /> : <Moon size={15} />}
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
