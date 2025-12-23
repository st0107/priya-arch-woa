import Hero from "@/components/hero"
import ReadyMadePlans from "@/components/ready-made-plans"
import About from "@/components/about"
import BestHousePlans from "@/components/best-house-plans"
import StatsSection from "@/components/stats-section"
import BenefitsSection from "@/components/benefits-section"
import ServiceModes from "@/components/service-modes"
import QuickActions from "@/components/quick-actions"
import BlogPreview from "@/components/blog-preview"
import FAQSection from "@/components/faq-section"

export default function Home() {
  return (
    <main className="bg-white">
      <Hero />
      <ReadyMadePlans />
      <About />
      <BestHousePlans />
      <StatsSection />
      <BenefitsSection />
      <ServiceModes />
      <FAQSection />
      <QuickActions />
      <BlogPreview />
    </main>
  )
}
