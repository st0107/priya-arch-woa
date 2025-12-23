export default function BenefitsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Benefits of Choosing Priya Architecture</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1 */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-blue-600">▶</span> Experienced Architects & Designers
            </h3>
            <p className="text-gray-600 mb-4">
              With years of hands-on experience in architectural planning and interior design, our team brings a wealth
              of knowledge to every project.
            </p>
            <ul className="space-y-2">
              <li className="text-gray-600 flex items-center gap-2">
                <span className="text-blue-600 font-bold">•</span> Expert team of professionals
              </li>
              <li className="text-gray-600 flex items-center gap-2">
                <span className="text-blue-600 font-bold">•</span> Innovative design solutions
              </li>
              <li className="text-gray-600 flex items-center gap-2">
                <span className="text-blue-600 font-bold">•</span> Vastu-compliant designs
              </li>
            </ul>
          </div>

          {/* Column 2 - Comparison */}
          <div className="bg-gray-50 rounded-lg p-6">
            <div className="text-center mb-6">
              <p className="text-lg font-bold text-red-600 mb-4">OTHER DESIGNERS</p>
              <div className="bg-white rounded p-4 mb-4">
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="line-through">✗ Plans without details</li>
                  <li className="line-through">✗ No ongoing support</li>
                  <li className="line-through">✗ Limited plan variations</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-200 pt-6">
              <p className="text-lg font-bold text-blue-600 mb-4">PRIYA ARCHITECTURE</p>
              <div className="bg-white rounded p-4">
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>✓ Detailed planning and structure</li>
                  <li>✓ End-to-end support</li>
                  <li>✓ Unlimited plan variations</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-blue-600">▶</span> End-to-End Support
            </h3>
            <p className="text-gray-600 mb-4">
              We take care of everything. Our comprehensive support makes the entire process smooth and hassle-free for
              you.
            </p>

            <h4 className="text-lg font-bold text-gray-900 mt-6 mb-3 flex items-center gap-2">
              <span className="text-blue-600">▶</span> Latest Trends & Technology
            </h4>
            <p className="text-gray-600">
              We stay ahead of the curve by integrating the latest architectural trends and cutting-edge design
              technology into every project.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
