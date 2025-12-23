"use client"

import { useState } from "react"
import { Check, X, ChevronLeft, ChevronRight } from "lucide-react"

const PLAN_DETAIL = {
  slug: "23x50-north",
  title: "23x50 North - G+1",
  price: "₹ 499/-",
  images: ["/house-plan-view.jpg", "/detailed-floor-plan.jpg", "/elevation-view.jpg"],
  features: {
    "2d-planning": true,
    "planning-detail": true,
    elevation: true,
    interior: false,
  },
  specs: {
    floor: "G+1",
    plotWidth: "23x50",
    area: "1150 sqft",
    facing: "North",
  },
  description:
    "A beautifully designed 2-bedroom home with open living space and efficient kitchen layout. Perfect for small families looking for a modern, compact home.",
}

export default function PlanDetailPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % PLAN_DETAIL.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + PLAN_DETAIL.images.length) % PLAN_DETAIL.images.length)
  }

  return (
    <main className="min-h-screen bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {/* Left - Gallery */}
          <div className="lg:col-span-2">
            <div className="relative mb-4 bg-gray-100 rounded-lg overflow-hidden h-96">
              <img
                src={PLAN_DETAIL.images[currentImageIndex] || "/placeholder.svg"}
                alt="Plan view"
                className="w-full h-full object-cover cursor-pointer"
                onClick={() => setSelectedImage(PLAN_DETAIL.images[currentImageIndex])}
              />
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 transition"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 transition"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-2">
              {PLAN_DETAIL.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`w-20 h-20 rounded border-2 overflow-hidden ${
                    idx === currentImageIndex ? "border-blue-600" : "border-gray-200"
                  }`}
                >
                  <img
                    src={img || "/placeholder.svg"}
                    alt={`Thumbnail ${idx}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right - Details */}
          <div className="bg-gray-50 rounded-lg p-6 h-fit">
            <p className="text-gray-600 text-sm mb-2">Starting From</p>
            <h1 className="text-4xl font-bold text-blue-600 mb-2">{PLAN_DETAIL.price}</h1>
            <p className="text-gray-600 mb-6">{PLAN_DETAIL.title}</p>

            {/* Specs Table */}
            <div className="border-t border-b border-gray-200 py-4 mb-6 space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="font-bold text-gray-900">Floor</span>
                <span className="text-gray-600">{PLAN_DETAIL.specs.floor}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-bold text-gray-900">Plot Width</span>
                <span className="text-gray-600">{PLAN_DETAIL.specs.plotWidth}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-bold text-gray-900">Area</span>
                <span className="text-gray-600">{PLAN_DETAIL.specs.area}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-bold text-gray-900">Facing</span>
                <span className="text-gray-600">{PLAN_DETAIL.specs.facing}</span>
              </div>
            </div>

            {/* Features */}
            <div className="mb-6 space-y-2">
              <p className="font-bold text-gray-900 text-sm mb-3">Included Features</p>
              {Object.entries(PLAN_DETAIL.features).map(([feature, included]) => (
                <div key={feature} className="flex items-center gap-2 text-sm">
                  {included ? (
                    <Check size={16} className="text-green-500 flex-shrink-0" />
                  ) : (
                    <X size={16} className="text-red-500 flex-shrink-0" />
                  )}
                  <span className="text-gray-600 capitalize">{feature.replace("-", " ")}</span>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="space-y-3">
              <button className="w-full bg-gradient-to-r from-red-600 to-blue-600 text-white py-3 rounded-lg font-bold hover:opacity-90 transition">
                Book This Plan
              </button>
              <button className="w-full border border-blue-600 text-blue-600 py-3 rounded-lg font-bold hover:bg-blue-50 transition">
                Contact Us
              </button>
            </div>
          </div>
        </div>

        {/* Detailed Planning Section */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Detailed Planning</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PLAN_DETAIL.images.map((img, idx) => (
              <div
                key={idx}
                className="bg-gray-100 rounded-lg overflow-hidden cursor-pointer group"
                onClick={() => setSelectedImage(img)}
              >
                <div className="h-64 relative">
                  <img
                    src={img || "/placeholder.svg"}
                    alt={`Detail ${idx}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition flex items-center justify-center">
                    <div className="bg-white rounded-full p-3 opacity-0 group-hover:opacity-100 transition">
                      <ChevronRight size={24} className="text-gray-900" />
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-sm text-gray-600">23x50 Feet</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-10 right-0 text-white hover:text-gray-300 transition"
            >
              <X size={32} />
            </button>
            <img src={selectedImage || "/placeholder.svg"} alt="Fullscreen" className="w-full h-auto rounded-lg" />
          </div>
        </div>
      )}
    </main>
  )
}
