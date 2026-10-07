const fs = require('fs');
const path = require('path');

const files = {
  'convex/services.ts': `import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const list = query({
  handler: async (ctx) => {
    return await ctx.db.query("services").collect();
  },
});

export const add = mutation({
  args: {
    name: v.string(),
    description: v.optional(v.string()),
    durationMinutes: v.number(),
    price: v.optional(v.number()),
    category: v.string(),
    isActive: v.boolean(),
    image: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("services", args);
  },
});
`,
  'convex/bookings.ts': `import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const list = query({
  handler: async (ctx) => {
    return await ctx.db.query("bookings").order("desc").collect();
  },
});

export const create = mutation({
  args: {
    customerName: v.string(),
    customerPhone: v.string(),
    customerNotes: v.optional(v.string()),
    serviceId: v.id("services"),
    date: v.string(),
    startTime: v.string(),
    endTime: v.string(),
  },
  handler: async (ctx, args) => {
    const reference = Math.random().toString(36).substring(2, 10).toUpperCase();
    return await ctx.db.insert("bookings", {
      ...args,
      status: "pending",
      paymentStatus: "unpaid",
      reference,
    });
  },
});

export const updateStatus = mutation({
  args: { id: v.id("bookings"), status: v.string(), paymentStatus: v.optional(v.string()) },
  handler: async (ctx, args) => {
    const patch: any = { status: args.status };
    if (args.paymentStatus) patch.paymentStatus = args.paymentStatus;
    await ctx.db.patch(args.id, patch);
  }
});
`,
  'convex/staff.ts': `import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const list = query({
  handler: async (ctx) => {
    return await ctx.db.query("staff").collect();
  },
});
`,
  'convex/http.ts': `import { httpRouter } from "convex/server";
import { httpAction } from "./_generated/server";

const http = httpRouter();

http.route({
  path: "/paystack/webhook",
  method: "POST",
  handler: httpAction(async (ctx, request) => {
    // Paystack Phase 4 Webhook signature validation goes here
    const payload = await request.text();
    // Validate signature with crypto and update booking status
    console.log("Paystack Webhook Received:", payload);
    return new Response("OK", { status: 200 });
  }),
});

export default http;
`,
  'components/SignIn.tsx': `"use client";
import { useAuthActions } from "@convex-dev/auth/react";
import { useState } from "react";

export function SignIn() {
  const { signIn } = useAuthActions();
  const [password, setPassword] = useState("");
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fff6f9] px-4">
      <div className="bg-white p-8 rounded-3xl shadow-xl max-w-md w-full border border-[#c9a45c]/30 text-center">
        <div className="w-16 h-16 mx-auto bg-[#0b4f6c] rounded-full flex items-center justify-center mb-6">
          <span className="text-white font-display font-bold text-2xl">SE</span>
        </div>
        <h1 className="text-2xl font-bold text-[#0b4f6c] mb-2 font-display">Owner Access</h1>
        <p className="text-sm text-[#062a3a]/60 mb-8">Enter your master password to manage the empire.</p>
        
        <input 
          type="password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Admin Password"
          className="w-full h-12 px-4 rounded-xl border border-[#0b4f6c]/20 mb-4 focus:ring-2 focus:ring-[#0b4f6c] outline-none text-center tracking-widest"
        />
        <button 
          onClick={() => void signIn("password", { password, flow: "signIn" })}
          className="w-full h-12 bg-[#c9a45c] hover:bg-[#b8924b] text-[#062a3a] font-bold rounded-xl transition-all shadow-md"
        >
          Secure Login
        </button>
      </div>
    </div>
  );
}
`,
  'app/admin/layout.tsx': `"use client";
import { ConvexAuthProvider } from "@convex-dev/auth/react";
import { ConvexReactClient, useConvexAuth } from "convex/react";
import { SignIn } from "@/components/SignIn";
import { ReactNode } from "react";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL || "http://localhost:3001");

function AuthWrapper({ children }: { children: ReactNode }) {
  const { isAuthenticated, isLoading } = useConvexAuth();
  if (isLoading) return <div className="min-h-screen bg-[#fff6f9] flex items-center justify-center text-[#1b7f9e] font-semibold animate-pulse">Authenticating Secure Connection...</div>;
  if (!isAuthenticated) return <SignIn />;
  return <>{children}</>;
}

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <ConvexAuthProvider client={convex}>
      <AuthWrapper>{children}</AuthWrapper>
    </ConvexAuthProvider>
  );
}
`
};

for (const [filepath, content] of Object.entries(files)) {
  const fullPath = path.join(process.cwd(), filepath);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  fs.writeFileSync(fullPath, content);
}
