"use-client"
export default function BlogPreview() {
  const blogs = [
    {
      id: "1",
      date: "28 April 2025",
      title: "10 Innovative Small House Design Ideas",
    },
    {
      id: "2",
      date: "12 March 2019",
      title: "Why Detailed House Plans Matter: A Complete Guide",
    },
    {
      id: "3",
      date: "10 March 2019",
      title: "Elevating Your Home's Exterior: Modern Design Ideas",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <p className="text-blue-600 text-sm font-bold uppercase tracking-wide mb-2">Blog</p>
          <h2 className="text-4xl font-bold text-gray-900">Read Our Stories</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div key={blog.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition cursor-pointer">
              <p className="text-gray-500 text-sm mb-2">{blog.date}</p>
              <h3 className="text-xl font-bold text-gray-900">{blog.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
