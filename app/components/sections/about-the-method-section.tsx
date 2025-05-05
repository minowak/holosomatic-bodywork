import bgImage from "@/assets/bg3.avif";
import { SectionHeader } from "@/components/ui/section-header";
import { SectionProps } from "./types";
import { getTranslations } from "@/lib/utils";
import StripeProducts from "../stripe/stripe-products";

export const AboutTheMethodSection: React.FC<SectionProps> = ({
  anchor,
  lang,
}) => {
  const t = getTranslations(lang);

  return (
    <section
      id={anchor}
      className="bg-white relative overflow-hidden"
      style={{ clipPath: "inset(0 0 0 0)" }}
    >
      <div
        className="fixed inset-0 -z-10"
        style={{
          backgroundImage: `url(${bgImage.src})`,
          backgroundSize: "cover",
        }}
      ></div>
      <div className="flex justify-center">
        <div>
          <div className="flex justify-center mb-4">
            <SectionHeader
              label={t.about_method}
              stripeColor="bg-salmon"
              className="font-bold"
            />
          </div>
          <div className="whitespace-pre-wrap text-primary max-w-[710px] font-thin leading-8 mx-8 md:mx-0">
            {t.method_desc_1}
            <br />
            {t.method_desc_2}
            <br />
            <div className="font-semibold text-xl mt-4">
              {t.hollistic_approach}
            </div>
            <div className="font-semibold mt-2">{t.connected_breathwork}</div>
            {t.conencted_breathwork_desc}
            <div className="font-semibold mt-2">{t.energy_work}</div>
            {t.energy_work_desc}
            <div className="font-semibold mt-2">{t.body_mapping}</div>
            {t.body_mapping_desc}
            <div className="font-semibold mt-2">{t.movement_therapy}</div>
            {t.movement_therapy_desc}
            <div className="font-semibold mt-2">{t.delta_cure_title}</div>
            {t.delta_cure}
          </div>
          <div className="whitespace-pre-wrap text-primary max-w-[710px] font-thin leading-8 mx-8 md:mx-0">
            <div className="font-bold text-xl mt-8">{t.audio_recordings}</div>
            <div
              id="recordings"
              className="flex flex-wrap gap-4 justify-center items-center mt-4"
            >
              <StripeProducts />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
