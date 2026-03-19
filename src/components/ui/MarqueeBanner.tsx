import { motion } from 'framer-motion';

interface MarqueeBannerProps {
    isDark: boolean;
}

const items = [
    'PYTHON', 'C++', 'JAVA', 'SQL', 'HTML', 'CSS', 'JAVASCRIPT',
    'MULTITHREADING', 'OOP', 'LINUX', 'PYGAME', 'DATA ANALYSIS',
    'DATABASE DESIGN', 'NETWORK ADMIN', 'WEB DEV', 'AI',
];

export function MarqueeBanner({ isDark }: MarqueeBannerProps) {
    const textColor = isDark ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.12)';
    const borderColor = isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.08)';

    const content = items.map((item, i) => (
        <span key={i} className="flex items-center gap-8">
            <span
                className="font-sans font-black uppercase whitespace-nowrap"
                style={{
                    fontSize: 14,
                    letterSpacing: '0.2em',
                    color: textColor,
                }}
            >
                {item}
            </span>
            <span
                className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ background: textColor }}
            />
        </span>
    ));

    return (
        <div
            className="w-full overflow-hidden py-5"
            style={{
                borderTop: `1px solid ${borderColor}`,
                borderBottom: `1px solid ${borderColor}`,
            }}
        >
            <motion.div
                className="flex items-center gap-8"
                animate={{ x: ['0%', '-50%'] }}
                transition={{
                    x: { duration: 30, repeat: Infinity, ease: 'linear' },
                }}
                style={{ width: 'fit-content' }}
            >
                {content}
                {content}
            </motion.div>
        </div>
    );
}
