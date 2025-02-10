"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { Teko } from "next/font/google";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useTheme } from "next-themes";
import { HoverVideoPlayer } from "@/components/ui/hover-video-player";
import { CyclingImageCard } from "@/components/cycling-image-card";

const teko = Teko({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function OverlayDesign() {
  const [svgContent, setSvgContent] = useState<string | null>(null);
  const containerRef = useRef(null);
  const oasisRef = useRef(null);
  const carousel1Ref = useRef(null);
  const carousel2Ref = useRef(null);
  const videoRef = useRef(null);
  const { theme } = useTheme();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const xPosition = useTransform(scrollYProgress, [0, 1], ["0%", "-125%"]);
  const yPosition = useTransform(scrollYProgress, [0, 0.1], ["0%", "-125%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.6], [1, 1, 0]);

  const oasisInView = useInView(oasisRef, { once: true, amount: 0.5 });
  const carousel1InView = useInView(carousel1Ref, { once: true, amount: 0.3 });
  const carousel2InView = useInView(carousel2Ref, { once: true, amount: 0.3 });
  const videoInView = useInView(videoRef, { once: true, amount: 0.3 });

  useEffect(() => {
    fetch("/Union.svg")
      .then((response) => response.text())
      .then((svg) => setSvgContent(svg))
      .catch((error) => console.error("Error loading SVG:", error));
  }, []);

  const carouselData = [
    {
      title: "ClubHouse:Ernika",
      description:
        "Spacious and elegantly designed for ultimate comfort. Our living rooms blend style with functionality, creating the perfect space for relaxation and entertainment.",
      images: [
        "/Renders/Clubhouse/Ernika/ernika_1.png",
        "/Renders/Clubhouse/Ernika/ernika_4.png",
        "/Renders/Clubhouse/Ernika/ernika_3.png",
      ],
    },
    {
      title: "Clubhouse:Etasha",
      description:
        "State-of-the-art appliances in a sleek, functional space. Our kitchens are designed to inspire culinary creativity while providing efficiency and style.",
      images: [
        "/Renders/Clubhouse/Etasha/Renders/entry.png",
        "/Renders/Clubhouse/Etasha/Renders/a.png",
        "/Renders/Clubhouse/Etasha/Renders/gym_1.png",
      ],
    },
    {
      title: "Clubhouse:Eternia",
      description:
        "Your personal retreat for perfect relaxation. Our bedrooms offer a sanctuary of comfort, combining luxurious design with practical amenities for restful nights.",
      images: [
        "/Renders/Clubhouse/Eternia/eternia_1.png",
        "/Renders/Clubhouse/Eternia/eternia_2.png",
        "/Renders/Clubhouse/Eternia/eternia_3.png",
      ],
    },
  ];

  return (
    <div
      ref={containerRef}
      className="relative w-full bg-background text-foreground"
    >
      <div className="sticky top-0 h-screen">
        <motion.div className="absolute inset-0" style={{ opacity: opacity }}>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-[1]" />
          <Image
            src="/dark.png"
            alt="Modern house in forest"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        <motion.div
          className="relative bottom-10 z-10 h-full flex items-center justify-center sm:justify-start overflow-hidden"
          style={{ x: xPosition }}
        >
          <div className="relative w-full max-w-[120vw] sm:max-w-[120vw] md:max-w-[120vw] lg:max-w-[120vw] xl:max-w-[60vw]">
            {svgContent && (
              <div
                className="absolute inset-0 backdrop-blur-sm bg-black/30"
                style={{
                  WebkitMaskImage: `url("data:image/svg+xml,${encodeURIComponent(
                    svgContent
                  )}")`,
                  maskImage: `url("data:image/svg+xml,${encodeURIComponent(
                    svgContent
                  )}")`,
                  WebkitMaskSize: "contain",
                  maskSize: "contain",
                  WebkitMaskRepeat: "no-repeat",
                  maskRepeat: "no-repeat",
                  WebkitMaskPosition: "center",
                  maskPosition: "center",
                }}
              />
            )}

            <Image
              src="/Union.svg"
              alt="EverGrove Spaces"
              width={1200}
              height={500}
              className="relative z-10 opacity-30 w-full h-auto"
              priority
            />
          </div>
        </motion.div>

        <motion.div
          className="absolute top-0 right-0 z-30 w-full p-6 pr-10 flex justify-end items-start"
          style={{ y: yPosition }}
        >
          <nav className={`${teko.className} flex gap-4 md:gap-8 ml-20`}>
            <a
              href="#"
              className="text-black text-lg md:text-3xl hover:opacity-80 transition-opacity"
            >
              HOME
            </a>
            <a
              href="#"
              className="text-black text-lg md:text-3xl hover:opacity-80 transition-opacity"
            >
              SERVICES
            </a>
            <a
              href="#"
              className="text-black text-lg md:text-3xl hover:opacity-80 transition-opacity"
            >
              OUR TEAM
            </a>
          </nav>
        </motion.div>
      </div>

      {/* <motion.div
        ref={oasisRef}
        className="py-20 px-4 text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={oasisInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2 className={`${teko.className} text-4xl md:text-6xl mb-4`}>
          An Oasis of Luxury Awaits
        </h2>
        <p className="max-w-2xl mx-auto text-lg">
          Discover unparalleled comfort and style in our meticulously designed
          spaces. EverGrove brings your dream living to reality.
        </p>
      </motion.div> */}

      <motion.div
        ref={carousel1Ref}
        className="py-20 px-4"
        initial={{ opacity: 0, y: 50 }}
        animate={carousel1InView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Carousel className="max-w-6xl mx-auto">
          <CarouselContent>
            {carouselData.map((item, index) => (
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
      </motion.div>

      <motion.div
        className="py-20 px-4 bg-secondary"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Carousel className="max-w-6xl mx-auto">
          <CarouselContent>
            {[
              {
                title: "Arch:Ernika",
                description:
                  "Embrace nature with our beautifully landscaped outdoor areas. Perfect for relaxation or entertaining guests.",
                images: [
                  "/Renders/Entrance_Arch/Ernika/1.png",
                  "/Renders/Entrance_Arch/Ernika/2.png",
                  "/Renders/Entrance_Arch/Ernika/3.png",
                ],
              },
              {
                title: "Arch:Etasha",
                description:
                  "Experience the future of living with our cutting-edge smart home features, offering convenience at your fingertips.",
                images: [
                  "/Renders/Entrance_Arch/Etasha/1.jpeg",
                  "/Renders/Entrance_Arch/Etasha/2.jpeg",
                  "/Renders/Entrance_Arch/Etasha/3.jpeg",
                ],
              },
              {
                title: "Arch:Eternia",
                description:
                  "Rejuvenate your body and mind in our state-of-the-art wellness center, complete with gym and spa facilities.",
                images: [
                  "/Renders/Entrance_Arch/Eternia/1.jpg",
                  "/Renders/Entrance_Arch/Eternia/2.jpg",
                  "/Renders/Entrance_Arch/Eternia/3.jpg",
                  "/Renders/Entrance_Arch/Eternia/4.jpg",
                ],
              },
            ].map((item, index) => (
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
      </motion.div>

      <motion.div
        className="py-20 px-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Carousel className="max-w-6xl mx-auto">
          <CarouselContent>
            {[
              {
                title: "Luxury Amenities",
                description:
                  "Indulge in our world-class amenities designed for your comfort and enjoyment.",
                images: [
                  "/placeholder.svg?height=300&width=409",
                  "/placeholder.svg?height=300&width=410",
                  "/placeholder.svg?height=300&width=411",
                ],
              },
              {
                title: "Scenic Views",
                description:
                  "Wake up to breathtaking views that inspire and rejuvenate your senses every day.",
                images: [
                  "/placeholder.svg?height=300&width=412",
                  "/placeholder.svg?height=300&width=413",
                  "/placeholder.svg?height=300&width=414",
                ],
              },
              {
                title: "Community Spaces",
                description:
                  "Connect with your neighbors in our thoughtfully designed community areas.",
                images: [
                  "/placeholder.svg?height=300&width=415",
                  "/placeholder.svg?height=300&width=416",
                  "/placeholder.svg?height=300&width=417",
                ],
              },
            ].map((item, index) => (
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
      </motion.div>

      <motion.div
        ref={videoRef}
        className="py-20 px-4"
        initial={{ opacity: 0, y: 50 }}
        animate={videoInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="max-w-4xl mx-auto">
          <h2
            className={`${teko.className} text-3xl md:text-5xl mb-8 text-center`}
          >
            Experience EverGrove
          </h2>
          <HoverVideoPlayer
            videoSrc="/public/video.mp4"
            pausedOverlay={
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Video thumbnail"
                width={800}
                height={600}
                className="object-cover w-full h-full"
              />
            }
            loadingOverlay={
              <div className="loading-overlay">
                <div className="loading-spinner" />
              </div>
            }
          />
        </div>
      </motion.div>
    </div>
  );
}
