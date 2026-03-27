import { motion } from 'framer-motion';

interface WordRevealProps {
    text: string;
    className?: string;
    style?: React.CSSProperties;
    /** Delay before the first word appears (seconds) */
    delay?: number;
    /** Seconds between each word */
    stagger?: number;
    /** Whether to trigger on scroll into view (true) or on mount (false) */
    onScroll?: boolean;
}

/**
 * Cinematic word-by-word text reveal.
 * Each word fades + rises into place with a slight blur clearing.
 */
export function WordReveal({
    text,
    className,
    style,
    delay = 0,
    stagger = 0.045,
    onScroll = true,
}: WordRevealProps) {
    const words = text.split(' ');

    const container = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: stagger,
                delayChildren: delay,
            },
        },
    };

    const child = {
        hidden: {
            opacity: 0,
            y: 20,
            filter: 'blur(8px)',
        },
        visible: {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            transition: {
                duration: 0.5,
                ease: [0.25, 0.1, 0.25, 1],
            },
        },
    };

    return (
        <motion.span
            className={className}
            style={{ display: 'flex', flexWrap: 'wrap', ...style }}
            variants={container}
            initial="hidden"
            {...(onScroll
                ? { whileInView: 'visible', viewport: { once: true, margin: '-40px' } }
                : { animate: 'visible' })}
        >
            {words.map((word, i) => (
                <motion.span
                    key={`${word}-${i}`}
                    variants={child}
                    style={{ display: 'inline-block', marginRight: '0.3em', willChange: 'transform, opacity, filter' }}
                >
                    {word}
                </motion.span>
            ))}
        </motion.span>
    );
}
