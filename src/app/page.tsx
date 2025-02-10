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
import { Card, CardContent } from "@/components/ui/card";
import { useTheme } from "next-themes";
import { HoverVideoPlayer } from "@/components/ui/hover-video-player";

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

      <motion.div
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
      </motion.div>

      <motion.div
        ref={carousel1Ref}
        className="py-20 px-4"
        initial={{ opacity: 0, y: 50 }}
        animate={carousel1InView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Carousel className="max-w-6xl mx-auto">
          <CarouselContent>
            <CarouselItem>
              <Card>
                <CardContent className="p-0 flex">
                  <div className="w-1/2">
                    <Image
                      src="/placeholder.svg?height=300&width=400"
                      alt="Luxurious Living Room"
                      width={400}
                      height={300}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="w-1/2 p-6 flex flex-col justify-center">
                    <h3 className={`${teko.className} text-2xl mb-2`}>
                      Luxurious Living Rooms
                    </h3>
                    <p>
                      Spacious and elegantly designed for ultimate comfort. Our
                      living rooms blend style with functionality, creating the
                      perfect space for relaxation and entertainment.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem>
              <Card>
                <CardContent className="p-0 flex">
                  <div className="w-1/2">
                    <Image
                      src="/placeholder.svg?height=300&width=400"
                      alt="Modern Kitchen"
                      width={400}
                      height={300}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="w-1/2 p-6 flex flex-col justify-center">
                    <h3 className={`${teko.className} text-2xl mb-2`}>
                      Modern Kitchens
                    </h3>
                    <p>
                      State-of-the-art appliances in a sleek, functional space.
                      Our kitchens are designed to inspire culinary creativity
                      while providing efficiency and style.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem>
              <Card>
                <CardContent className="p-0 flex">
                  <div className="w-1/2">
                    <Image
                      src="/placeholder.svg?height=300&width=400"
                      alt="Serene Bedroom"
                      width={400}
                      height={300}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="w-1/2 p-6 flex flex-col justify-center">
                    <h3 className={`${teko.className} text-2xl mb-2`}>
                      Serene Bedrooms
                    </h3>
                    <p>
                      Your personal retreat for perfect relaxation. Our bedrooms
                      offer a sanctuary of comfort, combining luxurious design
                      with practical amenities for restful nights.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </motion.div>

      <motion.div
        ref={carousel2Ref}
        className="py-20 px-4 bg-secondary"
        initial={{ opacity: 0, y: 50 }}
        animate={carousel2InView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Carousel className="max-w-6xl mx-auto">
          <CarouselContent>
            <CarouselItem>
              <Card>
                <CardContent className="p-0 flex">
                  <div className="w-1/2">
                    <Image
                      src="/placeholder.svg?height=300&width=400"
                      alt="Outdoor Spaces"
                      width={400}
                      height={300}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="w-1/2 p-6 flex flex-col justify-center">
                    <h3 className={`${teko.className} text-2xl mb-2`}>
                      Stunning Outdoor Spaces
                    </h3>
                    <p>
                      Embrace nature with our beautifully landscaped outdoor
                      areas. Perfect for relaxation or entertaining guests.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem>
              <Card>
                <CardContent className="p-0 flex">
                  <div className="w-1/2">
                    <Image
                      src="/placeholder.svg?height=300&width=400"
                      alt="Smart Home Features"
                      width={400}
                      height={300}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="w-1/2 p-6 flex flex-col justify-center">
                    <h3 className={`${teko.className} text-2xl mb-2`}>
                      Smart Home Integration
                    </h3>
                    <p>
                      Experience the future of living with our cutting-edge
                      smart home features, offering convenience at your
                      fingertips.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem>
              <Card>
                <CardContent className="p-0 flex">
                  <div className="w-1/2">
                    <Image
                      src="/placeholder.svg?height=300&width=400"
                      alt="Wellness Center"
                      width={400}
                      height={300}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="w-1/2 p-6 flex flex-col justify-center">
                    <h3 className={`${teko.className} text-2xl mb-2`}>
                      Wellness Center
                    </h3>
                    <p>
                      Rejuvenate your body and mind in our state-of-the-art
                      wellness center, complete with gym and spa facilities.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
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
