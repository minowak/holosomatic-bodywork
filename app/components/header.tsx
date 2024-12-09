import { getTranslations } from "@/lib/utils";
import { Logo } from "@/components/svg/logo";
import { SectionProps } from "@/components/sections/types";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import ReactCountryFlag from "react-country-flag";
import Link from "next/link";

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
        <div className="flex-1 text-right text-sm font-semibold">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <ReactCountryFlag countryCode={lang === "en" ? "GB" : lang?.toUpperCase() || "UK"} className="mr-2" />
              <span className="font-bold">{(t as any)[lang || "en"]}</span>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem><Link href="/en" replace><ReactCountryFlag countryCode="GB" className="mr-2" />{t.en}</Link></DropdownMenuItem>
              <DropdownMenuItem><Link href="/pl" replace><ReactCountryFlag countryCode="PL" className="mr-2" />{t.pl}</Link></DropdownMenuItem>
              <DropdownMenuItem><Link href="/ru" replace><ReactCountryFlag countryCode="RU" className="mr-2" />{t.ru}</Link></DropdownMenuItem>
              <DropdownMenuItem><Link href="/ua" replace><ReactCountryFlag countryCode="UA" className="mr-2" />{t.ua}</Link></DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
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
