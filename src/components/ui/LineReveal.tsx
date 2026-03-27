import { motion } from 'framer-motion';

interface LineRevealProps {
    isDark: boolean;
    delay?: number;
    className?: string;
}

/**
 * Animated horizontal line that grows from center on scroll.
 */
export function LineReveal({ isDark, delay = 0, className = '' }: LineRevealProps) {
    return (
        <motion.div
            className={`w-full overflow-hidden ${className}`}
            style={{ height: 1 }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay, ease: [0.25, 0.1, 0.25, 1] }}
        >
            <div
                className="w-full h-full"
                style={{
                    background: isDark
                        ? 'linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)'
                        : 'linear-gradient(90deg, transparent, rgba(0,0,0,0.15), transparent)',
                }}
            />
        </motion.div>
    );
}
