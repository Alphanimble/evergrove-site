import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

interface GalleryModalProps {
  open: boolean
  onClose: () => void
  images: string[]
  title: string
}

const GalleryModal: React.FC<GalleryModalProps> = ({ open, onClose, images, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  // Reset index when new images open
  useEffect(() => {
    if (open) setCurrentIndex(0)
  }, [open, images])

  const prevImage = () => setCurrentIndex((i) => (i === 0 ? images.length - 1 : i - 1))
  const nextImage = () => setCurrentIndex((i) => (i === images.length - 1 ? 0 : i + 1))

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!open) return
      if (e.key === "ArrowLeft") prevImage()
      if (e.key === "ArrowRight") nextImage()
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [open])
  // Close modal when clicking on backdrop
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black/80 p-4"
          onClick={handleBackdropClick}
        >
          <button
            className="absolute top-4 right-4 text-muted-foreground hover:text-primary"
            onClick={onClose}
            aria-label="Close"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Prev button */}
          <button
            className="absolute left-6 text-white hover:text-primary"
            onClick={prevImage}
          >
            <ChevronLeft className="w-10 h-10" />
          </button>

          {/* Image */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="relative flex-1 w-full max-w-5xl h-[70vh] flex items-center justify-center"
          >
            <Image
              src={images[currentIndex] || "/placeholder.svg"}
              alt={`${title} ${currentIndex + 1}`}
              fill
              className="object-contain"
            />
          </motion.div>

          {/* Next button */}
          <button
            className="absolute right-6 text-white hover:text-primary"
            onClick={nextImage}
          >
            <ChevronRight className="w-10 h-10" />
          </button>

          {/* Thumbnails */}
          <div className="mt-6 flex gap-3 overflow-x-auto max-w-4xl px-4">
            {images.map((thumb, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden border-2 ${
                  idx === currentIndex ? "border-primary" : "border-transparent opacity-70 hover:opacity-100"
                }`}
              >
                <Image
                  src={thumb || "/placeholder.svg"}
                  alt={`Thumbnail ${idx + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>

        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default GalleryModal
