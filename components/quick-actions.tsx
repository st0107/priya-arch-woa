"use-client"
export default function QuickActions() {
  const actions = [
    {
      id: "1",
      title: "Planning & Detail",
      image: "/planning-meeting.png",
    },
    {
      id: "2",
      title: "Elevation",
      image: "/elevation.jpg",
    },
    {
      id: "3",
      title: "Interior",
      image: "/cozy-living-room.png",
    },
  ]

  return (
    <section className="py-16 bg-gradient-to-r from-red-600 via-purple-600 to-blue-600">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-3">Quick Actions Buttons</h2>
          <p className="text-white text-lg">Click on these buttons to get quick services.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {actions.map((action) => (
            <button key={action.id} className="bg-white rounded-lg p-6 hover:shadow-lg transition">
              <div className="h-20 mb-4">
                <img
                  src={action.image || "/placeholder.svg"}
                  alt={action.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="font-bold text-gray-900 uppercase text-sm">{action.title}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
