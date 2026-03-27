import { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const KONAMI = [
    'ArrowUp', 'ArrowUp',
    'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight',
    'ArrowLeft', 'ArrowRight',
    'b', 'a',
];

interface KonamiEasterProps {
    isDark: boolean;
}

/** Glitch line — a random horizontal slice that shifts */
function GlitchSlice({ isDark }: { isDark: boolean }) {
    const top    = Math.random() * 100;
    const height = 2 + Math.random() * 6;
    const shift  = (Math.random() - 0.5) * 40;
    const delay  = Math.random() * 0.8;

    return (
        <motion.div
            className="absolute left-0 right-0 pointer-events-none"
            style={{
                top: `${top}%`,
                height,
                background: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)',
                transform: `translateX(${shift}px)`,
            }}
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: [0, 1, 1, 0], scaleX: [0, 1, 1, 0] }}
            transition={{ duration: 0.15, delay, times: [0, 0.3, 0.7, 1] }}
        />
    );
}

/** Falling character for the "matrix rain" effect */
function MatrixChar({ char, x, isDark }: { char: string; x: number; isDark: boolean }) {
    const duration = 1.5 + Math.random() * 2;
    const delay    = Math.random() * 2;
    const size     = 12 + Math.random() * 6;

    return (
        <motion.span
            className="absolute font-mono pointer-events-none select-none"
            style={{
                left: `${x}%`,
                top: -30,
                fontSize: size,
                color: isDark ? 'rgba(245,245,245,0.15)' : 'rgba(0,0,0,0.1)',
                textShadow: isDark
                    ? '0 0 8px rgba(245,245,245,0.3)'
                    : '0 0 8px rgba(0,0,0,0.15)',
            }}
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: '110vh', opacity: [0, 0.8, 0.8, 0] }}
            transition={{ duration, delay, ease: 'linear' }}
        >
            {char}
        </motion.span>
    );
}

export function KonamiEaster({ isDark }: KonamiEasterProps) {
    const [progress, setProgress] = useState<number[]>([]);
    const [activated, setActivated] = useState(false);
    const [phase, setPhase] = useState<'idle' | 'glitch' | 'reveal' | 'rain'>('idle');

    const reset = useCallback(() => {
        setActivated(false);
        setPhase('idle');
    }, []);

    // Listen for key sequence
    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            if (activated) return;

            setProgress((prev) => {
                const next = [...prev, e.key];

                // Check if sequence still valid
                const valid = next.every((key, i) => key === KONAMI[i]);
                if (!valid) return e.key === KONAMI[0] ? [e.key] : [];

                // Complete!
                if (next.length === KONAMI.length) {
                    setActivated(true);
                    return [];
                }

                return next;
            });
        };

        window.addEventListener('keydown', handler);
        return () => window.removeEventListener('keydown', handler);
    }, [activated]);

    // Phase sequence
    useEffect(() => {
        if (!activated) return;

        setPhase('glitch');
        const t1 = setTimeout(() => setPhase('reveal'), 800);
        const t2 = setTimeout(() => setPhase('rain'), 1600);
        const t3 = setTimeout(() => reset(), 7000);

        return () => {
            clearTimeout(t1);
            clearTimeout(t2);
            clearTimeout(t3);
        };
    }, [activated, reset]);

    // Generate matrix chars
    const matrixChars = 'MUQEETMIR01ABCDEF<>/{}[]'.split('');
    const rainDrops = Array.from({ length: 60 }, (_, i) => ({
        id: i,
        char: matrixChars[Math.floor(Math.random() * matrixChars.length)],
        x: (i / 60) * 100 + Math.random() * (100 / 60),
    }));

    const textPrimary = isDark ? '#F5F5F5' : '#111111';
    const textMuted   = isDark ? '#B8B8B8' : '#444444';

    return (
        <>
            {/* Progress indicator — subtle hint */}
            <AnimatePresence>
                {progress.length > 0 && progress.length < KONAMI.length && !activated && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="fixed bottom-6 right-6 z-[9999] flex items-center gap-1.5"
                    >
                        {KONAMI.map((_, i) => (
                            <div
                                key={i}
                                className="rounded-full"
                                style={{
                                    width: 6,
                                    height: 6,
                                    background: i < progress.length
                                        ? textPrimary
                                        : isDark ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.1)',
                                    transition: 'background 0.2s ease',
                                }}
                            />
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Full-screen overlay */}
            <AnimatePresence>
                {activated && (
                    <motion.div
                        className="fixed inset-0 z-[9998] flex items-center justify-center overflow-hidden"
                        style={{ background: isDark ? '#000000' : '#F0F0F0' }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={reset}
                    >
                        {/* Glitch phase */}
                        {phase === 'glitch' && (
                            <>
                                {Array.from({ length: 20 }).map((_, i) => (
                                    <GlitchSlice key={i} isDark={isDark} />
                                ))}
                                <motion.div
                                    className="absolute inset-0"
                                    animate={{
                                        x: [0, -3, 5, -2, 4, 0],
                                        y: [0, 2, -3, 1, -2, 0],
                                    }}
                                    transition={{ duration: 0.4, repeat: 2, ease: 'linear' }}
                                />
                            </>
                        )}

                        {/* Reveal phase — big text */}
                        <AnimatePresence>
                            {(phase === 'reveal' || phase === 'rain') && (
                                <motion.div
                                    className="relative z-10 flex flex-col items-center gap-6 text-center px-8"
                                    initial={{ opacity: 0, scale: 0.8, filter: 'blur(20px)' }}
                                    animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                                    transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                                >
                                    <motion.span
                                        className="font-sans font-black uppercase"
                                        style={{
                                            fontSize: 'clamp(48px, 10vw, 120px)',
                                            lineHeight: 0.95,
                                            letterSpacing: '-0.03em',
                                            color: textPrimary,
                                        }}
                                        animate={{
                                            textShadow: [
                                                `0 0 0px ${isDark ? 'rgba(245,245,245,0)' : 'rgba(0,0,0,0)'}`,
                                                `0 0 40px ${isDark ? 'rgba(245,245,245,0.3)' : 'rgba(0,0,0,0.15)'}`,
                                                `0 0 0px ${isDark ? 'rgba(245,245,245,0)' : 'rgba(0,0,0,0)'}`,
                                            ],
                                        }}
                                        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                                    >
                                        You found it.
                                    </motion.span>
                                    <motion.p
                                        className="font-sans font-normal max-w-md"
                                        style={{ fontSize: 16, lineHeight: 1.6, color: textMuted }}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.4, duration: 0.5 }}
                                    >
                                        The Konami Code. A classic. If you know this,
                                        we'd probably get along — hit me up.
                                    </motion.p>
                                    <motion.span
                                        className="font-mono"
                                        style={{ fontSize: 13, color: textMuted, opacity: 0.5 }}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 0.5 }}
                                        transition={{ delay: 0.8 }}
                                    >
                                        click anywhere to close
                                    </motion.span>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Matrix rain */}
                        {phase === 'rain' && (
                            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                                {rainDrops.map((drop) => (
                                    <MatrixChar
                                        key={drop.id}
                                        char={drop.char}
                                        x={drop.x}
                                        isDark={isDark}
                                    />
                                ))}
                            </div>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
