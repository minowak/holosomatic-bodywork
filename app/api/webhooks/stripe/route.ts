import { sendEmail } from "@/lib/email";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "");
const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET || "";

export async function POST(req: Request) {
  const body = await req.text();
  const sig = (await headers()).get("stripe-signature") || "";

  let event;
  try {
    event = stripe.webhooks.constructEvent(body, sig, endpointSecret);
  } catch (err) {
    console.error("Error verifying webhook signature:", err);
    return NextResponse.error();
  }
  switch (event.type) {
    case "checkout.session.completed":
      // Handle successful payment
      const session = event.data.object;
      const lineItems = await stripe.checkout.sessions.listLineItems(
        session.id,
        {
          expand: ["data.price.product"],
        },
      );

      let message = "<p>Your order details</p>";

      lineItems.data.forEach((item) => {
        const product = item.price?.product as Stripe.Product;
        const msg = product.metadata["message"];
        message += `\n<p>${msg}</p>`;
      });
      message += "\n<p>Thank you for the purchase.</p>";
      const to = session.customer_details?.email || session.customer_email;
      if (to) {
        console.log(`Sending email:\n---\n${message}\n---\n to ${to}`);
        sendEmail(to, "Order Details", message);
      }
      break;
    default:
      console.log(`Unhandled event type: ${event.type}`);
  }

  return NextResponse.json({ received: true });
}
