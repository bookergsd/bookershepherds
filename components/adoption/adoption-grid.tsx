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
  id: 32,
  name: "Chester",
  weight: "75 lbs",
  gender: "Male",
  price: 900,
  location: "Available",
  image: "/images/lil/lildog/IMG-20260107-WA0024.jpg",
  description:
    "Chester is affectionate and highly intelligent, with excellent focus during training. She enjoys companionship and daily activity.",
  traits: ["Affectionate", "Intelligent", "Focused", "Sold Out"],
  category: "Adult & Young Adult German Shepherds",
},

  {
    id: 32,
    name: "Max",
    weight: "80 lbs",
    gender: "Female",
    price: 950,
    location: "Sold Out",
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
    gender: "Male",
    price: 900,
    location: "Available",
    image: "/images/luna.jpg",
    description:
      "Luna is a beautiful female with an excellent temperament. She's energetic, loyal, and perfect for an an active family.",
    traits: ["High Energy", "Loyal", "Active", "Sold Out"],
    category: "Adult & Young Adult German Shepherds",
  },
  {
    id: 3,
    name: "Rex",
    weight: "25 lbs",
    gender: "Female",
    price: 850,
    location: "Sold Out",
    image: "/images/rex.jpg",
    description:
      "Rex is a mature, calm German Shepherd perfect for families looking for a gentle giant. He's great with children.",
    traits: ["Calm", "Gentle", "Family Friendly", "Sold Out"],
    category: "Adult & Young Adult German Shepherds",
  },

  {
    id: 6,
    name: "Zara",
    weight: "24 lbs",
    gender: "Female",
    price: 920,
    location: "Sold Out",
    image: "/images/zara.jpg",
    description:
      "Zara is intelligent and obedient, perfect for training and activities. She loves mental stimulation and exercise.",
    traits: ["Intelligent", "Obedient", "Active", "Sold Out"],
    category: "Adult & Young Adult German Shepherds",
  },
  {
    id: 7,
    name: "Black Collar",
    age: "3 weeks",
    weight: "5.4 lbs",
    gender: "loving",
    price: 1050,
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
    gender: "Gentle",
    price: 1070,
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
    gender: "Brave",
    price: 1100,
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
    gender: "loving",
    price: 1050,
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
    age: "3 weeks",
    weight: "3 lbs",
    gender: "Brave",
    price: 1100,
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
    age: "3 weeks",
    weight: "4.5 lbs",
    gender: "loving",
    price: 1000,
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
    age: "8 weeks",
    weight: "20 lbs",
    gender: "playfull",
    price: 1030,
    location: "Available",
    image: "/images/male-puppy.jpeg",
    description: "This 7-week-old male puppy is full of energy and charm, ready to find his forever home.",
    traits: ["Puppy", "Energetic", "Charming"],
    category: "German Shepherd Puppies",
  },
    {
    id: 17,
    name: "Liam",
    age: "12 weeks",
    weight: "27 lbs",
    gender: "playfull",
    price: 1050,
    location: "Available",
    image: "/images/lil/IMG-20260107-WA0021.jpg",
    description:
      "Liam is a confident and adventurous puppy who enjoys exploring new surroundings. He's playful and very alert.",
    traits: ["Puppy", "Adventurous", "Alert"],
    category: "German Shepherd Puppies",
  },
  {
    id: 18,
    name: "Willy",
    age: "12 weeks",
    weight: "27 lbs",
    gender: "Loyal",
    price: 1010,
    location: "Available",
    image: "/images/lil/IMG-20260107-WA0038.jpg",
    description:
      "Willy is a bright and cheerful puppy with a loving personality. She thrives on attention and human interaction.",
    traits: ["Puppy", "Cheerful", "Loving"],
    category: "German Shepherd Puppies",
  },
  {
    id: 19,
    name: "Maya",
    age: "12 weeks",
    weight: "28 lbs",
    gender: "Loyal",
    price: 1000,
    location: "Available",
    image: "/images/lil/IMG-20260107-WA0022.jpg",
    description:
      "Maya is a gentle and quiet puppy who enjoys calm moments and close bonding. She's perfect for a relaxed home.",
    traits: ["Puppy", "Gentle", "Calm"],
    category: "German Shepherd Puppies",
  },
  {
    id: 20,
    name: "Stella",
    age: "12 weeks",
    weight: "24 lbs",
    gender: "calm",
    price: 990,
    location: "Available",
    image: "/images/lil/IMG-20260107-WA0023.jpg",
    description:
      "Stella is an intelligent and observant puppy, quick to respond to sounds and movement. He shows early signs of leadership.",
    traits: ["Puppy", "Intelligent", "Observant"],
    category: "German Shepherd Puppies",
  },
  {
    id: 21,
    name: "Cooper",
    age: "12 weeks",
    weight: "26 lbs",
    gender: "Loyal",
    price: 1055,
    location: "Available",
    image: "/images/lil/IMG-20260107-WA0025.jpg",
    description:
      "Cooper is a playful little pup who loves gentle play and cuddles. She's sweet-natured and very people-oriented.",
    traits: ["Puppy", "Sweet", "Playful"],
    category: "German Shepherd Puppies",
  },
  {
    id: 22,
    name: "Luna",
    age: "4 weeks",
    weight: "6.1 lbs",
    gender: "playfull",
    price: 1050,
    location: "Available",
    image: "/images/lil/IMG-20260107-WA0026.jpg",
    description:
      "Luna is strong and sturdy for his age, with a calm and balanced temperament. He's confident without being aggressive.",
    traits: ["Puppy", "Strong", "Balanced"],
    category: "German Shepherd Puppies",
  },
  // {
  //   id: 23,
  //   name: "Lime Collar",
  //   age: "3 weeks",
  //   weight: "5 lbs",
  //   gender: "Gentle",
  //   price: 1000,
  //   location: "Available",
  //   image: "/images/lil/IMG-20260107-WA0027.jpg",
  //   description:
  //     "Lime Collar is curious and outgoing, always eager to investigate new sights and sounds. She loves playful interaction.",
  //   traits: ["Puppy", "Curious", "Outgoing"],
  //   category: "German Shepherd Puppies",
  // },
  {
    id: 24,
    name: "Bella",
    age: "12 weeks",
    weight: "24 lbs",
    gender: "Brave",
    price: 1100,
    location: "Available",
    image: "/images/lil/IMG-20260107-WA0028.jpg",
    description:
      "Bella is a loyal and steady puppy with a protective instinct already forming. He bonds quickly with caregivers.",
    traits: ["Puppy", "Loyal", "Protective"],
    category: "German Shepherd Puppies",
  },
  {
    id: 25,
    name: "Zusi",
    age: "8 weeks",
    weight: "16lbs",
    gender: "Gentle",
    price: 1000,
    location: "Available",
    image: "/images/lil/IMG-20260107-WA0029.jpg",
    description:
      "Zusi is a soft-hearted puppy who enjoys warmth and comfort. She's gentle, affectionate, and easygoing.",
    traits: ["Puppy", "Affectionate", "Easygoing"],
    category: "German Shepherd Puppies",
  },
  {
    id: 26,
    name: "Rocky",
    age: "10 weeks",
    weight: "23 lbs",
    gender: "calm",
    price: 1030,
    location: "Available",
    image: "/images/lil/IMG-20260107-WA0030.jpg",
    description:
      "Camo Collar is bold and energetic, showing strong confidence during play. He enjoys interactive toys and exploration.",
    traits: ["Puppy", "Bold", "Energetic"],
    category: "German Shepherd Puppies",
  },
  {
    id: 27,
    name: "Miss brown",
    age: "12 weeks",
    weight: "24 lbs",
    gender: "Gentle",
    price: 1070,
    location: "Available",
    image: "/images/lil/IMG-20260107-WA0032.jpg",
    description:
      "Miss brown is friendly and well-balanced, enjoying both playtime and quiet moments. She adapts easily to new environments.",
    traits: ["Puppy", "Friendly", "Adaptable"],
    category: "German Shepherd Puppies",
  },
  {
    id: 28,
    name: "Zues",
    age: "12.5 weeks",
    weight: "28 lbs",
    gender: "Brave",
    price: 1000,
    location: "Available",
    image: "/images/lil/IMG-20260107-WA0033.jpg",
    description:
      "Zues is a solid-built puppy with a calm demeanor and strong presence. He shows excellent focus for his age.",
    traits: ["Puppy", "Calm", "Focused"],
    category: "German Shepherd Puppies",
  },
  {
    id: 33,
  name: "Shadow",
  age: "12 weeks",
  weight: "27 lbs",
  gender: "Gentle",
  price: 1100,
  location: "Available",
  image: "/images/lil/IMG-20260107-WA0036.jpg",
  description:
    "Gold Collar is a confident and affectionate puppy with a curious nature. He enjoys both playtime and quiet bonding moments.",
  traits: ["Puppy", "Confident", "Affectionate"],
  category: "German Shepherd Puppies",
  },
  {
    id: 29,
    name: "Zake",
    age: "12 weeks",
    weight: "27 lbs",
    gender: "Affectionate",
    price: 1100,
    location: "Available",
    image: "/images/lil/IMG-20260107-WA0035.jpg",
    description:
      "Aqua Collar is lively and expressive, often wagging her tail during interaction. She loves attention and gentle play.",
    traits: ["Puppy", "Expressive", "Lively"],
    category: "German Shepherd Puppies",
  }
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
    "Our breeding pair are social, intelligent, and affectionate German Shepherds. They thrive on human interaction, early training, and family engagement, giving their puppies a confident and friendly start in life. With consistent care and positive experiences, these parents help produce puppies that are well-mannered, curious, and ready to bond with their new famil",
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

