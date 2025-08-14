"use client"
import { motion } from "framer-motion"
import type React from "react"

import { cn } from "@/lib/utils"

type Card = {
  id: number
  content: React.ReactNode
  className: string
  thumbnail: React.ReactNode
}

export const LayoutGrid = ({ cards }: { cards: Card[] }) => {
  return (
    <div className="w-full h-full p-6 md:p-8 lg:p-12 grid grid-cols-1 md:grid-cols-3 max-w-[1920px] mx-auto gap-6 md:gap-8">
      {cards.map((card, i) => (
        <motion.div
          key={i}
          className={cn(card.className, "")}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: i * 0.1 }}
          viewport={{ once: true }}
        >
          <div
            className={cn(
              card.className,
              "relative overflow-hidden bg-white dark:bg-gray-900 rounded-2xl h-full w-full shadow-xl hover:shadow-2xl transition-shadow duration-300",
            )}
          >
            <ImageComponent card={card} />
          </div>
        </motion.div>
      ))}
    </div>
  )
}

const ImageComponent = ({ card }: { card: Card }) => {
  return (
    <motion.div layoutId={`image-${card.id}-image`} className="absolute inset-0 h-full w-full">
      {card.thumbnail}
    </motion.div>
  )
}
