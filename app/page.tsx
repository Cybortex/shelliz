import React from "react";
import Link from "next/link";
import { siteConfig, serviceGroups, buildPhoneCallUrl, buildWhatsAppUrl } from "@/lib/site";
import { Photo } from "@/components/Photo";
import { QuickBook } from "@/components/QuickBook";
import { Marquee } from "@/components/Marquee";
import { WaveDivider } from "@/components/WaveDivider";
import { MenuGroup } from "@/components/MenuGroup";
import { Bento } from "@/components/Bento";

export default function HomePage() {
  const phoneUrl = buildPhoneCallUrl();
  const whatsappUrl = buildWhatsAppUrl({
    notes: "Hello Sheillz Empire, I would like to enquire about your signature spa treatments.",
  });

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      {/* 1. Hero Section (Full-bleed hero with ocean gradient overlay & QuickBook card) */}
      <section className="relative min-h-[92vh] md:min-h-screen flex items-end justify-center bg-[#062a3a] text-white pt-28 pb-16 md:pb-24">
        {/* Full-bleed background image with Photo component fallback */}
        <div className="absolute inset-0 z-0">
          <Photo
            filename="hero-main.jpg"
            alt="Sheillz Empire luxury spa sanctuary interior"
            fill
            priority
            className="w-full h-full object-cover object-center"
          />
          {/* Ocean gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b4f6c] via-[#0b4f6c]/75 to-[#062a3a]/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#062a3a]/80 via-transparent to-transparent hidden md:block" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-end">
            {/* Oversized headline bottom-left */}
            <div className="lg:col-span-7 space-y-5 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-[#c9a45c]/40 text-xs font-semibold tracking-widest uppercase text-[#f9d5e1]">
                <span className="w-2 h-2 rounded-full bg-[#c9a45c] animate-pulse" />
                <span>Abuja Premier Spa & Salon</span>
              </div>

              <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-[1.05] tracking-tight">
                Rule your <span className="italic font-normal text-[#f9d5e1]">glow.</span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-[#f9d5e1]/90 max-w-xl leading-relaxed font-sans font-light">
                {siteConfig.heroSubline}
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  href="/book"
                  className="px-7 py-3.5 rounded-full text-sm md:text-base font-bold bg-[#c9a45c] text-[#062a3a] hover:bg-[#b8924b] transition-all btn-ripple shadow-xl flex items-center justify-center min-h-[44px]"
                >
                  Book an Appointment
                </Link>
                <a
                  href={phoneUrl}
                  className="px-6 py-3.5 rounded-full text-sm md:text-base font-semibold bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm border border-white/20 transition-all flex items-center justify-center min-h-[44px]"
                >
                  Call Concierge
                </a>
              </div>
            </div>

            {/* Overlapping QuickBook Card (2. QuickBook card) */}
            <div className="lg:col-span-5 w-full">
              <QuickBook />
            </div>
          </div>
        </div>
      </section>

      {/* Drifting Wave Divider into Marquee */}
      <WaveDivider color="text-[#0b4f6c]" bgColor="bg-[#0b4f6c]" flip />

      {/* 3. Marquee of Service Names */}
      <Marquee />

      {/* Drifting Wave Divider into Menu */}
      <WaveDivider color="text-[#fff6f9]" bgColor="bg-[#0b4f6c]" />

      {/* 4. The Empire Menu (Home shows all groups, each row links to /book?service=...) */}
      <section id="menu" className="py-16 md:py-24 bg-[#fff6f9] text-[#062a3a] relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-8 h-[2px] bg-[#c9a45c]" aria-hidden="true" />
              <span className="text-xs uppercase tracking-widest font-bold text-[#1b7f9e]">
                Editorial Treatment Menu
              </span>
              <span className="w-8 h-[2px] bg-[#c9a45c]" aria-hidden="true" />
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-[#0b4f6c] tracking-tight">
              The Empire Menu
            </h2>
            <p className="mt-3 text-base text-[#062a3a]/80 leading-relaxed font-sans">
              Carefully curated treatments crafted with regal technique, soothing botanical oils, and immaculate hygiene standards.
            </p>
          </div>

          <div className="space-y-4">
            {serviceGroups.map((group) => (
              <MenuGroup key={group.id} group={group} showImage={false} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-bold bg-[#0b4f6c] text-white hover:bg-[#1b7f9e] transition-all btn-ripple shadow-md min-h-[44px]"
            >
              <span>Explore Complete Menu & Categories</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Signature Feature (Arch or circle image with owner's most popular service) */}
      <section className="py-16 md:py-24 bg-[#f9d5e1]/40 border-y border-[#c9a45c]/25 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 items-center">
            {/* Arch Mask Feature Image */}
            <div className="md:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm">
                <div className="mask-arch overflow-hidden bg-[#f0e8eb] border-2 border-[#c9a45c]/40 shadow-2xl">
                  <Photo
                    filename="signature.jpg"
                    alt="Sheillz Empire signature spa treatment ritual"
                    width={800}
                    height={1000}
                    aspectRatio="aspect-[4/5]"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Floating Decorative Gold Seal */}
                <div className="absolute -bottom-4 -right-4 bg-[#0b4f6c] text-[#f9d5e1] border border-[#c9a45c] rounded-full p-4 shadow-xl text-center select-none">
                  <span className="block font-display text-xs font-bold uppercase tracking-wider">
                    Signature
                  </span>
                  <span className="block text-[10px] text-[#c9a45c]">
                    Ritual
                  </span>
                </div>
              </div>
            </div>

            {/* Feature Text */}
            <div className="md:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2">
                <span className="text-xs uppercase tracking-widest font-bold text-[#1b7f9e]">
                  Signature Highlight
                </span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#0b4f6c] leading-tight">
                Regal Wellness, Customized For You
              </h2>
              <p className="text-base text-[#062a3a]/80 leading-relaxed font-sans">
                Our signature wellness rituals combine targeted muscle release, delicate botanical exfoliating scrubs, and deep hydration. Designed for guests seeking an oasis of tranquil calm in Abuja.
              </p>
              <ul className="space-y-2 text-sm text-[#062a3a]/85 font-medium">
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c9a45c]" />
                  <span>Private, pristine treatment chambers</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c9a45c]" />
                  <span>Personalized oil scents and pressure levels</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c9a45c]" />
                  <span>Full-body polishing and radiant post-treatment glow</span>
                </li>
              </ul>
              <div className="pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold bg-[#c9a45c] text-[#062a3a] hover:bg-[#b8924b] transition-all btn-ripple shadow-md min-h-[44px]"
                >
                  <span>Enquire on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Training Band in Ocean Blue */}
      <section className="py-16 md:py-20 bg-[#0b4f6c] text-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8 space-y-4">
              <span className="inline-block text-xs uppercase tracking-widest font-bold text-[#c9a45c]">
                Professional Academy
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#fff6f9] leading-tight">
                Master the Art of Spa Therapy & Nail Artistry
              </h2>
              <p className="text-sm md:text-base text-[#f9d5e1]/90 max-w-2xl leading-relaxed">
                Step into a rewarding beauty career. Receive comprehensive, hands-on instruction covering spa hygiene, massage anatomy, facials, and acrylic nail design.
              </p>
            </div>
            <div className="md:col-span-4 flex flex-col sm:flex-row md:flex-col gap-3">
              <Link
                href="/training"
                className="px-6 py-3.5 rounded-full text-sm font-bold bg-[#c9a45c] text-[#062a3a] hover:bg-[#b8924b] text-center transition-all btn-ripple shadow-lg min-h-[44px]"
              >
                View Academy Syllabus
              </Link>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-full text-sm font-semibold bg-white/10 hover:bg-white/20 text-white text-center border border-white/20 transition-all min-h-[44px]"
              >
                Enquire via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Reviews Section (Hidden if empty per AGENTS.md) */}
      {siteConfig.reviews.length > 0 && (
        <section className="py-16 bg-[#fff6f9] text-[#062a3a]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-3xl font-bold text-center text-[#0b4f6c] mb-8">
              Client Experiences
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {siteConfig.reviews.map((rev, i) => (
                <div key={i} className="p-6 rounded-2xl bg-white border border-[#c9a45c]/30 shadow-sm">
                  <p className="text-sm italic text-[#062a3a]/80 mb-4">&ldquo;{rev.text}&rdquo;</p>
                  <p className="font-bold text-xs uppercase text-[#0b4f6c]">{rev.author}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 8. Gallery Bento (6 tiles on Home) */}
      <section className="py-16 md:py-24 bg-[#fff6f9] text-[#062a3a]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-widest font-bold text-[#1b7f9e]">
              Visual Showcase
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#0b4f6c] mt-1">
              Sanctuary Gallery
            </h2>
            <p className="mt-2 text-sm md:text-base text-[#062a3a]/75">
              Glimpse the soothing suites, meticulous treatments, and serene atmosphere at Sheillz Empire.
            </p>
          </div>

          <Bento maxItems={6} showViewAll={true} />
        </div>
      </section>

      {/* Drifting Wave Divider into Visit Section */}
      <WaveDivider color="text-[#f9d5e1]/50" bgColor="bg-[#fff6f9]" />

      {/* 9. Visit Section (Address, Hours, Map, Directions) */}
      <section id="visit" className="py-16 md:py-24 bg-[#f9d5e1]/50 text-[#062a3a]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs uppercase tracking-widest font-bold text-[#1b7f9e]">
                  Visit Sheillz Empire
                </span>
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#0b4f6c] mt-1">
                  Location & Directions
                </h2>
                <p className="mt-2 text-sm md:text-base text-[#062a3a]/80">
                  Located in the heart of Garki, Abuja. Our sanctuary is easily accessible with convenient street parking.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white/80 border border-[#c9a45c]/30 shadow-sm">
                  <div className="p-2.5 rounded-xl bg-[#0b4f6c] text-[#f9d5e1] shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-display text-base font-bold text-[#0b4f6c]">Spa Address</h3>
                    <p className="text-sm text-[#062a3a]/85 mt-0.5 leading-relaxed">
                      {siteConfig.contact.address}, {siteConfig.contact.city}, {siteConfig.contact.country}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white/80 border border-[#c9a45c]/30 shadow-sm">
                  <div className="p-2.5 rounded-xl bg-[#0b4f6c] text-[#f9d5e1] shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-display text-base font-bold text-[#0b4f6c]">Opening Hours</h3>
                    <p className="text-xs text-[#062a3a]/80 mt-0.5">{siteConfig.contact.hours.weekday}</p>
                    <p className="text-xs text-[#062a3a]/80">{siteConfig.contact.hours.weekend}</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(
                    `${siteConfig.name}, ${siteConfig.contact.address}, ${siteConfig.contact.city}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full text-xs md:text-sm font-semibold bg-[#0b4f6c] text-white hover:bg-[#1b7f9e] transition-colors btn-ripple min-h-[44px] flex items-center justify-center gap-2"
                >
                  <span>Open in Google Maps</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                <Link
                  href="/contact"
                  className="px-6 py-3 rounded-full text-xs md:text-sm font-semibold bg-white border border-[#0b4f6c]/30 text-[#0b4f6c] hover:bg-white/80 transition-colors min-h-[44px] flex items-center justify-center"
                >
                  Contact & Enquiries
                </Link>
              </div>
            </div>

            {/* Location Front Photo */}
            <div className="lg:col-span-6">
              <div className="rounded-3xl overflow-hidden border-2 border-[#c9a45c]/40 shadow-xl bg-[#f0e8eb] aspect-[3/2] relative">
                <Photo
                  filename="location-front.jpg"
                  alt="Sheillz Empire spa exterior entrance in Abuja"
                  fill
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
