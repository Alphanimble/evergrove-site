import type React from "react"
import type { Metadata } from "next"
import { ThemeProvider } from "../components/theme-provider"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import { FloatingDock } from "../components/ui/floating-dock"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
})

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "EverGrove Spaces - World's Most Luxurious Architectural Experience",
  description:
    "Experience the pinnacle of architectural excellence. Crafting extraordinary living spaces where luxury meets sustainability with cutting-edge design and unparalleled craftsmanship.",
  keywords: "luxury architecture, sustainable design, premium real estate, architectural excellence, modern living",
  openGraph: {
    title: "EverGrove Spaces - World's Most Luxurious Architectural Experience",
    description: "Crafting extraordinary living spaces where luxury meets sustainability",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <main className="relative">{children}</main>
          <FloatingDock />
        </ThemeProvider>
      </body>
    </html>
  )
}
