import { getTranslations, Language } from "@/lib/utils";

export type PropsType = {
  params: Promise<{ lang: Language }>;
};

export default async function PurchaseCanceled({ params }: PropsType) {
  const p = await params;
  const lang = p.lang as Language;
  const t = getTranslations(lang);

  return (
    <div className="px-4 py-12 flex justify-center">
      <div>
        <h1 className="text-center font-bold text-xl text-primary">
          {t.payment_canceled}
        </h1>
        <p className="text-center text-primary mt-2">
          {t.payment_canceled_desc}
        </p>
      </div>
    </div>
  );
}
