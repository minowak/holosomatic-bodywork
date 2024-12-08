import Image from "next/image";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { TitleSection } from "./components/sections/title-section";
import { ServicesSection } from "./components/sections/services-section";
import { GallerySection } from "./components/sections/gallery-section";
import { AboutMeSection } from "./components/sections/about-me-section";
import { AboutTheMethodSection } from "./components/sections/about-the-method-section";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <TitleSection anchor="home" />
        <ServicesSection anchor="services" />
        <GallerySection anchor="gallery" />
        <AboutMeSection anchor="about-me" />
        <AboutTheMethodSection anchor="about-the-method" />
      </main>
      <Footer />
    </div>
  );
}
