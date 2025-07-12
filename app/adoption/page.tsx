import type { Metadata } from "next"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import AdoptionGrid from "@/components/adoption/adoption-grid"

export const metadata: Metadata = {
  title: "German Shepherd Adoption - BookerShepherds",
  description:
    "Find your perfect German Shepherd companion. Ethical adoption with health-checked, well-socialized dogs ready for loving homes.",
  keywords: "German Shepherd Adoption, GSD Puppies for Sale, Ethical Dog Rehoming, German Shepherd Breeders",
}

export default function AdoptionPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">German Shepherds Available for Adoption</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each of our German Shepherds has been health-checked, socialized, and is ready to join a loving family.
              Find your perfect companion today!
            </p>
          </div>
          <AdoptionGrid />
        </div>
      </main>
      <Footer />
    </div>
  )
}
