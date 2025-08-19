"use client"

import Image from "next/image"
import { useEffect, useState, useRef } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import CustomLayoutGrid from "@/components/custom_layout-grid"
import { Button } from "@/components/ui/button"
import { ArrowRight, Award, Users, Building, Leaf } from "lucide-react"
import { LoadingScreen } from "@/components/ui/loading-screen"
import { TextReveal } from "@/components/ui/text-reveal"
import { Sparkles } from "@/components/ui/sparkles"
import { Particles } from "@/components/ui/particles"


export default function HomePage() {
  const [svgContent, setSvgContent] = useState<string | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Preserve the original horizontal scroll animation
  const xPosition = useTransform(scrollYProgress, [0, 0.5], ["0%", "-155%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.6], [1, 0, 0]);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 3000);
    fetch("/Union.svg")
      .then((response) => response.text())
      .then((svg) => setSvgContent(svg))
      .catch((error) => console.error("Error loading SVG:", error));

    return () => clearTimeout(timer);
  }, []);

  const stats = [
    { icon: Building, value: "500+", label: "Projects Completed" },
    { icon: Users, value: "50+", label: "Expert Team Members" },
    { icon: Award, value: "25+", label: "Awards Won" },
    { icon: Leaf, value: "100%", label: "Sustainable Designs" },
  ];

  const morphingTexts = [
    "Luxury Living Spaces",
    "Sustainable Architecture", 
    "Modern Design Solutions",
    "Premium Developments",
  ]

  // Professional text cycling effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % morphingTexts.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  if (!isLoaded) {
    return <LoadingScreen />
  }

  return (
    <>
      <div
        ref={containerRef}
        className="relative w-full bg-background text-foreground"
      >
        {/* Hero Section with Horizontal Scroll Animation */}
        <div className="sticky top-0 h-screen overflow-hidden">
          {/* Particles Background */}
          <Particles count={30} />

          {/* Background Image with Fade Effect */}
          <motion.div className="absolute inset-0" style={{ opacity: opacity }}>
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60 z-[1]" />
            <Image
              src="/dark.png"
              alt="Luxury architectural masterpiece"
              fill
              className="object-cover"
              priority
            />
          </motion.div>

          {/* Horizontally Scrolling Logo */}
          <motion.div
            className="relative bottom-10 z-10 h-full flex items-center justify-center sm:justify-start overflow-hidden"
            style={{ x: xPosition }}
          >
            <div className="relative w-full max-w-[120vw] sm:max-w-[120vw] md:max-w-[120vw] lg:max-w-[120vw] xl:max-w-[60vw] ml-2">
              {/* SVG Mask Effect */}
              {svgContent && (
                <div
                  className="absolute inset-0 backdrop-blur-sm bg-black/30 top-[-240px]"
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

              {/* Main SVG Logo */}
              <Image
                src="/Union.svg"
                alt="EverGrove Spaces"
                width={1200}
                height={500}
                className="relative z-10 opacity-30 w-full h-auto top-[-120px] "
                priority
              />
            </div>
          </motion.div>

          {/* Hero Content Overlay */}
          <div className="absolute bottom-20 ml-12 z-10 max-w-2xl pt-24">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <TextReveal className="font-display text-4xl md:text-2xl font-bold text-white leading-tight">
                Crafting Tomorrow's Living Spaces
              </TextReveal>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3, duration: 0.8 }}
                className="my-6 h-16 flex items-center"
              >
                <div className="relative text-2xl md:text-xl font-semibold overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={currentTextIndex}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      className="text-gradient block"
                    >
                      {morphingTexts[currentTextIndex]}
                    </motion.span>
                  </AnimatePresence>
                </div>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.8 }}
                className="text-lg md:text-sm text-white/90 mb-8 leading-relaxed max-w-[70%]"
              >
                Where architectural excellence meets sustainable innovation.
                Experience the future of luxury living with cutting-edge design
                and unparalleled craftsmanship.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-white px-4 py-4 text-lg font-semibold rounded-full shadow-2xl hover:shadow-primary/25 transition-all duration-300"
                  >
                    Explore Projects
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="glass-effect text-white border-white/30 hover:bg-white/10 px-3 py-4 text-lg font-semibold rounded-full bg-transparent backdrop-blur-xl"
                  >
                    Schedule Consultation
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Content Sections */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative z-10"
        >
          {/* Stats Section */}
          <section className="py-20 bg-secondary/50 relative overflow-hidden">
            <Particles count={20} className="opacity-30" />
            <div className="container mx-auto px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 lg:grid-cols-4 gap-8"
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 30, scale: 0.8 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="text-center group cursor-pointer"
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors relative"
                    >
                      <stat.icon className="h-8 w-8 text-primary" />
                      <motion.div
                        className="absolute inset-0 rounded-full border-2 border-primary/20"
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 8,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "linear",
                        }}
                      />
                    </motion.div>
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{
                        delay: index * 0.1 + 0.3,
                        type: "spring",
                        stiffness: 200,
                      }}
                      className="font-display text-4xl font-bold text-foreground mb-2"
                    >
                      {stat.value}
                    </motion.div>
                    <div className="text-muted-foreground font-medium">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Expertise Section */}
          <section className="py-20 bg-background relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Section Header */}
              <div className="relative h-[400px] w-full mb-16 overflow-hidden">
                <Image
                  src="/team.jpg"
                  alt="Architectural expertise showcase"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80" />
                <Particles count={15} className="opacity-20" />
                <div className="absolute inset-0 flex items-center justify-center text-center px-4">
                  <div>
                    <TextReveal className="font-display text-5xl md:text-7xl font-bold text-white mb-4">
                      Our Expertise
                    </TextReveal>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5, duration: 0.8 }}
                      viewport={{ once: true }}
                      className="text-xl text-white/90 max-w-3xl mx-auto"
                    >
                      From conceptual design to final execution, we deliver
                      comprehensive architectural solutions that exceed
                      expectations.
                    </motion.p>
                  </div>
                </div>
              </div>

              {/* Expertise Grid */}
              <div className="container mx-auto px-6 lg:px-8">
                <CustomLayoutGrid
                  cards={[
                    {
                      id: 1,
                      content: {
                        title: "Plotted Development",
                        description:
                          "Master-planned communities with premium infrastructure and modern amenities for sustainable living.",
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
                        title: "Clubhouse Design",
                        description:
                          "Luxurious community spaces designed for recreation, wellness, and social gatherings.",
                        subPoints: [
                          "Recreation Facilities",
                          "Wellness Center",
                          "Social Spaces",
                          "Modern Amenities",
                        ],
                      },
                      className: "md:col-span-1",
                      thumbnail: "/Renders/Clubhouse/Eternia/eternia_2.png",
                    },
                    {
                      id: 3,
                      content: {
                        title: "Individual Residence",
                        description:
                          "Bespoke home designs that perfectly balance elegance with functionality for modern living.",
                        subPoints: [
                          "Custom Designs",
                          "Premium Finishes",
                          "Smart Features",
                          "Sustainable Living",
                        ],
                      },
                      className: "md:col-span-1",
                      thumbnail: "/Renders/Clubhouse/Ernika/ernika_2.png",
                    },
                    {
                      id: 4,
                      content: {
                        title: "Construction Excellence",
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
            </motion.div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-gradient-to-r from-primary/10 to-accent/10 relative overflow-hidden bg-background">
            <div className="absolute inset-0 bg-background/95 z-0" />
            <Sparkles>
              <div className="container mx-auto px-6 lg:px-8 text-center relative z-20">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="relative z-30"
                >
                  <TextReveal className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
                    Ready to Build Your Dream?
                  </TextReveal>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
                  >
                    Let's collaborate to create spaces that inspire and endure.
                    Contact us today to begin your architectural journey.
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      size="lg"
                      className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-2xl hover:shadow-primary/25 transition-all duration-300"
                    >
                      Start Your Project
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </motion.div>
                </motion.div>
              </div>
            </Sparkles>
          </section>
        </motion.div>
      </div>
    </>
  );
}
