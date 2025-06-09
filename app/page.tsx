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
  title: "Professional Services | Expert Solutions for Your Business",
  description:
    "Transform your business with our expert services. Get professional solutions tailored to your needs. Contact us for a free consultation.",
  keywords: "professional services, business solutions, consulting, expert advice",
  openGraph: {
    title: "Professional Services | Expert Solutions for Your Business",
    description: "Transform your business with our expert services. Get professional solutions tailored to your needs.",
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

        <SectionTracker sectionName="reviews">
          <Reviews />
        </SectionTracker>

        <SectionTracker sectionName="pricing">
          <Pricing />
        </SectionTracker>

        <SectionTracker sectionName="contact">
          <Contact />
        </SectionTracker>

        <Footer />
      </main>
    </>
  )
}
