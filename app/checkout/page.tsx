import type { Metadata } from "next"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import CheckoutForm from "@/components/checkout/checkout-form"

export const metadata: Metadata = {
  title: "Checkout - BookerShepherds",
  description: "Complete your purchase securely with multiple payment options.",
}

export default function CheckoutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Checkout</h1>
          <CheckoutForm />
        </div>
      </main>
      <Footer />
    </div>
  )
}
