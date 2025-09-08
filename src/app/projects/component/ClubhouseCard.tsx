import React from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export interface ClubhouseCardProps {
  clubhouse: {
    id: number
    name: string
    area: string
    theme: string
    color: string
    description: string
    amenities: string[]
    images: string[]
  }
  index: number
  onExplore: () => void
}

const ClubhouseCard: React.FC<ClubhouseCardProps> = ({ clubhouse, index, onExplore }) => (
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
        {clubhouse.images.slice(0, 4).map((image: string, imgIndex: number) => (
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
          {clubhouse.amenities.slice(0, 3).map((amenity: string, amenityIndex: number) => (
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
        className="w-full group/btn border-border hover:border-primary dark:border-primary dark:text-primary dark:hover:bg-primary dark:hover:text-primary-foreground transition-all duration-300"
        onClick={onExplore}
      >
        Explore Clubhouse
        <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
      </Button>
    </div>
  </motion.div>
)

export default ClubhouseCard
