"use client"

import { createContext, useContext, useReducer, useEffect, type ReactNode } from "react"

export interface CartItem {
  id: number
  name: string
  price: number
  image: string
  quantity: number
  type?: "product" | "adoption" // Add type to distinguish between products and adoptions
}

interface CartState {
  items: CartItem[]
  total: number
}

type CartAction =
  | { type: "ADD_ITEM"; payload: CartItem }
  | { type: "REMOVE_ITEM"; payload: number }
  | { type: "UPDATE_QUANTITY"; payload: { id: number; quantity: number } }
  | { type: "CLEAR_CART" }
  | { type: "LOAD_CART"; payload: CartItem[] }

const CartContext = createContext<
  | {
      items: CartItem[]
      total: number
      addItem: (item: CartItem) => void
      removeItem: (id: number) => void
      updateQuantity: (id: number, quantity: number) => void
      clearCart: () => void
    }
  | undefined
>(undefined)

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "ADD_ITEM": {
      const existingItem = state.items.find((item) => item.id === action.payload.id)
      let updatedItems: CartItem[]

      if (existingItem) {
        updatedItems = state.items.map((item) =>
          item.id === action.payload.id ? { ...item, quantity: item.quantity + action.payload.quantity } : item,
        )
      } else {
        updatedItems = [...state.items, action.payload]
      }

      const newState = {
        items: updatedItems,
        total: updatedItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
      }

      // Save to localStorage
      if (typeof window !== "undefined") {
        localStorage.setItem("bookershepherds-cart", JSON.stringify(updatedItems))
      }

      return newState
    }
    case "REMOVE_ITEM": {
      const updatedItems = state.items.filter((item) => item.id !== action.payload)
      const newState = {
        items: updatedItems,
        total: updatedItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
      }

      // Save to localStorage
      if (typeof window !== "undefined") {
        localStorage.setItem("bookershepherds-cart", JSON.stringify(updatedItems))
      }

      return newState
    }
    case "UPDATE_QUANTITY": {
      const updatedItems = state.items
        .map((item) => (item.id === action.payload.id ? { ...item, quantity: action.payload.quantity } : item))
        .filter((item) => item.quantity > 0)

      const newState = {
        items: updatedItems,
        total: updatedItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
      }

      // Save to localStorage
      if (typeof window !== "undefined") {
        localStorage.setItem("bookershepherds-cart", JSON.stringify(updatedItems))
      }

      return newState
    }
    case "CLEAR_CART": {
      // Clear localStorage
      if (typeof window !== "undefined") {
        localStorage.removeItem("bookershepherds-cart")
      }
      return { items: [], total: 0 }
    }
    case "LOAD_CART": {
      return {
        items: action.payload,
        total: action.payload.reduce((sum, item) => sum + item.price * item.quantity, 0),
      }
    }
    default:
      return state
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [], total: 0 })

  // Load cart from localStorage on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedCart = localStorage.getItem("bookershepherds-cart")
      if (savedCart) {
        try {
          const parsedCart = JSON.parse(savedCart)
          if (Array.isArray(parsedCart)) {
            dispatch({ type: "LOAD_CART", payload: parsedCart })
          }
        } catch (error) {
          console.error("Error loading cart from localStorage:", error)
        }
      }
    }
  }, [])

  const addItem = (item: CartItem) => {
    console.log("Adding item to cart:", item) // Debug log
    dispatch({ type: "ADD_ITEM", payload: item })
  }

  const removeItem = (id: number) => {
    dispatch({ type: "REMOVE_ITEM", payload: id })
  }

  const updateQuantity = (id: number, quantity: number) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } })
  }

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" })
  }

  return (
    <CartContext.Provider
      value={{
        items: state.items,
        total: state.total,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}
