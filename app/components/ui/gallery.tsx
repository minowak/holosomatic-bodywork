"use client";

import image1 from "@/assets/images/1.webp";
import image2 from "@/assets/images/2.webp";
import image3 from "@/assets/images/3.webp";
import image4 from "@/assets/images/4.webp";
import image5 from "@/assets/images/5.webp";
import image6 from "@/assets/images/6.webp";
import image7 from "@/assets/images/7.webp";
import image8 from "@/assets/images/8.webp";
import image9 from "@/assets/images/9.webp";
import image10 from "@/assets/images/10.webp";
import image11 from "@/assets/images/11.webp";
import image12 from "@/assets/images/12.webp";
import image13 from "@/assets/images/13.webp";
import Image, { StaticImageData } from 'next/image';
import { useEffect, useState } from "react";
import { Carousel, CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./carousel";
import { Fullscreen } from "./fullscreen";

export const Gallery: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  const onClick = () => {
    setOpen(true);
  }

  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
  ];

  return (
    <div onKeyDown={(e) => { if (e.key === "Escape") setOpen(false) }}>
      <div>
        <Fullscreen open={open} onOpenChanged={setOpen}>
          <div className="md:max-w-[600px] max-w-[300px]">
            <Carousel opts={
              { startIndex: startIndex }
            }
              setApi={setApi}>
              <CarouselContent
              >
                {images.map((image, idx) => {
                  return (<CarouselItem key={"item_" + idx}>
                    <Image src={image} alt="" className="md:max-w-[600px] max-w-[300px]" style={{ objectFit: "contain" }} />
                  </CarouselItem>)
                })}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
            <div className="mt-2 text-center text-gray-400">{current}/{count}</div>
          </div>
        </Fullscreen>
      </div>
      <div className="flex justify-center pt-16">
        <div className="grid grid-cols-3 gap-4 w-fit outline-none focus:outline-none"
          tabIndex={0}>
          {
            images.slice(0, 9).map((image, idx) => {
              return (<GalleryItem key={"gallery_" + idx} image={image} onClick={() => {
                setStartIndex(idx);
                onClick();
              }} />)
            })
          }
        </div>
      </div>
    </div>
  );
}

type ItemProps = {
  image: StaticImageData;
  onClick?: () => void;
}

export const GalleryItem: React.FC<ItemProps> = ({ image, onClick }) => {
  return (
    <div className="size-[180px] bg-gray-400 cursor-pointer duration-300 hover:opacity-20 overflow-hidden" onClick={onClick}>
      <Image src={image} alt="" />
    </div>
  );
}

