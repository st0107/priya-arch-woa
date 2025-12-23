"use client"

import { useState } from "react"
import { ChevronRight, X } from "lucide-react"

const PROJECTS = [
  {
    id: "1",
    name: "Modern Villa",
    city: "New Delhi",
    type: "Residential",
    description: "A stunning 4-bedroom modern villa with contemporary architecture and premium interiors.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "2",
    name: "Compact Apartment",
    city: "Mumbai",
    type: "Residential",
    description: "Efficient 2-bedroom apartment design maximizing space and natural light.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "3",
    name: "Luxury Penthouse",
    city: "Bangalore",
    type: "Residential",
    description: "Premium 5-bedroom penthouse with expansive terraces and luxury finishes.",
    image: "/placeholder.svg?height=300&width=400",
  },
]

export default function ProjectsPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <main className="min-h-screen bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-3 text-center">Latest Designs by Priya Architecture</h1>
        <p className="text-gray-600 text-lg text-center mb-12">
          Explore our portfolio of completed projects showcasing diverse architectural styles and solutions.
        </p>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
              <div
                className="relative h-64 bg-gray-100 cursor-pointer group"
                onClick={() => setSelectedImage(project.image)}
              >
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition">
                    <ChevronRight size={48} className="text-white" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{project.name}</h3>
                <p className="text-gray-600 text-sm mb-3">
                  {project.city} • {project.type}
                </p>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
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
            <img src={selectedImage || "/placeholder.svg"} alt="Project" className="w-full h-auto rounded-lg" />
          </div>
        </div>
      )}
    </main>
  )
}
