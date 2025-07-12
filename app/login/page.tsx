import type { Metadata } from "next"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import LoginForm from "@/components/auth/login-form"

export const metadata: Metadata = {
  title: "Login - BookerShepherds",
  description: "Sign in to your BookerShepherds account to manage your orders and preferences.",
}

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-16">
        <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h1>
            <p className="text-gray-600">Sign in to your account</p>
          </div>
          <LoginForm />
        </div>
      </main>
      <Footer />
    </div>
  )
}
