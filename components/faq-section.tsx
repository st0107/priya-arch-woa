"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"

const FAQS = [
  {
    id: "1",
    question: "How do I get a house plan from Priya Architecture?",
    answer:
      "Simply contact us, share your requirements, and we will create a customized home design for you. You can choose from our ready-made plans or request a custom design based on your plot size and preferences.",
  },
  {
    id: "2",
    question: "Do you provide Vastu-compliant plans?",
    answer:
      "Yes, all our house plans are designed following Vastu principles to ensure harmony, prosperity, and well-being in your home. We integrate Vastu compliance into every design we create.",
  },
  {
    id: "3",
    question: "Can I modify an existing plan?",
    answer:
      "We understand that every home is unique. We can customize any existing plan to match your specific requirements and preferences.",
  },
  {
    id: "4",
    question: "Do you provide interiors with house plans?",
    answer:
      "Yes, we provide comprehensive interior design services along with house plans. From bedroom to kitchen and living room designs, we handle everything.",
  },
  {
    id: "5",
    question: "What is the price range of your plans?",
    answer:
      "Our plans are available at competitive prices ranging from ₹499 to ₹2000+, depending on the complexity and inclusions. We offer options for every budget.",
  },
]

export default function FAQSection() {
  const [openId, setOpenId] = useState<string>("1")

  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">FAQs</h2>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <div key={faq.id} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => setOpenId(openId === faq.id ? "" : faq.id)}
                className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition"
              >
                <span className="font-bold text-blue-600 text-left">
                  {idx + 1}. {faq.question}
                </span>
                <div className="flex-shrink-0 ml-4">
                  {openId === faq.id ? (
                    <Minus size={24} className="text-blue-600" />
                  ) : (
                    <Plus size={24} className="text-blue-600" />
                  )}
                </div>
              </button>

              {openId === faq.id && (
                <div className="border-t border-gray-200 bg-gray-50 p-4">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
