import React from "react";
import { Metadata } from "next";
import { Bento } from "@/components/Bento";
import { WaveDivider } from "@/components/WaveDivider";

export const metadata: Metadata = {
  title: "Gallery",
  description: "View our sanctuary interior, signature treatments, and stunning nail artistry at Sheillz Empire.",
};

export default function GalleryPage() {
  return (
    <div className="flex flex-col min-h-screen pt-32 pb-24 bg-[#fff6f9]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center mb-12">
        <div className="inline-flex items-center gap-2 mb-2">
          <span className="w-8 h-[2px] bg-[#c9a45c]" aria-hidden="true" />
          <span className="text-xs uppercase tracking-widest font-bold text-[#1b7f9e]">
            Visual Showcase
          </span>
          <span className="w-8 h-[2px] bg-[#c9a45c]" aria-hidden="true" />
        </div>
        <h1 className="font-display text-4xl md:text-5xl font-black text-[#0b4f6c] tracking-tight">
          Client Gallery
        </h1>
        <p className="mt-4 text-base md:text-lg text-[#062a3a]/80 max-w-2xl mx-auto">
          Take a glimpse into the tranquil environment and exceptional results crafted daily by our dedicated therapists and technicians.
        </p>
      </div>

      <WaveDivider color="text-[#f9d5e1]/40" bgColor="bg-transparent" className="mb-12" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <Bento maxItems={8} showViewAll={false} />
      </div>
    </div>
  );
}
