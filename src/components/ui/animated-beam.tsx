"use client"

import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"

interface AnimatedBeamProps {
  className?: string
  duration?: number
  delay?: number
}

export function AnimatedBeam({ className = "", duration = 3, delay = 0 }: AnimatedBeamProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      {isVisible && (
        <motion.div
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: "100%", opacity: [0, 1, 0] }}
          transition={{
            duration,
            delay,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/50 to-transparent"
        />
      )}
    </div>
  )
}
