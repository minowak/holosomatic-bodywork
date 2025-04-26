"use client";

import { Language, STRIPE_PUBLIC_KEY } from "@/lib/utils";
import { loadStripe } from "@stripe/stripe-js";
import { useParams } from 'next/navigation'
import { useEffect, useState } from "react";
import Stripe from "stripe";

const stripePromise = loadStripe(STRIPE_PUBLIC_KEY)

export default function Purchase() {
  const p = useParams();
  const lang = p.lang as Language;

  const [products, setProducts] = useState<Stripe.Product[]>();

  useEffect(() => {
    fetch('/api/products').then((res) => {
      res.json().then((d) => setProducts(d.data))
    })
  }, []);

  const handleCheckout = async (price: Stripe.Price) => {
    const stripe = await stripePromise;
    const response = await fetch(`/api/checkout-sessions/create?lang=${lang}&price=${price.id}`, {
      method: "POST"
    })
    const session = await response.json();
    await stripe?.redirectToCheckout({ sessionId: session.id });
  }

  return (
    <main className="p-8">
      {products?.map((product) => {
        const price = product.default_price as Stripe.Price
        return <button
          key={product.id}
          className="p-4 bg-slate-800 text-white"
          onClick={() => handleCheckout(price)}>{product.name} ({((price?.unit_amount || 0) / 100).toFixed(2)} {price?.currency.toUpperCase()})</button>
      })}
    </main>
  );
}
