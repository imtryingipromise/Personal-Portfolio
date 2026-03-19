import { useEffect, useState, useRef } from 'react';

interface TextScrambleProps {
    text: string;
    className?: string;
    style?: React.CSSProperties;
    speed?: number;
    delay?: number;
}

const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*';

export function TextScramble({ text, className, style, speed = 30, delay = 200 }: TextScrambleProps) {
    const [displayed, setDisplayed] = useState('');
    const frameRef = useRef(0);
    const startedRef = useRef(false);

    useEffect(() => {
        if (startedRef.current) return;
        startedRef.current = true;

        const target = text.toUpperCase();
        let iteration = 0;

        const timeout = setTimeout(() => {
            const interval = setInterval(() => {
                setDisplayed(
                    target
                        .split('')
                        .map((char, i) => {
                            if (char === ' ') return ' ';
                            if (i < iteration) return target[i];
                            return chars[Math.floor(Math.random() * chars.length)];
                        })
                        .join('')
                );

                iteration += 1 / 2;

                if (iteration >= target.length) {
                    setDisplayed(target);
                    clearInterval(interval);
                }
            }, speed);

            return () => clearInterval(interval);
        }, delay);

        return () => clearTimeout(timeout);
    }, [text, speed, delay]);

    return (
        <span className={className} style={style}>
            {displayed || text.toUpperCase()}
        </span>
    );
}
