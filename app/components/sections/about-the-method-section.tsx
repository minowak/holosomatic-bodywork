import bgImage from "@/assets/bg3.avif";
import { SectionHeader } from "@/components/ui/section-header";
import { SectionProps } from "./types";
import { getTranslations } from "@/lib/utils";

export const AboutTheMethodSection: React.FC<SectionProps> = ({ anchor, lang }) => {
  const t = getTranslations(lang);

  return (
    <section id={anchor} className="bg-white relative overflow-hidden"
      style={{
        backgroundImage: `url(${bgImage.src})`,
        backgroundSize: "cover",
      }}>
      <div className="flex justify-center">
        <div>
          <div className="flex justify-center mb-4">
            <SectionHeader label={t.about_method} stripeColor="bg-salmon" className="font-bold" />
          </div>
          <div className="text-primary max-w-[710px] font-thin leading-8">
            {t.method_desc_1}
            <br />
            {t.method_desc_2}
            <br />
            <div className="font-medium text-xl mt-4">
              {t.hollistic_approach}
            </div>
            <div className="font-medium mt-2">
              {t.connected_breathwork}
            </div>
            {t.conencted_breathwork_desc}
            <div className="font-medium mt-2">
              {t.energy_work}
            </div>
            {t.energy_work_desc}
            <div className="font-medium mt-2">
              {t.body_mapping}
            </div>
            {t.body_mapping_desc}
            <div className="font-medium mt-2">
              {t.movement_therapy}
            </div>
            {t.movement_therapy_desc}
          </div>
        </div>
      </div>
    </section>
  );
}
