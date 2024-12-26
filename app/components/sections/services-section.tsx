import { SectionHeader } from "@/components/ui/section-header";
import bgImage from "@/assets/bg2.avif";
import { SectionProps } from "./types";
import { getTranslations } from "@/lib/utils";

export const ServicesSection: React.FC<SectionProps> = ({ anchor, lang }) => {
  const t = getTranslations(lang);

  return (
    <section id={anchor} className="bg-white relative">
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url(${bgImage.src})`,
        backgroundSize: "cover",
        objectPosition: "50% 50%",
      }}></div>
      <div className="flex justify-center w-full">
        <div className="flex flex-col gap-y-16 justify-center items-center h-full">
          <SectionHeader
            label={t.services}
            stripeColor="bg-white"
            className="text-primary font-bold tracking-widest" />
          <div className="md:flex justify-between gap-32 max-w-[1000px]">
            <ServiceSection
              number="01"
              title={t.individual_session}
              desc={t.individual_session_description}
              price={`${t.session_duration} - 100zł`}
            />
            <ServiceSection
              number="02"
              title={t.group_session}
              desc={t.group_session_description}
              price={`${t.session_duration} - 50zł`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

type ServiceSectionProps = {
  number: string;
  title: string;
  desc: string;
  price: string;
}

export const ServiceSection: React.FC<ServiceSectionProps> = ({ number, title, desc, price }) => {
  return (
    <div className="space-y-4 mx-8 md:mx-0 mb-16 md:mb-0">
      <div className="flex gap-4 items-end">
        <div className="text-secondaryDark italic text-5xl font-semibold font-libreBodoni">{number}</div>
        <div className="text-primary font-bold">{title}</div>
      </div>
      <div className="text-primary ml-[70px]">
        {desc}
        <div className="pt-8 italic text-secondaryDark font-semibold text-xl font-libreBodoni">
          {price}
        </div>
      </div>
    </div >
  );
}
