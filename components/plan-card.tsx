import { Check, X } from "lucide-react"

interface Plan {
  id: string
  slug: string
  title: string
  image: string
  price: string
  date: string
  floor: string
  plotWidth: string
  features: {
    "2d-planning": boolean
    "planning-detail": boolean
    elevation: boolean
    interior: boolean
  }
}

export default function PlanCard({ plan }: { plan: Plan }) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden cursor-pointer group">
      {/* Image */}
      <div className="relative overflow-hidden h-64 bg-gray-100">
        <img
          src={plan.image || "/placeholder.svg"}
          alt={plan.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Title and Price */}
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-blue-600 font-bold text-sm uppercase">{plan.title}</h3>
          <span className="text-gray-900 font-bold text-sm">{plan.price}</span>
        </div>

        {/* Date */}
        <p className="text-gray-500 text-xs mb-3">{plan.date}</p>

        {/* Divider */}
        <hr className="mb-3" />

        {/* Floor Info */}
        <div className="text-xs mb-2">
          <p className="font-bold text-gray-900">Floor</p>
          <p className="text-gray-600">{plan.floor}</p>
        </div>

        {/* Plot Width */}
        <div className="text-xs mb-3">
          <p className="font-bold text-gray-900">Plot Width (WXL)</p>
          <p className="text-gray-600">{plan.plotWidth}</p>
        </div>

        {/* Features */}
        <div className="space-y-1 mb-4 text-xs">
          <div className="flex items-center gap-2">
            {plan.features["2d-planning"] ? (
              <Check size={16} className="text-green-500" />
            ) : (
              <X size={16} className="text-red-500" />
            )}
            <span>2D Planning</span>
          </div>
          <div className="flex items-center gap-2">
            {plan.features["planning-detail"] ? (
              <Check size={16} className="text-green-500" />
            ) : (
              <X size={16} className="text-red-500" />
            )}
            <span>Planning Detail</span>
          </div>
          <div className="flex items-center gap-2">
            {plan.features["elevation"] ? (
              <Check size={16} className="text-green-500" />
            ) : (
              <X size={16} className="text-red-500" />
            )}
            <span>Elevation</span>
          </div>
          <div className="flex items-center gap-2">
            {plan.features["interior"] ? (
              <Check size={16} className="text-green-500" />
            ) : (
              <X size={16} className="text-red-500" />
            )}
            <span>Interior</span>
          </div>
        </div>

        {/* Button */}
        <button className="w-full bg-gradient-to-r from-red-600 to-blue-600 text-white py-2 px-3 rounded font-bold text-sm hover:opacity-90 transition">
          View Details
        </button>
      </div>
    </div>
  )
}
