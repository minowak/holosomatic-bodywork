import { getTranslations } from "@/lib/utils";
import { Logo } from "@/components/svg/logo";
import { SectionProps } from "@/components/sections/types";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import ReactCountryFlag from "react-country-flag";
import Link from "next/link";
import { MenuIcon } from "lucide-react";

export const Header: React.FC<SectionProps> = ({ lang }) => {
  const t = getTranslations(lang);

  const flagStyle = {
    fontSize: '2em',
    lineHeight: '0em',
  }

  const flagClass = "mr-2 md:mb-0 !h-auto border border-gray-300 mr-2";

  return (
    <header className="sticky top-0 z-50 shadow-md text-primary px-8 py-4 bg-white">
      <div className="flex justify-between gap-4 items-center">
        <div className="flex gap-4 items-center flex-1">
          <div><Logo className="size-8" /></div>
          <div className="flex gap-2 items-center">
            <div className="text-lg font-bold mr-2">Yuliia Pinchuk</div>
            <div className="lg:inline hidden">{t.facilitator}</div>
          </div>
        </div>
        <menu className="md:flex gap-4 flex-1 justify-center hidden items-center">
          <MenuItem lang={lang} label={t.home} anchor="home" />
          <MenuItem lang={lang} label={t.services} anchor="services" />
          <MenuItem lang={lang} label={t.about} anchor="about-me" />
          <MenuItem lang={lang} label={t.method} anchor="about-the-method" />
          <MenuItem lang={lang} label={t.contact} anchor="contact" />
        </menu>
        <div className="md:flex-1 text-right text-sm font-semibold">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <div className="flex items-center">
                <ReactCountryFlag svg countryCode={lang === "en" ? "GB" : lang?.toUpperCase() || "UK"} className={flagClass}
                  style={flagStyle} />
                <div className="font-bold hidden md:inline">{(t as any)[lang || "en"]}</div>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem><Link href="/en" replace><ReactCountryFlag svg className={flagClass} countryCode="GB" style={flagStyle} />{t.en}</Link></DropdownMenuItem>
              <DropdownMenuItem><Link href="/pl" replace><ReactCountryFlag svg className={flagClass} countryCode="PL" style={flagStyle} />{t.pl}</Link></DropdownMenuItem>
              <DropdownMenuItem><Link href="/ru" replace><ReactCountryFlag svg className={flagClass} countryCode="RU" style={flagStyle} />{t.ru}</Link></DropdownMenuItem>
              <DropdownMenuItem><Link href="/ua" replace><ReactCountryFlag svg className={flagClass} countryCode="UA" style={flagStyle} />{t.ua}</Link></DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="visible md:hidden cursor-pointer">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <MenuIcon className="size-8" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mr-8">
              <DropdownMenuItem className="text-xl"><a href="#home">{t.home}</a></DropdownMenuItem>
              <DropdownMenuItem className="text-xl"><a href="#services">{t.services}</a></DropdownMenuItem>
              <DropdownMenuItem className="text-xl"><a href="#about-me">{t.about}</a></DropdownMenuItem>
              <DropdownMenuItem className="text-xl"><a href="#about-the-method">{t.method}</a></DropdownMenuItem>
              <DropdownMenuItem className="text-xl"><a href="#contact">{t.contact}</a></DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}

type MenuItemProps = {
  lang?: string;
  label: string;
  anchor?: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ lang, label, anchor }) => {
  return <div className="duration-150 hover:text-secondary cursor-pointer text-center">
    <a href={`/${lang || "en"}#` + anchor}>{label}</a>
  </div>
}
