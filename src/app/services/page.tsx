"use client";

import { CyclingImageCard } from "@/components/cycling-image-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion, useInView, useScroll } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import archData from "@/data/arch-carousel.json";
import amenitiesData from "@/data/amenities-carousel.json";
import clubhouseData from "@/data/clubhouse-carousel.json";

function Page() {
  const carousel1Ref = useRef(null);
  const carousel2Ref = useRef(null);
  const carousel3Ref = useRef(null);

  const { scrollYProgress: scroll1 } = useScroll({
    target: carousel1Ref,
    offset: ["end", "end start"],
  });

  const { scrollYProgress: scroll2 } = useScroll({
    target: carousel2Ref,
    offset: ["start end", "end start"],
  });

  return (
    <div>
      <div ref={carousel1Ref} className="relative ">
        <motion.div
          className="absolute inset-0 "
          style={{ opacity: scroll1 }}
        />
        <div className="py-20 px-4 relative">
          <Carousel className="max-w-[80%] mx-auto">
            <CarouselContent>
              {clubhouseData.items.map((item, index) => (
                <CarouselItem key={index}>
                  <CyclingImageCard
                    images={item.images}
                    title={item.title}
                    description={item.description}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>

      <div ref={carousel2Ref} className="relative">
        <motion.div
          className="absolute inset-0 bg-secondary dark:bg-primary"
          style={{ opacity: scroll2 }}
        />
        <div className="py-20 px-4 relative">
          <Carousel className="max-w-[80%] mx-auto">
            <CarouselContent>
              {archData.items.map((item, index) => (
                <CarouselItem key={index}>
                  <CyclingImageCard
                    images={item.images}
                    title={item.title}
                    description={item.description}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>

      <div ref={carousel3Ref} className="relative">
        <motion.div
          className="absolute inset-0 bg-secondary/90 dark:bg-primary/90"
          style={{}}
        />
        <div className="py-20 px-4 relative">
          <Carousel className="max-w-[80%] mx-auto">
            <CarouselContent>
              {amenitiesData.items.map((item, index) => (
                <CarouselItem key={index}>
                  <CyclingImageCard
                    images={item.images}
                    title={item.title}
                    description={item.description}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Page;
