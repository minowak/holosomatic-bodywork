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
            <SectionHeader label="ABOUT ME" stripeColor="bg-white" className="font-bold" />
          </div>
          <div className="bg-red-600 relative h-[853px] w-[845px] overflow-hidden">
            <Image src={image} alt="" className="-mt-[50px]" />
            <div className="bg-white absolute text-primary left-10 right-10 bottom-32 p-10 text-center font-thin">
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
