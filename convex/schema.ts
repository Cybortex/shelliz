import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";
import { authTables } from "@convex-dev/auth/server";

export default defineSchema({
  ...authTables,
  
  services: defineTable({
    name: v.string(),
    description: v.optional(v.string()),
    durationMinutes: v.number(),
    price: v.optional(v.number()), // optional if "ask for price"
    category: v.string(),
    image: v.optional(v.string()),
    isActive: v.boolean(),
  }),

  staff: defineTable({
    name: v.string(),
    role: v.string(),
    bio: v.optional(v.string()),
    photo: v.optional(v.string()),
    isActive: v.boolean(),
  }),

  bookings: defineTable({
    customerName: v.string(),
    customerPhone: v.string(),
    customerNotes: v.optional(v.string()),
    serviceId: v.id("services"),
    staffId: v.optional(v.id("staff")),
    date: v.string(), // YYYY-MM-DD
    startTime: v.string(), // HH:MM
    endTime: v.string(), // HH:MM
    status: v.union(
      v.literal("pending"),
      v.literal("confirmed"),
      v.literal("cancelled"),
      v.literal("completed"),
      v.literal("no_show")
    ),
    paymentStatus: v.union(
      v.literal("unpaid"),
      v.literal("deposit_paid"),
      v.literal("fully_paid")
    ),
    reference: v.string(),
  }).index("by_date", ["date"]),

  availability: defineTable({
    dayOfWeek: v.number(), // 0 = Sunday, 1 = Monday...
    startTime: v.string(), // HH:MM
    endTime: v.string(), // HH:MM
    isClosed: v.boolean(),
  }).index("by_day", ["dayOfWeek"]),

  blockedDates: defineTable({
    date: v.string(), // YYYY-MM-DD
    reason: v.optional(v.string()),
  }).index("by_date", ["date"]),

  settings: defineTable({
    key: v.string(),
    value: v.any(),
  }).index("by_key", ["key"]),

  tracking: defineTable({
    event: v.string(),
    metadata: v.optional(v.any()),
    url: v.string(),
  }).index("by_event", ["event"]),
});
