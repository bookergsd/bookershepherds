import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-amber-50 to-orange-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Welcome to Our German Shepherd Community 🇩🇪🐾
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Find your perfect German Shepherd companion through ethical adoption and discover premium accessories for
              your loyal friend.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/adoption">
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
                  View Available Dogs
                </Button>
              </Link>
              <Link href="/shop">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-amber-600 text-amber-600 hover:bg-amber-50 bg-transparent"
                >
                  Shop Accessories
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/images/banner.jpg"
              alt="Beautiful German Shepherd puppy - BookerShepherds"
              width={800}
              height={600}
              className="rounded-lg shadow-2xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
