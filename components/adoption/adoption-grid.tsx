"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Calendar, Weight, MapPin } from "lucide-react"
import { useCart } from "@/components/cart/cart-context"
import { useToast } from "@/hooks/use-toast"
import ImageModal from "@/components/image-modal"

const adoptableDogs = [
  {
    id: 1,
    name: "Max",
    weight: "75 lbs",
    gender: "Male",
    price: 950,
    location: "Available",
    image: "/images/max.jpg",
    description:
      "Max is a friendly and well-trained German Shepherd who loves children and other dogs. He's house-trained and knows basic commands.",
    traits: ["House Trained", "Good with Kids", "Socialized"],
    category: "Adult & Young Adult German Shepherds",
  },
  {
    id: 2,
    name: "Luna",
    weight: "65 lbs",
    gender: "Female",
    price: 900,
    location: "Available",
    image: "/images/luna.jpg",
    description:
      "Luna is a beautiful female with an excellent temperament. She's energetic, loyal, and perfect for an an active family.",
    traits: ["High Energy", "Loyal", "Active"],
    category: "Adult & Young Adult German Shepherds",
  },
  {
    id: 3,
    name: "Rex",
    weight: "80 lbs",
    gender: "Male",
    price: 850,
    location: "Available",
    image: "/images/rex.jpg",
    description:
      "Rex is a mature, calm German Shepherd perfect for families looking for a gentle giant. He's great with children.",
    traits: ["Calm", "Gentle", "Family Friendly"],
    category: "Adult & Young Adult German Shepherds",
  },
  {
    id: 4,
    name: "Bella",
    weight: "35 lbs",
    gender: "Female",
    price: 1000,
    location: "Available",
    image: "/images/bella.jpg",
    description:
      "Bella is a playful young German Shepherd ready to grow with your family. She's been socialized and is eager to learn.",
    traits: ["Playful", "Learning", "Socialized"],
    category: "Adult & Young Adult German Shepherds",
  },
  {
    id: 5,
    name: "Thor",
    weight: "85 lbs",
    gender: "Male",
    price: 800,
    location: "Available",
    image: "/images/thor.jpg",
    description:
      "Thor is a strong, protective German Shepherd ideal for experienced owners. He's loyal and makes an excellent guard dog.",
    traits: ["Protective", "Strong", "Experienced Owner"],
    category: "Adult & Young Adult German Shepherds",
  },
  {
    id: 6,
    name: "Zara",
    weight: "70 lbs",
    gender: "Female",
    price: 920,
    location: "Available",
    image: "/images/zara.jpg",
    description:
      "Zara is intelligent and obedient, perfect for training and activities. She loves mental stimulation and exercise.",
    traits: ["Intelligent", "Obedient", "Active"],
    category: "Adult & Young Adult German Shepherds",
  },
  {
    id: 7,
    name: "Black Collar",
    age: "8 weeks",
    weight: "15 lbs",
    gender: "Male",
    price: 980,
    location: "Available",
    image: "/images/black-collar-male.jpeg",
    description:
      "Black Collar is a curious and playful puppy, eager to explore the world. He's well-socialized and loves cuddles.",
    traits: ["Puppy", "Playful", "Curious"],
    category: "German Shepherd Puppies",
  },
  {
    id: 8,
    name: "Red Collar",
    age: "8 weeks",
    weight: "14 lbs",
    gender: "Female",
    price: 970,
    location: "Available",
    image: "/images/red-collar-female.jpeg",
    description:
      "Red Collar is a sweet and gentle puppy, perfect for a loving family. She's very affectionate and enjoys playtime.",
    traits: ["Puppy", "Affectionate", "Gentle"],
    category: "German Shepherd Puppies",
  },
  {
    id: 9,
    name: "Orange Collar",
    age: "8 weeks",
    weight: "16 lbs",
    gender: "Female",
    price: 990,
    location: "Available",
    image: "/images/orange-collar-female.jpeg",
    description:
      "Orange Collar is an energetic and intelligent puppy, quick to learn new things. She's great with kids and other pets.",
    traits: ["Puppy", "Energetic", "Intelligent"],
    category: "German Shepherd Puppies",
  },
  {
    id: 10,
    name: "Brown Collar",
    age: "8 weeks",
    weight: "17 lbs",
    gender: "Male",
    price: 960,
    location: "Available",
    image: "/images/brown-collar-male.jpeg",
    description:
      "Brown Collar is a calm and observant puppy, who loves to snuggle. He's looking for a patient and caring home.",
    traits: ["Puppy", "Calm", "Observant"],
    category: "German Shepherd Puppies",
  },
  {
    id: 11,
    name: "Pink Collar",
    age: "8 weeks",
    weight: "13 lbs",
    gender: "Female",
    price: 975,
    location: "Available",
    image: "/images/pink-collar-female.jpeg",
    description:
      "Pink Collar is a charming and playful puppy, always ready for an adventure. She's very social and loves attention.",
    traits: ["Puppy", "Charming", "Social"],
    category: "German Shepherd Puppies",
  },
  {
    id: 12,
    name: "Blue Collar",
    age: "8 weeks",
    weight: "18 lbs",
    gender: "Male",
    price: 985,
    location: "Available",
    image: "/images/blue-collar-male.jpeg",
    description:
      "Blue Collar is a strong and confident puppy, with a loyal and protective nature. He's an ideal companion for an active family.",
    traits: ["Puppy", "Confident", "Loyal"],
    category: "German Shepherd Puppies",
  },
  {
    id: 16,
    name: "White Collar",
    age: "7 weeks",
    weight: "14 lbs",
    gender: "Male",
    price: 950,
    location: "Available",
    image: "/images/male-puppy.jpeg",
    description: "This 7-week-old male puppy is full of energy and charm, ready to find his forever home.",
    traits: ["Puppy", "Energetic", "Charming"],
    category: "German Shepherd Puppies",
  },
]

