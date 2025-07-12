import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { CartProvider } from "@/components/cart/cart-context"
import { AuthProvider } from "@/components/auth/auth-context"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "BookerShepherds - German Shepherd Adoption & Dog Accessories",
  description:
    "Ethical German Shepherd adoption and premium dog accessories. Find your perfect GSD companion and quality pet supplies. Responsible breeding and rehoming.",
  keywords:
    "German Shepherd Adoption, Dog Accessories, GSD Puppies for Sale, Ethical Rehoming, Buy Dog Items Online, German Shepherd Breeders",
  authors: [{ name: "BookerShepherds" }],
  openGraph: {
    title: "BookerShepherds - German Shepherd Adoption & Accessories",
    description: "Your trusted source for ethical German Shepherd adoption and premium dog accessories",
    url: "https://bookershepherds.com",
    siteName: "BookerShepherds",
    images: [
      {
        url: "/images/banner.jpg",
        width: 1200,
        height: 630,
        alt: "BookerShepherds - German Shepherd Community",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BookerShepherds - German Shepherd Adoption & Accessories",
    description: "Ethical German Shepherd adoption and premium dog accessories",
    images: ["/images/banner.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <CartProvider>
            {children}
            <Toaster />
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
