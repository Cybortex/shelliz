"use client";

import React from "react";
import { useAuthActions } from "@convex-dev/auth/react";
import { useQuery, useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";

export default function AdminDashboard() {
  const { signOut } = useAuthActions();
  const bookings = useQuery(api.bookings.list) || [];
  const updateStatus = useMutation(api.bookings.updateStatus);

  return (
    <div className="min-h-screen bg-[#fff6f9] pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div>
            <h1 className="font-display text-3xl font-bold text-[#0b4f6c]">Empire Dashboard</h1>
            <p className="text-sm text-[#062a3a]/70">Manage bookings, services, and staff.</p>
          </div>
          <button
            onClick={() => void signOut()}
            className="px-4 py-2 bg-red-50 text-red-600 rounded-lg text-sm font-semibold hover:bg-red-100 transition-colors"
          >
            Sign Out
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-2xl shadow-sm border border-[#c9a45c]/20 p-6 overflow-x-auto">
              <h2 className="text-lg font-bold text-[#062a3a] mb-4">Recent Bookings</h2>
              {bookings.length === 0 ? (
                <div className="text-sm text-gray-500 text-center py-8">
                  No bookings found. Wait for clients to book or check your database connection.
                </div>
              ) : (
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-[#0b4f6c]/10 text-xs uppercase tracking-widest text-[#1b7f9e]">
                      <th className="py-3 px-2">Client</th>
                      <th className="py-3 px-2">Date/Time</th>
                      <th className="py-3 px-2">Ref</th>
                      <th className="py-3 px-2">Status</th>
                      <th className="py-3 px-2">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bookings.map((b: any) => (
                      <tr key={b._id} className="border-b border-gray-100 last:border-0 text-sm">
                        <td className="py-4 px-2 font-semibold text-[#062a3a]">
                          {b.customerName} <br/>
                          <span className="text-xs font-normal text-gray-500">{b.customerPhone}</span>
                        </td>
                        <td className="py-4 px-2">
                          {b.date} <br/>
                          <span className="text-xs text-gray-500">{b.startTime} - {b.endTime}</span>
                        </td>
                        <td className="py-4 px-2 font-mono text-xs">{b.reference}</td>
                        <td className="py-4 px-2">
                          <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                            b.status === 'confirmed' ? 'bg-green-100 text-green-700' :
                            b.status === 'pending' ? 'bg-yellow-100 text-yellow-700' :
                            'bg-gray-100 text-gray-700'
                          } `}>
                            {b.status}
                          </span>
                        </td>
                        <td className="py-4 px-2 flex gap-2">
                          <button onClick={() => updateStatus({ id: b._id, status: 'confirmed' })} className="text-xs px-2 py-1 bg-green-50 text-green-600 rounded hover:bg-green-100">Confirm</button>
                          <button onClick={() => updateStatus({ id: b._id, status: 'no_show' })} className="text-xs px-2 py-1 bg-red-50 text-red-600 rounded hover:bg-red-100">No Show</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-sm border border-[#c9a45c]/20 p-6">
              <h2 className="text-lg font-bold text-[#062a3a] mb-4">Quick Actions</h2>
              <div className="space-y-3">
                <button className="w-full text-left px-4 py-3 rounded-xl bg-[#f0e8eb] hover:bg-[#f9d5e1]/50 text-sm font-semibold text-[#0b4f6c] transition-colors">
                  + Add New Service
                </button>
                <button className="w-full text-left px-4 py-3 rounded-xl bg-[#f0e8eb] hover:bg-[#f9d5e1]/50 text-sm font-semibold text-[#0b4f6c] transition-colors">
                  + Block Dates
                </button>
                <button className="w-full text-left px-4 py-3 rounded-xl bg-[#f0e8eb] hover:bg-[#f9d5e1]/50 text-sm font-semibold text-[#0b4f6c] transition-colors">
                  Manage Staff
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
