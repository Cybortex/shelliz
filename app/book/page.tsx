"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { allServices, buildWhatsAppUrl, siteConfig } from "@/lib/site";
import { WaveDivider } from "@/components/WaveDivider";

export default function BookingPage() {
  const searchParams = useSearchParams();
  const prefilledService = searchParams.get("service") || "";

  const [formData, setFormData] = useState({
    service: prefilledService,
    date: "",
    time: "",
    name: "",
    phone: "",
    notes: "",
  });

  // Re-sync if URL params change
  useEffect(() => {
    if (prefilledService) {
      setFormData((prev) => ({ ...prev, service: prefilledService }));
    }
  }, [prefilledService]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const url = buildWhatsAppUrl(formData);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="flex flex-col min-h-screen pt-32 pb-24 bg-[#fff6f9]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-8 h-[2px] bg-[#c9a45c]" aria-hidden="true" />
            <span className="text-xs uppercase tracking-widest font-bold text-[#1b7f9e]">
              Reservations
            </span>
            <span className="w-8 h-[2px] bg-[#c9a45c]" aria-hidden="true" />
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-black text-[#0b4f6c] tracking-tight">
            Book Appointment
          </h1>
          <p className="mt-4 text-base md:text-lg text-[#062a3a]/80 mx-auto">
            Secure your session at Sheillz Empire. Please fill in your preferred details, and we will confirm your reservation via WhatsApp.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-6 md:p-10 shadow-xl border border-[#c9a45c]/30">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-xl font-display font-bold text-[#0b4f6c] border-b border-[#0b4f6c]/10 pb-2">
                1. Service Details
              </h2>
              
              <div>
                <label htmlFor="service" className="block text-sm font-semibold text-[#062a3a] mb-1.5">
                  Select Treatment <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full h-12 px-4 pr-10 bg-[#f9d5e1]/10 border border-[#0b4f6c]/20 rounded-xl text-sm font-medium text-[#062a3a] focus:outline-none focus:ring-2 focus:ring-[#0b4f6c] appearance-none"
                  >
                    <option value="" disabled>-- Please select a service --</option>
                    {allServices.map((svc) => (
                      <option key={svc.id} value={svc.name}>
                        {svc.number}. {svc.name}
                      </option>
                    ))}
                    <option value="Other">Other / Unsure (I need a consultation)</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#0b4f6c]">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="date" className="block text-sm font-semibold text-[#062a3a] mb-1.5">
                    Preferred Date <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="w-full h-12 px-4 bg-[#f9d5e1]/10 border border-[#0b4f6c]/20 rounded-xl text-sm font-medium text-[#062a3a] focus:outline-none focus:ring-2 focus:ring-[#0b4f6c]"
                  />
                </div>
                <div>
                  <label htmlFor="time" className="block text-sm font-semibold text-[#062a3a] mb-1.5">
                    Preferred Time
                  </label>
                  <input
                    type="time"
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full h-12 px-4 bg-[#f9d5e1]/10 border border-[#0b4f6c]/20 rounded-xl text-sm font-medium text-[#062a3a] focus:outline-none focus:ring-2 focus:ring-[#0b4f6c]"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-4 pt-4">
              <h2 className="text-xl font-display font-bold text-[#0b4f6c] border-b border-[#0b4f6c]/10 pb-2">
                2. Your Details
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-[#062a3a] mb-1.5">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your name"
                    className="w-full h-12 px-4 bg-[#f9d5e1]/10 border border-[#0b4f6c]/20 rounded-xl text-sm font-medium text-[#062a3a] placeholder:text-[#062a3a]/40 focus:outline-none focus:ring-2 focus:ring-[#0b4f6c]"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-[#062a3a] mb-1.5">
                    Phone / WhatsApp Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+234..."
                    className="w-full h-12 px-4 bg-[#f9d5e1]/10 border border-[#0b4f6c]/20 rounded-xl text-sm font-medium text-[#062a3a] placeholder:text-[#062a3a]/40 focus:outline-none focus:ring-2 focus:ring-[#0b4f6c]"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="notes" className="block text-sm font-semibold text-[#062a3a] mb-1.5">
                  Additional Notes (Optional)
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Any special requests or details we should know..."
                  className="w-full p-4 bg-[#f9d5e1]/10 border border-[#0b4f6c]/20 rounded-xl text-sm font-medium text-[#062a3a] placeholder:text-[#062a3a]/40 focus:outline-none focus:ring-2 focus:ring-[#0b4f6c] resize-y"
                ></textarea>
              </div>
            </div>

            <div className="pt-6">
              <button
                type="submit"
                className="w-full h-14 rounded-xl bg-[#c9a45c] hover:bg-[#b8924b] text-[#062a3a] font-bold text-base transition-all btn-ripple shadow-lg flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0b4f6c]"
              >
                <svg className="w-5 h-5 text-[#062a3a]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.888 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.711 1.456h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span>Complete Booking on WhatsApp</span>
              </button>
              <p className="text-center text-[11px] text-[#062a3a]/60 mt-4">
                By clicking this button, you will be redirected to WhatsApp to confirm your appointment with our team.
              </p>
            </div>
          </form>
        </div>
      </div>
      <WaveDivider color="text-[#0b4f6c]/5" bgColor="bg-transparent" className="mt-20" />
    </div>
  );
}
