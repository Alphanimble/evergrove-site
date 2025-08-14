"use client"

import { useState, useEffect, Suspense } from "react"
import { ServiceContent } from "@/components/ui/ServiceContent"
import { useSearchParams } from "next/navigation"
import { motion } from "framer-motion"
import Image from "next/image"

function ServicesContent() {
  const searchParams = useSearchParams()
  const [selectedService, setSelectedService] = useState("architecture-design")

  useEffect(() => {
    const service = searchParams.get("service")
    if (service) {
      setSelectedService(service)
    }
  }, [searchParams])

  const services = [
    { id: "architecture-design", name: "Architecture & Design" },
    { id: "landscape-design", name: "Landscape Design" },
    { id: "infrastructure", name: "Infrastructure" },
    { id: "building-services", name: "Building Services" },
    { id: "execution", name: "Project Execution" },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <Image src="/team.jpg" alt="Our services" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-4">
              Our <span className="text-gradient">Services</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Comprehensive architectural solutions tailored to your vision and needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Content */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-8">
          {/* Service Selection */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setSelectedService(service.id)}
                className={`px-8 py-4 rounded-full font-semibold transition-all duration-300 ${
                  selectedService === service.id
                    ? "bg-primary text-white shadow-lg scale-105"
                    : "bg-secondary hover:bg-secondary/80 text-foreground hover:scale-105"
                }`}
              >
                {service.name}
              </button>
            ))}
          </motion.div>

          {/* Service Content */}
          <motion.div
            key={selectedService}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-card rounded-2xl shadow-lg overflow-hidden"
          >
            <ServiceContent service={selectedService} />
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default function ServicesPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <ServicesContent />
    </Suspense>
  )
}
