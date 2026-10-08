import React from "react";
import Link from "next/link";
import { Photo } from "./Photo";

interface BentoProps {
  maxItems?: number; // 6 on Home, 8 on /gallery
  showViewAll?: boolean;
}

const GALLERY_TILES = [
  {
    filename: "gallery-1.jpg",
    alt: "Estelin luxury facial serum and botanical collection",
    caption: "Premium Skincare Suite",
    className: "md:col-span-2 md:row-span-2 aspect-[4/5] md:aspect-auto",
  },
  {
    filename: "gallery-2.jpg",
    alt: "Tailored luxury facial hydration therapy and essence masks",
    caption: "Essence Mask Ritual",
    className: "col-span-1 aspect-square",
  },
  {
    filename: "gallery-3.jpg",
    alt: "Precision pedicure and vibrant red nail polish finish",
    caption: "Artisanal Pedicure & Nails",
    className: "col-span-1 aspect-square",
  },
  {
    filename: "gallery-4.jpg",
    alt: "Dr Teal's Rose Shea sugar scrub exfoliating body polish",
    caption: "Rose Body Scrub",
    className: "md:col-span-2 aspect-[16/9] md:aspect-auto",
  },
  {
    filename: "gallery-5.jpg",
    alt: "Deep cleansing facial treatment with soothing foam",
    caption: "Deep Cleanse Facial",
    className: "col-span-1 aspect-square",
  },
  {
    filename: "gallery-6.jpg",
    alt: "COSRX Advanced Snail 96 Mucin Power Essence at Sheillz Empire",
    caption: "Hydrating Snail Mucin",
    className: "col-span-1 aspect-square",
  },
  {
    filename: "gallery-7.jpg",
    alt: "Revitalizing leg and full-body polishing therapy",
    caption: "Body Glow Therapy",
    className: "col-span-1 aspect-square",
  },
  {
    filename: "gallery-8.jpg",
    alt: "Active skin rejuvenation serums and collagen firming wash",
    caption: "Collagen & Radiance Care",
    className: "col-span-1 md:col-span-2 aspect-square md:aspect-[16/9]",
  },
];

export function Bento({ maxItems = 6, showViewAll = true }: BentoProps) {
  const tiles = GALLERY_TILES.slice(0, maxItems);

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[240px]">
        {tiles.map((tile) => {
          return (
            <div
              key={tile.filename}
              className={`group relative overflow-hidden bg-[#f0e8eb] border border-[#c9a45c]/30 rounded-3xl shadow-sm transition-all duration-300 hover:shadow-2xl hover:border-[#c9a45c] ${tile.className}`}
            >
              <Photo
                filename={tile.filename}
                alt={tile.alt}
                fill
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Overlay with caption */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#062a3a]/85 via-[#062a3a]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#f9d5e1]">
                  {tile.caption}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {showViewAll && (
        <div className="mt-8 text-center">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold bg-[#0b4f6c] text-white hover:bg-[#1b7f9e] transition-colors btn-ripple min-h-[44px] shadow-sm"
          >
            <span>Explore Full Gallery</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      )}
    </div>
  );
}
