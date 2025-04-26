import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "");

export async function GET() {
  const products = await stripe.products.list({ active: true })
  const prices = await stripe.prices.list()

  for (let p of products.data) {
    const priceId = p.default_price
    const value = prices.data.find((el) => el.id === priceId)
    p.default_price = value
  }

  return NextResponse.json(products)
}
