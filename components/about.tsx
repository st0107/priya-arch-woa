export default function About() {
  const services = [
    {
      id: "1",
      title: "Elevation",
      image: "/house-elevation.jpg",
    },
    {
      id: "2",
      title: "Interior",
      image: "/interior-design.jpg",
    },
    {
      id: "3",
      title: "Planning",
      image: "/house-plan.jpg",
    },
    {
      id: "4",
      title: "Planning Detail",
      image: "/detailed-plan.jpg",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <p className="text-blue-600 text-sm font-bold uppercase tracking-wide mb-2">Welcome To</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Priya Architecture</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              At Priya Architecture, we turn your dream home into reality with expert architectural and interior design
              solutions. Whether you are looking for a small, efficient home plan, a modern luxurious house plan, or a
              modern contemporary house, our experienced designers create functional, aesthetic, and Vastu-compliant
              layouts tailored to your needs.
            </p>
            <div className="flex gap-4">
              <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition font-medium">
                Contact Now
              </button>
              <button className="text-blue-600 px-6 py-2 rounded border border-blue-600 hover:bg-blue-50 transition font-medium">
                Read More
              </button>
            </div>
          </div>

          {/* Right Grid */}
          <div className="grid grid-cols-2 gap-4">
            {services.map((service) => (
              <div key={service.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-32 bg-gray-100">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-3">
                  <p className="font-bold text-gray-900 text-center text-sm">{service.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
