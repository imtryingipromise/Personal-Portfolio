"use client";

import { MeshGradient } from "@paper-design/shaders-react";

interface GradientBackgroundProps {
  isDark?: boolean;
}

export default function GradientBackground({ isDark = true }: GradientBackgroundProps) {
  const colors = isDark
    ? [
        "#000000",
        "#050505",
        "#0A0A0A",
        "#111111",
        "#1A1A1A",
        "#0D0D0D",
      ]
    : [
        "#ffffff",
        "#F8F8F8",
        "#F0F0F0",
        "#E8E8E8",
        "#DEDEDE",
        "#F5F5F5",
      ];

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <MeshGradient
        className="w-full h-full"
        colors={colors}
        distortion={1.0}
        swirl={0.5}
        speed={0.35}
        offsetX={0.05}
        grainMixer={0}
        grainOverlay={0}
      />
    </div>
  );
}
