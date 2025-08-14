"use client"

import * as React from "react"
import Link from "next/link"
import { MoonIcon, SunIcon, Menu, X } from "lucide-react"
import { useTheme } from "next-themes"
import { motion, AnimatePresence } from "framer-motion"

import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

export function Navbar() {
  const { setTheme, theme } = useTheme()
  const [mounted, setMounted] = React.useState(false)
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const services = [
    { title: "Architecture & Interior Design", href: "/services?service=architecture-design" },
    { title: "Landscape Design", href: "/services?service=landscape-design" },
    { title: "Infrastructure Engineering", href: "/services?service=infrastructure" },
    { title: "Building Services & Water Resources", href: "/services?service=building-services" },
    { title: "Project Execution", href: "/services?service=execution" },
  ]

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-white/10">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="font-display text-2xl md:text-3xl font-bold text-gradient">EverGrove</div>
            </Link>

            {/* Desktop Navigation */}
            <NavigationMenu className="hidden lg:block">
              <NavigationMenuList className="space-x-2">
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={`${navigationMenuTriggerStyle()} text-base font-medium px-6 py-3 rounded-full hover:bg-white/10 transition-all duration-200`}
                    >
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-base font-medium px-6 py-3 rounded-full hover:bg-white/10 transition-all duration-200">
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="p-6 w-[400px] bg-background/95 backdrop-blur-lg border border-border/50 rounded-2xl shadow-2xl">
                      <div className="space-y-3">
                        {services.map((service) => (
                          <Link
                            key={service.title}
                            href={service.href}
                            className="block p-4 rounded-xl hover:bg-primary/5 transition-colors group"
                          >
                            <div className="font-semibold text-foreground group-hover:text-primary transition-colors">
                              {service.title}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/projects" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={`${navigationMenuTriggerStyle()} text-base font-medium px-6 py-3 rounded-full hover:bg-white/10 transition-all duration-200`}
                    >
                      Projects
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/about" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={`${navigationMenuTriggerStyle()} text-base font-medium px-6 py-3 rounded-full hover:bg-white/10 transition-all duration-200`}
                    >
                      About Us
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* Right side actions */}
            <div className="flex items-center space-x-4">
              {/* Theme Switcher */}
              {mounted && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-10 w-10 rounded-full hover:bg-white/10 transition-colors"
                  onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                >
                  <SunIcon className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <MoonIcon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              )}

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden h-10 w-10 rounded-full hover:bg-white/10 transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden border-t border-white/10 bg-background/95 backdrop-blur-lg"
            >
              <div className="container mx-auto px-6 py-6">
                <nav className="space-y-4">
                  <Link
                    href="/"
                    className="block py-3 px-4 rounded-xl hover:bg-primary/5 transition-colors font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Home
                  </Link>

                  <div className="space-y-2">
                    <div className="py-3 px-4 font-medium text-muted-foreground">Services</div>
                    <div className="pl-4 space-y-2">
                      {services.map((service) => (
                        <Link
                          key={service.title}
                          href={service.href}
                          className="block py-2 px-4 rounded-lg hover:bg-primary/5 transition-colors text-sm"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {service.title}
                        </Link>
                      ))}
                    </div>
                  </div>

                  <Link
                    href="/projects"
                    className="block py-3 px-4 rounded-xl hover:bg-primary/5 transition-colors font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Projects
                  </Link>

                  <Link
                    href="/about"
                    className="block py-3 px-4 rounded-xl hover:bg-primary/5 transition-colors font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    About Us
                  </Link>
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  )
}
