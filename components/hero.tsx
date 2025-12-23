"use client"

import Image from "next/image"

export default function Hero() {
  return (
    <div className="relative bg-white min-h-[90vh] flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/PI_8_1.jpeg"
          alt="Modern architecture home"
          fill
          className="object-cover opacity-70"
          priority
        />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 to-white/50 z-10" />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center gap-6 text-center px-4">
        <div className="relative rounded-2xl w-24 h-24 flex items-center justify-center shadow-lg overflow-hidden">
          <Image
            src="/logo.jpeg"
            alt="Modern architecture home"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div>
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 leading-tight">Welcome to Priya Architecture</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl">Making house design easy, modern and vastu-friendly.</p>
        </div>

        <div className="pt-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">Explore Our Ready Made Plans</h2>
          <p className="text-gray-600 text-lg">
            Discover contemporary architecture with smart space utilization and elegant interiors
          </p>
        </div>
      </div>
    </div>
  )
}
