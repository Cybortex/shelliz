"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Photo } from "./Photo";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Menu" },
  { href: "/gallery", label: "Gallery" },
  { href: "/training", label: "Academy" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function FloatingNav() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on page change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <header className="fixed top-4 md:top-6 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
        <nav
          aria-label="Main Navigation"
          className={`pointer-events-auto flex items-center justify-between gap-4 md:gap-8 px-4 md:px-7 py-2.5 md:py-3 rounded-full transition-all duration-300 ${
            isScrolled
              ? "bg-[#0b4f6c]/95 text-white shadow-xl shadow-[#0b4f6c]/20 backdrop-blur-md border border-[#c9a45c]/30"
              : "bg-[#0b4f6c]/85 text-white shadow-lg backdrop-blur-md border border-[#f9d5e1]/20"
          } max-w-4xl w-full sm:w-auto`}
        >
          {/* Brand Monogram / Wordmark */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a45c] rounded-full px-1 py-1"
          >
            <div className="w-8 h-8 rounded-full overflow-hidden bg-[#062a3a] border border-[#c9a45c] flex items-center justify-center shrink-0">
              <Photo
                filename="logo.png"
                alt="Sheillz Empire Logo"
                width={32}
                height={32}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-display font-semibold tracking-wider text-sm md:text-base leading-none text-white group-hover:text-[#f9d5e1] transition-colors">
                SHEILLZ EMPIRE
              </span>
              <span className="text-[9px] tracking-widest text-[#f9d5e1]/80 font-sans uppercase mt-0.5">
                Spa & Salon
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1.5 lg:gap-2">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-full text-xs lg:text-sm font-medium transition-all min-h-[44px] flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a45c] ${
                    isActive
                      ? "bg-[#1b7f9e] text-white shadow-inner font-semibold"
                      : "text-[#fff6f9]/90 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Action / Book Button */}
          <div className="hidden sm:flex items-center gap-2">
            <Link
              href="/book"
              className="px-4 py-2 rounded-full text-xs md:text-sm font-semibold bg-[#c9a45c] hover:bg-[#b8924b] text-[#062a3a] shadow-sm transition-all btn-ripple min-h-[44px] flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex items-center justify-center w-11 h-11 rounded-full text-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a45c]"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </nav>
      </header>

      {/* Mobile Drawer / Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-[#062a3a]/80 backdrop-blur-md flex flex-col items-center justify-center p-6 md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
        >
          <div className="w-full max-w-xs bg-[#0b4f6c] border border-[#c9a45c]/40 rounded-3xl p-6 shadow-2xl flex flex-col gap-3 text-center">
            <span className="font-display text-xl text-[#f9d5e1] font-semibold mb-2">
              Sheillz Empire
            </span>
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`py-3 px-4 rounded-xl text-base font-medium transition-colors min-h-[44px] flex items-center justify-center ${
                  pathname === link.href
                    ? "bg-[#1b7f9e] text-white font-semibold"
                    : "text-white/90 hover:bg-white/10"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2 border-t border-[#f9d5e1]/20 mt-1 flex flex-col gap-2">
              <Link
                href="/book"
                onClick={() => setIsOpen(false)}
                className="w-full py-3 px-4 rounded-xl text-base font-semibold bg-[#c9a45c] text-[#062a3a] shadow btn-ripple min-h-[44px] flex items-center justify-center"
              >
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
