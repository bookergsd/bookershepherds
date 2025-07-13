import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    text: "We adopted Red Collar from BookerShepherds and couldn't be happier! The process was smooth and the team was incredibly helpful throughout.",
  },
  {
    id: 2,
    name: "Mike Chen",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    text: "The quality of accessories we purchased is outstanding. Our German Shepherd Blue Collar loves her new collar and leash!",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    text: "Professional, caring, and knowledgeable. BookerShepherds truly cares about the welfare of their dogs and finding the right families.",
  },
  {
    id: 4,
    name: "John Doe",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    text: "Our family is complete with Copper Collar. BookerShepherds made the adoption process so easy and transparent. Copper Collar is a joy!",
  },
  {
    id: 5,
    name: "Maria Garcia",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    text: "The training treats from BookerShepherds are a game-changer! My dog loves them, and they're perfect for positive reinforcement.",
  },
  {
    id: 6,
    name: "Chris Lee",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    text: "Gold Collar is the most intelligent dog I've ever had. Thanks to BookerShepherds for raising such well-adjusted puppies.",
  },
  {
    id: 7,
    name: "Jessica Brown",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    text: "The customer service is exceptional. They helped me choose the perfect bed for my large German Shepherd. Highly recommend!",
  },
  {
    id: 8,
    name: "Daniel White",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    text: "We adopted a puppy from BookerShepherds, and she's thriving. Healthy, happy, and full of love. Best decision ever!",
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="text-center">
              <CardContent className="p-6">
                <Image
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  width={80}
                  height={80}
                  className="rounded-full mx-auto mb-4"
                />
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
