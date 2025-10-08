"use client"
import type React from "react"
import { LayoutGrid } from "@/components/ui/layout-grid"
import Image from "next/image"
import { motion } from "framer-motion"

interface CardContent {
  title: string
  description: string
  subPoints?: string[]
}

interface Card {
  id: number
  content: CardContent
  className: string
  thumbnail: string
}

interface FormattedCard {
  id: number
  content: React.ReactNode
  className: string
  thumbnail: React.ReactNode
}

interface CustomLayoutGridProps {
  cards: Card[]
}

const CardContent = ({ title, description }: CardContent) => {
  return (
    <div>
      <p className="font-bold text-lg sm:text-xl md:text-4xl text-white">{title}</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-sm sm:text-base my-4 max-w-lg text-neutral-200">{description}</p>
    </div>
  )
}

const HoverCard = ({ card }: { card: Card }) => {
  const subPointsCount = card.content.subPoints?.length || 0

  const gridColumns =
    subPointsCount <= 2
      ? "grid-cols-1"
      : subPointsCount <= 4
        ? "grid-cols-2"
        : subPointsCount <= 6
          ? "grid-cols-3"
          : "grid-cols-2"

  return (
    <div className="group relative w-full h-full cursor-pointer overflow-hidden rounded-2xl">
      <Image
        src={card.thumbnail || "/placeholder.svg"}
        alt={card.content.title}
        fill
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      {/* Title that's always visible */}
      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 transition-opacity duration-300 group-hover:opacity-0">
        <h3 className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight">
          {card.content.title}
        </h3>
      </div>

      {/* Hover Content */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/80 to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
      >
        <div className="h-full flex flex-col justify-between p-4 sm:p-6 md:p-8">
          {/* Header */}
          <div>
            <h3 className="font-display text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-3 sm:mb-4">
              {card.content.title}
            </h3>
            <p className="text-white/90 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6">{card.content.description}</p>
          </div>

          {/* Features Grid */}
          {card.content.subPoints && (
            <div className={`grid ${gridColumns} gap-2 sm:gap-3`}>
              {card.content.subPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-effect rounded-lg sm:rounded-xl p-2 sm:p-3 md:p-4 hover:bg-white/20 transition-colors"
                >
                  <p className="text-white text-xs sm:text-sm md:text-base font-semibold text-center">{point}</p>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </div>
  )
}

export default function CustomLayoutGrid({ cards }: CustomLayoutGridProps) {
  const formattedCards: FormattedCard[] = cards.map((card) => ({
    ...card,
    content: <div />, // Not used in this implementation
    thumbnail: <HoverCard card={card} />,
  }))

  return (
    <div className="relative">
      <div className="min-h-[80vh] sm:min-h-screen w-full max-w-[1920px] mx-auto">
        <LayoutGrid cards={formattedCards} />
      </div>
    </div>
  )
}
