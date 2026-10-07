import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const trackEvent = mutation({
  args: {
    event: v.string(),
    metadata: v.optional(v.any()),
    url: v.string(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("tracking", args);
  },
});

export const getStats = query({
  handler: async (ctx) => {
    const events = await ctx.db.query("tracking").collect();
    // Return simple agg
    return events.reduce((acc: any, curr) => {
      acc[curr.event] = (acc[curr.event] || 0) + 1;
      return acc;
    }, {});
  },
});
