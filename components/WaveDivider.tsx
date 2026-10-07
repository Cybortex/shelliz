import React from "react";

interface WaveDividerProps {
  color?: string; // Tailwind color class or hex, e.g. "text-blush", "text-ocean", "text-rose"
  bgColor?: string;
  flip?: boolean;
  reverse?: boolean;
  className?: string;
}

export function WaveDivider({
  color = "text-blush",
  bgColor = "bg-transparent",
  flip = false,
  reverse = false,
  className = "",
}: WaveDividerProps) {
  const driftClass = reverse ? "animate-wave-drift-rev" : "animate-wave-drift";

  return (
    <div
      aria-hidden="true"
      className={`relative w-full overflow-hidden leading-none select-none ${bgColor} ${className} ${
        flip ? "rotate-180" : ""
      }`}
    >
      <div className={`w-[120%] -ml-[10%] ${driftClass}`}>
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className={`w-full h-10 sm:h-14 md:h-20 block ${color}`}
        >
          <path
            d="M0,32L48,42.7C96,53,192,75,288,80C384,85,480,75,576,58.7C672,43,768,21,864,21.3C960,21,1056,43,1152,53.3C1248,64,1344,64,1392,64L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </div>
  );
}
