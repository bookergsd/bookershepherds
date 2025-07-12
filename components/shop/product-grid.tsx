"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useCart } from "@/components/cart/cart-context"
import { useToast } from "@/hooks/use-toast"
import { ShoppingCart, Star } from "lucide-react"

const products = [
  {
    id: 101,
    name: "Premium Leather Collar & Leash Set",
    price: 65,
    category: "Collars & Leashes",
    image: "/images/products/premium-leather-collar.jpg",
    description: "Handcrafted genuine leather collar and leash set with brass hardware. Perfect for German Shepherds.",
    rating: 4.8,
    inStock: true,
  },
  {
    id: 102,
    name: "Heavy Duty Rope Leash",
    price: 35,
    category: "Leashes",
    image: "/images/products/heavy-duty-leash.jpg",
    description: "6ft heavy-duty rope leash with metal carabiners. Built for large breeds and strong pullers.",
    rating: 4.9,
    inStock: true,
  },
  {
    id: 103,
    name: "Stainless Steel Food Bowl Set",
    price: 25,
    category: "Feeding",
    image: "/images/products/stainless-steel-food-bowl.jpg",
    description: "Non-slip stainless steel bowls with paw print designs. Available in multiple colors.",
    rating: 4.7,
    inStock: true,
  },
  {
    id: 104,
    name: "Interactive Puzzle Feeder Toy",
    price: 30,
    category: "Toys",
    image: "/images/products/interactive-puzzle-toy.jpg",
    description: "Mental stimulation puzzle feeder to slow eating and keep your German Shepherd engaged.",
    rating: 4.6,
    inStock: true,
  },
  {
    id: 105,
    name: "Orthopedic Memory Foam Dog Bed",
    price: 120,
    category: "Bedding",
    image: "/images/products/orthopedic-dog-bed.jpg",
    description: "Premium memory foam orthopedic bed designed for large breeds. Supports joint health and comfort.",
    rating: 4.9,
    inStock: true,
  },
  {
    id: 106,
    name: "Professional Training Treat Pouch",
    price: 20,
    category: "Training",
    image: "/images/products/training-treat-pouch.jpg",
    description:
      "Tactical-style treat pouch with belt clip for training sessions. Multiple compartments and easy access.",
    rating: 4.5,
    inStock: true,
  },
  {
    id: 107,
    name: "Professional Grooming Brush Set",
    price: 40,
    category: "Grooming",
    image: "/images/products/grooming-brush-set.jpg",
    description: "Professional deshedding tool for German Shepherd coat maintenance. Reduces shedding by up to 90%.",
    rating: 4.8,
    inStock: true,
  },
  {
    id: 108,
    name: "Car Safety Harness",
    price: 55,
    category: "Safety",
    image: "/images/products/car-safety-harness.jpg",
    description: "Crash-tested car safety harness with reflective stripes for secure travel with your German Shepherd.",
    rating: 4.7,
    inStock: true,
  },
  {
    id: 109,
    name: "Heavy Duty Dog Crate",
    price: 250,
    category: "Housing",
    image: "/images/products/crate.jpg",
    description:
      "Durable plastic dog crate with secure latching system. Perfect for large breeds like German Shepherds. Easy to clean and transport.",
    rating: 4.8,
    inStock: true,
  },
  {
    id: 110,
    name: "Wire Dog Cage",
    price: 120,
    category: "Housing",
    image: "/images/products/cage.jpg",
    description:
      "Collapsible wire dog cage with removable tray. Ideal for training and providing a safe space for your German Shepherd.",
    rating: 4.6,
    inStock: true,
  },
  {
    id: 111,
    name: "Dog Toys Collection",
    price: 30,
    category: "Toys",
    image: "/images/products/dog-toys.jpg",
    description:
      "Complete set of interactive dog toys including rope toys, balls, and plush toys. Perfect for keeping your German Shepherd entertained.",
    rating: 4.7,
    inStock: true,
  },
  {
    id: 112,
    name: "Dog Toy Bone Set",
    price: 30,
    category: "Toys",
    image: "/images/products/dog-toy-bone.jpg",
    description:
      "Nylabone puppy starter kit with different textures for teething and chewing. Safe and durable for all life stages.",
    rating: 4.9,
    inStock: true,
  },
]

export default function ProductGrid() {
  const [quantities, setQuantities] = useState<{ [key: number]: number }>({})
  const { addItem } = useCart()
  const { toast } = useToast()

  const handleQuantityChange = (productId: number, quantity: number) => {
    setQuantities((prev) => ({
      ...prev,
      [productId]: Math.max(1, quantity),
    }))
  }

  const handleAddToCart = (product: (typeof products)[0]) => {
    const quantity = quantities[product.id] || 1
    const cartItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity,
      type: "product" as const,
    }

    console.log("Adding product to cart:", cartItem) // Debug log
    addItem(cartItem)

    toast({
      title: "Added to cart",
      description: `${quantity} x ${product.name} added to your cart.`,
    })
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
          <CardHeader className="p-0 relative">
            <div className="relative w-full h-56 bg-gray-100">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                className="object-cover object-center hover:scale-105 transition-transform duration-300"
                priority={product.id <= 104}
              />
            </div>
            <Badge className="absolute top-3 left-3 bg-amber-600 text-white shadow-md">{product.category}</Badge>
            {!product.inStock && (
              <Badge className="absolute top-3 right-3 bg-red-500 text-white shadow-md">Out of Stock</Badge>
            )}
          </CardHeader>
          <CardContent className="p-4 flex-grow flex flex-col">
            <CardTitle className="text-lg mb-2 line-clamp-2 min-h-[3.5rem]">{product.name}</CardTitle>

            <div className="flex items-center gap-1 mb-3">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-600 ml-1">({product.rating})</span>
            </div>

            <p className="text-gray-700 mb-4 text-sm line-clamp-3 flex-grow">{product.description}</p>

            <div className="mt-auto">
              <p className="text-xl font-bold text-amber-600 mb-4">${product.price}</p>

              {product.inStock && (
                <div className="flex items-center gap-2 mb-4">
                  <Label htmlFor={`quantity-${product.id}`} className="text-sm font-medium">
                    Qty:
                  </Label>
                  <Input
                    id={`quantity-${product.id}`}
                    type="number"
                    min="1"
                    max="10"
                    value={quantities[product.id] || 1}
                    onChange={(e) => handleQuantityChange(product.id, Number.parseInt(e.target.value))}
                    className="w-20 h-9 text-center"
                  />
                </div>
              )}
            </div>
          </CardContent>
          <CardFooter className="p-4 pt-0">
            <Button
              className="w-full bg-amber-600 hover:bg-amber-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
              onClick={() => handleAddToCart(product)}
              disabled={!product.inStock}
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              {product.inStock ? "Add to Cart" : "Out of Stock"}
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
