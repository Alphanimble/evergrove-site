"use client"

import Image from "next/image"
import React, { useEffect, useState, useRef } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Award, Users, Building, Leaf } from "lucide-react"
import { LoadingScreen } from "@/components/ui/loading-screen"
import { TextReveal } from "@/components/ui/text-reveal"
import { Particles } from "@/components/ui/particles"
import dynamic from "next/dynamic"
import { useRouter } from "next/navigation"
import { ComponentType } from "react"

// Lazy-load the heavy layout grid to defer hydration
const LazyCustomLayoutGrid = dynamic(() => import("@/components/custom_layout-grid"), {
  ssr: false,
  loading: () => <div className="h-screen flex items-center justify-center"><LoadingScreen /></div>
})

// Map string keys to lucide-react components for stats icons
const STATS_ICON_MAP: Record<string, ComponentType<any>> = {
  Building,
  Users,
  Award,
  Leaf,
}

export default function HomeClient() {
  const router = useRouter()
  const [svgContent, setSvgContent] = useState<string | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [isMounted, setIsMounted] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  
  // Create a safe scroll hook that only activates after mounting
  const scrollConfig = isMounted && containerRef.current ? {
    target: containerRef,
    offset: ["start start", "end start"] as ["start start", "end start"],
  } : undefined

  const { scrollYProgress } = useScroll(scrollConfig)

  // Preserve the original horizontal scroll animation - with fallback values
  const xPosition = useTransform(scrollYProgress, [0, 0.5], ["0%", "-155%"])
  // Fade out the hero earlier so the morphing text does not overlap the following sections
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.3], [1, 0, 0])

  useEffect(() => {
    // Set mounted state to true after component mounts
    setIsMounted(true)
    
    const timer = setTimeout(() => setIsLoaded(true), 3000)
    fetch("/Union.svg")
      .then((response) => response.text())
      .then((svg) => setSvgContent(svg))
      .catch((error) => console.error("Error loading SVG:", error))

    return () => clearTimeout(timer)
  }, [])

  // Additional effect to ensure ref is properly attached after mount
  useEffect(() => {
    if (isMounted && containerRef.current) {
      // Force a slight delay to ensure DOM is fully ready
      const timeout = setTimeout(() => {
        // This ensures the ref is properly hydrated
        if (containerRef.current) {
          containerRef.current.scrollTop = 0
        }
      }, 100)
      
      return () => clearTimeout(timeout)
    }
  }, [isMounted])

  const morphingTexts = [
    "Spaces that Grow with You.",
    "Rooted in Design, Growing with You",
    "Designing Groves, Creating Spaces",
    "Crafting Groves, Cultivating Spaces",
    "From Groves to Beautiful Spaces",
    "Beyond Groves, Better Spaces",
    "Everlasting Groves, Timeless Spaces",
  ]

  // Original full-card dataset (copied from app/page.tsx) — used to restore the original layout grid
  const gridCards = [
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
      thumbnail: "https://www.prestigecityhyderabad.live/project/plotted-development-in-bangalore.webp",
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
  ]

  // Professional text cycling effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % morphingTexts.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [morphingTexts.length])

  if (!isLoaded || !isMounted) {
    return <LoadingScreen />
  }

  return (
    <>
      <div ref={containerRef} className="relative w-full bg-background text-foreground">
        {/* Hero Section with Horizontal Scroll Animation */}
        <motion.div className="sticky top-0 h-screen overflow-hidden" style={{ opacity: opacity }}>
          {/* Particles Background */}
          <Particles count={30} />

          {/* Background Image with Fade Effect */}
          <motion.div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60 z-[1]" />
            <Image src="/dark.png" alt="Luxury architectural masterpiece" fill className="object-cover" priority />
          </motion.div>

          {/* Horizontally Scrolling Logo */}
          <motion.div className="relative bottom-10 z-10 h-full flex items-center justify-center sm:justify-start overflow-hidden" style={{ x: xPosition }}>
            <div className="relative w-full max-w-[120vw] sm:max-w-[120vw] md:max-w-[120vw] lg:max-w-[120vw] xl:max-w-[60vw] ml-2">
              {/* SVG Mask Effect */}
              {svgContent && (
                <div
                  className="absolute inset-0 backdrop-blur-sm bg-black/30 top-[-120px] md:top-[-240px]"
                  style={{
                    WebkitMaskImage: `url("data:image/svg+xml,${encodeURIComponent(svgContent)}")`,
                    maskImage: `url("data:image/svg+xml,${encodeURIComponent(svgContent)}")`,
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
              <Image src="/Union.svg" alt="EverGrove Spaces" width={1200} height={500} className="relative z-10 opacity-30 w-full h-auto top-[-60px] md:top-[-120px]" priority />
            </div>
          </motion.div>

          {/* Hero Content Overlay */}
          <div className="absolute bottom-20 ml-4 md:ml-12 z-20 max-w-2xl pt-12 md:pt-24">
            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 1 }}>
              <TextReveal className="font-display text-xl md:text-4xl font-bold text-white leading-tight">Crafting Tomorrow&apos;s Living Spaces</TextReveal>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.3, duration: 0.8 }} className="my-6 h-16 flex items-center">
                <div className="relative text-xl md:text-2xl font-semibold overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.span key={currentTextIndex} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5, ease: "easeInOut" }} className="text-gradient block">
                      {morphingTexts[currentTextIndex]}
                    </motion.span>
                  </AnimatePresence>
                </div>
              </motion.div>

              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.5, duration: 0.8 }} className="text-base md:text-lg text-white/90 mb-8 leading-relaxed">
                Where architectural excellence meets sustainable innovation.
                Experience the future of luxury living with cutting-edge design
                and unparalleled craftsmanship.
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.8, duration: 0.8 }} className="flex flex-col sm:flex-row gap-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    size="lg" 
                    className="bg-primary hover:bg-primary/90 text-white px-4 py-4 text-lg font-semibold rounded-full shadow-2xl hover:shadow-primary/25 transition-all duration-300"
                    onClick={() => router.push('/projects')}
                  >
                    Explore Projects
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="glass-effect text-white border-white/30 hover:bg-white/10 px-3 py-4 text-lg font-semibold rounded-full bg-transparent backdrop-blur-xl"
                    onClick={() => router.push('/about#contact-section')}
                  >
                    Schedule Consultation
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Content Sections */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="relative z-10">
          {/* Stats Section */}
          {/* <section className="py-20 bg-background">
            <div className="container mx-auto px-6 lg:px-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((s, i) => {
                  const Icon = typeof s.icon === "string" ? STATS_ICON_MAP[s.icon] : s.icon
                  return (
                    <div key={i} className="bg-card p-8 rounded-2xl shadow-lg text-center">
                      <div className="flex items-center justify-center mb-4">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                      <div className="text-2xl font-bold">{s.value}</div>
                      <div className="text-sm text-muted-foreground">{s.label}</div>
                    </div>
                  )
                })}
              </div>
            </div>
          </section> */}

          {/* Showcase Grid (lightweight placeholder) */}
          <section className="py-20">
            <div className="container mx-auto px-6 lg:px-8">
              <h2 className="font-display text-3xl font-bold mb-8">Featured Layouts</h2>
              <LazyCustomLayoutGrid cards={gridCards} />
            </div>
          </section>

          {/* Contact CTA */}
          <section className="py-20 bg-gradient-to-r from-primary/5 to-accent/5">
            <div className="container mx-auto px-6 lg:px-8 text-center">
              <h3 className="font-display text-3xl font-bold mb-4">Start Your Project With Us</h3>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">Schedule a consultation and let our team craft a tailored solution for your vision.</p>
              <div className="flex items-center justify-center gap-4">
                <Button 
                  size="lg" 
                  className="bg-primary text-white px-6 py-3 rounded-full"
                  onClick={() => router.push('/about#contact-section')}
                >
                  Get In Touch
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="px-6 py-3 rounded-full"
                  onClick={() => router.push('/services')}
                >
                  Explore Services
                </Button>
              </div>
            </div>
          </section>
        </motion.div>
      </div>
    </>
  )
}
