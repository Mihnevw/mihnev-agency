import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Portfolio from "@/components/services"
import Reviews from "@/components/reviews"
import Pricing from "@/components/why-us"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import SectionTracker from "@/components/section-tracker"

export const metadata: Metadata = {
  title: "Професионални услуги | Експертни решения за вашия бизнес.",
  description:
    "Трансформирайте бизнеса си с нашите експертни услуги. Получете професионални решения, съобразени с вашите нужди. Свържете се с нас за безплатна консултация.",
  keywords: "професионални услуги, бизнес решения, консултации, експертни съвети.",
  openGraph: {
    title: "Професионални услуги | Експертни решения за вашия бизнес.",
    description: "Трансформирайте бизнеса си с нашите експертни услуги. Получете професионални решения, съобразени с вашите нужди. Свържете се с нас за безплатна консултация.",
    type: "website",
  },
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <SectionTracker sectionName="hero">
          <Hero />
        </SectionTracker>

        <SectionTracker sectionName="about">
          <About />
        </SectionTracker>

        <SectionTracker sectionName="services">
          <Portfolio />
        </SectionTracker>

        <SectionTracker sectionName="pricing">
          <Pricing />
        </SectionTracker>

        <SectionTracker sectionName="reviews">
          <Reviews />
        </SectionTracker>

        <SectionTracker sectionName="contact">
          <Contact />
        </SectionTracker>

        <Footer />
      </main>
    </>
  )
}
