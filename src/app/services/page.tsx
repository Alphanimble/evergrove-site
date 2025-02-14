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
  const servicesRef = useRef(null);

  return (
    <div className="container mx-auto px-4">
      <div ref={carousel1Ref} className="relative bg-secondary dark:bg-primary">
        <motion.div className="absolute inset-0 " />
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
        <motion.div className="absolute inset-0 bg-secondary dark:bg-primary" />
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
        <motion.div className="absolute inset-0 bg-secondary dark:bg-primary" />
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

      {/* New Services Section */}
      <div className="space-y-24 py-20 mt-20">
        <h2 className="text-4xl font-bold text-center mb-16">Our Services</h2>

        {/* Architecture & Interior Design */}
        <div className="flex flex-col md:flex-row items-center gap-8 bg-secondary dark:bg-primary p-8 rounded-lg">
          <div className="w-full md:w-1/2 space-y-4">
            <h2 className="text-3xl font-bold">
              Architecture & Interior Design
            </h2>
            <p className="text-muted-foreground">
              Crafting spaces that blend form and function, creating lasting
              impressions through innovative design solutions.
            </p>
          </div>
          <div className="w-full md:w-1/2 h-[400px] bg-muted rounded-lg">
            {/* Image placeholder */}
          </div>
        </div>

        {/* Landscape Design */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-8 bg-secondary dark:bg-primary p-8 rounded-lg">
          <div className="w-full md:w-1/2 space-y-4">
            <h2 className="text-3xl font-bold">Landscape Design</h2>
            <p className="text-muted-foreground">
              Creating harmonious outdoor spaces that connect nature with
              architecture.
            </p>
          </div>
          <div className="w-full md:w-1/2 h-[400px] bg-muted rounded-lg">
            {/* Image placeholder */}
          </div>
        </div>

        {/* Infrastructure Engineering */}
        <div className="flex flex-col md:flex-row items-center gap-8 bg-secondary dark:bg-primary p-8 rounded-lg">
          <div className="w-full md:w-1/2 space-y-4">
            <h2 className="text-3xl font-bold">Infrastructure Engineering</h2>
            <p className="text-muted-foreground">
              Developing robust infrastructure solutions that support
              sustainable development.
            </p>
          </div>
          <div className="w-full md:w-1/2 h-[400px] bg-muted rounded-lg">
            {/* Image placeholder */}
          </div>
        </div>

        {/* Building Services & Water Resources Management */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-8 bg-secondary dark:bg-primary p-8 rounded-lg">
          <div className="w-full md:w-1/2 space-y-4">
            <h2 className="text-3xl font-bold">
              Building Services & Water Resources Management
            </h2>
            <p className="text-muted-foreground">
              Implementing efficient systems for building operations and
              sustainable water management.
            </p>
          </div>
          <div className="w-full md:w-1/2 h-[400px] bg-muted rounded-lg">
            {/* Image placeholder */}
          </div>
        </div>

        {/* Execution */}
        <div className="flex flex-col md:flex-row items-center gap-8 bg-secondary dark:bg-primary p-8 rounded-lg">
          <div className="w-full md:w-1/2 space-y-4">
            <h2 className="text-3xl font-bold">Execution</h2>
            <p className="text-muted-foreground">
              Bringing designs to life with precision and expertise in project
              execution.
            </p>
          </div>
          <div className="w-full md:w-1/2 h-[400px] bg-muted rounded-lg">
            {/* Image placeholder */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
