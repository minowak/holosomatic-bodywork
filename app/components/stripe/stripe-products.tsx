"use client";

import { Language, STRIPE_PUBLIC_KEY } from "@/lib/utils";
import { loadStripe } from "@stripe/stripe-js";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Stripe from "stripe";

const stripePromise = loadStripe(STRIPE_PUBLIC_KEY);

export default function StripeProducts() {
  const p = useParams();
  const lang = p.lang as Language;

  const [products, setProducts] = useState<Stripe.Product[]>();

  useEffect(() => {
    fetch("/api/products").then((res) => {
      res.json().then((d) => setProducts(d.data));
    });
  }, []);

  const handleCheckout = async (price: Stripe.Price) => {
    const stripe = await stripePromise;
    const response = await fetch(
      `/api/checkout-sessions/create?lang=${lang}&price=${price.id}`,
      {
        method: "POST",
      },
    );
    const session = await response.json();
    await stripe?.redirectToCheckout({ sessionId: session.id });
  };

  return (
    <>
      {products?.map((product) => {
        const price = product.default_price as Stripe.Price;
        return (
          <div
            key={product.id}
            className="cursor-pointer px-4 py-2 bg-primary text-white duration-150 hover:text-primary hover:bg-white border-2 border-primary"
            onClick={() => handleCheckout(price)}
          >
            <div className="font-semibold">{product.name}</div>
            <div className="text-center p-0 -mt-2 italic">
              {((price?.unit_amount || 0) / 100).toFixed(2)}
              {price?.currency.toUpperCase()}
            </div>
          </div>
        );
      })}
    </>
  );
}
