import { Gallery } from "@/components/ui/gallery";

export const GallerySection: React.FC<SectionProps> = ({ anchor }) => {
  return (
    <section id={anchor}>
      <div className="flex justify-center">
        <div>
          <div className="text-primary font-semibold text-4xl max-w-[580px] text-center">
            “A journey of a thousand miles
            begins with a single step”
          </div>
          <div className="text-center text-secondaryDark italic mt-4 font-libreBodoni">
            - Lao Tzu
          </div>
          <div className="flex justify-center mt-16">
            <Gallery />
          </div>
        </div>
      </div>
    </section>
  );
}
