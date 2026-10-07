import React from "react";
import { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import { Photo } from "@/components/Photo";
import { WaveDivider } from "@/components/WaveDivider";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about the philosophy and regal wellness standards behind Sheillz Empire.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen pt-32 pb-24 bg-[#fff6f9]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24">
          <div className="order-2 lg:order-1 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 mb-2">
                <span className="text-xs uppercase tracking-widest font-bold text-[#1b7f9e]">
                  Our Philosophy
                </span>
                <span className="w-8 h-[2px] bg-[#c9a45c]" aria-hidden="true" />
              </div>
              <h1 className="font-display text-4xl md:text-5xl font-black text-[#0b4f6c] tracking-tight">
                About Sheillz Empire
              </h1>
            </div>
            
            <div className="space-y-4 text-base md:text-lg text-[#062a3a]/80 leading-relaxed font-sans">
              <p>
                {siteConfig.owner.story}
              </p>
              <p>
                At the core of our practice is the belief that genuine wellness involves deep rest and meticulous attention to detail. Every treatment, from our relaxing body massages to our precision nail artistry, is delivered in a pristine, calming sanctuary environment.
              </p>
            </div>
            
            <div className="pt-4 border-t border-[#0b4f6c]/10">
              <h3 className="font-display text-xl font-bold text-[#062a3a]">
                {siteConfig.owner.name}
              </h3>
              <p className="text-sm font-semibold tracking-wider text-[#c9a45c] uppercase">
                Founder & Lead Therapist
              </p>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              <div className="mask-arch overflow-hidden border-2 border-[#c9a45c]/30 shadow-2xl bg-[#f0e8eb]">
                <Photo
                  filename="about.jpg"
                  alt={`Portrait of ${siteConfig.owner.name}, founder of Sheillz Empire`}
                  width={800}
                  height={1000}
                  aspectRatio="aspect-[4/5]"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Team Section (Conditionally rendered) */}
        {siteConfig.team && siteConfig.team.length > 0 && (
          <div className="mt-24">
            <WaveDivider color="text-[#f9d5e1]/40" bgColor="bg-transparent" className="mb-16" />
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0b4f6c]">
                Meet The Empire Team
              </h2>
            </div>
            
            {/* Team photo if available */}
            <div className="mb-12 rounded-3xl overflow-hidden shadow-lg border border-[#c9a45c]/20 bg-[#f0e8eb] aspect-[16/9]">
              <Photo
                filename="team-photo.jpg"
                alt="The Sheillz Empire professional wellness team"
                fill
                className="w-full h-full object-cover"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {siteConfig.team.map((member, idx) => (
                <div key={idx} className="bg-white rounded-3xl p-6 shadow-sm border border-[#0b4f6c]/10 text-center">
                  <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-4 border-2 border-[#c9a45c]/50 bg-[#f0e8eb]">
                    <Photo
                      filename={member.photo}
                      alt={member.name}
                      width={200}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-display text-lg font-bold text-[#062a3a]">{member.name}</h3>
                  <p className="text-xs font-semibold tracking-wider text-[#1b7f9e] uppercase mb-3">{member.role}</p>
                  <p className="text-sm text-[#062a3a]/75 leading-relaxed">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
