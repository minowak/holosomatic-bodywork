import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { TitleSection } from "@/components/sections/title-section";
import { ServicesSection } from "@/components/sections/services-section";
import { GallerySection } from "@/components/sections/gallery-section";
import { AboutMeSection } from "@/components/sections/about-me-section";
import { AboutTheMethodSection } from "@/components/sections/about-the-method-section";
import { GetInTouchSection } from "../components/sections/contact-section";
import { Language } from "@/lib/utils";

export async function generateStaticParams() {
  return [
    { lang: "en" },
    { lang: "pl" },
    { lang: "ru" },
    { lang: "ua" },
  ];
}

export type PropsType = {
  params: Promise<{ lang: string }>;
};

export default async function Home({ params }: PropsType) {
  const p = await params;
  const lang = p.lang as Language;

  return (
    <div id="home">
      <Header lang={lang} />
      <main>
        <TitleSection anchor="title" lang={lang} />
        <ServicesSection anchor="services" lang={lang} />
        <GallerySection anchor="gallery" lang={lang} />
        <AboutMeSection anchor="about-me" lang={lang} />
        <AboutTheMethodSection anchor="about-the-method" lang={lang} />
        <GetInTouchSection anchor="contact" lang={lang} />
      </main>
      <Footer />
    </div>
  );
}
