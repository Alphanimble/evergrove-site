import Image from 'next/image'

export default function Page() {
  return (
    <div className="relative w-full h-screen">
      {/* Background Image */}
      <Image
        src="/bg.png"
        alt="Background"
        fill
        quality={100}
        className="object-cover z-[-1]"
      />

      {/* Your page content */}
      <div className="relative z-10 text-white">
      </div>
    </div>
  )
}
