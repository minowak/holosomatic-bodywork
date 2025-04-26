import Stripe from "stripe";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "");

export async function POST(req: NextApiRequest) {
  const requestUrl = new URL(req.url || "");
  const origin = requestUrl.origin;
  const lang = requestUrl.searchParams.get('lang') || 'en'
  const priceId = requestUrl.searchParams.get('price')

  if (!priceId) {
    return NextResponse.error()
  }

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${origin}/${lang}/purchase/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${origin}/${lang}/purchase/cancel`,
  });

  return NextResponse.json({ id: session.id })
}
