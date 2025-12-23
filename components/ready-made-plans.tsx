"use client"
import PlanCard from "@/components/plan-card"
import Link from "next/link"

const MOCK_PLANS = [
  {
    id: "1",
    slug: "23x50-north",
    title: "23x50 North",
    image: "/modern-house-elevation.jpg",
    price: "₹ 499/-",
    date: "03-04-2025",
    floor: "G+1",
    plotWidth: "23x50",
    features: {
      "2d-planning": true,
      "planning-detail": true,
      elevation: true,
      interior: false,
    },
  },
  {
    id: "2",
    slug: "27x55-west",
    title: "27x55 West",
    image: "/luxury-home-design.jpg",
    price: "₹ 499/-",
    date: "09-07-2025",
    floor: "G+2",
    plotWidth: "27x55",
    features: {
      "2d-planning": true,
      "planning-detail": true,
      elevation: true,
      interior: false,
    },
  },
  {
    id: "3",
    slug: "30x110-south",
    title: "30x110 South",
    image: "/contemporary-house.jpg",
    price: "₹ 999/-",
    date: "09-07-2025",
    floor: "G+1",
    plotWidth: "30x110",
    features: {
      "2d-planning": true,
      "planning-detail": true,
      elevation: true,
      interior: false,
    },
  },
  {
    id: "4",
    slug: "26x44-north",
    title: "26x44 North",
    image: "/modern-home-design.jpg",
    price: "₹ 499/-",
    date: "09-07-2025",
    floor: "G+1",
    plotWidth: "26x44",
    features: {
      "2d-planning": true,
      "planning-detail": true,
      elevation: true,
      interior: true,
    },
  },
]

export default function ReadyMadePlans() {
  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">Explore Our Ready Made Plans</h2>
          <p className="text-gray-600 text-lg">
            Our latest home designs featuring contemporary architecture, smart space utilization, and elegant interiors.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {MOCK_PLANS.map((plan) => (
            <Link key={plan.id} href={`/plans/${plan.slug}`}>
              <PlanCard plan={plan} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
