"use-client"
export default function ServicesPage() {
  const services = [
    {
      id: "1",
      title: "Ghar Ka Naksha Plans",
      description:
        "Create your dream home with custom Ghar Ka Naksha designs. From small efficient house plans to luxury residential layouts, we provide comprehensive planning solutions.",
      image: "/house-plan.jpg",
    },
    {
      id: "2",
      title: "Modern Home Elevation Design",
      description:
        "Expert elevation designs that blend aesthetics with functionality. Our modern elevation designs showcase contemporary architecture suitable for any plot orientation.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: "3",
      title: "Interior Design Plans",
      description:
        "Transform your spaces with our modern interior design services. From bedroom to kitchen and living areas, we create beautiful and functional interior layouts.",
      image: "/interior-design.jpg",
    },
    {
      id: "4",
      title: "Vastu Consultation",
      description:
        "All our designs incorporate Vastu principles to ensure harmony and prosperity. Expert vastu-compliant planning for optimal living spaces.",
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  return (
    <main className="min-h-screen bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-3 text-center">Our Services</h1>
        <p className="text-gray-600 text-lg text-center mb-12">
          Comprehensive architectural and interior design solutions for your dream home.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
              <div className="h-56 bg-gray-100">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition font-medium">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
