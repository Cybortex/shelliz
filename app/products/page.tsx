import React from "react";
import { Metadata } from "next";
import { products, buildProductOrderUrl, buildPhoneCallUrl } from "@/lib/site";
import { Photo } from "@/components/Photo";
import { WaveDivider } from "@/components/WaveDivider";

export const metadata: Metadata = {
  title: "Boutique Skincare Products",
  description: "Browse authentic professional skincare, body scrubs, essence masks, and hydrating serums at Sheillz Empire in Abuja.",
};

export default function ProductsPage() {
  const phoneUrl = buildPhoneCallUrl();

  return (
    <div className="flex flex-col min-h-screen pt-32 pb-24 bg-[#fff6f9]">
      {/* Header Banner */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center mb-12">
        <div className="inline-flex items-center gap-2 mb-2">
          <span className="w-8 h-[2px] bg-[#c9a45c]" aria-hidden="true" />
          <span className="text-xs uppercase tracking-widest font-bold text-[#1b7f9e]">
            Spa Boutique & Apothecary
          </span>
          <span className="w-8 h-[2px] bg-[#c9a45c]" aria-hidden="true" />
        </div>
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-[#0b4f6c] tracking-tight">
          Take The Glow Home
        </h1>
        <p className="mt-4 text-base md:text-lg text-[#062a3a]/80 max-w-2xl mx-auto leading-relaxed">
          Complement your in-salon therapy with our curated collection of authentic exfoliating body scrubs, restorative snail mucin, botanical sheet masks, and active serums.
        </p>

        {/* Ordering Notice */}
        <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-4 py-2 px-6 rounded-full bg-white/70 border border-[#c9a45c]/30 text-xs md:text-sm text-[#062a3a] shadow-sm">
          <span className="flex items-center gap-1.5 font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            100% Genuine Skincare Brands
          </span>
          <span className="hidden sm:inline text-[#c9a45c]">•</span>
          <span>In-Salon Pickup in Abuja</span>
          <span className="hidden sm:inline text-[#c9a45c]">•</span>
          <span>Fast Delivery Available</span>
        </div>
      </div>

      <WaveDivider color="text-[#f9d5e1]/40" bgColor="bg-transparent" className="mb-12" />

      {/* Product Catalog Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {products.map((product) => {
            const orderUrl = buildProductOrderUrl(product);

            return (
              <div
                key={product.id}
                className="group flex flex-col bg-white rounded-[2rem] border border-[#c9a45c]/30 shadow-md hover:shadow-2xl hover:border-[#c9a45c] transition-all duration-300 overflow-hidden"
              >
                {/* Product Image Frame */}
                <div className="relative p-4 bg-[#fff6f9]">
                  <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-[#f0e8eb] border border-[#0b4f6c]/10">
                    <Photo
                      filename={product.image}
                      alt={`${product.name} by ${product.brand}`}
                      fill
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Best Seller Badge */}
                    {product.isBestSeller && (
                      <div className="absolute top-3 left-3 bg-[#0b4f6c] text-[#f9d5e1] border border-[#c9a45c]/50 text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-full shadow-md">
                        Best Seller
                      </div>
                    )}

                    {/* Stock Status Badge */}
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-emerald-800 text-[11px] font-semibold px-2.5 py-0.5 rounded-full border border-emerald-200">
                      In Stock
                    </div>
                  </div>
                </div>

                {/* Product Details */}
                <div className="flex flex-col flex-grow p-6 space-y-4">
                  <div>
                    <div className="flex items-center justify-between text-xs text-[#1b7f9e] font-semibold tracking-wider uppercase mb-1">
                      <span>{product.brand}</span>
                      <span className="text-[#062a3a]/50 font-medium">{product.volume}</span>
                    </div>

                    <h2 className="font-display text-xl font-bold text-[#0b4f6c] leading-snug group-hover:text-[#1b7f9e] transition-colors">
                      {product.name}
                    </h2>
                  </div>

                  <p className="text-sm text-[#062a3a]/80 leading-relaxed flex-grow">
                    {product.description}
                  </p>

                  <div className="pt-4 border-t border-[#0b4f6c]/10 flex items-center justify-between gap-4">
                    <div>
                      <span className="block text-[11px] text-[#062a3a]/50 uppercase tracking-wider font-semibold">
                        Price
                      </span>
                      <span className="font-display text-base font-bold text-[#0b4f6c]">
                        {product.price}
                      </span>
                    </div>

                    <a
                      href={orderUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-[#c9a45c] text-[#062a3a] hover:bg-[#b8924b] transition-all btn-ripple shadow-md min-h-[44px]"
                    >
                      <span>Order on WhatsApp</span>
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Need Help / Enquire Banner */}
        <div className="mt-16 bg-[#0b4f6c] text-white rounded-[2rem] p-8 md:p-12 shadow-xl border border-[#c9a45c]/40 text-center max-w-4xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-widest font-bold text-[#c9a45c]">
            Custom Skincare Recommendations
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#fff6f9]">
            Looking for a specific treatment product?
          </h2>
          <p className="text-sm sm:text-base text-[#f9d5e1]/90 max-w-xl mx-auto">
            Our certified spa aestheticians can assess your skin profile during your visit or recommend the ideal routine via WhatsApp.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <a
              href={phoneUrl}
              className="px-6 py-3 rounded-full text-sm font-semibold bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all min-h-[44px] flex items-center justify-center"
            >
              Call Concierge
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
