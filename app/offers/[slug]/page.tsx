import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { WaveDivider } from "@/components/WaveDivider";

export const metadata: Metadata = {
  title: "Special Offer",
  description: "View our latest seasonal specials and bespoke spa packages at Sheillz Empire.",
};

export default async function OfferPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const { slug } = params;
  
  return (
    <div className="flex flex-col min-h-screen pt-32 pb-24 bg-[#fff6f9]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        <div className="inline-flex items-center gap-2 mb-2">
          <span className="w-8 h-[2px] bg-[#c9a45c]" aria-hidden="true" />
          <span className="text-xs uppercase tracking-widest font-bold text-[#1b7f9e]">
            Seasonal Specials
          </span>
          <span className="w-8 h-[2px] bg-[#c9a45c]" aria-hidden="true" />
        </div>
        
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-[#c9a45c]/20 mt-8 mb-12">
          <div className="w-20 h-20 mx-auto bg-[#f9d5e1]/30 rounded-full flex items-center justify-center mb-6">
            <svg className="w-10 h-10 text-[#c9a45c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
            </svg>
          </div>
          
          <h1 className="font-display text-3xl font-bold text-[#0b4f6c] mb-4">
            Offer Unavailable
          </h1>
          <p className="text-base text-[#062a3a]/80 mb-8 max-w-lg mx-auto leading-relaxed">
            We currently do not have an active offer for <span className="font-semibold">&quot;{slug}&quot;</span>. Check back later for upcoming seasonal specials and exclusive packages.
          </p>
          
          <Link
            href="/services"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl text-sm font-bold bg-[#0b4f6c] text-white hover:bg-[#1b7f9e] transition-all btn-ripple shadow-md"
          >
            Explore The Empire Menu
          </Link>
        </div>
      </div>
      
      <WaveDivider color="text-[#0b4f6c]/5" bgColor="bg-transparent" className="mt-auto" />
    </div>
  );
}
