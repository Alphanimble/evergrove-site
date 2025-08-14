"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import Image from "next/image"

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          setTimeout(() => setIsLoading(false), 500)
          return 100
        }
        return prev + 2
      })
    }, 50)

    return () => clearInterval(timer)
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center"
        >
          {/* Animated Background */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              animate={{
                background: [
                  "radial-gradient(circle at 20% 50%, #f59e0b 0%, transparent 50%)",
                  "radial-gradient(circle at 80% 50%, #d97706 0%, transparent 50%)",
                  "radial-gradient(circle at 40% 50%, #f59e0b 0%, transparent 50%)",
                ],
              }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              className="absolute inset-0 opacity-20"
            />
          </div>

          {/* Floating Particles - Behind content */}
          {/* <div className="absolute inset-0 z-10">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                  y: [-20, -100],
                  x: Math.random() * 400 - 200,
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: i * 0.2,
                  ease: "easeOut",
                }}
                className="absolute w-2 h-2 bg-primary rounded-full"
                style={{
                  left: "50%",
                  top: "70%",
                }}
              />
            ))}
          </div> */}

          <div className="relative z-50 text-center">
            {/* Logo Animation */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="mb-8 flex justify-center items-center relative z-50"
            >
              {mounted && (
                <Image
                  src='/Background.png'
                  alt="EverGrove"
                  width={400}
                  height={120}
                  className="h-24 md:h-32 w-auto relative z-50"
                  priority
                />
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-white/60 text-xl mt-2 mb-8 relative z-50"
            >
              Crafting Tomorrow's Spaces
            </motion.div>

            {/* Progress Bar */}
            <div className="w-80 mx-auto relative z-0">
              <div className="flex justify-between text-white/60 text-sm mb-2">
                <span>Loading Experience</span>
                <span>{progress}%</span>
              </div>
              <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
