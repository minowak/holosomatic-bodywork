import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "");

export type PropsType = {
  params: Promise<{ lang: string }>;
  searchParams?: Promise<{ session_id: string }>;
};

export default async function PurchaseSuccess({ searchParams }: PropsType) {
  const sp = await searchParams
  const session_id = sp?.['session_id'] || ""


  const session = await stripe.checkout.sessions.retrieve(session_id);
  const customerEmail = session.customer_details?.email || session.customer_email

  return <div className="p-8">
    <h1 className="textlg font-semibold">Payment successful</h1>
    <p>Thank You!</p>
    <p>Order will be sent to: {customerEmail}</p>
  </div>
}
