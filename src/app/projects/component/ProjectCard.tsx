import React from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin, Home, Layers } from "lucide-react"

export interface ProjectCardProps {
  project: {
    id: number;
    name: string;
    area: string;
    plots: number;
    theme: string;
    icon: React.ElementType;
    color: string;
    description: string;
    scope: string[];
    images: string[];
  };
  index: number
  onViewDetails: (index?: number) => void
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, onViewDetails }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: index * 0.1 }}
    viewport={{ once: true }}
    className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
  >
    {/* Project Images */}
    <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""} relative`}>
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="relative group cursor-pointer"
        onClick={() => onViewDetails(0)}
      >
        <div className="grid grid-cols-2 gap-4">
          {project.images.slice(0, 4).map((image: string, imgIndex: number) => (
            <motion.div
              key={imgIndex}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: imgIndex * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="relative aspect-square overflow-hidden rounded-2xl"
              onClick={(e) => {
                e.stopPropagation()
                onViewDetails(imgIndex)
              }}
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
          <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center`}>
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
            {project.scope.map((item: string, scopeIndex: number) => (
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
          <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full font-semibold" onClick={() => onViewDetails()}>
            View Project Details
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </motion.div>
    </div>
  </motion.div>
)

export default ProjectCard
