import type { Metadata } from "next"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import CartContent from "@/components/cart/cart-content"

export const metadata: Metadata = {
  title: "Shopping Cart - BookerShepherds",
  description: "Review your selected items and proceed to checkout for your German Shepherd accessories.",
}

export default function CartPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>
          <CartContent />
        </div>
      </main>
      <Footer />
    </div>
  )
}
