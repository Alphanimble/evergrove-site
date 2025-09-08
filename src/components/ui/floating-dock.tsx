"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { Home, Briefcase, Users,  MoonIcon, SunIcon, Menu, X, FolderOpen } from "lucide-react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { usePathname } from "next/navigation"
import { Teko } from "next/font/google"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@/components/ui/tooltip"

const teko = Teko({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
})

const dockItems = [
  { icon: Home, label: "Home", href: "/" },
  { icon: FolderOpen, label: "Projects", href: "/projects" },
  { icon: Briefcase, label: "Services", href: "/services" },
  { icon: Users, label: "About", href: "/about" },
]

export function FloatingDock() {
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { setTheme, theme } = useTheme()
  const pathname = usePathname()
  const isHomePage = pathname === "/"
  const [isVisible, setIsVisible] = useState(!isHomePage)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!isHomePage) {
      setIsVisible(true)
      return
    }

    setIsVisible(false)

    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const threshold = 100
      setIsVisible(scrollPosition > threshold)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isHomePage])

  if (!isVisible) return null

  return (
    <>
      {/* Desktop Dock */}
      <TooltipProvider>
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed top-8 left-[38%] transform -translate-x-1/2 z-50 hidden lg:block"
        >
          <div className="flex items-center gap-4 bg-black/70 backdrop-blur-xl border border-white/10 rounded-2xl p-3">
            {/* Logo on the left */}
            <Tooltip>
              <TooltipTrigger asChild>
                <Link href="/" className="flex items-center">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2"
                  >
                    <Image
                      src='/Background.png'
                      alt="EverGrove"
                      width={140}
                      height={40}
                      className="h-12 w-auto"
                    />
                  </motion.div>
                </Link>
              </TooltipTrigger>
              <TooltipContent>Home</TooltipContent>
            </Tooltip>

            {/* Separator */}
            <div className="w-px h-8 bg-white/20" />

            {/* Navigation Items */}
            <div className="flex items-center gap-2">
              {dockItems.map((item, index) => (
                <Tooltip key={item.label}>
                  <TooltipTrigger asChild>
                    <Link href={item.href}>
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-12 h-12 bg-white/10 hover:bg-primary/20 rounded-xl flex items-center justify-center cursor-pointer transition-colors"
                      >
                        <item.icon className="w-6 h-6 text-white" />
                      </motion.div>
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>{item.label}</TooltipContent>
                </Tooltip>
              ))}
            </div>

            {/* Separator */}
            <div className="w-px h-8 bg-white/20" />

            {/* Theme Switcher */}
            {mounted && (
              <Tooltip>
                <TooltipTrigger asChild>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-12 w-12 rounded-xl bg-white/10 hover:bg-primary/20 transition-colors"
                      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                    >
                      <SunIcon className="h-6 w-6 text-white rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                      <MoonIcon className="absolute h-6 w-6 text-white rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                      <span className="sr-only">Toggle theme</span>
                    </Button>
                  </motion.div>
                </TooltipTrigger>
                <TooltipContent>{theme === "light" ? "Switch to dark mode" : "Switch to light mode"}</TooltipContent>
              </Tooltip>
            )}
          </div>
        </motion.div>
      </TooltipProvider>

      {/* Mobile Dock */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -100, opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="fixed top-4 left-4 right-4 z-50 lg:hidden"
      >
        <div className="flex items-center justify-between gap-4 bg-black/20 backdrop-blur-xl border border-white/10 rounded-2xl p-3">
          {/* Logo on the left */}
          <Link href="/" className="flex items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="px-3 py-2"
            >
              <Image
                src={theme === 'dark' ? '/evergrove spaces_logo_20250806-2.svg' : '/evergrove spaces_logo_20250806-1.svg'}
                alt="EverGrove"
                width={120}
                height={32}
                className="h-6 w-auto"
              />
            </motion.div>
          </Link>

          {/* Right side with theme switcher and menu */}
          <div className="flex items-center gap-2">
            {/* Theme Switcher */}
            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                className="h-10 w-10 rounded-xl bg-white/10 hover:bg-primary/20 transition-colors"
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              >
                <SunIcon className="h-5 w-5 text-white rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <MoonIcon className="absolute h-5 w-5 text-white rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            )}

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="h-10 w-10 rounded-xl bg-white/10 hover:bg-primary/20 transition-colors"
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
              {showMobileMenu ? <X className="h-5 w-5 text-white" /> : <Menu className="h-5 w-5 text-white" />}
            </Button>
          </div>
        </div>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {showMobileMenu && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 left-4 right-4 z-40 lg:hidden"
          >
            <div className="bg-black/90 backdrop-blur-xl border border-white/20 rounded-2xl p-4 shadow-2xl">
              <nav className={`${teko.className} space-y-3`}>
                <Link
                  href="/"
                  className="block p-3 rounded-xl hover:bg-white/10 transition-colors font-medium text-white"
                  onClick={() => setShowMobileMenu(false)}
                >
                  Home
                </Link>

                <Link
                  href="/projects"
                  className="block p-3 rounded-xl hover:bg-white/10 transition-colors font-medium text-white"
                  onClick={() => setShowMobileMenu(false)}
                >
                  Projects
                </Link>

                <Link
                  href="/services"
                  className="block p-3 rounded-xl hover:bg-white/10 transition-colors font-medium text-white"
                  onClick={() => setShowMobileMenu(false)}
                >
                  Services
                </Link>

                <Link
                  href="/about"
                  className="block p-3 rounded-xl hover:bg-white/10 transition-colors font-medium text-white"
                  onClick={() => setShowMobileMenu(false)}
                >
                  About Us
                </Link>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
