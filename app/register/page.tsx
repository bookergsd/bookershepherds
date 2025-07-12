import type { Metadata } from "next"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import RegisterForm from "@/components/auth/register-form"

export const metadata: Metadata = {
  title: "Sign Up - BookerShepherds",
  description: "Create your BookerShepherds account to start adopting and shopping.",
}

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-16">
        <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Join Our Community</h1>
            <p className="text-gray-600">Create your account to get started</p>
          </div>
          <RegisterForm />
        </div>
      </main>
      <Footer />
    </div>
  )
}
