import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const othersection = [
  {
    id: 1,
    name: "certification",
    image: "/images/certification2.png",
  },
  {
    id: 2,
    name: "certification",
    image: "/images/approved5.png",
  },
  {
    id: 3,
    name: "approval",
    image: "/images/approved1.png",
  },
  {
    id: 4,
    name: "approval",
    image: "/images/approved2.png",
  },
  {
    id: 5,
    name: "approval",
    image: "/images/approved3.png",
  },
  {
    id: 6,
    name: "approval",
    image: "/images/approved4.png",
  },

]





export default function TestimonialsSection() {
  return (

    

        <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Recognitions And Affiliations</h2>
        </div>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Image
                  src="/images/certification.png"
                  alt="Beautiful German Shepherd - BookerShepherds mission and values"
                  width={600}
                  height={500}
                  className="rounded-lg shadow-lg"
                  
                />
              </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {othersection.map((othersection) => (
            <Card key={othersection.id} className="text-center">
              <CardContent className="p-6">
                <Image
                  src={othersection.image}
                  alt={othersection.name}
                  width={600}
                  height={500}
                  className="rounded-lg shadow-lg"
                />
              </CardContent>
            </Card>
          ))}
        </div>
            </div>
          </div>
        </section>


       
  )
}
