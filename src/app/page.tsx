"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPinterestP,
  FaLinkedinIn,
} from "react-icons/fa";
import { Teko } from "next/font/google";
import { motion, useScroll, useTransform } from "framer-motion";

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

  const xPosition = useTransform(scrollYProgress, [0, 1], ["0%", "-125%"]);
  const yPosition = useTransform(scrollYProgress, [0, 0.1], ["0%", "-125%"]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.6], // scroll progress points
    [1, 1, 0] // corresponding opacity values
  );

  useEffect(() => {
    fetch("/Union.svg")
      .then((response) => response.text())
      .then((svg) => setSvgContent(svg))
      .catch((error) => console.error("Error loading SVG:", error));
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-[200vh] bg-black">
      {/* Background Image Container with Gradient */}
      <div className="sticky top-0 h-screen">
        <motion.div className="absolute inset-0" style={{ opacity: opacity }}>
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-[1]" />

          <Image
            src="/dark.png"
            alt="Modern house in forest"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        {/* Logo Container */}
        <motion.div
          className="relative bottom-10 z-10 h-full flex items-center justify-center sm:justify-start overflow-hidden"
          style={{ x: xPosition }}
        >
          <div className="relative w-full max-w-[120vw] sm:max-w-[120vw] md:max-w-[120vw] lg:max-w-[120vw] xl:max-w-[60vw]">
            {/* Blur and opacity layer with mask */}
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

        {/* Rest of the component remains the same */}
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
    </div>
  );
}
