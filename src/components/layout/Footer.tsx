import { cv } from '@/data/cv';

interface FooterProps {
    isDark: boolean;
}

const footerNav = [
    {
        heading: 'Portfolio',
        links: [
            { label: 'About',          id: 'about'          },
            { label: 'Skills',         id: 'skills'         },
            { label: 'Projects',       id: 'projects'       },
        ],
    },
    {
        heading: 'Academic',
        links: [
            { label: 'Education',      id: 'education'      },
            { label: 'Certifications', id: 'certifications' },
        ],
    },
    {
        heading: 'Contact',
        links: [
            { label: 'Get in Touch',   id: 'contact'        },
        ],
    },
];

export function Footer({ isDark }: FooterProps) {
    const bg          = isDark ? '#000000' : '#E8E8E8';
    const borderColor = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.1)';
    const textPrimary = isDark ? '#F5F5F5' : '#111111';
    const textMuted   = isDark ? '#B8B8B8' : '#444444';

    const scrollTo = (id: string) =>
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

    return (
        <footer style={{ background: bg, borderTop: `1px solid ${borderColor}` }}>
            <div className="container py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

                    {/* Brand column */}
                    <div className="flex flex-col gap-5">
                        {/* Logo */}
                        <button
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            className="flex items-center gap-2.5 w-fit"
                            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                        >
                            <div
                                className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                                style={{
                                    background: isDark ? '#F5F5F5' : '#000000',
                                }}
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

                        {/* Tagline */}
                        <p
                            className="font-sans font-normal text-[14px] leading-relaxed max-w-[200px]"
                            style={{ color: textMuted }}
                        >
                            {cv.title}
                        </p>

                        {/* Email */}
                        <a
                            href={/Android|iPhone|iPad|iPod/i.test(typeof navigator !== 'undefined' ? navigator.userAgent : '') ? `mailto:${cv.contact.email}` : `https://mail.google.com/mail/?view=cm&to=${cv.contact.email}`} target="_blank" rel="noopener noreferrer"
                            className="font-sans font-medium text-[13px] transition-colors duration-200 break-all"
                            style={{ color: textMuted, textDecoration: 'none' }}
                            onMouseEnter={(e) => {
                                (e.currentTarget as HTMLElement).style.color = textPrimary;
                            }}
                            onMouseLeave={(e) => {
                                (e.currentTarget as HTMLElement).style.color = textMuted;
                            }}
                        >
                            {cv.contact.email}
                        </a>
                    </div>

                    {/* Nav columns */}
                    {footerNav.map(({ heading, links }) => (
                        <div key={heading} className="flex flex-col gap-4">
                            <span
                                className="font-sans font-semibold text-[12px] tracking-[0.12em] uppercase"
                                style={{ color: textPrimary }}
                            >
                                {heading}
                            </span>
                            <ul className="flex flex-col gap-3">
                                {links.map(({ label, id }) => (
                                    <li key={label}>
                                        <button
                                            onClick={() => scrollTo(id)}
                                            className="font-sans font-normal text-[14px] transition-colors duration-200 text-left"
                                            style={{
                                                color: textMuted,
                                                background: 'none',
                                                border: 'none',
                                                cursor: 'pointer',
                                                padding: 0,
                                            }}
                                            onMouseEnter={(e) => {
                                                (e.currentTarget as HTMLElement).style.color = textPrimary;
                                            }}
                                            onMouseLeave={(e) => {
                                                (e.currentTarget as HTMLElement).style.color = textMuted;
                                            }}
                                        >
                                            {label}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom bar */}
                <div
                    className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8"
                    style={{ borderTop: `1px solid ${borderColor}` }}
                >
                    <span
                        className="font-sans font-normal text-[13px]"
                        style={{ color: textMuted }}
                    >
                        © {new Date().getFullYear()} {cv.fullName}. All rights reserved.
                    </span>
                    <span
                        className="font-sans font-normal text-[13px]"
                        style={{ color: textMuted }}
                    >
                        {cv.education[0].institution} · {cv.education[0].duration}
                    </span>
                </div>
            </div>
        </footer>
    );
}
