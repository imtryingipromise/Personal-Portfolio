"use client";

import { useEffect, useRef } from "react";

interface GradientBackgroundProps {
  isDark?: boolean;
}

export default function GradientBackground({ isDark = true }: GradientBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });
  const animRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = canvas.parentElement?.clientWidth || window.innerWidth;
    let height = canvas.parentElement?.clientHeight || window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const handleResize = () => {
      width = canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.parentElement?.clientHeight || window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: (e.clientX - rect.left) / width,
        y: (e.clientY - rect.top) / height,
      };
    };

    window.addEventListener("resize", handleResize, { passive: true });
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    const gridSize = 40;

    function animate(time: number) {
      ctx!.clearRect(0, 0, width, height);

      // Base background
      ctx!.fillStyle = isDark ? "#000000" : "#FFFFFF";
      ctx!.fillRect(0, 0, width, height);

      const mx = mouseRef.current.x * width;
      const my = mouseRef.current.y * height;

      // Draw grid dots
      const cols = Math.ceil(width / gridSize) + 1;
      const rows = Math.ceil(height / gridSize) + 1;

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const x = col * gridSize;
          const y = row * gridSize;

          // Distance from mouse
          const dx = x - mx;
          const dy = y - my;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 280;

          // Proximity glow — dots grow and brighten near cursor
          const proximity = Math.max(0, 1 - dist / maxDist);
          const size = 0.6 + proximity * 2.5;
          const alpha = isDark
            ? 0.08 + proximity * 0.45
            : 0.06 + proximity * 0.35;

          // Subtle wave ripple
          const wave = Math.sin(dist * 0.02 - time * 0.002) * 0.5 + 0.5;
          const finalAlpha = alpha + wave * 0.03;

          ctx!.beginPath();
          ctx!.arc(x, y, size, 0, Math.PI * 2);
          ctx!.fillStyle = isDark
            ? `rgba(255,255,255,${finalAlpha})`
            : `rgba(0,0,0,${finalAlpha})`;
          ctx!.fill();
        }
      }

      // Spotlight radial glow following mouse
      const gradient = ctx!.createRadialGradient(mx, my, 0, mx, my, 350);
      if (isDark) {
        gradient.addColorStop(0, "rgba(255,255,255,0.04)");
        gradient.addColorStop(0.5, "rgba(255,255,255,0.015)");
        gradient.addColorStop(1, "rgba(255,255,255,0)");
      } else {
        gradient.addColorStop(0, "rgba(0,0,0,0.03)");
        gradient.addColorStop(0.5, "rgba(0,0,0,0.01)");
        gradient.addColorStop(1, "rgba(0,0,0,0)");
      }
      ctx!.fillStyle = gradient;
      ctx!.fillRect(0, 0, width, height);

      animRef.current = requestAnimationFrame(animate);
    }

    animRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isDark]);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ display: "block" }}
      />
    </div>
  );
}
