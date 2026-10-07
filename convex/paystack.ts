import { action } from "./_generated/server";
import { v } from "convex/values";

export const initializePayment = action({
  args: { bookingId: v.id("bookings"), amount: v.number(), email: v.string() },
  handler: async (ctx, args) => {
    const response = await fetch("https://api.paystack.co/transaction/initialize", {
      method: "POST",
      headers: {
        Authorization: \`Bearer \${process.env.PAYSTACK_SECRET_KEY}\`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: args.email,
        amount: args.amount * 100, // Paystack is in kobo
        reference: args.bookingId, // using bookingId as reference
        callback_url: \`\${process.env.NEXT_PUBLIC_SITE_URL}/book/success\`,
      }),
    });
    
    if (!response.ok) {
      throw new Error("Failed to initialize Paystack payment");
    }
    
    const data = await response.json();
    return data.data.authorization_url;
  },
});
