"use client";

import { Carousel } from "@material-tailwind/react";

interface Props {
  images: Array<string>;
}

export function CarouselCustom({ images }: Props) {
  return (
    <Carousel
      {...({
        autoplay: true,
        autoplayDelay: 5000,
        loop: true,
        transition: { type: "tween", duration: 1 },
        navigation: ({ setActiveIndex, activeIndex, length }: any) => (
          <div className="absolute bottom-4 left-2/4 z-5 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                  activeIndex === i ? "w-8 bg-ks-beige" : "w-4 bg-ks-white/30"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        ),
        children: images.map((i, index) => (
          <img
            key={`property_image_${index}`}
            src={i}
            alt={`property image ${index}`}
            className="h-full w-full object-cover"
          />
        )),
      } as any)}
    />
  );
}
