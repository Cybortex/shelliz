"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { WaveDivider } from "@/components/WaveDivider";
import { useQuery, useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";

function BookingForm() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const prefilledService = searchParams.get("service") || "";

  // Load from Convex
  const services = useQuery(api.services.list) || [];
  const createBooking = useMutation(api.bookings.create);

  const [formData, setFormData] = useState({
    serviceId: "",
    date: "",
    time: "",
    name: "",
    phone: "",
    notes: "",
  });

  // Re-sync if URL params change and we found a matching service
  useEffect(() => {
    if (prefilledService && services.length > 0) {
      const match = services.find((s: any) => s.name === prefilledService);
      if (match) {
        setFormData((prev) => ({ ...prev, serviceId: match._id }));
      }
    }
  }, [prefilledService, services]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createBooking({
        customerName: formData.name,
        customerPhone: formData.phone,
        customerNotes: formData.notes,
        serviceId: formData.serviceId as any,
        date: formData.date,
        startTime: formData.time,
        endTime: formData.time, // For now, assume fixed duration or calculate it
      });
      alert("Booking confirmed successfully! Awaiting deposit or final confirmation.");
      router.push("/");
    } catch (err) {
      console.error(err);
      alert("Failed to create booking. Please try again or use WhatsApp.");
    }
  };

  return (
    <div className="bg-white rounded-3xl p-6 md:p-10 shadow-xl border border-[#c9a45c]/30">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <h2 className="text-xl font-display font-bold text-[#0b4f6c] border-b border-[#0b4f6c]/10 pb-2">
            1. Service Details
          </h2>
          
          <div>
            <label htmlFor="serviceId" className="block text-sm font-semibold text-[#062a3a] mb-1.5">
              Select Treatment <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <select
                id="serviceId"
                name="serviceId"
                value={formData.serviceId}
                onChange={handleChange}
                required
                className="w-full h-12 px-4 pr-10 bg-[#f9d5e1]/10 border border-[#0b4f6c]/20 rounded-xl text-sm font-medium text-[#062a3a] focus:outline-none focus:ring-2 focus:ring-[#0b4f6c] appearance-none"
              >
                <option value="" disabled>-- Please select a service --</option>
                {services.map((svc: any) => (
                  <option key={svc._id} value={svc._id}>
                    {svc.name} - ₦{svc.price || "TBD"}
                  </option>
                ))}
              </select>
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
                required
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
            Confirm Reservation
          </button>
        </div>
      </form>
    </div>
  );
}

export default function BookingPage() {
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
            Secure your session at Sheillz Empire. Please fill in your preferred details, and we will confirm your reservation.
          </p>
        </div>

        <Suspense fallback={<div className="bg-white rounded-3xl p-6 md:p-10 shadow-xl border border-[#c9a45c]/30 min-h-[400px] flex items-center justify-center text-[#1b7f9e]">Loading form...</div>}>
          <BookingForm />
        </Suspense>
      </div>
      <WaveDivider color="text-[#0b4f6c]/5" bgColor="bg-transparent" className="mt-20" />
    </div>
  );
}
