"use-client"
export default function StatsSection() {
  const stats = [
    { label: "Latest Designs", value: "2325+" },
    { label: "Projects Completed", value: "231+" },
    { label: "Cities Covered", value: "46+" },
    { label: "Social Media Views", value: "4M+" },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">{stat.value}</p>
              <p className="text-gray-600 text-sm md:text-base">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
