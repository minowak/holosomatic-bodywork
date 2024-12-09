import Image from 'next/image'
import image1 from "@/assets/images/1.webp";
import image2 from "@/assets/images/2.webp";
import image3 from "@/assets/images/3.webp";
import image4 from "@/assets/images/4.webp";
import image5 from "@/assets/images/5.webp";
import image6 from "@/assets/images/6.webp";
import image7 from "@/assets/images/7.webp";
import image8 from "@/assets/images/8.webp";
import image9 from "@/assets/images/9.webp";
import { StaticImageData } from "next/image";

export const Gallery: React.FC = () => {
  return (
    <div className="grid grid-cols-3 gap-4 w-fit">
      <GalleryItem image={image1} />
      <GalleryItem image={image2} />
      <GalleryItem image={image3} />
      <GalleryItem image={image4} />
      <GalleryItem image={image5} />
      <GalleryItem image={image6} />
      <GalleryItem image={image7} />
      <GalleryItem image={image8} />
      <GalleryItem image={image9} />
    </div>
  );
}

type ItemProps = {
  image: StaticImageData;
}

export const GalleryItem: React.FC<ItemProps> = ({ image }) => {
  return (
    <div className="size-[180px] bg-gray-400 cursor-pointer duration-300 hover:opacity-20 overflow-hidden">
      <Image src={image} alt="" />
    </div>
  );
}

