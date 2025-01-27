import Image from "next/image"
import Link from "next/link"
import { Instagram, Mail, Twitter, Globe } from "lucide-react"

export default function Page() {
  return (
    <main className="relative min-h-screen">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-G1dJ0eo3gGYrZMEeXJvsVE7SBjrmq9.png"
          alt="Modern architectural house in forest"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content */}
      <div className="relative">
        {/* Navigation */}
        <nav className="flex justify-between items-center p-6 text-white">
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium">FOLLOW US ON</span>
            <div className="flex gap-4">
              <Link href="#" className="hover:opacity-80">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="hover:opacity-80">
                <Mail className="w-5 h-5" />
              </Link>
              <Link href="#" className="hover:opacity-80">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="hover:opacity-80">
                <Globe className="w-5 h-5" />
              </Link>
            </div>
          </div>
          <div className="flex gap-8">
            <Link href="#" className="text-sm font-medium hover:opacity-80">
              HOME
            </Link>
            <Link href="#" className="text-sm font-medium hover:opacity-80">
              SERVICES
            </Link>
            <Link href="#" className="text-sm font-medium hover:opacity-80">
              OUR TEAM
            </Link>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="px-6 pt-20 md:pt-32 max-w-4xl">
          <h1 className="font-serif text-6xl md:text-8xl text-white tracking-wide leading-tight">
            EverGrove
            <br />
            Spaces
          </h1>
          <div className="mt-6 text-white/90">
            <h2 className="text-xl font-medium mb-2">A FEW LINES</h2>
            <p className="text-sm leading-relaxed max-w-md">
              A FEW LINES A FEW LINES A FEW LINES A FEW LINES A FEW LINES A FEW LINES A FEW LINES A FEW LINES A FEW
              LINES A FEW LINES
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}

