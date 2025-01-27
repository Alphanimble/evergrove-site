"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function OverlayDesign() {
  const [svgContent, setSvgContent] = useState<string | null>(null);
  const { scrollYProgress } = useScroll();

  const translateX = useTransform(
    scrollYProgress,
    [0, 1], // Input range (0% to 100% of scroll)
    [0, -1000], // Output range (0px to -500px)
    {
      ease: (v) => v, // Linear interpolation function
    }
  );

  useEffect(() => {
    fetch("/union.svg")
      .then((response) => response.text())
      .then((svg) => setSvgContent(svg))
      .catch((error) => console.error("Error loading SVG:", error));
  }, []);

  return (
    <div className="relative w-full h-screen ">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/download_2.png"
          alt="Modern house in forest"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Logo Container */}
      <motion.div
        className="relative z-10 h-full flex items-center justify-center sm:justify-start "
        style={{ x: translateX }}
      >
        <div className="relative w-full max-w-[120vw] sm:max-w-[120vw] md:max-w-[120vw] lg:max-w-[120vw] xl:max-w-[60vw]">
          {/* Blur and opacity layer that matches logo shape */}
          {svgContent && (
            <div
              className="absolute inset-0 backdrop-blur-sm"
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
            src="/union.svg"
            alt="EverGrove Spaces"
            width={1200}
            height={500}
            className="relative z-10 opacity-30 w-full h-auto"
            priority
          />

          {/* Actual logo image */}
        </div>
      </motion.div>
      <div className="relative">
        <Image
          src="/download_2.png"
          alt="Modern house in forest"
          fill
          priority
        />
      </div>
    </div>
  );
}
