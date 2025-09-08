"use client"
import React, { useEffect, useMemo, useRef, useState } from "react"
import { createPortal } from "react-dom"
import { motion } from "framer-motion"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

interface GalleryModalProps {
  open: boolean
  onClose: () => void
  images: string[]
  title: string
  initialIndex?: number
}

const SWIPE_THRESHOLD_PX = 80

const GalleryModal: React.FC<GalleryModalProps> = ({ open, onClose, images, title, initialIndex = 0 }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)
  const [previousIndex, setPreviousIndex] = useState<number | null>(null)
  const lastIndexRef = useRef<number>(initialIndex)
  const [zoomScale, setZoomScale] = useState(1)
  const [isPanning, setIsPanning] = useState(false)
  const pointersRef = useRef<Map<number, { x: number; y: number }>>(new Map())
  const pinchStartDistanceRef = useRef<number | null>(null)
  const dialogRef = useRef<HTMLDivElement>(null)
  const thumbRefs = useRef<(HTMLButtonElement | null)[]>([])
  const lastActiveElementRef = useRef<HTMLElement | null>(null)
  // Reset index when opening or when images change
  useEffect(() => {
    if (open) setCurrentIndex(Math.max(0, Math.min(Number.isFinite(initialIndex) ? Number(initialIndex) : 0, images.length - 1)))
  }, [open, images, initialIndex])

  // Focus management (basic focus trap and return focus on close)
  useEffect(() => {
    if (open) {
      lastActiveElementRef.current = document.activeElement as HTMLElement
      dialogRef.current?.focus()
    } else {
      lastActiveElementRef.current?.focus()
      // Reset interaction state on close
      setZoomScale(1)
      setIsPanning(false)
      pointersRef.current.clear()
      pinchStartDistanceRef.current = null
    }
  }, [open])

  // Reset transient gesture state when the image changes
  useEffect(() => {
    setIsPanning(false)
    pointersRef.current.clear()
    pinchStartDistanceRef.current = null
    setZoomScale(1)
    if (lastIndexRef.current !== currentIndex) {
      setPreviousIndex(lastIndexRef.current)
      lastIndexRef.current = currentIndex
    }
  }, [currentIndex])

  const prevImage = () => setCurrentIndex((i) => (i === 0 ? images.length - 1 : i - 1))
  const nextImage = () => setCurrentIndex((i) => (i === images.length - 1 ? 0 : i + 1))

  // Preload neighbors
  const neighborUrls = useMemo(() => {
    if (!images?.length) return [] as string[]
    const prev = images[(currentIndex - 1 + images.length) % images.length]
    const next = images[(currentIndex + 1) % images.length]
    return [prev, next]
  }, [images, currentIndex])
  useEffect(() => {
    neighborUrls.forEach((src) => {
      if (!src) return
      const img = new window.Image()
      img.src = src
    })
  }, [neighborUrls])

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!open) return
      if (e.key === "ArrowLeft") prevImage()
      if (e.key === "ArrowRight") nextImage()
      if (e.key === "Escape") onClose()
      if (e.key === "Home") setCurrentIndex(0)
      if (e.key === "End") setCurrentIndex(images.length - 1)
    }
    document.addEventListener("keydown", handleKey, { capture: true })
    return () => document.removeEventListener("keydown", handleKey, { capture: true } as any)
  }, [open, onClose, images.length])
  // Close modal when clicking on backdrop
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  const onDoubleClick = () => {
    setZoomScale((s) => (s > 1 ? 1 : 2.2))
  }

  const onWheel: React.WheelEventHandler<HTMLDivElement> = (e) => {
    if (!open) return
    if (e.ctrlKey) {
      e.preventDefault()
      setZoomScale((s) => (e.deltaY < 0 ? Math.min(3, s + 0.2) : Math.max(1, s - 0.2)))
    }
  }

  // Ensure selected thumbnail is visible
  useEffect(() => {
    const el = thumbRefs.current[currentIndex]
    if (el) {
      el.scrollIntoView({ block: "nearest", inline: "center", behavior: "smooth" })
    }
  }, [currentIndex, open])

  if (!open) return null

  return createPortal(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black/80 p-4"
      onClick={handleBackdropClick}
      onWheel={onWheel}
      onKeyDown={(e) => {
        if (e.key === "Escape") onClose()
      }}
      role="dialog"
      aria-modal="true"
      aria-label={`${title} gallery`}
      ref={dialogRef}
      tabIndex={-1}
    >
          <button
            className="absolute top-4 right-4 z-20 text-muted-foreground hover:text-primary"
            onClick={onClose}
            aria-label="Close gallery"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Prev button */}
          <button
            className="absolute left-6 z-20 text-white hover:text-primary"
            onClick={prevImage}
            aria-label="Previous image"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>

          {/* Image Area with no blank frame crossfade */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 1, scale: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="relative flex-1 w-full max-w-6xl h-[72vh] flex items-center justify-center select-none"
            drag={zoomScale <= 1 ? "x" : false}
            dragConstraints={{ left: 0, right: 0 }}
            onDragStart={() => setIsPanning(true)}
            onDragEnd={(_, info) => {
              setIsPanning(false)
              if (Math.abs(info.offset.x) > SWIPE_THRESHOLD_PX) {
                if (info.offset.x < 0) nextImage()
                else prevImage()
              }
            }}
            onDoubleClick={onDoubleClick}
            style={{ touchAction: zoomScale > 1 ? "none" : "pan-y" }}
            onPointerDown={(e) => {
              pointersRef.current.set(e.pointerId, { x: e.clientX, y: e.clientY })
              if (pointersRef.current.size === 2) {
                const pts = Array.from(pointersRef.current.values())
                const dx = pts[0].x - pts[1].x
                const dy = pts[0].y - pts[1].y
                pinchStartDistanceRef.current = Math.hypot(dx, dy)
              }
            }}
            onPointerMove={(e) => {
              if (!pointersRef.current.has(e.pointerId)) return
              pointersRef.current.set(e.pointerId, { x: e.clientX, y: e.clientY })
              if (pointersRef.current.size === 2 && pinchStartDistanceRef.current) {
                const pts = Array.from(pointersRef.current.values())
                const dx = pts[0].x - pts[1].x
                const dy = pts[0].y - pts[1].y
                const dist = Math.hypot(dx, dy)
                const ratio = dist / pinchStartDistanceRef.current
                const next = Math.max(1, Math.min(3, ratio * 1.8))
                setZoomScale(next)
              }
            }}
            onPointerUp={(e) => {
              pointersRef.current.delete(e.pointerId)
              if (pointersRef.current.size < 2) {
                pinchStartDistanceRef.current = null
              }
            }}
            onPointerCancel={(e) => {
              pointersRef.current.delete(e.pointerId)
              pinchStartDistanceRef.current = null
            }}
          >
            {/* Previous image layer fades out */}
            {previousIndex !== null && previousIndex !== currentIndex && (
              <motion.div
                className="absolute inset-0"
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{ duration: 0 }}
                onAnimationComplete={() => setPreviousIndex(null)}
              >
                <Image
                  src={images?.[previousIndex] || "/placeholder.svg"}
                  alt={`${title} ${previousIndex + 1}`}
                  fill
                  className="object-contain"
                  priority
                />
              </motion.div>
            )}
            {/* Current image layer stays visible */}
            <motion.div
              className="absolute inset-0"
              animate={{ scale: zoomScale, cursor: zoomScale > 1 ? "grab" : "auto" }}
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
              drag={zoomScale > 1}
              dragConstraints={{ left: -200, right: 200, top: -200, bottom: 200 }}
              dragElastic={0.15}
            >
              <Image
                src={images?.[currentIndex] || "/placeholder.svg"}
                alt={`${title} ${Number.isFinite(currentIndex) ? currentIndex + 1 : 1} of ${images?.length ?? 0}`}
                fill
                className="object-contain"
                priority
              />
            </motion.div>
          </motion.div>

          {/* Next button */}
          <button
            className="absolute right-6 text-white hover:text-primary"
            onClick={nextImage}
            aria-label="Next image"
          >
            <ChevronRight className="w-10 h-10" />
          </button>

          {/* Thumbnails */}
          <div className="mt-6 flex gap-3 overflow-x-auto no-scrollbar max-w-5xl px-4" aria-label="Image thumbnails">
            {images.map((thumb, idx) => (
              <button
                key={idx}
                ref={(el) => {
                  thumbRefs.current[idx] = el
                }}
                onClick={() => setCurrentIndex(idx)}
                className={`relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden border-2 outline-none focus:ring-2 focus:ring-primary/60 ${
                  idx === currentIndex ? "border-primary" : "border-transparent opacity-70 hover:opacity-100"
                }`}
                aria-label={`Go to image ${idx + 1}`}
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

    </motion.div>,
    typeof document !== "undefined" ? document.body : (null as any)
  )
}

export default GalleryModal
