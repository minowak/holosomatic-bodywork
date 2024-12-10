import Image from "next/image";
import { SectionHeader } from "../ui/section-header";
import image from "@/assets/images/4.webp";
import { SectionProps } from "./types";
import { getTranslations } from "@/lib/utils";

export const AboutMeSection: React.FC<SectionProps> = ({ anchor, lang }) => {
  const t = getTranslations(lang);

  return (
    <section id={anchor} className="bg-salmon">
      <div className="flex justify-center">
        <div>
          <div className="flex justify-center mb-4">
            <SectionHeader label={t.about} stripeColor="bg-white" className="font-bold" />
          </div>
          <div className="relative max-w-screen">
            <Image src={image} alt="" className="md:px-16 md:max-w-[750px] lg:max-w-[1000px] md:h-auto h-[700px]" style={{ objectFit: "cover" }} />
            <div className="bg-white absolute text-primary left-4 right-4 bottom-4 md:left-32 md:right-32 md:bottom-64 p-10 text-center font-thin">
              {t.about_me_1}
              <a className="underline cursor-pointer" href="https://innercamp.com/product/bodywork-teacher-training/" rel="noopener noreferrer" target="_blank">Holosomatic BODY Therapy®.</a>
              {t.about_me_2}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
