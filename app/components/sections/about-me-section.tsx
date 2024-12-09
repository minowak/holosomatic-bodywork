import Image from "next/image";
import { SectionHeader } from "../ui/section-header";
import image from "@/assets/images/4.webp";

export const AboutMeSection: React.FC<SectionProps> = ({ anchor }) => {
  return (
    <section id={anchor} className="py-16 bg-salmon">
      <div className="flex justify-center">
        <div>
          <div className="flex justify-center mb-4">
            <SectionHeader label="ABOUT ME" stripeColor="bg-white" className="font-semibold" />
          </div>
          <div className="bg-red-600 relative h-[853px] w-[845px] overflow-hidden">
            <Image src={image} alt="" className="-mt-[50px]" />
            <div className="bg-white absolute text-primary left-10 right-10 bottom-32 p-10 text-center">
              I am a facilitator of <a className="underline cursor-pointer" href="https://innercamp.com/product/bodywork-teacher-training/" rel="noopener noreferrer" target="_blank">Holosomatic BODY Therapy®.</a> Passionate about biohacking, constantly exploring ways to optimize both body and mind. In addition I am an avid traveler and a creative spirit, always exploring new forms of artistic expression. With a deep interest in wellness, self-development, and alternative healing methods, I bring a holistic approach to everything I do, helping others to improve their quality of life in a balanced and mindful way. I also enjoy making sugar-free vegan pastries.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
