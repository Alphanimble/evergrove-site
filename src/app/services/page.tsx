"use client";

import { CyclingImageCard } from "@/components/cycling-image-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import archData from "@/data/arch-carousel.json";
import amenitiesData from "@/data/amenities-carousel.json";
import clubhouseData from "@/data/clubhouse-carousel.json";
import landscapeData from "@/data/landscape-carousel.json";
import infrastructureData from "@/data/infrastructure-carousel.json";
import waterManagementData from "@/data/water-management-carousel.json";
import constructionData from "@/data/construction-carousel.json";

const services = [
  {
    title: "Architecture & Interior Design",
    description: "Creating spaces that inspire and transform living experiences through innovative design solutions.",
    data: archData
  },
  {
    title: "Landscape Design",
    description: "Crafting outdoor environments that harmonize with nature and enhance the beauty of your space.",
    data: landscapeData
  },
  {
    title: "Infrastructure Engineering",
    description: "Developing robust infrastructure solutions that support sustainable urban development.",
    data: infrastructureData
  },
  {
    title: "Building Services & Water Resource Management",
    description: "Implementing efficient systems for optimal resource utilization and management.",
    data: waterManagementData
  },
  {
    title: "Construction",
    description: "Bringing architectural visions to life with precision and excellence in construction.",
    data: constructionData
  }
];

function Page() {
  const headerRef = useRef(null);
  const carouselRefs = useRef(services.map(() => useRef(null)));
  const headerInView = useInView(headerRef, { once: true });

  return (
    <div className="min-h-screen bg-secondary/90 dark:bg-primary/90">
      <motion.div 
        ref={headerRef}
        className="relative h-[400px] mb-12 w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: headerInView ? 1 : 0 }}
        transition={{ duration: 0.8 }}
      >
        <Image
          src="/team.jpg"
          alt="Services background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white">Our Services</h1>
        </div>
      </motion.div>

      {services.map((service, index) => (
        <motion.div
          key={index}
          ref={carouselRefs.current[index]}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          className="mb-20"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-3">{service.title}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto dark:text-white">
              {service.description}
            </p>
          </div>
          
          <div className="relative">
            <div className="py-10 px-4 relative">
              <Carousel className="max-w-[80%] mx-auto">
                <CarouselContent>
                  {service.data.items.map((item, itemIndex) => (
                    <CarouselItem key={itemIndex}>
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
        </motion.div>
      ))}
    </div>
  );
}

export default Page;
