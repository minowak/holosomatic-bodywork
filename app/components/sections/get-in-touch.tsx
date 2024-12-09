import { SectionHeader } from "../ui/section-header";

export const GetInTouchSection: React.FC<SectionProps> = ({ anchor }) => {
  return (
    <section id={anchor}>
      <div className="flex justify-center bg-white py-16">
        <div>
          <SectionHeader label="GET IN TOUCH" className="font-semibold" />
        </div>
      </div>
    </section>
  );
}
