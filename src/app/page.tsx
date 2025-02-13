"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { Teko } from "next/font/google";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

import CustomLayoutGrid from "@/components/custom_layout-grid";

const teko = Teko({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function OverlayDesign() {
  const [svgContent, setSvgContent] = useState<string | null>(null);
  const containerRef = useRef(null);
  // const oasisRef = useRef(null);
  // const carousel1Ref = useRef(null);
  // const carousel2Ref = useRef(null);
  const videoRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const xPosition = useTransform(scrollYProgress, [0, 0.5], ["0%", "-155%"]);
  const yPosition = useTransform(scrollYProgress, [0, 0.1], ["0%", "-125%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.6], [1, 0, 0]);

  // const oasisInView = useInView(oasisRef, { once: true, amount: 0.5 });
  // const carousel1InView = useInView(carousel1Ref, { once: true, amount: 0.3 });
  // const carousel2InView = useInView(carousel2Ref, { once: true, amount: 0.3 });
  // const videoInView = useInView(videoRef, { once: true, amount: 0.3 });

  useEffect(() => {
    fetch("/Union.svg")
      .then((response) => response.text())
      .then((svg) => setSvgContent(svg))
      .catch((error) => console.error("Error loading SVG:", error));
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full bg-secondary/90 dark:bg-primary/90 text-foreground"
    >
      <div className="sticky top-0 h-screen">
        <motion.div className="absolute inset-0" style={{ opacity: opacity }}>
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 dark:from-gray-900/40 to-transparent z-[1]" />
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
            <Link
              href="/"
              className="text-black text-lg md:text-3xl hover:opacity-80 transition-opacity"
            >
              HOME
            </Link>
            <Link
              href="/services"
              className="text-black text-lg md:text-3xl hover:opacity-80 transition-opacity"
            >
              SERVICES
            </Link>
            <Link
              href="/about"
              className="text-black text-lg md:text-3xl hover:opacity-80 transition-opacity"
            >
              ABOUT US
            </Link>
          </nav>
        </motion.div>
      </div>
      <div>
        <div className="py-20">
          <h2 className={`${teko.className} text-4xl md:text-6xl text-center`}>
            Our Expertise
          </h2>
          <CustomLayoutGrid
            cards={[
              {
                id: 1,
                content: {
                  title: "Plotted Development",
                  description:
                    "Master-planned communities with premium infrastructure and modern amenities.",
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
                },
                className: "md:col-span-2",
                thumbnail: "/Renders/Entrance_Arch/Ernika/2.png",
              },
            ]}
          />
        </div>
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

      <div ref={videoRef} className="py-20 px-4 bg-secondary dark:bg-primary">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2">
            <div className="relative w-full rounded-lg overflow-hidden aspect-video">
              <iframe
                src="https://www.youtube.com/embed/mJVuZiK9a6I"
                title="EverGrove Experience"
                className="absolute top-0 left-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <h2 className={`${teko.className} text-3xl md:text-5xl mb-4`}>
              Experience EverGrove
            </h2>
            <p className="text-lg">
              Immerse yourself in the world of EverGrove, where nature meets
              innovation. Watch our showcase video to discover the unique
              experiences that await you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
