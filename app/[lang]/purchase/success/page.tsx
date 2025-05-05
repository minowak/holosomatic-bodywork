import { getTranslations, Language } from "@/lib/utils";
import { redirect } from "next/navigation";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "");

export type PropsType = {
  params: Promise<{ lang: string }>;
  searchParams?: Promise<{ session_id: string }>;
};

export default async function PurchaseSuccess({
  searchParams,
  params,
}: PropsType) {
  const p = await params;
  const lang = p.lang as Language;
  const t = getTranslations(lang);

  const sp = await searchParams;
  const session_id = sp?.["session_id"] || "";

  if (!session_id) {
    redirect(`/${lang}`);
  }

  const session = await stripe.checkout.sessions.retrieve(session_id);
  const customerEmail =
    session?.customer_details?.email || session?.customer_email;

  return (
    <div className="px-4 py-12 flex justify-center">
      <div>
        <h1 className="text-center font-bold text-xl text-primary">
          {t.payment_successful}
        </h1>
        <p className="text-center text-primary mt-2">
          {t.payment_successful_desc} {customerEmail}
        </p>
      </div>
    </div>
  );
}
