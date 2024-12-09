import { Logo } from "@/components/svg/logo";
import { Button } from "@/components/ui/contact-button";
import { SectionHeader } from "@/components/ui/section-header";
import bgImage from "@/assets/bg.avif";

export const TitleSection: React.FC<SectionProps> = ({ anchor }) => {
  return (
    <section id={anchor} className="bg-salmon text-primary text-center h-[600px] relative overflow-hidden">
      <div className="absolute inset-0" style={{
        backgroundImage: `url(${bgImage.src})`,
        backgroundSize: "cover",
      }}></div>

      <Logo className="z-10 size-[500px] opacity-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      <div className="z-20 absolute inset-0">
        <div className="flex flex-col gap-y-4 justify-center items-center h-full">
          <div>
            <div className="flex justify-center mb-8">
              <SectionHeader label="Getting in contact with your body" stripeColor="bg-white" className="font-thin" />
            </div>
            <div className="text-7xl font-bold tracking-wide">
              <div>HOLOSOMATIC</div>
              <div>BODYWORK</div>
            </div>
          </div>
          <div className="mt-10">
            <Button label="Get in touch" href="#contact" />
          </div>
        </div>
      </div>
    </section >
  );
}
