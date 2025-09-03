"use client"

import { motion, useReducedMotion } from "framer-motion"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { TextReveal } from "@/components/ui/text-reveal"
import { Sparkles } from "@/components/ui/sparkles"
import { Particles } from "@/components/ui/particles"
import { ArrowRight, MapPin, Home, Layers, Building2, Users, Leaf as LeafIcon, Waves as WavesIcon, TreePine as TreePineIcon, Zap as ZapIcon } from "lucide-react"
// Map string keys received from the server to actual icon components
const ICON_MAP: Record<string, any> = {
  Leaf: LeafIcon,
  Waves: WavesIcon,
  TreePine: TreePineIcon,
  Zap: ZapIcon,
}

type LayoutProject = {
  id: number
  name: string
  area: string
  plots: number
  theme: string
  // icon can be a string key (from server) or a component (client)
  icon: string | any
  color: string
  description: string
  scope: string[]
  images: string[]
}

type ClubhouseProject = {
  id: number
  name: string
  area: string
  theme: string
  color: string
  description: string
  amenities: string[]
  images: string[]
}

export default function ProjectsClient({
  layoutProjects,
  clubhouseProjects,
}: {
  layoutProjects: LayoutProject[]
  clubhouseProjects: ClubhouseProject[]
}) {
  const [activeTab, setActiveTab] = useState<"layouts" | "clubhouses">("layouts")
  const [selectedProject, setSelectedProject] = useState<number | null>(null)
  const [isMounted, setIsMounted] = useState(false)
  const reduceMotion = useReducedMotion()

  useEffect(() => setIsMounted(true), [])

  // simple variants (respect reduced motion)
  const heroVariants = reduceMotion
    ? {}
    : { initial: { opacity: 0, y: 60 }, animate: { opacity: 1, y: 0 }, transition: { duration: 1.2 } }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <Image src="/team.jpg" alt="Our Projects" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        <Particles count={25} className="opacity-30" />

        <div className="absolute inset-0 flex items-center justify-center">
          {isMounted ? (
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.25, 0.25, 0.25, 0.75] }}
              className="text-center"
            >
              <Sparkles>
                <TextReveal className="font-display text-6xl md:text-8xl font-bold text-white mb-6">
                  Our Projects
                </TextReveal>
              </Sparkles>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 1, ease: [0.25, 0.25, 0.25, 0.75] }}
                className="text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed"
              >
                Discover our portfolio of extraordinary developments that redefine luxury living and sustainable design
              </motion.p>
            </motion.div>
          ) : (
            <div className="text-center">
              <Sparkles>
                <TextReveal className="font-display text-6xl md:text-8xl font-bold text-white mb-6">
                  Our Projects
                </TextReveal>
              </Sparkles>
              <p className="text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
                Discover our portfolio of extraordinary developments that redefine luxury living and sustainable design
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Project Categories */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6 lg:px-8">
          {/* Tab Navigation */}
          {isMounted ? (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center mb-16"
            >
              <div className="bg-card rounded-2xl p-2 shadow-lg">
                <button
                  onClick={() => setActiveTab("layouts")}
                  className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === "layouts"
                      ? "bg-primary text-white shadow-lg"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Building2 className="inline-block w-5 h-5 mr-2" />
                  Layout Projects
                </button>
                <button
                  onClick={() => setActiveTab("clubhouses")}
                  className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === "clubhouses"
                      ? "bg-primary text-white shadow-lg"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Users className="inline-block w-5 h-5 mr-2" />
                  Clubhouses
                </button>
              </div>
            </motion.div>
          ) : (
            <div className="flex justify-center mb-16">
              <div className="bg-card rounded-2xl p-2 shadow-lg">
                <button
                  onClick={() => setActiveTab("layouts")}
                  className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === "layouts"
                      ? "bg-primary text-white shadow-lg"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Building2 className="inline-block w-5 h-5 mr-2" />
                  Layout Projects
                </button>
                <button
                  onClick={() => setActiveTab("clubhouses")}
                  className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === "clubhouses"
                      ? "bg-primary text-white shadow-lg"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Users className="inline-block w-5 h-5 mr-2" />
                  Clubhouses
                </button>
              </div>
            </div>
          )}

          {/* Layout Projects */}
          {activeTab === "layouts" && (
            <div className="space-y-20">
              {layoutProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={isMounted ? { opacity: 0, y: 60 } : { opacity: 1, y: 0 }}
                  whileInView={isMounted ? { opacity: 1, y: 0 } : {}}
                  transition={isMounted ? { duration: 0.8, delay: index * 0.15, ease: [0.25, 0.25, 0.25, 0.75] } : {}}
                  viewport={isMounted ? { once: true, margin: "-100px 0px -100px 0px", amount: 0.3 } : {}}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                  }`}
                >
                  {/* Project Images */}
                  <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""} relative`}>
                    <motion.div
                      initial={isMounted ? { opacity: 0, scale: 0.95 } : { opacity: 1, scale: 1 }}
                      whileInView={isMounted ? { opacity: 1, scale: 1 } : {}}
                      transition={isMounted ? { duration: 0.8, delay: 0.2, ease: [0.25, 0.25, 0.25, 0.75] } : {}}
                      viewport={isMounted ? { once: true, margin: "-50px 0px -50px 0px", amount: 0.3 } : {}}
                      whileHover={isMounted ? { scale: 1.02 } : {}}
                      className="relative group cursor-pointer"
                      onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
                    >
                      <div className="grid grid-cols-2 gap-4">
                        {project.images.slice(0, 4).map((image, imgIndex) => (
                          <motion.div
                            key={imgIndex}
                            initial={isMounted ? { opacity: 0, scale: 0.9, y: 20 } : { opacity: 1, scale: 1, y: 0 }}
                            whileInView={isMounted ? { opacity: 1, scale: 1, y: 0 } : {}}
                            transition={isMounted ? { delay: 0.3 + imgIndex * 0.1, duration: 0.6, ease: [0.25, 0.25, 0.25, 0.75] } : {}}
                            viewport={isMounted ? { once: true, margin: "-30px 0px -30px 0px", amount: 0.2 } : {}}
                            className="relative aspect-square overflow-hidden rounded-2xl"
                          >
                            <Image src={image || "/placeholder.svg"} alt={`${project.name} ${imgIndex + 1}`} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          </motion.div>
                        ))}
                      </div>

                      {/* Overlay Info */}
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl flex items-center justify-center">
                        <div className="text-center text-white">
                          {(() => {
                            const Icon = typeof project.icon === "string" ? ICON_MAP[project.icon] : project.icon
                            return Icon ? <Icon className="w-12 h-12 mx-auto mb-4 text-primary" /> : null
                          })()}
                          <p className="text-lg font-semibold">View Gallery</p>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Project Details */}
                  <div className={`${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""} space-y-6`}>
                    <motion.div
                      initial={isMounted ? { opacity: 0, x: index % 2 === 0 ? -40 : 40, y: 20 } : { opacity: 1, x: 0, y: 0 }}
                      whileInView={isMounted ? { opacity: 1, x: 0, y: 0 } : {}}
                      transition={isMounted ? { duration: 0.8, delay: 0.1, ease: [0.25, 0.25, 0.25, 0.75] } : {}}
                      viewport={isMounted ? { once: true, margin: "-50px 0px -50px 0px", amount: 0.3 } : {}}
                    >
                      {/* Project Header */}
                      <div className="flex items-center gap-4 mb-6">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                          {(() => {
                            // Support string keys from server or direct component references on client
                            const Icon = typeof project.icon === "string" ? ICON_MAP[project.icon] : project.icon
                            return Icon ? <Icon className="w-8 h-8 text-white" /> : null
                          })()}
                        </div>
                        <div>
                          <h3 className="font-display text-4xl font-bold text-foreground">{project.name}</h3>
                          <p className="text-primary font-semibold text-lg">{project.theme}</p>
                        </div>
                      </div>

                      {/* Project Stats */}
                      <div className="grid grid-cols-2 gap-6 mb-6">
                        <div className="bg-card p-6 rounded-2xl shadow-lg">
                          <div className="flex items-center gap-3 mb-2">
                            <MapPin className="w-5 h-5 text-primary" />
                            <span className="font-semibold text-foreground">Area</span>
                          </div>
                          <p className="text-2xl font-bold text-primary">{project.area}</p>
                        </div>
                        <div className="bg-card p-6 rounded-2xl shadow-lg">
                          <div className="flex items-center gap-3 mb-2">
                            <Home className="w-5 h-5 text-primary" />
                            <span className="font-semibold text-foreground">Plots</span>
                          </div>
                          <p className="text-2xl font-bold text-primary">{project.plots}</p>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground leading-relaxed text-lg mb-6">{project.description}</p>

                      {/* Scope */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                          <Layers className="w-5 h-5 text-primary" />
                          Project Scope
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.scope.map((item, scopeIndex) => (
                            <motion.span
                              key={scopeIndex}
                              initial={isMounted ? { opacity: 0, scale: 0.8, y: 10 } : { opacity: 1, scale: 1, y: 0 }}
                              whileInView={isMounted ? { opacity: 1, scale: 1, y: 0 } : {}}
                              transition={isMounted ? { delay: 0.4 + scopeIndex * 0.08, duration: 0.4, ease: [0.25, 0.25, 0.25, 0.75] } : {}}
                              viewport={isMounted ? { once: true, margin: "-20px 0px -20px 0px", amount: 0.2 } : {}}
                              className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium"
                            >
                              {item}
                            </motion.span>
                          ))}
                        </div>
                      </div>

                      {/* CTA */}
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full font-semibold">
                          View Project Details
                          <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                      </motion.div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* Clubhouse Projects */}
          {activeTab === "clubhouses" && (
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {clubhouseProjects.map((clubhouse, index) => (
                <motion.div
                  key={clubhouse.id}
                  initial={isMounted ? { opacity: 0, y: 60, scale: 0.95 } : { opacity: 1, y: 0, scale: 1 }}
                  whileInView={isMounted ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={isMounted ? { duration: 0.8, delay: index * 0.15, ease: [0.25, 0.25, 0.25, 0.75] } : {}}
                  viewport={isMounted ? { once: true, margin: "-100px 0px -100px 0px", amount: 0.2 } : {}}
                  whileHover={isMounted ? { y: -10 } : {}}
                  className="bg-card rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group"
                >
                  {/* Image Gallery */}
                  <div className="relative h-64 overflow-hidden">
                    <div className="grid grid-cols-2 h-full gap-1">
                      {clubhouse.images.slice(0, 4).map((image, imgIndex) => (
                        <div key={imgIndex} className="relative overflow-hidden">
                          <Image src={image || "/placeholder.svg"} alt={`${clubhouse.name} ${imgIndex + 1}`} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                        </div>
                      ))}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className={`absolute top-4 left-4 px-3 py-1 rounded-full bg-gradient-to-r ${clubhouse.color} text-white text-sm font-semibold`}>
                      {clubhouse.area}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h3 className="font-display text-2xl font-bold text-foreground mb-2">{clubhouse.name}</h3>
                    <p className="text-primary font-semibold mb-4">{clubhouse.theme}</p>

                    <p className="text-muted-foreground leading-relaxed mb-6 line-clamp-4">{clubhouse.description}</p>

                    {/* Amenities */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-foreground mb-3">Amenities</h4>
                      <div className="space-y-2">
                        {clubhouse.amenities.slice(0, 3).map((amenity, amenityIndex) => (
                          <div key={amenityIndex} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-primary rounded-full" />
                            <span className="text-sm text-muted-foreground">{amenity}</span>
                          </div>
                        ))}
                        {clubhouse.amenities.length > 3 && (
                          <p className="text-sm text-primary font-medium">+{clubhouse.amenities.length - 3} more</p>
                        )}
                      </div>
                    </div>

                    <Button variant="outline" className="w-full rounded-full font-semibold group-hover:bg-primary group-hover:text-white transition-colors bg-transparent">
                      Explore Clubhouse
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-accent/10 relative overflow-hidden">
        <Sparkles>
          <div className="container mx-auto px-6 lg:px-8 text-center relative z-10">
            <motion.div
              initial={isMounted ? { opacity: 0, y: 40 } : { opacity: 1, y: 0 }}
              whileInView={isMounted ? { opacity: 1, y: 0 } : {}}
              transition={isMounted ? { duration: 0.8, ease: [0.25, 0.25, 0.25, 0.75] } : {}}
              viewport={isMounted ? { once: true, margin: "-50px 0px -50px 0px", amount: 0.3 } : {}}
            >
              <TextReveal className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">Ready to Start Your Project?</TextReveal>
              <motion.p
                initial={isMounted ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
                whileInView={isMounted ? { opacity: 1, y: 0 } : {}}
                transition={isMounted ? { delay: 0.3, duration: 0.8, ease: [0.25, 0.25, 0.25, 0.75] } : {}}
                viewport={isMounted ? { once: true, margin: "-30px 0px -30px 0px", amount: 0.3 } : {}}
                className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
              >
                Let's discuss how we can bring your vision to life with our expertise in luxury development and
                sustainable design.
              </motion.p>
              <motion.div
                initial={isMounted ? { opacity: 0, scale: 0.9 } : { opacity: 1, scale: 1 }}
                whileInView={isMounted ? { opacity: 1, scale: 1 } : {}}
                transition={isMounted ? { delay: 0.5, duration: 0.6, ease: [0.25, 0.25, 0.25, 0.75] } : {}}
                viewport={isMounted ? { once: true, margin: "-20px 0px -20px 0px", amount: 0.3 } : {}}
                whileHover={isMounted ? { scale: 1.05 } : {}}
                whileTap={isMounted ? { scale: 0.95 } : {}}
              >
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-2xl hover:shadow-primary/25 transition-all duration-300">
                  Schedule Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </Sparkles>
      </section>
    </div>
  )
}
