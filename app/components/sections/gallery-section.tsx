import { Gallery } from "@/components/ui/gallery";
import { SectionProps } from "./types";
import { getTranslations } from "@/lib/utils";

export const GallerySection: React.FC<SectionProps> = ({ anchor, lang }) => {
  const t = getTranslations(lang);

  return (
    <section id={anchor}>
      <div className="flex justify-center">
        <div>
          <div className="text-primary font-semibold text-4xl max-w-[580px] text-center">
            "{t.quote}"
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
