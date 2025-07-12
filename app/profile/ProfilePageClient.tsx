"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { useAuth } from "@/components/auth/auth-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { User, Mail, LogOut } from "lucide-react"

export default function ProfilePageClient() {
  const { user, logout } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!user) {
      // Redirect to login if not authenticated
      router.push("/login")
    }
  }, [user, router])

  if (!user) {
    // Optionally show a loading state or null while redirecting
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <p className="text-gray-600">Redirecting to login...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-16">
        <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Your Profile</h1>
            <p className="text-gray-600">Manage your account information</p>
          </div>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-6 w-6 text-amber-600" />
                Account Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-sm font-medium text-gray-500">Full Name</p>
                <p className="text-lg font-semibold text-gray-900">{user.name}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Email Address</p>
                <p className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                  <Mail className="h-5 w-5 text-gray-600" />
                  {user.email}
                </p>
              </div>
              {/* Add more profile details here if available */}
            </CardContent>
            <div className="p-6 border-t">
              <Button onClick={logout} className="w-full bg-red-600 hover:bg-red-700 text-white">
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  )
}
