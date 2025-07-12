import type { Metadata } from "next"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import ProductGrid from "@/components/shop/product-grid"

export const metadata: Metadata = {
  title: "Dog Accessories Shop - BookerShepherds",
  description:
    "Premium dog accessories for German Shepherds. Collars, leashes, toys, food bowls, and more. Quality products for your loyal companion.",
  keywords: "Dog Accessories, German Shepherd Supplies, Dog Collars, Dog Leashes, Pet Supplies Online",
}

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Premium Dog Accessories</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Quality accessories designed specifically for German Shepherds and large breed dogs. Everything your loyal
              companion needs for comfort, safety, and style.
            </p>
          </div>
          <ProductGrid />
        </div>
      </main>
      <Footer />
    </div>
  )
}