const diorTeaCatalog = [
  {
    id: 101,
    image: "/images/dior-tea-litter-girl-1.jpeg",
    description:
      "The girls from our Dior x Tea litter are growing up so nicely. This has been such a fun litter to raise, and we're really happy with how this cross is turning out.They're confident, curious, and each one has their own little personality starting to show. We're excited to watch them grow and see how they mature over the next few weeks.",
  },
  {
    id: 102,
    image: "/images/dior-tea-litter-girl-2.jpeg",
    description:
      "The girls from our Dior x Tea litter are growing up so nicely. This has been such a fun litter to raise, and we're really happy with how this cross is turning out.They're confident, curious, and each one has their own little personality starting to show. We're excited to watch them grow and see how they mature over the next few weeks.",
  },
  {
    id: 103,
    image: "/images/dior-tea-litter-girl-3.jpeg",
    description:
      "The girls from our Dior x Tea litter are growing up so nicely. This has been such a fun litter to raise, and we're really happy with how this cross is turning out.They're confident, curious, and each one has their own little personality starting to show. We're excited to watch them grow and see how they mature over the next few weeks.",
  },
]

const kLittersCatalog = [
  {
    id: 201,
    image: "/images/hughston-german-shepherds.jpeg",
    description:
      "Another wonderful puppy from K Litters German Shepherds. We play a critical role in shaping a puppy's future. The first 8 weeks of a puppy's life are crucial, and the experiences they have during this time can shape their confidence, behavior, and temperament for years to come.",
  },
  {
    id: 202,
    image: "/images/hughston-german-shepherds-others.jpeg",
    description:
      "Another wonderful puppy from K Litters German Shepherds. We play a critical role in shaping a puppy's future. The first 8 weeks of a puppy's life are crucial, and the experiences they have during this time can shape their confidence, behavior, and temperament for years to come.",
  },
  {
    id: 203,
    image: "/images/k-litters-3.jpeg",
    description:
      "Another wonderful puppy from K Litters German Shepherds. We play a critical role in shaping a puppy's future. The first 8 weeks of a puppy's life are crucial, and the experiences they have during this time can shape their confidence, behavior, and temperament for years to come.",
  },
]

export default function AdoptionGrid() {
  const [favorites, setFavorites] = useState<number[]>([])
  const { addItem } = useCart()
  const { toast } = useToast()
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

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

  const openImageModal = (imageSrc: string) => {
    setSelectedImage(imageSrc)
    setIsModalOpen(true)
  }

  const closeImageModal = () => {
    setSelectedImage(null)
    setIsModalOpen(false)
  }

  const adultDogs = adoptableDogs.filter((dog) => dog.category === "Adult & Young Adult German Shepherds")
  const puppyDogs = adoptableDogs.filter((dog) => dog.category === "German Shepherd Puppies")

  return (
    <>
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Adult & Young Adult German Shepherds</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {adultDogs.map((dog) => (
          <Card
            key={dog.id}
            className="overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col"
          >
            <CardHeader className="p-0 relative">
              <div
                className="relative w-full h-72 bg-gray-100 cursor-pointer"
                onClick={() => openImageModal(dog.image)}
              >
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
                {/* Age display removed for adult dogs */}
                <div className="flex items-center gap-1">
                  <Weight className="h-4 w-4 text-amber-600" />
                  <span className="font-medium">{dog.weight}</span>
                </div>
              </div>

              <p className="text-gray-700 mb-4 text-sm leading-relaxed flex-grow">{dog.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {dog.traits.map((trait, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="text-xs bg-amber-50 text-amber-700 border-amber-200"
                  >
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

      <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">German Shepherd Puppies</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {puppyDogs.map((dog) => (
          <Card
            key={dog.id}
            className="overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col"
          >
            <CardHeader className="p-0 relative">
              <div
                className="relative w-full h-72 bg-gray-100 cursor-pointer"
                onClick={() => openImageModal(dog.image)}
              >
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
                  <Badge
                    key={index}
                    variant="secondary"
                    className="text-xs bg-amber-50 text-amber-700 border-amber-200"
                  >
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

      <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Dior x Tea Litters Catalog</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {diorTeaCatalog.map((item) => (
          <Card
            key={item.id}
            className="overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col"
          >
            <CardHeader className="p-0 relative">
              <div
                className="relative w-full h-72 bg-gray-100 cursor-pointer"
                onClick={() => openImageModal(item.image)}
              >
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt="Dior x Tea Litter Puppy"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-center hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </CardHeader>
            <CardContent className="p-6 flex-grow flex flex-col">
              <p className="text-gray-700 mb-4 text-sm leading-relaxed flex-grow">{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">K Litters Catalog</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {kLittersCatalog.map((item) => (
          <Card
            key={item.id}
            className="overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col"
          >
            <CardHeader className="p-0 relative">
              <div
                className="relative w-full h-72 bg-gray-100 cursor-pointer"
                onClick={() => openImageModal(item.image)}
              >
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt="K Litters Puppy"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-center hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </CardHeader>
            <CardContent className="p-6 flex-grow flex flex-col">
              <p className="text-gray-700 mb-4 text-sm leading-relaxed flex-grow">{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {selectedImage && (
        <ImageModal
          src={selectedImage || "/placeholder.svg"}
          alt="Full size image"
          isOpen={isModalOpen}
          onClose={closeImageModal}
        />
      )}
    </>
  )
}
