"use-client"
export default function ServiceModes() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Our Service Modes</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Plan On Call */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-64 bg-gray-100">
              <img src="/consultation-call.jpg" alt="Plan On Call" className="w-full h-full object-cover" />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Plan On Call</h3>
              <p className="text-gray-600 mb-6">
                We at Priya Architecture provide on-call services for plans. Discuss your plot size designs with our
                representative our team of expert designers will discuss your project and provide you with all kinds of
                on-call service.
              </p>
              <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition font-medium">
                Get Your Plan on WhatsApp
              </button>
            </div>
          </div>

          {/* Online Plans Portal */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-64 bg-gray-100">
              <img src="/mobile-app-plans.jpg" alt="Online Plans Portal" className="w-full h-full object-cover" />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Online Plans Portal</h3>
              <p className="text-gray-600 mb-6">
                We at Priya Architecture also provide ready-to-use plans that suits your plot size at reasonable costs.
                Explore various plans available on the portal with an audio feature which explains the complete plan.
                Download the app to get the plan now.
              </p>
              <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition font-medium">
                Browse Plans
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
