"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { TextReveal } from "@/components/ui/text-reveal"
import { Sparkles } from "@/components/ui/sparkles"
import { Particles } from "@/components/ui/particles"
import { ArrowRight, MapPin, Home, Layers, Leaf, Building2, Users, Waves, TreePine, Zap } from "lucide-react"

const layoutProjects = [
  {
    id: 1,
    name: "Eternia",
    area: "10 Acres",
    plots: 170,
    theme: "Nature & Sustainability",
    icon: Leaf,
    color: "from-green-500 to-emerald-600",
    description:
      "This project is a masterful fusion of thoughtful design and expert execution, carefully crafted to ensure that modern living aligns perfectly with the tranquillity of nature. From the initial concept to the final execution, every detail has been meticulously planned to create spaces that blend seamlessly with their natural surroundings. The design embraces sustainability, with eco-friendly materials, energy-efficient systems, and green spaces that encourage a harmonious connection with the environment.",
    scope: ["Master Plan", "Entrance Arch", "MEP Services", "Landscape Design"],
    images: [
      "/Renders/Entrance_Arch/Eternia/1.jpg",
      "/Renders/Entrance_Arch/Eternia/2.jpg",
      "/Renders/Entrance_Arch/Eternia/3.jpg",
      "/Renders/Master_plan/Eternia/Master_plan/1.jpg",
      "/Renders/Entrance_Arch/Eternia/4.jpg",
    ],
  },
  {
    id: 2,
    name: "Etasha",
    area: "13 Acres",
    plots: 191,
    theme: "Island Paradise",
    icon: Waves,
    color: "from-blue-500 to-cyan-600",
    description:
      "This project is a celebration of island life, bringing the serene beauty of tropical islands into every aspect of its design and construction. The entrance features a striking arch designed to resemble an island-themed tree, instantly immersing visitors in the natural, laid-back atmosphere of a coastal paradise. Every amenity has been thoughtfully crafted to align with the island theme, from open, airy spaces that mimic beachfront living to vibrant landscaping that evokes the lushness of island flora.",
    scope: ["Master Plan", "Entrance Arch", "MEP Services", "Landscape Design"],
    images: [
      "/Renders/Entrance_Arch/Etasha/1.jpeg",
      "/Renders/Entrance_Arch/Etasha/2.jpeg",
      "/Renders/Entrance_Arch/Etasha/3.jpeg",
      "/Renders/Clubhouse/Etasha/Renders/entry.png",
    ],
  },
  {
    id: 3,
    name: "Ernika",
    area: "12 Acres",
    plots: 220,
    theme: "Amazon Rainforest",
    icon: TreePine,
    color: "from-emerald-500 to-green-700",
    description:
      "Inspired by the vibrant biodiversity of the Amazon Rainforest, this project blends the beauty of nature with functional design. The design features lush greenery, flowing water elements, and organic forms that evoke the rainforest's rich ecosystem. A striking entrance arch, designed with a parametric structure, gives visitors a sense of walking into the heart of a forest, with its fluid, tree-like form symbolizing the natural environment.",
    scope: ["Master Plan", "Entrance Arch", "MEP Services", "Landscape Design"],
    images: [
      "/Renders/Entrance_Arch/Ernika/1.png",
      "/Renders/Entrance_Arch/Ernika/2.png",
      "/Renders/Entrance_Arch/Ernika/3.png",
      "/Renders/Clubhouse/Ernika/ernika_1.png",
    ],
  },
  {
    id: 4,
    name: "Evara",
    area: "8 Acres",
    plots: 114,
    theme: "Sustainable Living",
    icon: Zap,
    color: "from-amber-500 to-orange-600",
    description:
      "Project is designed with a strong focus on sustainability, offering residents an eco-friendly living environment that harmonizes with nature. The layout maximizes green spaces, ensuring that each plot benefits from ample natural surroundings, while promoting energy-efficient design through thoughtful placement and orientation. Sustainable infrastructure, such as rainwater harvesting systems, solar energy solutions, and efficient waste management, are integrated throughout the development.",
    scope: ["Master Plan", "Entrance Arch", "MEP Services", "Landscape Design"],
    images: [
      "/Renders/Entrance_Arch/Evara/Evara_1.png",
      "/Renders/Entrance_Arch/Evara/Evara_2.png",
      "/Renders/Entrance_Arch/Evara/Evara_3.png",
      "/Renders/Entrance_Arch/Evara/Evara_4.png",
    ],
  },
]

