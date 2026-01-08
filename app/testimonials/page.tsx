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
    image: "/images/5555.jpeg",
    rating: 5,
    date: "November 2024",
    text: "We adopted Red Collar from BookerShepherds and couldn't be happier! The entire process was smooth, professional, and caring. Red Collar has been the perfect addition to our family. The team provided excellent guidance and support throughout the adoption process.",
    dogName: "Red Collar",
  },
  {
    id: 2,
    name: "Mike Chen",
    location: "Denver, CO",
    image: "/images/11111.jpeg",
    rating: 5,
    date: "October 2024",
    text: "The quality of accessories we purchased is outstanding. Our German Shepherd Blue Collar loves her new collar and leash! The materials are durable and well-crafted. Customer service was exceptional - they helped us choose the right size and answered all our questions.",
    dogName: "Blue Collar",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    location: "Phoenix, AZ",
    image: "/images/3333333.jpeg",
    rating: 5,
    date: "September 2024",
    text: "Professional, caring, and knowledgeable. BookerShepherds truly cares about the welfare of their dogs and finding the right families. They took time to understand our lifestyle and matched us with the perfect companion. Highly recommended!",
    dogName: "Green Collar",
  },
  {
    id: 4,
    name: "David Thompson",
    location: "Seattle, WA",
    image: "/images/1111.jpeg",
    rating: 5,
    date: "August 2024",
    text: "Yellow Collar has brought so much joy to our home! The adoption process was thorough but fair, and we appreciated the health guarantees and documentation provided. BookerShepherds clearly prioritizes the well-being of their dogs above all else.",
    dogName: "Yellow Collar",
  },
  {
    id: 5,
    name: "Lisa Martinez",
    location: "Miami, FL",
    image: "/images/2222222.jpeg",
    rating: 5,
    date: "July 2024",
    text: "I've purchased multiple accessories from BookerShepherds and each item has exceeded my expectations. The orthopedic bed has been amazing for my senior German Shepherd's joint health. Fast shipping and excellent customer service!",
    dogName: "Orange Collar",
  },
  {
    id: 6,
    name: "Robert Kim",
    location: "Portland, OR",
    image: "/images/333333.jpeg",
    rating: 5,
    date: "June 2024",
    text: "Luna is everything we hoped for and more! The team at BookerShepherds provided ongoing support even after adoption, checking in to make sure everything was going well. Their commitment to their dogs and families is truly remarkable.",
    dogName: "Luna",
  },
  {
    id: 7,
    name: "John Doe",
    location: "New York, NY",
    image: "",
    rating: 5,
    date: "May 2024",
    text: "Our family is complete with Copper Collar. BookerShepherds made the adoption process so easy and transparent. Copper Collar is a joy!",
    dogName: "Copper Collar",
  },
  {
    id: 8,
    name: "Maria Garcia",
    location: "Chicago, IL",
    image: "/images/444.jpg",
    rating: 5,
    date: "April 2024",
    text: "The training treats from BookerShepherds are a game-changer! My dog loves them, and they're perfect for positive reinforcement.",
    dogName: "Rex",
  },
  {
    id: 9,
    name: "Chris Lee",
    location: "Houston, TX",
    image: "/images/44.jpg",
    rating: 5,
    date: "March 2024",
    text: "Gold Collar is the most intelligent dog I've ever had. Thanks to BookerShepherds for raising such well-adjusted puppies.",
    dogName: "Gold Collar",
  },
  {
    id: 10,
    name: "Jessica Brown",
    location: "Philadelphia, PA",
    image: "/images/4444.jpg",
    rating: 5,
    date: "February 2024",
    text: "The customer service is exceptional. They helped me choose the perfect bed for my large German Shepherd. Highly recommend!",
    dogName: "Bronze Collar",
  },
  {
    id: 11,
    name: "Daniel White",
    location: "San Diego, CA",
    image: "/images/555.jpg",
    rating: 5,
    date: "January 2024",
    text: "We adopted a puppy from BookerShepherds, and she's thriving. Healthy, happy, and full of love. Best decision ever!",
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
