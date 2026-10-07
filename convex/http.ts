import { httpRouter } from "convex/server";
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
