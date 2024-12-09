import { SectionHeader } from "@/components/ui/section-header";
import bgImage from "@/assets/bg2.avif";

export const ServicesSection: React.FC<SectionProps> = ({ anchor }) => {
  return (
    <section id={anchor} className="py-16 bg-white relative">
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url(${bgImage.src})`,
        backgroundSize: "cover",
        objectPosition: "50% 50%",
      }}></div>
      <div className="flex justify-center w-full">
        <div className="flex flex-col gap-y-4 justify-center items-center h-full">
          <SectionHeader
            label="SERVICES"
            stripeColor="bg-white"
            className="text-primary font-semibold tracking-widest" />
          <div className="flex justify-between gap-32 max-w-[1000px]">
            <ServiceSection
              number="01"
              title="INDIVIDUAL SESSION"
              desc="A session dedicated only to you during which I am observing the reactions of your body and helping to release long held trauma and tension. In the end of session I give you the instruments that you can use at home to connect to your body and better understand yourself."
              price="1.5H - 100zl"
            />
            <ServiceSection
              number="02"
              title="GROUP SESSION"
              desc="A session led in a group environment where you observe the reactions of your body and being directed on the movements needed for establishing connection with the body and releasing stagnant emotions and blockages. "
              price="1.5H - 50zl"
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
    <div className="space-y-4">
      <div className="flex gap-4 items-end">
        <div className="text-secondaryDark italic text-5xl font-semibold">{number}</div>
        <div className="text-primary font-semibold">{title}</div>
      </div>
      <div className="text-primary ml-[70px]">
        {desc}
        <div className="pt-8 italic text-secondaryDark font-semibold text-xl">
          {price}
        </div>
      </div>
    </div >
  );
}
