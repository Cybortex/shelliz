import { mutation, query } from "./_generated/server";
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
