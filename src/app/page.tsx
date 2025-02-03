"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPinterestP,
  FaLinkedinIn,
} from "react-icons/fa";
import { Teko } from "next/font/google";

const teko = Teko({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function OverlayDesign() {
  const [svgContent, setSvgContent] = useState<string | null>(null);

  useEffect(() => {
    fetch("/Union.svg")
      .then((response) => response.text())
      .then((svg) => setSvgContent(svg))
      .catch((error) => console.error("Error loading SVG:", error));
  }, []);

  return (
    <div className="relative w-full h-screen bg-black">
      {/* Background Image Container with Gradient */}
      <div className="absolute inset-0">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-[1]" />

        <Image
          src="/dark.png"
          alt="Modern house in forest"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Logo Container */}
      <div className="relative bottom-10 z-10 h-full flex items-center justify-center sm:justify-start">
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
      </div>

      {/* Rest of the component remains the same */}
      <div className="absolute top-0 left-0 right-0 z-30 w-full p-6 flex justify-between items-start">
        <div className="flex items-start gap-3">
          <span className="text-white/60 text-lg tracking-wider">
            FOLLOW US ON
          </span>
          <div className="flex gap-4 p-[1.5]">
            <FaFacebookF className="text-white/60 w-5 h-5 cursor-pointer hover:opacity-40" />
            <FaInstagram className="text-white/60 w-5 h-5 cursor-pointer hover:opacity-40" />
            <FaTwitter className="text-white/60 w-5 h-5 cursor-pointer hover:opacity-40" />
            <FaPinterestP className="text-white/60 w-5 h-5 cursor-pointer hover:opacity-40" />
            <FaLinkedinIn className="text-white/60 w-5 h-5 cursor-pointer hover:opacity-40" />
          </div>
        </div>

        <nav className={`${teko.className} flex gap-8 mr-20`}>
          <a
            href="#"
            className="text-white text-xl hover:opacity-80 transition-opacity"
          >
            HOME
          </a>
          <a
            href="#"
            className="text-white text-xl hover:opacity-80 transition-opacity"
          >
            SERVICES
          </a>
          <a
            href="#"
            className="text-white text-xl hover:opacity-80 transition-opacity"
          >
            OUR TEAM
          </a>
        </nav>
      </div>

      <div className="absolute bottom-28 left-6 z-20">
        <p className="text-white text-sm tracking-wider">A FEW LINES</p>
      </div>
    </div>
  );
}
