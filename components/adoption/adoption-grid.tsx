"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Calendar, Weight, MapPin } from "lucide-react"
import { useCart } from "@/components/cart/cart-context"
import { useToast } from "@/hooks/use-toast"

const adoptableDogs = [
  {
    id: 1, // Keep original IDs for dogs
    name: "Max",
    age: "2 years",
    weight: "75 lbs",
    gender: "Male",
    price: 1200,
    location: "Available",
    image: "/images/max.jpg",
    description:
      "Max is a friendly and well-trained German Shepherd who loves children and other dogs. He's house-trained and knows basic commands.",
    traits: ["House Trained", "Good with Kids", "Socialized"],
  },
  {
    id: 2,
    name: "Luna",
    age: "1.5 years",
    weight: "65 lbs",
    gender: "Female",
    price: 1100,
    location: "Available",
    image: "/images/luna.jpg",
    description:
      "Luna is a beautiful female with an excellent temperament. She's energetic, loyal, and perfect for an active family.",
    traits: ["High Energy", "Loyal", "Active"],
  },
  {
    id: 3,
    name: "Rex",
    age: "3 years",
    weight: "80 lbs",
    gender: "Male",
    price: 1000,
    location: "Available",
    image: "/images/rex.jpg",
    description:
      "Rex is a mature, calm German Shepherd perfect for families looking for a gentle giant. He's great with children.",
    traits: ["Calm", "Gentle", "Family Friendly"],
  },
  {
    id: 4,
    name: "Bella",
    age: "6 months",
    weight: "35 lbs",
    gender: "Female",
    price: 1500,
    location: "Available",
    image: "/images/bella.jpg",
    description:
      "Bella is a playful puppy ready to grow with your family. She's been socialized and is eager to learn.",
    traits: ["Puppy", "Playful", "Learning"],
  },
  {
    id: 5,
    name: "Thor",
    age: "4 years",
    weight: "85 lbs",
    gender: "Male",
    price: 900,
    location: "Available",
    image: "/images/thor.jpg",
    description:
      "Thor is a strong, protective German Shepherd ideal for experienced owners. He's loyal and makes an excellent guard dog.",
    traits: ["Protective", "Strong", "Experienced Owner"],
  },
  {
    id: 6,
    name: "Zara",
    age: "2.5 years",
    weight: "70 lbs",
    gender: "Female",
    price: 1150,
    location: "Available",
    image: "/images/zara.jpg",
    description:
      "Zara is intelligent and obedient, perfect for training and activities. She loves mental stimulation and exercise.",
    traits: ["Intelligent", "Obedient", "Active"],
  },
]

export default function AdoptionGrid() {
  const [favorites, setFavorites] = useState<number[]>([])
  const { addItem } = useCart()
  const { toast } = useToast()

  const toggleFavorite = (dogId: number) => {
    setFavorites((prev) => (prev.includes(dogId) ? prev.filter((id) => id !== dogId) : [...prev, dogId]))
  }

  const handleAdoptDog = (dog: (typeof adoptableDogs)[0]) => {
    const cartItem = {
      id: dog.id,
      name: dog.name,
      price: dog.price,
      image: dog.image,
      quantity: 1,
      type: "adoption" as const,
    }

    console.log("Adding dog to cart:", cartItem) // Debug log
    addItem(cartItem)

    toast({
      title: "Added to cart",
      description: `${dog.name} has been added to your adoption cart.`,
    })
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {adoptableDogs.map((dog) => (
        <Card key={dog.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col">
          <CardHeader className="p-0 relative">
            <div className="relative w-full h-72 bg-gray-100">
              <Image
                src={dog.image || "/placeholder.svg"}
                alt={`${dog.name} - German Shepherd for adoption`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover object-center hover:scale-105 transition-transform duration-500"
                priority={dog.id <= 3}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="absolute top-3 right-3 bg-white/90 hover:bg-white shadow-md backdrop-blur-sm"
              onClick={() => toggleFavorite(dog.id)}
            >
              <Heart
                className={`h-5 w-5 ${favorites.includes(dog.id) ? "text-red-500 fill-current" : "text-gray-600"}`}
              />
            </Button>
            <Badge className="absolute top-3 left-3 bg-green-500 text-white shadow-md">
              <MapPin className="h-3 w-3 mr-1" />
              {dog.location}
            </Badge>
          </CardHeader>
          <CardContent className="p-6 flex-grow flex flex-col">
            <div className="flex items-center justify-between mb-3">
              <CardTitle className="text-2xl font-bold text-gray-900">{dog.name}</CardTitle>
              <Badge variant="outline" className="border-amber-600 text-amber-600 font-medium">
                {dog.gender}
              </Badge>
            </div>

            <div className="flex items-center gap-6 text-sm text-gray-600 mb-4">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4 text-amber-600" />
                <span className="font-medium">{dog.age}</span>
              </div>
              <div className="flex items-center gap-1">
                <Weight className="h-4 w-4 text-amber-600" />
                <span className="font-medium">{dog.weight}</span>
              </div>
            </div>

            <p className="text-gray-700 mb-4 text-sm leading-relaxed flex-grow">{dog.description}</p>

            <div className="flex flex-wrap gap-2 mb-6">
              {dog.traits.map((trait, index) => (
                <Badge key={index} variant="secondary" className="text-xs bg-amber-50 text-amber-700 border-amber-200">
                  {trait}
                </Badge>
              ))}
            </div>

            <div className="mt-auto">
              <p className="text-3xl font-bold text-amber-600 mb-1">${dog.price}</p>
              <p className="text-sm text-gray-500">Adoption Fee</p>
            </div>
          </CardContent>
          <CardFooter className="p-6 pt-0">
            <Button
              className="w-full bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 shadow-md hover:shadow-lg transition-all duration-200"
              onClick={() => handleAdoptDog(dog)}
            >
              <Heart className="h-4 w-4 mr-2" />
              Adopt {dog.name}
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
