export default function BestHousePlans() {
  const plans = [
    {
      id: "1",
      title: "Ghar Ka Naksha Plans",
      description: "Create your dream home with custom Ghar Ka Naksha, including small and luxury house plans.",
      image: "/house-plan-design.jpg",
    },
    {
      id: "2",
      title: "Modern Home Elevation Design Plans",
      description:
        "We create home designs that match your style and budget, from small house plans to luxury house plans.",
      image: "/modern-elevation.jpg",
    },
    {
      id: "3",
      title: "Modern Interior Design Plans",
      description: "Expert modern interior design plans. From bedrooms to kitchen and living room designs.",
      image: "/interior-design.jpg",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">Explore Our Best House Plans for Your Dream Home</h2>
          <p className="text-gray-600 text-lg">
            We offer customized home designs, house plans, and interior solutions that transform your vision into
            reality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div key={plan.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
              <div className="h-48 bg-gray-100">
                <img src={plan.image || "/placeholder.svg"} alt={plan.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{plan.title}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition font-medium text-sm">
                  Read more
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
