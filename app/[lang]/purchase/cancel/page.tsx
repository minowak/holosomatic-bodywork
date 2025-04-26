export type PropsType = {
  params: Promise<{ lang: string }>;
};

export default async function PurchaseCanceled({ params }: PropsType) {
  return <div>
    <h1>Payment Canceled</h1>
    <p>The payment was canceled.</p>
  </div>
}
