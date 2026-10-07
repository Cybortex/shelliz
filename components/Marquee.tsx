import React from "react";

const MARQUEE_ITEMS = [
  "Relaxing Massages",
  "Body Scrub & Polish",
  "Herbal Steam Bath",
  "Radiant Facials",
  "Tailored Skincare",
  "Intimate Vajacials",
  "Silky Waxing",
  "Luxury Nails & Extensions",
  "Classic Manicure",
  "Spa Pedicure",
  "Empire Masterclass Training",
];

export function Marquee() {
  return (
    <div
      aria-label="Sheillz Empire featured offerings"
      className="w-full bg-[#0b4f6c] text-[#f9d5e1] py-3.5 border-y border-[#c9a45c]/30 overflow-hidden relative select-none"
    >
      <div className="flex animate-marquee whitespace-nowrap">
        <div className="flex items-center gap-8 shrink-0 pr-8">
          {MARQUEE_ITEMS.map((item, idx) => (
            <span key={`mq1-${idx}`} className="flex items-center gap-8 text-sm md:text-base font-medium tracking-wider uppercase font-sans">
              <span>{item}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#c9a45c]" aria-hidden="true" />
            </span>
          ))}
        </div>
        <div className="flex items-center gap-8 shrink-0 pr-8" aria-hidden="true">
          {MARQUEE_ITEMS.map((item, idx) => (
            <span key={`mq2-${idx}`} className="flex items-center gap-8 text-sm md:text-base font-medium tracking-wider uppercase font-sans">
              <span>{item}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#c9a45c]" />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
