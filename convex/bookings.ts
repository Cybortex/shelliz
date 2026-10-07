import { mutation, query } from "./_generated/server";
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
