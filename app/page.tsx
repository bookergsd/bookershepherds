import type { Metadata } from "next"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import HeroSection from "@/components/home/hero-section"
import IntroSection from "@/components/home/intro-section"
import FeaturedSection from "@/components/home/featured-section"
import TestimonialsSection from "@/components/home/testimonials-section"

export const metadata: Metadata = {
  title: "BookerShepherds - Premium German Shepherd Adoption & Accessories",
  description:
    "Welcome to our German Shepherd community. Ethical adoption, premium accessories, and expert guidance for GSD lovers. Join our family today!",
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <IntroSection />
        <FeaturedSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  )
}
