import React from "react";
import { Metadata } from "next";
import { siteConfig, buildWhatsAppUrl, buildPhoneCallUrl } from "@/lib/site";
import { Photo } from "@/components/Photo";
import { WaveDivider } from "@/components/WaveDivider";

export const metadata: Metadata = {
  title: "Contact & Directions",
  description: "Find Sheillz Empire spa and salon in Garki, Abuja. View our opening hours, address, and contact information.",
};

export default function ContactPage() {
  const whatsappUrl = buildWhatsAppUrl({});
  const phoneUrl = buildPhoneCallUrl();

  return (
    <div className="flex flex-col min-h-screen pt-32 pb-24 bg-[#fff6f9]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-8 h-[2px] bg-[#c9a45c]" aria-hidden="true" />
            <span className="text-xs uppercase tracking-widest font-bold text-[#1b7f9e]">
              Connect With Us
            </span>
            <span className="w-8 h-[2px] bg-[#c9a45c]" aria-hidden="true" />
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-black text-[#0b4f6c] tracking-tight">
            Contact & Directions
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Contact Details */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white p-6 md:p-8 rounded-3xl border border-[#c9a45c]/30 shadow-lg">
              <h2 className="font-display text-2xl font-bold text-[#0b4f6c] mb-6 border-b border-[#0b4f6c]/10 pb-4">
                Get In Touch
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xs uppercase tracking-widest font-bold text-[#1b7f9e] mb-1">
                    Enquiries & Booking
                  </h3>
                  <div className="flex flex-col gap-3 mt-3">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-[#25D366]/10 text-[#062a3a] hover:bg-[#25D366]/20 transition-colors border border-[#25D366]/30 font-semibold"
                    >
                      <svg className="w-5 h-5 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.888 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.711 1.456h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      {siteConfig.contact.whatsappDisplay}
                    </a>
                    
                    <a
                      href={phoneUrl}
                      className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-[#0b4f6c]/5 text-[#062a3a] hover:bg-[#0b4f6c]/10 transition-colors border border-[#0b4f6c]/20 font-semibold"
                    >
                      <svg className="w-5 h-5 text-[#0b4f6c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      {siteConfig.contact.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div>
                  <h3 className="text-xs uppercase tracking-widest font-bold text-[#1b7f9e] mb-2">
                    Social Media
                  </h3>
                  <a
                    href={siteConfig.contact.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#062a3a] hover:text-[#c9a45c] transition-colors"
                  >
                    <svg className="w-5 h-5 text-[#c9a45c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth="2" />
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" strokeWidth="2" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                    {siteConfig.contact.instagramHandle}
                  </a>
                </div>

                <div>
                  <h3 className="text-xs uppercase tracking-widest font-bold text-[#1b7f9e] mb-2">
                    Operating Hours
                  </h3>
                  <div className="space-y-1.5 text-sm text-[#062a3a]/80 font-medium">
                    <p>{siteConfig.contact.hours.weekday}</p>
                    <p>{siteConfig.contact.hours.weekend}</p>
                    <p className="text-xs italic text-[#1b7f9e] mt-2 bg-[#1b7f9e]/5 p-2 rounded-lg inline-block">
                      {siteConfig.contact.hours.note}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Location & Map */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-[#0b4f6c] p-6 md:p-8 rounded-3xl shadow-lg text-white">
              <h2 className="font-display text-2xl font-bold text-[#f9d5e1] mb-2">
                Our Location
              </h2>
              <p className="text-lg font-medium leading-relaxed mb-6">
                {siteConfig.contact.address}, {siteConfig.contact.city}, {siteConfig.contact.country}
              </p>
              
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(
                  `${siteConfig.name}, ${siteConfig.contact.address}, ${siteConfig.contact.city}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold bg-[#c9a45c] text-[#062a3a] hover:bg-[#b8924b] transition-all btn-ripple shadow-md"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Get Directions via Google Maps</span>
              </a>
            </div>

            <div className="rounded-3xl overflow-hidden border border-[#c9a45c]/40 shadow-lg bg-[#f0e8eb] aspect-[16/9]">
              <Photo
                filename="location-front.jpg"
                alt="Exterior view of Sheillz Empire spa in Abuja"
                fill
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
