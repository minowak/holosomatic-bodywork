import { SectionHeader } from "../ui/section-header";
import instagram from "@/assets/instagram.avif";
import Image from 'next/image'
import { SectionProps } from "./types";
import { getTranslations } from "@/lib/utils";

export const GetInTouchSection: React.FC<SectionProps> = ({ anchor, lang }) => {
  const t = getTranslations(lang);

  return (
    <section id={anchor}>
      <div className="flex justify-center bg-white">
        <div>
          <div className="flex justify-center">
            <SectionHeader label={t.get_in_touch} className="font-bold" />
          </div>
          <div className="flex justify-center">
            <a href="https://www.instagram.com/yuliia.pinchuk/" rel="noopener noreferrer" target="_blank">
              <Image src={instagram} alt="" className="size-9" />
            </a>
          </div>
          <div className="mt-16 space-y-2 w-[570px]">
            <ContactFormInput label={t.name} type="text" id="name" />
            <ContactFormInput label={t.email} type="email" id="email" />
            <ContactFormInput label={t.your_request} type="textarea" id="request" />
            <div className="px-8 py-2 bg-salmon cursor-pointer duration-300 text-primary hover:text-salmon hover:bg-primary font-bold text-center">
              {t.send}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

type InputProps = {
  label: string;
  type: string;
  id: string;
}

export const ContactFormInput: React.FC<InputProps> = ({ label, type, id }) => {
  const cn = "bg-salmon w-full px-4 py-2 text-primary caret-primary outline-none focus:outline-none";
  return (
    <div>
      <label htmlFor={id} className="text-sm text-primary">{label}</label>
      <div>
        {type === "textarea" ?
          <textarea id={id} className={cn} rows={5} />
          :
          <input id={id} type={type} className={cn} />}
      </div>
    </div>
  );
}
