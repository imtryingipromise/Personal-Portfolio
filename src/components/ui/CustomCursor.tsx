import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export function CustomCursor({ isDark }: { isDark: boolean }) {
    const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
    const [isPointer, setIsPointer] = useState(false);

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            const { clientX: x, clientY: y } = e;
            setMousePosition({ x, y });
            document.documentElement.style.setProperty('--mouse-x', `${x}px`);
            document.documentElement.style.setProperty('--mouse-y', `${y}px`);
            const target = e.target as HTMLElement;
            setIsPointer(target.closest('a, button, [role="button"]') !== null);
        };

        window.addEventListener('mousemove', updateMousePosition);
        return () => { window.removeEventListener('mousemove', updateMousePosition); };
    }, []);

    // Cursor dot color: bright yellow in dark, deep orange in light
    const dotColor = isDark ? '#FFF07A' : '#FF3B00';

    const S = 4;  // square size px
    const G = 4;  // gap between bottom squares
    const W = S + G + S; // 12
    const H = S + S;     // 8

    const sq = (style: React.CSSProperties) => (
        <div
            style={{
                position: 'absolute',
                width: S,
                height: S,
                background: dotColor,
                boxShadow: isDark ? `0 0 6px ${dotColor}` : 'none',
                ...style,
            }}
        />
    );

    return (
        <>
            {/* Heat Gradient Lens Ring */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[99] rounded-full"
                animate={{
                    x: mousePosition.x - 40,
                    y: mousePosition.y - 40,
                    scale: isPointer ? 1.35 : 1,
                }}
                transition={{ type: 'tween', ease: 'linear', duration: 0 }}
                style={{
                    width: 80,
                    height: 80,
                    border: '1px solid transparent',
                    background: `
                        linear-gradient(${isDark ? '#050505' : '#FAFAFA'}, ${isDark ? '#050505' : '#FAFAFA'}) padding-box,
                        conic-gradient(from 0deg, #C20000, #FF3B00, #FF7A00, #FFD200, #FFF07A, #FF7A00, #FF3B00, #C20000) border-box
                    `,
                    opacity: isDark ? 0.55 : 0.4,
                }}
            />

            {/* Soft inner glow at cursor center */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[98] rounded-full"
                animate={{
                    x: mousePosition.x - 20,
                    y: mousePosition.y - 20,
                    scale: isPointer ? 1.5 : 1,
                    opacity: isPointer ? 0.6 : 0.25,
                }}
                transition={{ type: 'tween', ease: 'linear', duration: 0 }}
                style={{
                    width: 40,
                    height: 40,
                    background: 'radial-gradient(circle, rgba(255,122,0,0.5) 0%, rgba(194,0,0,0.2) 60%, transparent 100%)',
                    filter: 'blur(8px)',
                }}
            />

            {/* Pixelated Cursor Dot */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[100]"
                animate={{
                    x: mousePosition.x - W / 2,
                    y: mousePosition.y - H / 2,
                    scale: isPointer ? 1.4 : 1,
                    rotate: isPointer ? 180 : 0,
                }}
                transition={{ type: 'tween', ease: 'backOut', duration: 0.12 }}
                style={{ width: W, height: H, position: 'fixed' }}
            >
                {/* Top square */}
                {sq({ top: 0, left: S })}
                {/* Bottom-left square */}
                {sq({ bottom: 0, left: 0 })}
                {/* Bottom-right square */}
                {sq({ bottom: 0, right: 0 })}
            </motion.div>
        </>
    );
}
