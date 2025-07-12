import type { Metadata } from "next"
import Image from "next/image"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export const metadata: Metadata = {
  title: "Customer Testimonials - BookerShepherds",
  description: "Read what our customers say about their experience with BookerShepherds adoption and products.",
  keywords: "BookerShepherds Reviews, German Shepherd Adoption Reviews, Customer Testimonials",
}

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "Austin, TX",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
    date: "November 2024",
    text: "We adopted Max from BookerShepherds and couldn't be happier! The entire process was smooth, professional, and caring. Max has been the perfect addition to our family. The team provided excellent guidance and support throughout the adoption process.",
    dogName: "Max",
  },
  {
    id: 2,
    name: "Mike Chen",
    location: "Denver, CO",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
    date: "October 2024",
    text: "The quality of accessories we purchased is outstanding. Our German Shepherd Luna loves her new collar and leash! The materials are durable and well-crafted. Customer service was exceptional - they helped us choose the right size and answered all our questions.",
    dogName: "Luna",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    location: "Phoenix, AZ",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
    date: "September 2024",
    text: "Professional, caring, and knowledgeable. BookerShepherds truly cares about the welfare of their dogs and finding the right families. They took time to understand our lifestyle and matched us with the perfect companion. Highly recommended!",
    dogName: "Rex",
  },
  {
    id: 4,
    name: "David Thompson",
    location: "Seattle, WA",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
    date: "August 2024",
    text: "Bella has brought so much joy to our home! The adoption process was thorough but fair, and we appreciated the health guarantees and documentation provided. BookerShepherds clearly prioritizes the well-being of their dogs above all else.",
    dogName: "Bella",
  },
  {
    id: 5,
    name: "Lisa Martinez",
    location: "Miami, FL",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
    date: "July 2024",
    text: "I've purchased multiple accessories from BookerShepherds and each item has exceeded my expectations. The orthopedic bed has been amazing for my senior German Shepherd's joint health. Fast shipping and excellent customer service!",
    dogName: "Thor",
  },
  {
    id: 6,
    name: "Robert Kim",
    location: "Portland, OR",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
    date: "June 2024",
    text: "Zara is everything we hoped for and more! The team at BookerShepherds provided ongoing support even after adoption, checking in to make sure everything was going well. Their commitment to their dogs and families is truly remarkable.",
    dogName: "Zara",
  },
]

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Customer Testimonials</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from our happy customers about their experience with BookerShepherds. These stories inspire us to
              continue our mission of connecting German Shepherds with loving families.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4 mb-4">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                        <div className="flex">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-gray-600">{testimonial.location}</p>
                      <p className="text-xs text-gray-500">{testimonial.date}</p>
                    </div>
                  </div>
                  <blockquote className="text-gray-700 italic mb-4">"{testimonial.text}"</blockquote>
                  {testimonial.dogName && (
                    <div className="text-sm text-amber-600 font-medium">Dog: {testimonial.dogName}</div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-amber-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Share Your Story</h2>
              <p className="text-gray-700 mb-6">
                We'd love to hear about your experience with BookerShepherds! Your feedback helps us improve and
                inspires other families considering adoption.
              </p>
              <a
                href="mailto:jamesbookergsd3@gmail.com?subject=My BookerShepherds Testimonial"
                className="inline-block bg-amber-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-amber-700 transition-colors"
              >
                Share Your Experience
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
