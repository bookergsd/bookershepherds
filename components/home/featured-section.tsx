"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useCart } from "@/components/cart/cart-context"
import { useToast } from "@/hooks/use-toast"

const featuredDogs = [
  {
    id: 1,
    name: "Max",
    age: "2 years",
    price: 1200,
    image: "/images/max.jpg",
    description: "Friendly and well-trained male German Shepherd",
  },
  {
    id: 2,
    name: "Luna",
    age: "1.5 years",
    price: 1100,
    image: "/images/luna.jpg",
    description: "Beautiful female with excellent temperament",
  },
]

const featuredProducts = [
  {
    id: 101, // Updated to match shop IDs
    name: "Premium Leather Collar & Leash Set",
    price: 65,
    image: "/images/products/premium-leather-collar.jpg",
    description: "Handcrafted leather collar and leash set with brass hardware",
  },
  {
    id: 105, // Updated to match shop IDs
    name: "Orthopedic Memory Foam Dog Bed",
    price: 120,
    image: "/images/products/orthopedic-dog-bed.jpg",
    description: "Premium memory foam bed designed for large breeds",
  },
]

export default function FeaturedSection() {
  const { addItem } = useCart()
  const { toast } = useToast()

  const handleAdoptDog = (dog: (typeof featuredDogs)[0]) => {
    addItem({
      id: dog.id,
      name: dog.name,
      price: dog.price,
      image: dog.image,
      quantity: 1,
      type: "adoption",
    })
    toast({
      title: "Added to cart",
      description: `${dog.name} has been added to your adoption cart.`,
    })
  }

  const handleAddProduct = (product: (typeof featuredProducts)[0]) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
      type: "product",
    })
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    })
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Featured Dogs */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Featured Dogs for Adoption</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredDogs.map((dog) => (
              <Card key={dog.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardHeader className="p-0">
                  <div className="relative w-full h-64 bg-gray-100">
                    <Image
                      src={dog.image || "/placeholder.svg"}
                      alt={`${dog.name} - German Shepherd for adoption`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-center"
                      priority
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-xl mb-2">{dog.name}</CardTitle>
                  <p className="text-gray-600 mb-2">{dog.age}</p>
                  <p className="text-gray-700 mb-4">{dog.description}</p>
                  <p className="text-2xl font-bold text-amber-600">${dog.price}</p>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button className="w-full bg-amber-600 hover:bg-amber-700" onClick={() => handleAdoptDog(dog)}>
                    Adopt Me
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/adoption">
              <Button variant="outline" size="lg">
                View All Available Dogs
              </Button>
            </Link>
          </div>
        </div>

        {/* Featured Products */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardHeader className="p-0">
                  <div className="relative w-full h-48 bg-gray-100">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-center"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-xl mb-2">{product.name}</CardTitle>
                  <p className="text-gray-700 mb-4">{product.description}</p>
                  <p className="text-2xl font-bold text-amber-600">${product.price}</p>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button className="w-full bg-amber-600 hover:bg-amber-700" onClick={() => handleAddProduct(product)}>
                    Add to Cart
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/shop">
              <Button variant="outline" size="lg">
                Shop All Products
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
