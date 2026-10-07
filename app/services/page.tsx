import React from "react";
import { Metadata } from "next";
import { serviceGroups } from "@/lib/site";
import { MenuGroup } from "@/components/MenuGroup";
import { WaveDivider } from "@/components/WaveDivider";

export const metadata: Metadata = {
  title: "Services Menu",
  description: "Explore the Empire Menu of bespoke spa treatments, massages, facials, and luxury nail services.",
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen pt-32 pb-16 bg-[#fff6f9]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center mb-12">
        <div className="inline-flex items-center gap-2 mb-2">
          <span className="w-8 h-[2px] bg-[#c9a45c]" aria-hidden="true" />
          <span className="text-xs uppercase tracking-widest font-bold text-[#1b7f9e]">
            Our Treatments
          </span>
          <span className="w-8 h-[2px] bg-[#c9a45c]" aria-hidden="true" />
        </div>
        <h1 className="font-display text-4xl md:text-5xl font-black text-[#0b4f6c] tracking-tight">
          The Empire Menu
        </h1>
        <p className="mt-4 text-base md:text-lg text-[#062a3a]/80 max-w-2xl mx-auto">
          Immerse yourself in our meticulously crafted therapies. From deep-tissue tension relief to radiant skin rejuvenation, every service is designed to deliver a regal wellness experience.
        </p>
      </div>

      <WaveDivider color="text-[#f9d5e1]/40" bgColor="bg-transparent" className="mb-4" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="space-y-8 md:space-y-16">
          {serviceGroups.map((group) => (
            <MenuGroup key={group.id} group={group} showImage={true} />
          ))}
        </div>
      </div>
    </div>
  );
}
