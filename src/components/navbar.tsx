"use client";

import * as React from "react";
import Link from "next/link";
import { MoonIcon, SunIcon, Menu } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  // NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  // NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { 
  Sheet, 
  SheetContent, 
  SheetTrigger,
  SheetTitle 
} from "@/components/ui/sheet";

export function Navbar() {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="fixed top-0 left-1/2 -translate-x-1/2 z-50 w-full max-w-5xl px-4 py-4">
      <div className="flex h-14 items-center justify-between gap-4 rounded-full bg-background/40 backdrop-blur-lg px-6 shadow-xl">
        {/* Logo */}
        <Link
          href="/"
          className="text-lg md:text-xl font-bold text-primary hover:text-primary/90 transition-colors"
        >
          Evergrove
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList className="space-x-2">
              {["Home", "Services", "Our Team"].map((item) => (
                <NavigationMenuItem key={item}>
                  <Link
                    href={
                      item === "Home"
                        ? "/"
                        : `/${item.toLowerCase().replace(" ", "-")}`
                    }
                    legacyBehavior
                    passHref
                  >
                    <NavigationMenuLink
                      className={`${navigationMenuTriggerStyle()} text-base py-2 px-4 font-medium`}
                    >
                      {item}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="h-10 w-10">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[240px] sm:w-[300px]">
              <SheetTitle>Navigation Menu</SheetTitle>
              <nav className="flex flex-col gap-4 mt-8">
                {["Home", "Services", "Our Team"].map((item) => (
                  <Link
                    key={item}
                    href={
                      item === "Home"
                        ? "/"
                        : `/${item.toLowerCase().replace(" ", "-")}`
                    }
                    className="text-lg font-medium hover:text-primary transition-colors"
                  >
                    {item}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        {/* Theme Switcher */}
        {mounted && (
          <Button
            variant="ghost"
            size="icon"
            className="h-10 w-10 rounded-full"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            <SunIcon className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <MoonIcon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        )}
      </div>
    </div>
  );
}
