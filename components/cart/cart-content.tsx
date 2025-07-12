"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { useCart } from "./cart-context"
import { Trash2, Plus, Minus, Heart, ShoppingCart } from "lucide-react"

export default function CartContent() {
  const { items, total, removeItem, updateQuantity } = useCart()

  if (items.length === 0) {
    return (
      <div className="text-center py-12">
        <ShoppingCart className="h-16 w-16 text-gray-400 mx-auto mb-4" />
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your cart is empty</h2>
        <p className="text-gray-600 mb-8">Add some items to get started!</p>
        <div className="space-x-4">
          <Link href="/adoption">
            <Button className="bg-amber-600 hover:bg-amber-700">Browse Dogs</Button>
          </Link>
          <Link href="/shop">
            <Button variant="outline">Shop Accessories</Button>
          </Link>
        </div>
      </div>
    )
  }

  // Separate items by type for better organization
  const adoptionItems = items.filter((item) => item.type === "adoption" || item.id <= 10)
  const productItems = items.filter((item) => item.type === "product" || item.id > 10)

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        <div className="space-y-6">
          {/* Adoption Items Section */}
          {adoptionItems.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Heart className="h-5 w-5 text-amber-600 mr-2" />
                German Shepherd Adoptions ({adoptionItems.length})
              </h3>
              <div className="space-y-4">
                {adoptionItems.map((item) => (
                  <Card key={`adoption-${item.id}`}>
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="relative w-20 h-20 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                          <Image
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            fill
                            sizes="80px"
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                          <p className="text-amber-600 font-bold">Adoption Fee: ${item.price}</p>
                          <div className="flex items-center mt-2">
                            <Heart className="h-4 w-4 text-amber-600 mr-1" />
                            <span className="text-sm text-gray-600">German Shepherd Adoption</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          <Input
                            type="number"
                            value={item.quantity}
                            onChange={(e) => updateQuantity(item.id, Number.parseInt(e.target.value) || 1)}
                            className="w-16 text-center"
                            min="1"
                          />
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-semibold text-gray-900">
                            ${(item.price * item.quantity).toFixed(2)}
                          </p>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeItem(item.id)}
                            className="text-red-600 hover:text-red-700"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Product Items Section */}
          {productItems.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <ShoppingCart className="h-5 w-5 text-amber-600 mr-2" />
                Dog Accessories ({productItems.length})
              </h3>
              <div className="space-y-4">
                {productItems.map((item) => (
                  <Card key={`product-${item.id}`}>
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="relative w-20 h-20 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                          <Image
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            fill
                            sizes="80px"
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                          <p className="text-amber-600 font-bold">${item.price}</p>
                          <div className="flex items-center mt-2">
                            <ShoppingCart className="h-4 w-4 text-amber-600 mr-1" />
                            <span className="text-sm text-gray-600">Dog Accessory</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          <Input
                            type="number"
                            value={item.quantity}
                            onChange={(e) => updateQuantity(item.id, Number.parseInt(e.target.value) || 1)}
                            className="w-16 text-center"
                            min="1"
                          />
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-semibold text-gray-900">
                            ${(item.price * item.quantity).toFixed(2)}
                          </p>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeItem(item.id)}
                            className="text-red-600 hover:text-red-700"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="lg:col-span-1">
        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Order Summary</h3>

            {/* Order breakdown */}
            <div className="space-y-3 mb-4">
              {adoptionItems.length > 0 && (
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <Heart className="h-4 w-4 text-amber-600 mr-2" />
                    <span className="text-sm">Adoptions ({adoptionItems.length})</span>
                  </div>
                  <span className="font-medium">
                    ${adoptionItems.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2)}
                  </span>
                </div>
              )}

              {productItems.length > 0 && (
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <ShoppingCart className="h-4 w-4 text-amber-600 mr-2" />
                    <span className="text-sm">Products ({productItems.length})</span>
                  </div>
                  <span className="font-medium">
                    ${productItems.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2)}
                  </span>
                </div>
              )}
            </div>

            <div className="space-y-2 mb-4 border-t pt-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>Calculated at checkout</span>
              </div>
              <div className="border-t pt-2">
                <div className="flex justify-between font-semibold text-lg">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
            </div>
            <Link href="/checkout">
              <Button className="w-full bg-amber-600 hover:bg-amber-700">Proceed to Checkout</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
