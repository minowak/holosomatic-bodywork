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
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from './dialog';
import { useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./carousel";

export const Gallery: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);

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
    <div className="grid grid-cols-3 gap-4 w-fit">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="px-16 max-w-[1000px] max-h-[1000px]">
          <DialogTitle className="hidden">Gallery</DialogTitle>
          <DialogHeader>
            <DialogDescription>
              <Carousel opts={
                { startIndex: startIndex }
              } >
                <CarouselContent>
                  {images.map((image, idx) => {
                    return (<CarouselItem key={"item_" + idx}>
                      <Image src={image} alt="" className="" />
                    </CarouselItem>)
                  })}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
      {images.slice(0, 9).map((image, idx) => {
        return (<GalleryItem key={"gallery_" + idx} image={image} onClick={() => {
          setStartIndex(idx);
          onClick();
        }} />)
      })}
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

