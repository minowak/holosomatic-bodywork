import bgImage from "@/assets/bg3.avif";
import { SectionHeader } from "@/components/ui/section-header";

export const AboutTheMethodSection: React.FC<SectionProps> = ({ anchor }) => {
  return (
    <section id={anchor} className="py-16 bg-white relative overflow-hidden"
      style={{
        backgroundImage: `url(${bgImage.src})`,
        backgroundSize: "cover",
      }}>
      <div className="flex justify-center">
        <div>
          <div className="flex justify-center mb-4">
            <SectionHeader label="ABOUT THE METHOD" stripeColor="bg-salmon" className="font-semibold" />
          </div>
          <div className="text-primary max-w-[710px]">
            Holosomatic BODY Therapy® focuses on Bodywork and Somatic techniques for emotional and trauma release, blending leading-edge bodywork methods with neuroscience, psychology, breathwork, movement therapy, and energy work. Holosomatic BODY Therapy® provides a direct approach to healing and understanding the links between diseases, traumas, blockages and energy stagnation.
            <br />
            It leverages Polyvagal Theory for stress responses, Wilhelm Reich's techniques for emotional release, and Peter Levine's somatic experiencing for trauma recovery.
            <br />
            A holistic approach
            <br />
            Conscious Connected Breathwork
            Regulate the body's physiological state, facilitating emotional release and energetic balance.
            Energy Work
            Draw from the wisdom of chakras, Taoist practices, and traditional Chinese medicine to harmonize the body's energy flow.
            Body Mapping
            Identify and work through areas of physical and emotional tension, utilizing vocal toning and sound healing practices to activate the body's natural healing capacities through vibration.
            Movement therapy
            Further support the process by encouraging the expression of emotions and the release of physical tension, promoting a holistic path to well-being that honors the interconnectedness of mind, body, and spirit.
          </div>
        </div>
      </div>
    </section>
  );
}
