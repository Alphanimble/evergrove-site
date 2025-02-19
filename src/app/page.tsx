"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { Teko } from "next/font/google";
import { motion, useScroll, useTransform } from "framer-motion";
import CustomLayoutGrid from "@/components/custom_layout-grid";

const teko = Teko({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function OverlayDesign() {
  const [svgContent, setSvgContent] = useState<string | null>(null);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const xPosition = useTransform(scrollYProgress, [0, 0.5], ["0%", "-155%"]);
  const yPosition = useTransform(scrollYProgress, [0, 0.1], ["0%", "-125%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.6], [1, 0, 0]);

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
          className="absolute top-0 right-0 z-30 w-full pr-2 sm:pr-10 pt-2 flex justify-end items-start"
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
              href="#services"
              className="text-black text-lg md:text-3xl hover:opacity-80 transition-opacity"
            >
              SERVICES
            </a>
            <a
              href="#about"
              className="text-black text-lg md:text-3xl hover:opacity-80 transition-opacity"
            >
              ABOUT US
            </a>
          </nav>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="min-h-screen bg-secondary/80 dark:bg-primary/80">
          <motion.section
            className="mb-20 mt-10"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <div className="relative h-[400px] w-full">
              <Image
                src="/team.jpg"
                alt="Expertise background"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80" />
              <div className="absolute inset-0 flex items-center justify-center text-center px-4">
                <h1 className="text-5xl md:text-7xl font-bold text-white">
                  Our Expertise
                </h1>
              </div>
            </div>

            <div className="py-20 px-4 sm:px-6 lg:px-8">
              <CustomLayoutGrid
                cards={[
                  {
                    id: 1,
                    content: {
                      title: "Plotted Development",
                      description:
                        "Master-planned communities with premium infrastructure and modern amenities.",
                      subPoints: [
                        "Premium Infrastructure",
                        "Modern Amenities",
                        "Strategic Location",
                        "Sustainable Planning",
                        "Green Spaces",
                        "Community Living",
                      ],
                    },
                    className: "md:col-span-2",
                    thumbnail:
                      "https://www.prestigecityhyderabad.live/project/plotted-development-in-bangalore.webp",
                  },
                  {
                    id: 2,
                    content: {
                      title: "Clubhouse",
                      description:
                        "Luxurious community spaces designed for recreation, wellness, and social gatherings.",
                      subPoints: ["Recreation Facilities", "Wellness Center"],
                    },
                    className: "md:col-span-1",
                    thumbnail: "/Renders/Clubhouse/Eternia/eternia_2.png",
                  },
                  {
                    id: 3,
                    content: {
                      title: "Individual Residence",
                      description:
                        "Bespoke home designs that perfectly balance elegance with functionality.",
                      subPoints: ["Custom Designs", "Premium Finishes"],
                    },
                    className: "md:col-span-1",
                    thumbnail: "/Renders/Clubhouse/Ernika/ernika_2.png",
                  },
                  {
                    id: 4,
                    content: {
                      title: "Construction",
                      description:
                        "Expert construction services with attention to detail and quality craftsmanship.",
                      subPoints: [
                        "Quality Craftsmanship",
                        "Timeline Management",
                        "Expert Supervision",
                        "Premium Materials",
                      ],
                    },
                    className: "md:col-span-2",
                    thumbnail: "/Renders/Entrance_Arch/Ernika/2.png",
                  },
                ]}
              />
            </div>
          </motion.section>
        </div>
      </motion.div>
    </div>
  );
}