const ParentsCatalogs = [
  {
    id: 214,
    image: "/images/lil/lildog/IMG-20260107-WA0034.jpg",
    description:
      "Meet our adorable baby, a stunning 10 weeks  old White Shepherd with a heart of gold. Calm yet confident, he carries himself with quiet grace and loyalty. Ace is incredibly intelligent and eager to please, making training a joy. He adores companionship and thrives on affection. A true gentleman with a playful spark, he’ll melt your heart in seconds.",
  },
  //   {
  //   id: 215,
  //   image: "/images/lil/lildog/IMG-20260107-WA0037.jpg",
  //   description:
  //     "Both parents come from strong, carefully selected bloodlines with a focus on health, structure, and longevity. With thorough health testing and proper nutrition, they pass on robust genetics to their puppies. Their dedication to learning and adaptability ensures each litter inherits both mental sharpness and physical strength.",
  // },
    {
    id: 216,
    image: "/images/lil/lildog/111.jpeg",
    description:
      "Our parent dogs exemplify the ideal German Shepherd temperament—confident, loyal, and well-balanced. Raised with daily human interaction, proper socialization, and hands-on care, they provide a strong foundation for healthy, well-adjusted puppies. Their calm yet alert nature ensures offspring that are both loving companions and capable protectors.",
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

      <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Parent Catalogs</h2>
      <p className="text-sm text-gray-500 text-center">Meet the heart and soul behind our puppies two remarkable German Shepherd parents whose story is as beautiful as their temperament.

Their journey began with strong, carefully selected bloodlines rooted in loyalty, intelligence, and balance. Both parents were raised with love, structure, and purpose, growing into confident, gentle companions who thrive on human connection. From a young age, they showed exceptional curiosity, calm confidence, and that unmistakable German Shepherd devotion always alert, always eager to please, yet incredibly affectionate.

The sire carries a noble presence steady, protective, and wise beyond his years. He has a soft spot for family time, gentle play, and watching over his loved ones with quiet pride. The dam is equally special nurturing, graceful, and endlessly loving. She has a tender spirit, an intuitive nature, and a way of making everyone around her feel safe and comforted.

Together, they form a perfect balance of strength and sweetness. Their bond is built on trust, companionship, and mutual respect and it shows in every puppy they bring into the world. Each litter reflects their parents’ best qualities: loving hearts, intelligent minds, and that classic German Shepherd loyalty that makes the breed so unforgettable.

These parents aren’t just dogs — they’re family. And their puppies are raised with that same belief: loved from the very beginning, guided with care, and destined to become lifelong companions filled with devotion, confidence, and joy.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {ParentCatalogs.map((item) => (
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
