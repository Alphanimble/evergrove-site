"use client";

import * as React from "react";
import Link from "next/link";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
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

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
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
          {/* Navigation */}
          <NavigationMenu>
            <NavigationMenuList className={`${teko.className} space-x-3`}>
              {[
                { name: "Home", path: "/" },
                { name: "Services", path: "/services" },
                { name: "About Us", path: "" },
              ].map((item) => (
                <NavigationMenuItem key={item.name}>
                  <Link href={item.path} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={`${navigationMenuTriggerStyle()} text-sm sm:text-base md:text-lg lg:text-2xl !font-normal pt-4 px-4 text-primary dark:text-white rounded-md hover:text-primary dark:hover:text-gray-100 duration-200`}
                    >
                      {item.name}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

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
    </div>
  );
}
