import { motion, useScroll, useSpring } from 'framer-motion';

interface ScrollProgressProps {
    isDark: boolean;
}

export function ScrollProgress({ isDark }: ScrollProgressProps) {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    return (
        <motion.div
            className="fixed top-0 left-0 right-0 z-[60] origin-left"
            style={{
                scaleX,
                height: 2,
                background: isDark ? '#F5F5F5' : '#000000',
            }}
        />
    );
}
