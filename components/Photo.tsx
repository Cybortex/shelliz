"use client";

import React, { useState } from "react";
import Image from "next/image";

interface PhotoProps {
  filename: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  priority?: boolean;
  className?: string;
  aspectRatio?: string; // e.g. "aspect-[3/2]", "aspect-[4/5]", "aspect-square"
}

export function Photo({
  filename,
  alt,
  width,
  height,
  fill = false,
  priority = false,
  className = "",
  aspectRatio,
}: PhotoProps) {
  const [hasError, setHasError] = useState(false);

  // If the image failed to load or is not available, render neutral placeholder block
  if (hasError) {
    return (
      <div
        role="img"
        aria-label={`${alt} (Photo pending)`}
        className={`relative flex flex-col items-center justify-center bg-[#f0e8eb] border border-[#e5d8dc] text-[#062a3a]/40 ${
          aspectRatio ? aspectRatio : ""
        } ${fill ? "w-full h-full absolute inset-0" : ""} ${className}`}
        style={!fill && width && height ? { width, height } : undefined}
      >
        <div className="flex flex-col items-center justify-center p-4 text-center select-none">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#0b4f6c]/50">
            Sheillz Empire
          </span>
          <span className="text-[11px] text-[#062a3a]/40 mt-1 font-mono">
            {filename}
          </span>
        </div>
      </div>
    );
  }

  const src = `/images/${filename.replace(/^\/+/, "")}`;

  if (fill) {
    return (
      <div className={`relative overflow-hidden ${aspectRatio || "w-full h-full"} ${className}`}>
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-opacity duration-300"
          onError={() => setHasError(true)}
        />
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width || 600}
      height={height || 600}
      priority={priority}
      className={`object-cover transition-opacity duration-300 ${className}`}
      onError={() => setHasError(true)}
    />
  );
}
