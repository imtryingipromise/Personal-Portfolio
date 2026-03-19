import { useEffect, useRef, useState } from 'react';

interface CountUpProps {
    target: string;
    duration?: number;
    className?: string;
    style?: React.CSSProperties;
}

export function CountUp({ target, duration = 1500, className, style }: CountUpProps) {
    const [display, setDisplay] = useState('0');
    const ref = useRef<HTMLSpanElement>(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated.current) {
                    hasAnimated.current = true;
                    const numericTarget = parseInt(target, 10);

                    if (isNaN(numericTarget)) {
                        setDisplay(target);
                        return;
                    }

                    const startTime = performance.now();

                    function update(now: number) {
                        const elapsed = now - startTime;
                        const progress = Math.min(elapsed / duration, 1);
                        // Ease out cubic
                        const eased = 1 - Math.pow(1 - progress, 3);
                        const current = Math.floor(eased * numericTarget);
                        setDisplay(String(current));

                        if (progress < 1) {
                            requestAnimationFrame(update);
                        } else {
                            setDisplay(target);
                        }
                    }

                    requestAnimationFrame(update);
                }
            },
            { threshold: 0.5 }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [target, duration]);

    return (
        <span ref={ref} className={className} style={style}>
            {display}
        </span>
    );
}
