import { useEffect, useRef } from 'react';

interface ParticleFieldProps {
    isDark: boolean;
}

export function ParticleField({ isDark }: ParticleFieldProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const mouseRef = useRef({ x: -1000, y: -1000 });
    const animRef = useRef<number>(0);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = window.innerWidth;
        let height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;

        const particleCount = Math.min(80, Math.floor((width * height) / 18000));
        const connectionDistance = 120;
        const mouseRadius = 150;

        interface Particle {
            x: number;
            y: number;
            vx: number;
            vy: number;
            size: number;
        }

        const particles: Particle[] = Array.from({ length: particleCount }, () => ({
            x: Math.random() * width,
            y: Math.random() * height,
            vx: (Math.random() - 0.5) * 0.4,
            vy: (Math.random() - 0.5) * 0.4,
            size: Math.random() * 1.5 + 0.5,
        }));

        const handleResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };

        const handleMouseMove = (e: MouseEvent) => {
            mouseRef.current = { x: e.clientX, y: e.clientY };
        };

        const handleMouseLeave = () => {
            mouseRef.current = { x: -1000, y: -1000 };
        };

        window.addEventListener('resize', handleResize, { passive: true });
        window.addEventListener('mousemove', handleMouseMove, { passive: true });
        window.addEventListener('mouseleave', handleMouseLeave);

        const dotColor = isDark ? '245,245,245' : '30,30,30';

        function animate() {
            ctx!.clearRect(0, 0, width, height);

            for (const p of particles) {
                p.x += p.vx;
                p.y += p.vy;

                if (p.x < 0 || p.x > width) p.vx *= -1;
                if (p.y < 0 || p.y > height) p.vy *= -1;

                // Mouse repulsion
                const dx = p.x - mouseRef.current.x;
                const dy = p.y - mouseRef.current.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < mouseRadius && dist > 0) {
                    const force = (mouseRadius - dist) / mouseRadius;
                    p.x += (dx / dist) * force * 2;
                    p.y += (dy / dist) * force * 2;
                }
            }

            // Draw connections
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < connectionDistance) {
                        const opacity = (1 - dist / connectionDistance) * 0.15;
                        ctx!.beginPath();
                        ctx!.strokeStyle = `rgba(${dotColor},${opacity})`;
                        ctx!.lineWidth = 0.5;
                        ctx!.moveTo(particles[i].x, particles[i].y);
                        ctx!.lineTo(particles[j].x, particles[j].y);
                        ctx!.stroke();
                    }
                }
            }

            // Draw particles
            for (const p of particles) {
                ctx!.beginPath();
                ctx!.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx!.fillStyle = `rgba(${dotColor},0.25)`;
                ctx!.fill();
            }

            // Mouse connections
            const mouse = mouseRef.current;
            if (mouse.x > 0) {
                for (const p of particles) {
                    const dx = p.x - mouse.x;
                    const dy = p.y - mouse.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < mouseRadius) {
                        const opacity = (1 - dist / mouseRadius) * 0.3;
                        ctx!.beginPath();
                        ctx!.strokeStyle = `rgba(${dotColor},${opacity})`;
                        ctx!.lineWidth = 0.6;
                        ctx!.moveTo(mouse.x, mouse.y);
                        ctx!.lineTo(p.x, p.y);
                        ctx!.stroke();
                    }
                }
            }

            animRef.current = requestAnimationFrame(animate);
        }

        animate();

        return () => {
            cancelAnimationFrame(animRef.current);
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [isDark]);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 z-0 pointer-events-none"
            style={{ opacity: 0.6 }}
        />
    );
}
