"use client";

import * as React from "react";
import Link from "next/link";
import { MoonIcon, SunIcon, Menu } from "lucide-react";
import { useTheme } from "next-themes";
import { Teko, Fraunces } from "next/font/google";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const teko = Teko({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export function Navbar() {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  // const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
  //   e.preventDefault();
  //   const element = document.getElementById(id);
  //   if (element) {
  //     element.scrollIntoView({
  //       behavior: "smooth",
  //       block: "start",
  //     });
  //   }
  // };

  return (
    <>
      <div className="fixed top-0 left-1/2 -translate-x-1/2 z-50 w-full">
        <div className="flex h-16 items-center justify-between gap-4 px-8 pd-2 bg-secondary dark:bg-primary backdrop-blur-lg dark:border-accent/20 shadow-sm dark:shadow-md">
          {/* Logo */}
          <Link
            href="/"
            className={`${fraunces.className} text-lg md:text-3xl text-primary dark:text-white transition-colors duration-200`}
          >
            Evergrove
          </Link>

          {/* Right side container for Navigation and Theme Switcher */}
          <div className="flex items-center gap-4">
            {/* Desktop Navigation */}
            <NavigationMenu className="hidden md:block">
              <NavigationMenuList className={`${teko.className} space-x-3`}>
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={`${navigationMenuTriggerStyle()} text-sm sm:text-base md:text-lg lg:text-2xl !font-normal pt-4 px-4 text-primary dark:text-white rounded-md hover:text-primary dark:hover:text-gray-100 duration-200`}
                    >
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={`${teko.className} text-sm sm:text-base md:text-lg lg:text-2xl !font-normal pt-4 px-4 text-primary dark:text-white`}
                  >
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[calc(100vw-2rem)] max-w-[800px] p-4 grid grid-cols-1 gap-4 relative left-1/2 -translate-x-1/2">
                      {[
                        {
                          title: "Architecture & Interior Design",
                          description:
                            "Creating spaces that inspire and transform lives through innovative design solutions.",
                          image: "/path-to-image1.jpg",
                          href: "/services?service=architecture-design",
                        },
                        {
                          title: "Landscape Design",
                          description:
                            "Crafting outdoor spaces that harmonize with nature and enhance the environment.",
                          image: "/path-to-image2.jpg",
                          href: "/services?service=landscape-design",
                        },
                        {
                          title: "Infra Engineering",
                          description:
                            "Building robust infrastructure solutions for sustainable development.",
                          image: "/path-to-image3.jpg",
                          href: "/services?service=infrastructure",
                        },
                        {
                          title: "Building Services & Water Resources",
                          description:
                            "Comprehensive building services and water management solutions.",
                          image: "/path-to-image4.jpg",
                          href: "/services?service=building-services",
                        },
                        {
                          title: "Execution",
                          description:
                            "Bringing designs to life with precision and excellence.",
                          image: "/path-to-image5.jpg",
                          href: "/services?service=execution",
                        },
                      ].map((service) => (
                        <Link
                          key={service.title}
                          href={service.href}
                          onClick={() => setIsMenuOpen(false)}
                          className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none mb-2">
                            {service.title}
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            {service.description}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/about" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={`${navigationMenuTriggerStyle()} text-sm sm:text-base md:text-lg lg:text-2xl !font-normal pt-4 px-4 text-primary dark:text-white rounded-md hover:text-primary dark:hover:text-gray-100 duration-200`}
                    >
                      About Us
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-6 w-6 text-primary dark:text-white" />
            </Button>

            {/* Theme Switcher */}
            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                className="h-10 w-10 rounded-full transition-colors duration-200 bg-transparent hover:bg-transparent"
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              >
                <SunIcon className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-primary" />
                <MoonIcon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-white" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-secondary dark:bg-primary shadow-lg">
            <nav className="flex flex-col p-4">
              <Link
                href="/"
                className={`${teko.className} text-xl py-2 text-primary dark:text-white hover:text-primary/80 dark:hover:text-gray-100`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>

              {/* Services Dropdown for Mobile */}
              <div className="space-y-2">
                <div
                  className={`${teko.className} text-xl py-2 text-primary dark:text-white`}
                >
                  Services
                </div>
                <div className="pl-4 space-y-2">
                  {[
                    {
                      name: "Architecture & Interior Design",
                      path: "/services?service=architecture-design",
                    },
                    {
                      name: "Landscape Design",
                      path: "/services?service=landscape-design",
                    },
                    {
                      name: "Infra Engineering",
                      path: "/services?service=infrastructure",
                    },
                    {
                      name: "Building Services & Water Resources",
                      path: "/services?service=building-services",
                    },
                    { name: "Execution", path: "/services?service=execution" },
                  ].map((item) => (
                    <Link
                      key={item.name}
                      href={item.path}
                      className={`${teko.className} text-lg block py-1 text-primary/80 dark:text-white/80 hover:text-primary dark:hover:text-white`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href="/about"
                className={`${teko.className} text-xl py-2 text-primary dark:text-white hover:text-primary/80 dark:hover:text-gray-100`}
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
            </nav>
          </div>
        )}
      </div>
    </>
  );
}