const clubhouseProjects = [
  {
    id: 1,
    name: "Eternia Clubhouse",
    area: "10,600 Sqft",
    theme: "Refined Luxury",
    color: "from-purple-500 to-indigo-600",
    description:
      "The clubhouse at the Eternia Project, where refined luxury meets sustainable design. Anchored by a sculptural waffle-slab ceiling and framed by a striking terracotta jali wall that doubles as a living green façade, the space filters light and invites nature in. Inside, residents enjoy a gym, indoor games, coworking spaces, an AMTC room, and a rooftop restaurant—each space designed to meet modern lifestyle needs.",
    amenities: ["Gym", "Indoor Games", "Coworking Spaces", "AMTC Room", "Rooftop Restaurant"],
    images: [
      "/Renders/Clubhouse/Eternia/eternia_1.png",
      "/Renders/Clubhouse/Eternia/eternia_2.png",
      "/Renders/Clubhouse/Eternia/eternia_3.png",
    ],
  },
  {
    id: 2,
    name: "Etasha Clubhouse",
    area: "9,700 Sqft",
    theme: "Island Retreat",
    color: "from-teal-500 to-blue-600",
    description:
      "Island-inspired retreat designed to foster community and relaxation. Surrounded by water and lush greenery, it features a warm Mangalore tile roof and fluid, coastal-style architecture. Inside, residents enjoy a modern gym, indoor games area, co-working space, and a terrace restaurant with panoramic views. With an AMTC room for efficient management, the Clubhouse blends natural charm with everyday functionality.",
    amenities: ["Modern Gym", "Indoor Games", "Co-working Space", "Terrace Restaurant", "AMTC Room"],
    images: [
      "/Renders/Clubhouse/Etasha/Renders/entry.png",
      "/Renders/Clubhouse/Etasha/Renders/a.png",
      "/Renders/Clubhouse/Etasha/Renders/gym_1.png",
    ],
  },
  {
    id: 3,
    name: "Ernika Clubhouse",
    area: "10,200 Sqft",
    theme: "Biophilic Design",
    color: "from-green-500 to-emerald-600",
    description:
      "The clubhouse at the Ernika project, Where Nature Meets Contemporary Living is a vibrant, biophilic hub designed to seamlessly blend nature with modern amenities, fostering wellness, community, and connection. Featuring lush greenery throughout, including vertical gardens, stepped balconies, and landscaped terraces, the architecture emphasizes natural light, ventilation, and organic forms through curved walls and layered elevations.",
    amenities: ["Fully Equipped Gym", "Indoor Games", "Co-working Space", "AMTC Room", "Scenic Terrace Restaurant"],
    images: [
      "/Renders/Clubhouse/Ernika/ernika_1.png",
      "/Renders/Clubhouse/Ernika/ernika_2.png",
      "/Renders/Clubhouse/Ernika/ernika_3.png",
      "/Renders/Clubhouse/Ernika/ernika_4.png",
    ],
  },
]

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState<"layouts" | "clubhouses">("layouts")
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <Image src="/team.jpg" alt="Our Projects" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        <Particles count={25} className="opacity-30" />

        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <Sparkles>
              <TextReveal className="font-display text-6xl md:text-8xl font-bold text-white mb-6">
                Our Projects
              </TextReveal>
            </Sparkles>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed"
            >
              Discover our portfolio of extraordinary developments that redefine luxury living and sustainable design
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Project Categories */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6 lg:px-8">
          {/* Tab Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
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

          {/* Layout Projects */}
          {activeTab === "layouts" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-20"
            >
              {layoutProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                  }`}
                >
                  {/* Project Images */}
                  <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""} relative`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="relative group cursor-pointer"
                      onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
                    >
                      <div className="grid grid-cols-2 gap-4">
                        {project.images.slice(0, 4).map((image, imgIndex) => (
                          <motion.div
                            key={imgIndex}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: imgIndex * 0.1, duration: 0.6 }}
                            viewport={{ once: true }}
                            className="relative aspect-square overflow-hidden rounded-2xl"
                          >
                            <Image
                              src={image || "/placeholder.svg"}
                              alt={`${project.name} ${imgIndex + 1}`}
                              fill
                              className="object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          </motion.div>
                        ))}
                      </div>

                      {/* Overlay Info */}
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl flex items-center justify-center">
                        <div className="text-center text-white">
                          <project.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                          <p className="text-lg font-semibold">View Gallery</p>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Project Details */}
                  <div className={`${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""} space-y-6`}>
                    <motion.div
                      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8 }}
                      viewport={{ once: true }}
                    >
                      {/* Project Header */}
                      <div className="flex items-center gap-4 mb-6">
                        <div
                          className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center`}
                        >
                          <project.icon className="w-8 h-8 text-white" />
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
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ delay: scopeIndex * 0.1, duration: 0.4 }}
                              viewport={{ once: true }}
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
            </motion.div>
          )}

          {/* Clubhouse Projects */}
          {activeTab === "clubhouses" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
            >
              {clubhouseProjects.map((clubhouse, index) => (
                <motion.div
                  key={clubhouse.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="bg-card rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group"
                >
                  {/* Image Gallery */}
                  <div className="relative h-64 overflow-hidden">
                    <div className="grid grid-cols-2 h-full gap-1">
                      {clubhouse.images.slice(0, 4).map((image, imgIndex) => (
                        <div key={imgIndex} className="relative overflow-hidden">
                          <Image
                            src={image || "/placeholder.svg"}
                            alt={`${clubhouse.name} ${imgIndex + 1}`}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                      ))}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div
                      className={`absolute top-4 left-4 px-3 py-1 rounded-full bg-gradient-to-r ${clubhouse.color} text-white text-sm font-semibold`}
                    >
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

                    <Button
                      variant="outline"
                      className="w-full rounded-full font-semibold group-hover:bg-primary group-hover:text-white transition-colors bg-transparent"
                    >
                      Explore Clubhouse
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-accent/10 relative overflow-hidden">
        <Sparkles>
          <div className="container mx-auto px-6 lg:px-8 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <TextReveal className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
                Ready to Start Your Project?
              </TextReveal>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                viewport={{ once: true }}
                className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
              >
                Let's discuss how we can bring your vision to life with our expertise in luxury development and
                sustainable design.
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
