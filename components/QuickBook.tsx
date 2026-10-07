"use client";

import React, { useState } from "react";
import { allServices, buildWhatsAppUrl } from "@/lib/site";

export function QuickBook({ className = "" }: { className?: string }) {
  const [selectedService, setSelectedService] = useState(allServices[0]?.name || "");
  const [selectedDate, setSelectedDate] = useState("");

  const handleConfirm = (e: React.FormEvent) => {
    e.preventDefault();
    const url = buildWhatsAppUrl({
      service: selectedService,
      date: selectedDate || "Next available date",
    });
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      className={`bg-white/95 backdrop-blur-md rounded-3xl p-6 md:p-8 shadow-2xl border border-[#c9a45c]/30 text-[#062a3a] ${className}`}
    >
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#0b4f6c]/10">
        <div>
          <span className="text-[11px] font-bold tracking-widest text-[#0b4f6c] uppercase">
            Quick Appointment
          </span>
          <h3 className="font-display text-xl md:text-2xl font-bold text-[#062a3a] leading-tight">
            Reserve Your Session
          </h3>
        </div>
        <div
          className="w-10 h-10 rounded-full bg-[#f9d5e1]/50 border border-[#c9a45c]/40 flex items-center justify-center text-[#0b4f6c]"
          aria-hidden="true"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </div>
      </div>

      <form onSubmit={handleConfirm} className="space-y-4">
        <div>
          <label htmlFor="qb-service" className="block text-xs font-semibold text-[#062a3a] mb-1.5">
            Select Desired Service
          </label>
          <div className="relative">
            <select
              id="qb-service"
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
              className="w-full h-12 px-3.5 pr-8 bg-[#fff6f9] border border-[#0b4f6c]/20 rounded-xl text-sm font-medium text-[#062a3a] focus:outline-none focus:ring-2 focus:ring-[#0b4f6c] appearance-none"
              required
            >
              {allServices.map((svc) => (
                <option key={svc.id} value={svc.name}>
                  {svc.number}. {svc.name} ({svc.group})
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-[#0b4f6c]">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        <div>
          <label htmlFor="qb-date" className="block text-xs font-semibold text-[#062a3a] mb-1.5">
            Preferred Date
          </label>
          <input
            type="date"
            id="qb-date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="w-full h-12 px-3.5 bg-[#fff6f9] border border-[#0b4f6c]/20 rounded-xl text-sm font-medium text-[#062a3a] focus:outline-none focus:ring-2 focus:ring-[#0b4f6c]"
          />
        </div>

        <button
          type="submit"
          className="w-full h-12 px-4 rounded-xl bg-[#c9a45c] hover:bg-[#b8924b] text-[#062a3a] font-semibold text-sm transition-all btn-ripple shadow-md flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0b4f6c]"
        >
          <svg className="w-4 h-4 text-[#062a3a]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.888 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.711 1.456h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          <span>Confirm on WhatsApp</span>
        </button>
      </form>
    </div>
  );
}
