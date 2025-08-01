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
    weight: "80 lbs",
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
    weight: "22 lbs",
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
    weight: "25 lbs",
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
    weight: "80 lbs",
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
    weight: "28 lbs",
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
    weight: "24 lbs",
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
    age: "3 weeks",
    weight: "5.4 lbs",
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
    age: "3 weeks",
    weight: "5.2 lbs",
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
    age: "3 weeks",
    weight: "5 lbs",
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
    age: "3 weeks",
    weight: "5.5 lbs",
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
    age: "2 weeks",
    weight: "3 lbs",
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
    age: "2 weeks",
    weight: "4.5 lbs",
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
    age: "3 weeks",
    weight: "6 lbs",
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

const OtherCatalogs = [
  {
    id: 204,
    image: "/images/01.jpg",
    description:
      "Meet our adorable baby, a stunning 10 weeks  old White Shepherd with a heart of gold. Calm yet confident, he carries himself with quiet grace and loyalty. Ace is incredibly intelligent and eager to please, making training a joy. He adores companionship and thrives on affection. A true gentleman with a playful spark, he’ll melt your heart in seconds.",
  },
    {
    id: 205,
    image: "/images/02.jpg",
    description:
      "This adorable German Shepherd pup is just 3 months old, full of playful energy and curiosity. With a calm yet confident nature, they love cuddles just as much as they enjoy exploring. Incredibly smart and eager to please, training feels more like bonding. They’re already showing the loyal and protective instincts the breed is known for. A perfect companion for both fun adventures and cozy nights in.",
  },
    {
    id: 206,
    image: "/images/03.jpg",
    description:
      "This  pup is full of energy and always ready for adventure, making them the perfect fit for an active family. Incredibly loyal and quick to learn, they thrive on both playtime and purposeful training. Their curious nature keeps every day exciting, while their gentle heart brings warmth to any home. Confident yet affectionate, they’ll be your best buddy on every journey.",
  },
  {
  id: 207,
  image: "/images/04.jpg",
  description:
    "This black shepherd pup is full of life and eager to explore the world by your side. Intelligent and quick to learn, they thrive on mental stimulation and active play. With a loyal heart and a protective spirit, they bond deeply with their family. Always alert, they’re a natural companion for outdoor adventures. Gentle with children and endlessly curious, they bring energy and love into any home.",
  },
  {
  id: 208,
  image: "/images/05.jpg",
  description:
    "This adorable pup is a perfect mix of fluff, charm, and bold curiosity. With those soulful eyes and soft, teddy-bear fur, they melt hearts instantly. Always eager to explore, this little one thrives on playtime, learning new tricks, and being right at the center of family fun. Despite the playful energy, there’s a gentle and calm side that loves cuddles and quiet moments too. A true companion in the making  loyal, bright, and ready to grow with a loving, active home.",
  },
    {
  id: 209,
  image: "/images/06.jpg",
  description:
    "This little heart-stealer is full of personality and charm just one look into those wide, curious eyes, and you’ll fall in love. With an alert stance and a playful spirit, this pup is always ready for new adventures, yet loves nothing more than curling up beside you when the day winds down. That one ear up and one ear down? A signature touch of mischief and sweetness! Exceptionally intelligent and eager to please, this furry friend would thrive in a loving home that enjoys fun, cuddles, and long walks. A true joy waiting to become someone’s loyal shadow and best buddy.",
  },
    {
  id: 210,
  image: "/images/07.jpg",
  description:
    "With a teddy bear coat and the most soulful gaze, this beautiful pup radiates warmth and affection. There’s a quiet confidence in those bright eyes a blend of intelligence and gentleness that’s hard to resist. Whether it’s learning new tricks, going on daily adventures, or simply cuddling by your side, this pup is always ready to make every moment special. Naturally calm yet playfully spirited, they’d make the perfect companion for a loving, active family. A loyal heart wrapped in soft fur, just waiting to be someone’s forever best friend.",
  },
    {
  id: 211,
  image: "/images/08.jpg",
  description:
    "This adorable pup is the perfect mix of fluff, brains, and boundless love. With ears full of personality and eyes that sparkle with curiosity, they’re always ready to explore, play, and snuggle. Calm and gentle in nature, yet full of fun energy, this little one loves being close to people and is happiest when surrounded by affection. Eager to learn and easy to bond with, they’re a dream companion for any family looking for a loyal, sweet, and playful addition to their home.",
  },
      {
  id: 212,
  image: "/images/09.jpg",
  description:
    "This darling pup is a little bundle of charm with a heart full of love and curiosity. With ears that perk up at every sound and eyes that sparkle with intelligence, they’re always ready to explore, learn, and be part of every family moment. Despite the fluffy cuteness, there’s a confident, loyal spirit shining through the kind that forms deep bonds and becomes a true lifelong companion. Playful yet gentle, energetic yet obedient, this pup is a perfect match for families looking for a loyal friend who will grow into a devoted guardian and loving member of the home.",
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

            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Other Catalogs</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {OtherCatalogs.map((item) => (
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
