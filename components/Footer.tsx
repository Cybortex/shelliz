import React from "react";
import Link from "next/link";
import { siteConfig, buildWhatsAppUrl, buildPhoneCallUrl } from "@/lib/site";
import { Photo } from "./Photo";

export function Footer() {
  const whatsappUrl = buildWhatsAppUrl({});
  const phoneUrl = buildPhoneCallUrl();

  return (
    <footer className="relative bg-[#0b4f6c] text-[#fff6f9] overflow-hidden pt-16 pb-24 md:pb-16 border-t border-[#c9a45c]/30">
      {/* Giant "SE" Monogram Watermark */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-5%] bottom-[-10%] select-none font-display font-black text-[22rem] md:text-[34rem] leading-none text-white/[0.03] tracking-tighter"
      >
        SE
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-[#f9d5e1]/15">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#062a3a] border border-[#c9a45c] flex items-center justify-center overflow-hidden shrink-0">
                <Photo
                  filename="logo.png"
                  alt="Sheillz Empire Logo"
                  width={40}
                  height={40}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold tracking-wider text-white">
                  SHEILLZ EMPIRE
                </h3>
                <p className="text-[11px] tracking-widest text-[#f9d5e1] uppercase">
                  Spa & Salon
                </p>
              </div>
            </div>
            <p className="text-sm text-[#fff6f9]/80 leading-relaxed max-w-sm">
              {siteConfig.description}
            </p>
            <div className="pt-2">
              <a
                href={siteConfig.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#c9a45c] hover:text-white transition-colors"
              >
                <span>Follow {siteConfig.contact.instagramHandle}</span>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-base font-bold text-[#f9d5e1] mb-4 uppercase tracking-wider text-xs">
              Empire Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-[#c9a45c] transition-colors">
                  Home Sanctuary
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#c9a45c] transition-colors">
                  The Empire Menu
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-[#c9a45c] transition-colors">
                  Client Gallery
                </Link>
              </li>
              <li>
                <Link href="/training" className="hover:text-[#c9a45c] transition-colors">
                  Professional Academy
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#c9a45c] transition-colors">
                  Our Philosophy
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#c9a45c] transition-colors">
                  Find Our Spa
                </Link>
              </li>
              <li>
                <Link href="/book" className="hover:text-[#c9a45c] transition-colors">
                  Book an Appointment
                </Link>
              </li>
            </ul>
          </div>

          {/* Location & Hours */}
          <div>
            <h4 className="font-display text-base font-bold text-[#f9d5e1] mb-4 uppercase tracking-wider text-xs">
              Location & Hours
            </h4>
            <div className="space-y-3 text-sm text-[#fff6f9]/85">
              <div>
                <span className="block font-semibold text-white">Address:</span>
                <p className="mt-0.5 leading-relaxed">
                  {siteConfig.contact.address}, {siteConfig.contact.city}, {siteConfig.contact.country}
                </p>
              </div>
              <div className="pt-1">
                <span className="block font-semibold text-white">Operating Hours:</span>
                <p className="mt-0.5 text-xs leading-relaxed text-[#f9d5e1]">
                  {siteConfig.contact.hours.weekday}
                </p>
                <p className="mt-0.5 text-xs leading-relaxed text-[#f9d5e1]">
                  {siteConfig.contact.hours.weekend}
                </p>
              </div>
            </div>
          </div>

          {/* Connect & Enquire */}
          <div>
            <h4 className="font-display text-base font-bold text-[#f9d5e1] mb-4 uppercase tracking-wider text-xs">
              Appointments
            </h4>
            <p className="text-xs text-[#fff6f9]/80 mb-4 leading-relaxed">
              Experience serene luxury. Secure your slot directly through WhatsApp or telephone.
            </p>
            <div className="flex flex-col gap-2.5">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold bg-[#25D366] text-white hover:bg-[#20b859] transition-all flex items-center justify-center gap-2 min-h-[44px]"
              >
                <span>Chat on WhatsApp</span>
              </a>
              <a
                href={phoneUrl}
                className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold bg-white/10 hover:bg-white/20 text-white transition-all flex items-center justify-center gap-2 min-h-[44px]"
              >
                <span>Call Concierge</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#fff6f9]/70">
          <p>© {new Date().getFullYear()} Sheillz Empire Beauty and Wellness. All rights reserved.</p>
          <p className="text-right">
            Mobile-First Luxury Spa Experience • Abuja, Nigeria
          </p>
        </div>
      </div>
    </footer>
  );
}
