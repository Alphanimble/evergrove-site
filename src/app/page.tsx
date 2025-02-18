"use client";

import Image from "next/image";
import { Teko } from "next/font/google";
import { motion } from "framer-motion";
import CustomLayoutGrid from "@/components/custom_layout-grid";

const teko = Teko({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function OverlayDesign() {
  return (
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
              <h1 className="text-5xl md:text-7xl font-bold text-white">Our Expertise</h1>
            </div>
          </div>
          
          <div className="py-20 px-4 sm:px-6 lg:px-8">
            <CustomLayoutGrid
              cards={[
                {
                  id: 1,
                  content: {
                    title: "Plotted Development",
                    description: "Master-planned communities with premium infrastructure and modern amenities.",
                    subPoints: [
                      "Premium Infrastructure",
                      "Modern Amenities",
                      "Strategic Location",
                      "Sustainable Planning",
                      "Green Spaces",
                      "Community Living"
                    ]
                  },
                  className: "md:col-span-2",
                  thumbnail: "https://www.prestigecityhyderabad.live/project/plotted-development-in-bangalore.webp",
                },
                {
                  id: 2,
                  content: {
                    title: "Clubhouse",
                    description: "Luxurious community spaces designed for recreation, wellness, and social gatherings.",
                    subPoints: [
                      "Recreation Facilities",
                      "Wellness Center",
                    ]
                  },
                  className: "md:col-span-1",
                  thumbnail: "/Renders/Clubhouse/Eternia/eternia_2.png",
                },
                {
                  id: 3,
                  content: {
                    title: "Individual Residence",
                    description: "Bespoke home designs that perfectly balance elegance with functionality.",
                    subPoints: [
                      "Custom Designs",
                      "Premium Finishes",
                    ]
                  },
                  className: "md:col-span-1",
                  thumbnail: "/Renders/Clubhouse/Ernika/ernika_2.png",
                },
                {
                  id: 4,
                  content: {
                    title: "Construction",
                    description: "Expert construction services with attention to detail and quality craftsmanship.",
                    subPoints: [
                      "Quality Craftsmanship",
                      "Timeline Management",
                      "Expert Supervision",
                      "Premium Materials"
                    ]
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
  );
}
