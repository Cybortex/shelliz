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
    alt: "Sheillz Empire relaxation massage room atmosphere",
    caption: "Sanctuary Ambience",
    shape: "arch",
    className: "md:col-span-2 md:row-span-2 aspect-[4/5] md:aspect-auto",
  },
  {
    filename: "gallery-2.jpg",
    alt: "Tailored luxury facial hydration therapy session",
    caption: "Deep Cleansing Facial",
    shape: "circle",
    className: "col-span-1 aspect-square",
  },
  {
    filename: "gallery-3.jpg",
    alt: "Precision acrylic nail art and gel extension finish",
    caption: "Artisanal Nail Polish",
    shape: "rounded",
    className: "col-span-1 aspect-square",
  },
  {
    filename: "gallery-4.jpg",
    alt: "Gentle body scrub and skin polishing treatment ritual",
    caption: "Full Body Polish",
    shape: "rounded",
    className: "md:col-span-2 aspect-[16/9] md:aspect-auto",
  },
  {
    filename: "gallery-5.jpg",
    alt: "Pristine spa pedicure foot bath and exfoliation",
    caption: "Royal Pedicure",
    shape: "rounded",
    className: "col-span-1 aspect-square",
  },
  {
    filename: "gallery-6.jpg",
    alt: "Herbal steam bath wellness facility",
    caption: "Herbal Steam Therapy",
    shape: "arch",
    className: "col-span-1 aspect-[4/5]",
  },
  {
    filename: "gallery-7.jpg",
    alt: "Student practical workshop during spa masterclass session",
    caption: "Masterclass Practice",
    shape: "rounded",
    className: "col-span-1 aspect-square",
  },
  {
    filename: "gallery-8.jpg",
    alt: "Bespoke manicure and hand wellness treatment",
    caption: "Hand Ritual",
    shape: "rounded",
    className: "col-span-1 md:col-span-2 aspect-square md:aspect-[16/9]",
  },
];

export function Bento({ maxItems = 6, showViewAll = true }: BentoProps) {
  const tiles = GALLERY_TILES.slice(0, maxItems);

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[220px]">
        {tiles.map((tile, idx) => {
          let maskClass = "rounded-3xl";
          if (tile.shape === "arch") {
            maskClass = "mask-arch";
          } else if (tile.shape === "circle") {
            maskClass = "mask-circle";
          }

          return (
            <div
              key={tile.filename}
              className={`group relative overflow-hidden bg-[#f0e8eb] border border-[#c9a45c]/25 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-[#c9a45c] ${maskClass} ${tile.className}`}
            >
              <Photo
                filename={tile.filename}
                alt={tile.alt}
                fill
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Overlay with caption */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#062a3a]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
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
