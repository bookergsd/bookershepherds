import type { Metadata } from "next"
import Image from "next/image"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { Heart, Shield, Users, Award } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us - BookerShepherds",
  description:
    "Learn about BookerShepherds mission, values, and commitment to ethical German Shepherd breeding and adoption.",
  keywords: "About BookerShepherds, German Shepherd Breeders, Ethical Dog Breeding, Dog Adoption Mission",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-amber-50 to-orange-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">About BookerShepherds</h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              We are passionate advocates for the German Shepherd breed, dedicated to ethical breeding, responsible
              adoption, and building a supportive community for GSD lovers everywhere.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  At BookerShepherds, we believe every German Shepherd deserves a loving, forever home. Our mission is
                  to connect these magnificent dogs with families who understand and appreciate their unique qualities,
                  intelligence, and loyalty.
                </p>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  We are committed to promoting responsible ownership, providing education about the breed, and ensuring
                  the health and well-being of every dog in our care. Through ethical practices and genuine care, we
                  strive to make a positive impact on the German Shepherd community.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-amber-50 rounded-lg">
                    <Heart className="h-8 w-8 text-amber-600 mx-auto mb-2" />
                    <p className="font-semibold">Ethical Practices</p>
                  </div>
                  <div className="text-center p-4 bg-amber-50 rounded-lg">
                    <Shield className="h-8 w-8 text-amber-600 mx-auto mb-2" />
                    <p className="font-semibold">Health Guaranteed</p>
                  </div>
                </div>
              </div>
              <div>
                <Image
                  src="/images/banner.jpg"
                  alt="Beautiful German Shepherd - BookerShepherds mission and values"
                  width={600}
                  height={500}
                  className="rounded-lg shadow-lg"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <Heart className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Compassion</h3>
                  <p className="text-gray-600">
                    Every decision we make is guided by genuine care for the dogs and families we serve.
                  </p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <Shield className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Integrity</h3>
                  <p className="text-gray-600">
                    We maintain the highest standards of honesty and transparency in all our practices.
                  </p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <Users className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Community</h3>
                  <p className="text-gray-600">
                    Building lasting relationships and supporting the German Shepherd community.
                  </p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <Award className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Excellence</h3>
                  <p className="text-gray-600">
                    Striving for the highest quality in breeding, care, and customer service.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Our Story</h2>
            <div className="prose prose-lg mx-auto text-gray-700">
              <p className="mb-6">
                BookerShepherds was founded out of a deep love and respect for the German Shepherd breed. Our journey
                began when we realized the need for ethical, responsible breeding and adoption practices in our
                community.
              </p>
              <p className="mb-6">
                Over the years, we have built relationships with families across the country, helping them find their
                perfect German Shepherd companion. Each success story reinforces our commitment to this noble breed and
                the families who welcome them into their homes.
              </p>
              <p className="mb-6">
                Today, BookerShepherds continues to grow as a trusted resource for German Shepherd adoption, quality
                accessories, and breed education. We remain dedicated to our founding principles while embracing new
                ways to serve our community better.
              </p>
              <div className="text-center mt-8 p-6 bg-amber-50 rounded-lg">
                <p className="text-amber-800 font-medium mb-2">
                  "Every German Shepherd deserves a loving home, and every family deserves the loyalty and joy that
                  comes with GSD companionship."
                </p>
                <p className="text-amber-600 text-sm">- James, BookerShepherds Founder</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="py-16 bg-gradient-to-r from-amber-50 to-orange-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Join Our Community?</h2>
            <p className="text-xl text-gray-700 mb-8">
              Whether you're looking to adopt a German Shepherd or need quality accessories, we're here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/adoption"
                className="inline-block bg-amber-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-amber-700 transition-colors"
              >
                View Available Dogs
              </a>
              <a
                href="/contact"
                className="inline-block border border-amber-600 text-amber-600 px-8 py-3 rounded-lg font-medium hover:bg-amber-50 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
