import { getTranslations } from "@/lib/utils";
import { Logo } from "./svg/logo";
import { SectionProps } from "./sections/types";

export const Header: React.FC<SectionProps> = ({ lang }) => {
  const t = getTranslations(lang);

  return (
    <header className="sticky top-0 z-50 shadow-md text-primary px-8 py-4 bg-white">
      <div className="flex justify-between gap-4">
        <div className="flex gap-4 items-center flex-1">
          <div><Logo className="size-8" /></div>
          <div>
            <span className="font-bold mr-2">Yuliia Pinchuk</span>
            {t.facilitator}
          </div>
        </div>
        <menu className="flex gap-4 flex-1 justify-center">
          <MenuItem label={t.home} anchor="home" />
          <MenuItem label={t.services} anchor="services" />
          <MenuItem label={t.about} anchor="about-me" />
          <MenuItem label={t.method} anchor="about-the-method" />
          <MenuItem label={t.contact} anchor="contact" />
        </menu>
        <div className="flex-1 text-right">
          English
        </div>
      </div>
    </header>
  );
}

type MenuItemProps = {
  label: string;
  anchor?: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ label, anchor }) => {
  return <div className="duration-150 hover:text-secondary cursor-pointer">
    <a href={"#" + anchor}>{label}</a>
  </div>
}
