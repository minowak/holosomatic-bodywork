import Image from "next/image";
import { Logo } from "../svg/logo";
import { Button } from "../ui/button";
import { SectionHeader } from "../ui/section-header";
import bgImage from "../../assets/bg.avif";

export const TitleSection: React.FC<SectionProps> = ({ anchor }) => {
  return (
    <section id={anchor} className="bg-salmon text-primary text-center h-[600px] relative overflow-hidden">
      <div className="absolute inset-0" style={{
        backgroundImage: `url(${bgImage.src})`,
        objectFit: "cover",
        objectPosition: "50% 50%",
      }}></div>

      {/* <Image src={bgImage} alt="" className="absolute inset-0" /> */}
      <Logo className="z-10 size-[500px] opacity-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      <div className="z-20 absolute inset-0">
        <div className="flex flex-col gap-y-4 justify-center items-center h-full">
          <div>
            <div className="flex justify-center mb-8">
              <SectionHeader label="Getting in contact with your body" />
            </div>
            <div className="text-7xl font-semibold">
              <div>HOLOSOMATIC</div>
              <div>BODYWORK</div>
            </div>
          </div>
          <Button label="Get in touch" />
        </div>
      </div>
    </section >
  );
}
